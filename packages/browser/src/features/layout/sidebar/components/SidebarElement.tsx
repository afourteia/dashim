import { ReactNode } from "react";
import { useSidebarContext } from "../../context/SidebarContext";
import { Link } from "@tanstack/react-router";

type SidebarElementProps = {
  icon: ReactNode;
  title: string;
  link: string;
  isActive?: boolean;
};

export const SidebarElement = ({
  icon,
  title,
  link,
  isActive = false,
}: SidebarElementProps) => {
  const { sidebarIsOpen } = useSidebarContext();
  return (
    <Link to={link} className="w-full">
      <div
        className={`${
          isActive
            ? "bg-primary text-primary-content"
            : "bg-transparent text-base-content"
        } flex h-12 w-full rounded-lg items-center font-bold 
        ${sidebarIsOpen ? "justify-start" : "justify-center"} p-3 gap-2
        hover:bg-primary-focus hover:text-primary-content
      `}
      >
        {icon}
        {sidebarIsOpen && title}
      </div>
    </Link>
  );
};
