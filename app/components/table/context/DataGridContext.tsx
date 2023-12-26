import { type ReactNode, useState } from "react";
import { contextFactory } from "../../../context/contextFactory";
import { type DataTableContextType } from "./DataGridContext.type";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnOrderState,
  type ExpandedState,
  type Row,
  type RowSelectionState,
  type SortingState,
  type VisibilityState,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const [useDataGridContext, DataGridContext] =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contextFactory<DataTableContextType<any, any>>();

export { useDataGridContext };

type DataGridContextProps<TData, TValue> = {
  children: ReactNode;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  RenderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
  getRowCanExpand?: (row: Row<TData>) => boolean;
  enableRowSelection?: boolean;
  onRowClicked?: (param: TData) => void;
};

function DataGridProvider<TData, TValue>({
  children,
  columns,
  data,
  RenderSubComponent,
  getRowCanExpand = () => false,
  enableRowSelection = false,
  onRowClicked,
}: DataGridContextProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
    columns.map((column) => column.id as string)
  );
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualSorting: true,
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: getRowCanExpand,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    columnResizeMode: "onChange",
    onExpandedChange: setExpanded,
    onColumnOrderChange: setColumnOrder,
    enableRowSelection,
    enableMultiRowSelection: false,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      expanded,
      columnOrder,
      rowSelection,
    },
  });

  const onClick = (row: Row<TData>) => {
    row.getToggleSelectedHandler();
    if (onRowClicked) onRowClicked(row.original);
  };

  return (
    <DataGridContext.Provider
      value={{
        table,
        columns,
        data,
        RenderSubComponent,
        onRowClicked: onClick,
      }}
    >
      {children}
    </DataGridContext.Provider>
  );
}

export default DataGridProvider;
