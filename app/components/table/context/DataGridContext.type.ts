import type { ColumnDef, Row, Table } from "@tanstack/react-table";

export type DataTableContextType<TData, TValue> = Readonly<{
  table: Table<TData>;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  RenderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
  onRowClicked?: (param: TData) => void;
}>;
