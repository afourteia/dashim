import { type FC, Fragment, useCallback, useEffect, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import type {
  ColumnOrderState,
  Row,
  Column,
  Header,
  Table,
  HeaderGroup,
} from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useDataGridContext } from "../context/DataGridContext";
type GridProps = {
  fetchNextPage?: () => void;
  totalRows: number;
  totalFetched: number;
  isFetching?: boolean;
  isLoading?: boolean;
};

function Grid<TData>({
  fetchNextPage,
  totalRows,
  totalFetched,
  isFetching = false,
  isLoading = false,
}: GridProps) {
  const { table, RenderSubComponent, onRowClicked } = useDataGridContext();

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
        className="relative group h-10 border border-solid border-gray-200 bg-primary rtl:last:rounded-l-md ltr:last:rounded-r-md rtl:first:rounded-r-md ltr:first:rounded-l-md text-white"
      >
        <div ref={previewRef} className="flex flex-row gap-1.5">
          <button ref={dragRef}>
            <div className="drop-shadow-lg bg-gray-200 hover:cursor-grab w-3 h-3 rounded-full" />
          </button>
          {flexRender(header.column.columnDef.header, header.getContext())}
        </div>
        <div
          className={`
          w-1 h-full absolute ltr:right-0 rtl:left-0 top-0
          cursor-col-resize select-none touch-none opacity-0 hover:opacity-100
          ${header.column.getIsResizing() ? "bg-primary" : "bg-gray-400"}`}
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

  const rowVirtualizer = useVirtualizer({
    getScrollElement: () => tableContainerRef.current,
    count: rows.length || 0,
    estimateSize: () => 34,
    overscan: 20,
  });

  const { getVirtualItems: virtualRows, getTotalSize } = rowVirtualizer;

  const paddingTop =
    virtualRows.length > 0 ? virtualRows()?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows().length > 0
      ? getTotalSize() - (virtualRows()?.[virtualRows().length - 1]?.end || 0)
      : 0;

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="relative h-full overflow-auto shadow-lg bg-white flex flex-col justify-start items-center border-gray-300 border-2 rounded-lg"
        onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
        ref={tableContainerRef}
      >
        <table className="w-full">
          <thead className="sticky top-0 z-20 bg-gray-100 border-solid border-2 border-gray-100 shadow-lg">
            {table.getHeaderGroups().map((headerGroup: HeaderGroup<any>) => {
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
              <tr className="bg-gradient-to-tr from-indigo-500 to-primary animate-pulse h-2 shadow-xl">
                <td colSpan={table.getVisibleFlatColumns().length}></td>
              </tr>
            )}
          </thead>
          {!isLoading && (
            <tbody>
              {paddingTop > 0 && (
                <tr>
                  <td style={{ height: `${paddingTop}px` }} />
                </tr>
              )}
              {virtualRows().map((virtualRow) => {
                const row = rows[virtualRow.index] as Row<TData>;
                return (
                  <Fragment key={row.id}>
                    <tr
                      className={`hover:bg-gray-200 even:bg-gray-100 border-y-2 border-gray-200 ${
                        row.getIsSelected()
                          ? "rtl:border-r-8 rtl:border-r-primary ltr:border-l-8 ltr:border-primary shadow-lg"
                          : ""
                      }`}
                      onClick={() => handleClick(row)}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          dir="auto"
                          className="h-12 scale-100 shadow-md border-2 border-gray-200 px-2"
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
              {paddingBottom > 0 && (
                <tr>
                  <td style={{ height: `${paddingBottom}px` }} />
                </tr>
              )}
            </tbody>
          )}
        </table>
        {!isFetching && !table.getRowModel().rows.length && <p>not found</p>}
        {/* {isFetching && !isLoading && (
          <LoadingIcon className="animate-spin fill-primary w-9 h-9" />
        )} */}
        {isLoading && <p>Loading</p>}
      </div>
    </DndProvider>
  );
}

export default Grid;
