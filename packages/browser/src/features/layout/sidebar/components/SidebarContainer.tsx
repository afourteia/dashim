import { ReactNode } from "react";
import { useSidebarContext } from "../../context/SidebarContext";

type Props = {
  children: ReactNode;
};

const SidebarContainer = ({ children }: Props) => {
  const { sidebarIsOpen } = useSidebarContext();

  return (
    <nav
      className={`flex flex-col gap-12 bg-base-100 items-start h-full p-3 transition-all drop-shadow-lg rounded-md relative ${
        sidebarIsOpen ? "w-60" : "w-20"
      }`}
    >
      {children}
    </nav>
  );
};

export default SidebarContainer;
