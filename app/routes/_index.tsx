import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { type ColumnDef } from "@tanstack/react-table";
import { ColorSchemeToggle } from "~/components/ColorSchemeToggle/ColorSchemeToggle";
import { NavBar } from "~/components/NavBar/NavBar";
import UIDirection from "~/components/UIDirection/UIDirection";
import Grid from "~/components/table/components/Grid";
import DataGridProvider from "~/components/table/context/DataGridContext";
import User from "~/server/models/user.server.ts";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const users = await User.getMany({});
  const notes = "";
  console.log(
    users?.length > 0 ? "Users are: " + JSON.stringify(users) : "no users"
  );
  console.log(
    notes?.length > 0 ? "Notes are: " + JSON.stringify(users) : "no notes"
  );
  return json({ users });
};

/* --------------------------------------------------------------------------------------------------------------------------------------- */

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "محمد",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};
const PersonColumns: ColumnDef<Person>[] = [
  {
    id: "firstName",
    accessorKey: "firstName",
    size: 20,
    header: () => <p>First Name</p>,
    aggregationFn: () => {},
  },
  {
    id: "lastName",
    accessorKey: "lastName",
    size: 20,
    header: () => <p>Last Name</p>,
  },
  {
    id: "age",
    accessorKey: "age",
    header: () => <p>Age</p>,
  },
];

export default function Index() {
  return (
    <div className="flex justify-start content-start h-screen">
      <NavBar />

      <div>
        <ColorSchemeToggle />
        <UIDirection />
        <DataGridProvider columns={PersonColumns} data={defaultData}>
          <Grid totalFetched={0} totalRows={defaultData.length} />
        </DataGridProvider>
      </div>
    </div>
  );
}
