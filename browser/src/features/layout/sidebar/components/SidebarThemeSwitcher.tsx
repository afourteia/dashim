import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useSidebarContext } from "../../context/SidebarContext";

export const SidebarThemeSwitcher = () => {
  const { sidebarIsOpen } = useSidebarContext();

  return <ThemeSwitcher isOpen={sidebarIsOpen} />;
};
