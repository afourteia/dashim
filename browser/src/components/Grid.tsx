import { FC, Fragment, useCallback, useEffect, useRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  ColumnOrderState,
  flexRender,
  Row,
  Column,
  Header,
  Table,
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  SortingState,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";

type GridProps<TData, TValue> = {
  data: Array<TData>;
  columns: ColumnDef<TData, TValue>[];
  fetchNextPage?: () => void;
  totalRows: number;
  totalFetched: number;
  isFetching?: boolean;
  isLoading?: boolean;
  SubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
};

function Grid<TData, TValue>({
  columns,
  data,
  fetchNextPage,
  totalRows,
  totalFetched,
  isFetching,
  isLoading,
  SubComponent,
}: GridProps<TData, TValue>) {
  const tableContainerRef = useRef<HTMLDivElement>(null);

  console.log("grid executed!");

  const handleClick = (row: Row<TData>) => {
    console.log(row);
  };

  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;

        if (
          scrollHeight - scrollTop - clientHeight < 300 &&
          !isFetching &&
          totalFetched < totalRows
        ) {
          fetchNextPage && fetchNextPage();
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
        className="relative group h-10 hover:bg-primary-focus bg-primary border-e-2 border-primary-focus
        rtl:last:rounded-l-md ltr:last:rounded-r-md rtl:first:rounded-r-md ltr:first:rounded-l-md text-primary-content"
        onClick={() => header.column.toggleSorting()}
      >
        <div ref={previewRef} className="flex flex-row gap-1.5">
          <button ref={dragRef}>
            <div className="drop-shadow-lg bg-gray-200 hover:cursor-grab w-3 h-3 rounded-full" />
          </button>
          {flexRender(header.column.columnDef.header, header.getContext())}
          {{
            asc: " 🔼",
            desc: " 🔽",
          }[header.column.getIsSorted() as string] ?? null}
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

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  const { rows } = table.getRowModel();

  const virtualizer = useVirtualizer({
    getScrollElement: () => tableContainerRef.current,
    count: rows.length,
    overscan: 30,
    estimateSize: () => 100,
  });

  const { getVirtualItems: virtualRows, getTotalSize } = virtualizer;

  const paddingTop =
    virtualRows().length > 0 ? virtualRows()?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? getTotalSize() - (virtualRows()?.[virtualRows.length - 1]?.end || 0)
      : 0;

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="relative h-full overflow-auto shadow-lg bg-primary-focus flex flex-col justify-start items-center rounded-lg"
        onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
        ref={tableContainerRef}
      >
        <table className="w-full">
          <thead className="sticky top-0 z-20 bg-primary-focus border-solid shadow-lg">
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
                      className={`bg-neutral hover:bg-base-200 border-2 border-neutral-focus
                      ${
                        row.getIsSelected()
                          ? "border-s-8 border-s-primary shadow-lg"
                          : ""
                      }`}
                      onClick={() => handleClick(row)}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          dir="auto"
                          className="h-12 scale-100 shadow-md px-2 border-x-2 border-neutral-focus"
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
                    {row.getIsExpanded() && SubComponent && (
                      <tr>
                        <td colSpan={row.getVisibleCells().length}>
                          <SubComponent row={row} />
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
        {!isFetching && !table.getRowModel().rows.length && <p>No Data</p>}
        {isLoading && <p>is loading</p>}
      </div>
    </DndProvider>
  );
}

export default Grid;
