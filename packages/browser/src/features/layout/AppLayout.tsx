import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Outlet } from "@tanstack/react-router";
import AppSidebar from "./sidebar/AppSidebar";

const AppLayout = () => {
  return (
    <main className="h-screen w-screen p-2 bg-base-300 flex">
      <AppSidebar />
      <div className="flex-1 mx-3">
        <Outlet />
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </main>
  );
};

export default AppLayout;
