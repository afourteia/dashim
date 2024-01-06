import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useSidebarActionsContext,
  useSidebarContext,
} from "../../context/SidebarContext";

export const ToggleSidebar = () => {
  const { sidebarIsOpen } = useSidebarContext();
  const { toggleSidebar } = useSidebarActionsContext();

  return (
    <button
      className="w-6 h-6 bg-primary rounded-full text-primary-content drop-shadow-lg absolute ltr:-right-3 rtl:-left-3"
      onClick={toggleSidebar}
    >
      {sidebarIsOpen ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
};
