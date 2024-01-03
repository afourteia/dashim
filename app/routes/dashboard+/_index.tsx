import { type LoaderFunctionArgs } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import type { ColumnDef, SortingState } from "@tanstack/react-table";
import Grid from "~/components/table/components/Grid";
import DataGridProvider from "~/components/table/context/DataGridContext";
import { User, type UserType } from "~/server/models/user.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log("loader dashboard index");

  const users = await User.getMany(request);
  // const session = await getSession(request.headers.get('Cookie'))

  // console.log('session id', session.id)
  // console.log('session data', session.data)

  // if (!session.has('userId')) {
  //   // Redirect to the home page if they are already signed in.
  //   console.log('session does not have userId')
  //   throw redirect('/dashboard/login')
  // }

  return users;
};

export default function DashboardIndex() {
  const data = useLoaderData<typeof loader>();

  const columns: ColumnDef<UserType>[] = [
    {
      id: "id",
      accessorKey: "",
      header: () => <p>id</p>,
    },
    {
      id: "fullName",
      accessorFn: (item) => `${item.firstName} ${item.lastName}`,
      header: () => <p>Full Name</p>,
    },
    {
      id: "birthDate",
      accessorKey: "birthDate",
      header: () => <p>Birth Date</p>,
    },
  ];

  // const columns: ColumnDef<{ name: string; age: number }>[] = [
  //   {
  //     id: "name",
  //     accessorKey: "name",
  //     header: () => <p>Name</p>,
  //   },
  //   {
  //     id: "fullName",
  //     accessorKey: "name",
  //     header: () => <p>Full Name</p>,
  //   },
  // ];

  const fakeData: { name: string; age: number }[] = [{ name: "a", age: 2 }];

  console.log(data);

  return (
    <div>
      <h2>dashboard index</h2>
      <div className="w-full h-96">
        <DataGridProvider columns={columns} data={data || []}>
          <Grid totalFetched={fakeData.length} totalRows={fakeData.length} />
        </DataGridProvider>
      </div>
    </div>
  );
}
