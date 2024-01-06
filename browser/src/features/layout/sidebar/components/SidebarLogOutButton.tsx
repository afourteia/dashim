import { Button } from "@/components/ui/button";
import { LOCALE_KEY } from "@/lang/localeKey";
import { LogOut } from "lucide-react";
import { useIntl } from "react-intl";
import { useSidebarContext } from "../../context/SidebarContext";

type SidebarLogOutButtonProps = {
  onClick?: () => void;
};

export const SidebarLogOutButton = ({ onClick }: SidebarLogOutButtonProps) => {
  const intl = useIntl();

  const { sidebarIsOpen } = useSidebarContext();

  return (
    <Button
      onClick={onClick}
      className="bg-primary hover:bg-primary-focus text-primary-content gap-2 w-full"
    >
      <LogOut />
      {sidebarIsOpen && <p>{intl.formatMessage({ id: LOCALE_KEY.LOGOUT })}</p>}
    </Button>
  );
};
