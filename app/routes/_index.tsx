import { type MetaFunction } from "@remix-run/node";
import { type ColumnDef } from "@tanstack/react-table";
import { ColorSchemeToggle } from "~/components/ColorSchemeToggle/ColorSchemeToggle";
import { NavBar } from "~/components/NavBar/NavBar";
import UIDirection from "~/components/UIDirection/UIDirection";
import Grid from "~/components/table/components/Grid";
import DataGridProvider from "~/components/table/context/DataGridContext";
import { data, type RandomData } from "~/components/dummyData";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   const users = await User.getMany({});
//   const notes = "";
//   console.log(
//     users?.length > 0 ? "Users are: " + JSON.stringify(users) : "no users"
//   );
//   console.log(
//     notes?.length > 0 ? "Notes are: " + JSON.stringify(users) : "no notes"
//   );
//   return json({ users });
// };

/* --------------------------------------------------------------------------------------------------------------------------------------- */

const PersonColumns: ColumnDef<RandomData>[] = [
  {
    id: "name",
    accessorKey: "name",
    size: 20,
    header: () => <p>Name</p>,
  },
  {
    id: "Country",
    accessorKey: "country",
    size: 20,
    header: () => <p>Country</p>,
  },
  {
    id: "numberRange",
    accessorKey: "numberrange",
    header: () => <p>Number Range</p>,
  },
  {
    id: "phone",
    accessorKey: "phone",
    header: () => <p>phone</p>,
  },
];

export default function Index() {
  return (
    <div className="flex flex-row justify-start content-start h-screen">
      <NavBar />

      <div className="flex flex-grow">
        <ColorSchemeToggle />
        <UIDirection />
        <div className="flex-grow">
          <DataGridProvider columns={PersonColumns} data={data}>
            <Grid totalFetched={data.length} totalRows={data.length} />
          </DataGridProvider>
        </div>
      </div>
    </div>
  );
}
