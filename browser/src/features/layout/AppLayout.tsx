import { Outlet } from "@tanstack/react-router";
import Sidebar from "./sidebar/Sidebar";

const AppLayout = () => {
  return (
    <main className="h-screen w-screen p-2 bg-base-300 flex">
      <Sidebar />
      <div className="flex-1 bg-base-100 mx-1">
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
