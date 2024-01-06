import { CompassIcon } from "lucide-react";
import { useSidebarContext } from "../../context/SidebarContext";

export const SidebarLogo = () => {
  const { sidebarIsOpen } = useSidebarContext();

  return (
    <div className="flex gap-3">
      <div className="flex justify-center items-center h-12 w-12 bg-primary rounded-lg drop-shadow-lg text-white">
        <CompassIcon className="scale-150" />
      </div>
      {sidebarIsOpen && (
        <p className="text-lg font-bold text-base-content">Dalil Shafi</p>
      )}
    </div>
  );
};
