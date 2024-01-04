import Sidebar from "./sidebar/Sidebar";

const AppLayout = () => {
  return (
    <main className="h-screen w-screen py-2 px-2 bg-white dark:bg-gray-800">
      <Sidebar />
    </main>
  );
};

export default AppLayout;
