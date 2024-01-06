import { Home, Settings } from "lucide-react";
import SidebarContainer from "./components/SidebarContainer";
import { SidebarElement } from "./components/SidebarElement";
import { SidebarLogo } from "./components/SidebarLogo";
import { ToggleSidebar } from "./components/ToggleSidebar";
import { LOCALE_KEY } from "@/lang/localeKey";
import { SidebarThemeSwitcher } from "./components/SidebarThemeSwitcher";
import { SidebarLogOutButton } from "./components/SidebarLogOutButton";
import { useIntl } from "react-intl";
import Sidebar from "./components/Sidebar";
import { SidebarLanguageSwitcher } from "./components/SidebarLanguageSwitcher";

const AppSidebar = () => {
  const intl = useIntl();

  return (
    <Sidebar>
      <SidebarContainer>
        <ToggleSidebar />

        <SidebarLogo />

        <div className="flex flex-col w-full h-full justify-between items-center">
          <div className="w-full flex flex-col gap-y-4">
            <SidebarElement
              icon={<Home />}
              title={intl.formatMessage({ id: LOCALE_KEY.HOME })}
              link="/"
              isActive
            />
            <SidebarElement
              icon={<Settings />}
              title={intl.formatMessage({ id: LOCALE_KEY.SETTINGS })}
              link="/settings"
            />
          </div>
          <div className="w-full flex flex-col gap-y-4 justify-center items-center">
            <SidebarThemeSwitcher />
            <SidebarLanguageSwitcher />
            <SidebarLogOutButton />
          </div>
        </div>
      </SidebarContainer>
    </Sidebar>
  );
};

export default AppSidebar;
