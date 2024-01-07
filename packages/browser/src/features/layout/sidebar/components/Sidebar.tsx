import { ReactNode } from "react";
import SidebarProvider from "../../context/SidebarContext";

type SidebarProps = {
  children: ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default Sidebar;
