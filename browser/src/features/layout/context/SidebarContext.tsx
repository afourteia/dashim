import { useState } from "react";
import { contextFactory } from "@/context/contextFactory";
import {
  SidebarActionsContextType,
  SidebarContextProps,
  SidebarContextType,
} from "./SidebarContext.type";

const [useSidebarContext, SidebarContext] =
  contextFactory<SidebarContextType>();
const [useSidebarActionsContext, SidebarActionsContext] =
  contextFactory<SidebarActionsContextType>();

export { useSidebarContext, useSidebarActionsContext };

const SidebarProvider = ({ children }: SidebarContextProps) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarIsOpen((pre) => !pre);
  };

  return (
    <SidebarContext.Provider value={{ sidebarIsOpen }}>
      <SidebarActionsContext.Provider value={{ toggleSidebar }}>
        {children}
      </SidebarActionsContext.Provider>
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
