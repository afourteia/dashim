import Grid from "@/components/Grid";
import { ColumnDef } from "@tanstack/react-table";

const Home = () => {
  type User = {
    id: number;
    name: string;
    age: number;
    username: string;
  };

  const columns: ColumnDef<User>[] = [
    {
      id: "id",
      accessorKey: "id",
      header: () => <p>ID</p>,
    },
    {
      id: "name",
      accessorKey: "name",
      header: () => <p>Name</p>,
    },
    {
      id: "username",
      accessorKey: "username",
      header: () => <p>Username</p>,
    },
    {
      id: "age",
      accessorKey: "age",
      header: () => <p>Age</p>,
    },
  ];

  const users: User[] = [
    {
      id: 1,
      name: "Mohammad Jabah",
      age: 22,
      username: "Jabah",
    },
    {
      id: 2,
      name: "Ali",
      age: 22,
      username: "Ali",
    },
  ];

  return (
    <div>
      <Grid columns={columns} data={users} totalFetched={2} totalRows={2} />
    </div>
  );
};

export default Home;
