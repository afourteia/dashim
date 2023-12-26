import clsx from "clsx";
import {
  type FC,
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import type {
  ColumnOrderState,
  Row,
  Column,
  Header,
  Table,
} from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useDataGridContext } from "../context/DataGridContext";
import classes from "./Grid.module.css";

type GridProps = {
  sorting?: (columnId: string | number, dir: "asc" | "des") => void;
  fetchNextPage?: () => void;
  isFetching?: boolean;
  isLoading?: boolean;
  totalRows: number;
  totalFetched: number;
};

function Grid<TData>({
  sorting,
  fetchNextPage,
  totalRows,
  totalFetched,
  isFetching = false,
  isLoading = false,
}: GridProps) {
  const { table, RenderSubComponent, onRowClicked, data } =
    useDataGridContext();

  const handleClick = (row: Row<TData>) => {
    if (onRowClicked) onRowClicked(row);
  };

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;

        if (
          scrollHeight - scrollTop - clientHeight < 300 &&
          !isFetching &&
          totalFetched < totalRows
        ) {
          if (fetchNextPage) fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalRows]
  );

  const reorderColumn = (
    draggedColumnId: string,
    targetColumnId: string,
    columnOrder: string[]
  ): ColumnOrderState => {
    columnOrder.splice(
      columnOrder.indexOf(targetColumnId),
      0,
      columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0] as string
    );
    return [...columnOrder];
  };

  const DraggableColumnHeader: FC<{
    header: Header<TData, unknown>;
    table: Table<TData>;
  }> = ({ header, table }) => {
    const { getState, setColumnOrder } = table;
    const { columnOrder } = getState();
    const { column } = header;

    const [, dropRef] = useDrop({
      accept: "column",
      drop: (draggedColumn: Column<TData>) => {
        const newColumnOrder = reorderColumn(
          draggedColumn.id,
          column.id,
          columnOrder
        );
        setColumnOrder(newColumnOrder);
      },
    });

    const [{ isDragging }, dragRef, previewRef] = useDrag({
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      item: () => column,
      type: "column",
    });

    return (
      <th
        ref={dropRef}
        colSpan={header.colSpan}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        className={clsx(
          classes.thead,
          " group h-10 rtl:last:rounded-l-md ltr:last:rounded-r-md rtl:first:rounded-r-md ltr:first:rounded-l-md"
        )}
        onClick={() => header.column.getSortingFn()}
      >
        <div ref={previewRef} className="flex flex-row gap-1.5">
          <button ref={dragRef}>
            <div
              className={clsx(
                classes.dragger,
                "drop-shadow-lg bg-white hover:cursor-grab cursor-grabbing w-3 h-3 rounded-full"
              )}
            />
          </button>
          {flexRender(header.column.columnDef.header, header.getContext())}
        </div>
        <div
          className={`
          w-1 h-full absolute ltr:right-0 rtl:left-0 top-0
          cursor-col-resize select-none touch-none opacity-0 hover:opacity-100
          `}
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
        />
      </th>
    );
  };

  useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);

  const { rows } = table.getRowModel();

  const [rowHeights, setRowHeights] = useState<Record<string, number>>({});

  const rowVirtualizer = useVirtualizer({
    getScrollElement: () => tableContainerRef.current,
    count: rows.length,
    estimateSize: () => 50,
    overscan: 1000,
    getItemKey: (index) => rows[index].id,
  });

  useEffect(() => {
    if (tableContainerRef.current) {
      const measuredSizes: Record<string, number> = {};
      for (const virtualRow of rowVirtualizer.getVirtualItems()) {
        const rowElement = tableContainerRef.current.querySelector(
          `[data-row-id="${virtualRow.index}"]`
        ) as HTMLElement;
        if (rowElement) {
          measuredSizes[virtualRow.index.toString()] = rowElement.offsetHeight;
        }
      }
      setRowHeights(measuredSizes); // Update state with the new measurements
    }
  }, [data, rows.length]);

  const { getVirtualItems: virtualRows, getTotalSize } = rowVirtualizer;

  // const paddingTop =
  //   virtualRows.length > 0 ? virtualRows()?.[0]?.start || 0 : 0;
  // const paddingBottom =
  //   virtualRows().length > 0
  //     ? getTotalSize() - (virtualRows()?.[virtualRows().length - 1]?.end || 0)
  //     : 0;

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={clsx(classes.table)}
        onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
        ref={tableContainerRef}
      >
        <table
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          <thead className={classes.thead}>
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <DraggableColumnHeader
                      key={header.id}
                      header={header}
                      table={table}
                    />
                  ))}
                </tr>
              );
            })}
            {isFetching && (
              <tr className="bg-gradient-to-tr animate-pulse h-2 shadow-xl">
                <td colSpan={table.getVisibleFlatColumns().length} />
              </tr>
            )}
          </thead>
          {!isLoading && (
            <tbody>
              {/* {paddingTop > 0 && (
                <tr>
                  <td style={{ height: `${paddingTop}px` }} />
                </tr>
              )} */}
              {virtualRows().map((virtualRow) => {
                const row = rows[virtualRow.index] as Row<TData>;
                const height =
                  rowHeights[virtualRow.index.toString()] || virtualRow.size;
                return (
                  <Fragment key={row.id}>
                    <tr
                      onClick={() => handleClick(row)}
                      className="border-b border-gray-200"
                      id={`row-${row.id}`}
                      style={{ height: `${1}px` }}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          dir="auto"
                          className="h-12 scale-100 shadow-md px-2"
                          key={cell.id}
                          style={{ width: cell.column.getSize() }}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                    {row.getIsExpanded() && RenderSubComponent && (
                      <tr>
                        <td colSpan={row.getVisibleCells().length}>
                          <RenderSubComponent row={row} />
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
              {/* {paddingBottom > 0 && (
                <tr>
                  <td style={{ height: `${paddingBottom}px` }} />
                </tr>
              )} */}
            </tbody>
          )}
        </table>
        {!isFetching && !table.getRowModel().rows.length && <p>not found</p>}
        {isLoading && <p>Loading</p>}
      </div>
    </DndProvider>
  );
}

export default Grid;
