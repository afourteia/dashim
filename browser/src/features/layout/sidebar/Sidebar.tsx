import { ReactNode, useState } from "react";
import {
  Moon,
  Sun,
  Settings,
  Home,
  ChevronRight,
  ChevronLeft,
  CompassIcon,
  LogOut,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LocaleKeys, locales } from "@/lang/i18n-config";
import { useThemeStore } from "@/store/themeStore";
import { useLocaleStore } from "@/store/localeStore";
import { useIntl } from "react-intl";
import { LOCALE_KEY } from "@/lang/localeKey";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const LanguageSwitcher = () => {
    const { setLocale, locale } = useLocaleStore();

    return (
      <Select onValueChange={(e: LocaleKeys) => setLocale(e)}>
        <SelectTrigger className="bg-neutral">
          <SelectValue placeholder={locales[locale].title} />
        </SelectTrigger>
        <SelectContent className="bg-neutral">
          {Object.keys(locales).map((el) => (
            <SelectItem
              className="focus:bg-neutral-focus text-neutral-content"
              value={el}
              key={el}
            >
              {locales[el as LocaleKeys].title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };
  const intl = useIntl();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`flex flex-col gap-12 bg-base-100 items-start h-full p-3 transition-all drop-shadow-lg rounded-md relative ${
        isOpen ? "w-60" : "w-20"
      }`}
    >
      <ToggleSidebar isOpen={isOpen} onClick={() => setIsOpen((pre) => !pre)} />

      <SidebarLogo isOpen={isOpen} />

      <div className="flex flex-col w-full h-full justify-between items-center">
        <div className="w-full flex flex-col gap-y-4">
          <SidebarElement
            icon={<Home />}
            title={intl.formatMessage({ id: LOCALE_KEY.HOME })}
            link="/"
            isActive
            isOpen={isOpen}
          />
          <SidebarElement
            icon={<Settings />}
            title={intl.formatMessage({ id: LOCALE_KEY.SETTINGS })}
            link="/settings"
            isOpen={isOpen}
          />
        </div>
        <div className="w-full flex flex-col gap-y-4 justify-center items-center">
          <ThemeSwitcher isOpen={isOpen} />
          <LanguageSwitcher />
          <SidebarLogOutButton isOpen={isOpen} />
        </div>
      </div>
    </nav>
  );
};

type SidebarLogOutButtonProps = {
  isOpen?: boolean;
  onClick?: () => void;
};

const SidebarLogOutButton = ({ isOpen = false }: SidebarLogOutButtonProps) => {
  const intl = useIntl();

  return (
    <Button className="bg-primary hover:bg-primary-focus text-base-content gap-2 w-full">
      <LogOut />
      {isOpen && <p>{intl.formatMessage({ id: LOCALE_KEY.LOGOUT })}</p>}
    </Button>
  );
};

type ToggleSidebarProps = {
  isOpen: boolean;
  onClick?: () => void;
};

const ToggleSidebar = ({ isOpen, onClick }: ToggleSidebarProps) => {
  return (
    <button
      className="w-6 h-6 bg-primary rounded-full text-primary-content drop-shadow-lg absolute ltr:-right-3 rtl:-left-3"
      onClick={onClick}
    >
      {isOpen ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
};

type SidebarLogoProps = {
  isOpen?: boolean;
};

const SidebarLogo = ({ isOpen }: SidebarLogoProps) => {
  return (
    <div className="flex gap-3">
      <div className="flex justify-center items-center h-12 w-12 bg-primary rounded-lg drop-shadow-lg text-white">
        <CompassIcon className="scale-150" />
      </div>
      {isOpen && (
        <p className="text-lg font-bold text-base-content">Dalil Shafi</p>
      )}
    </div>
  );
};

type SidebarElementProps = {
  icon: ReactNode;
  title: string;
  link: string;
  isOpen: boolean;
  isActive?: boolean;
};

const SidebarElement = ({
  icon,
  title,
  link,
  isActive = false,
  isOpen,
}: SidebarElementProps) => (
  <Link to={link} className="w-full">
    <div
      className={`${
        isActive
          ? "bg-primary text-primary-content"
          : "bg-transparent text-base-content"
      } flex h-12 w-full rounded-lg items-center font-bold 
        ${isOpen ? "justify-start" : "justify-center"} p-3 gap-2
        hover:bg-primary-focus hover:text-primary-content
      `}
    >
      {icon}
      {isOpen && title}
    </div>
  </Link>
);

type ThemeSwitcherProps = {
  isOpen?: boolean;
};

const ThemeSwitcher = ({ isOpen = true }: ThemeSwitcherProps) => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className={`h-10 ${
        isOpen ? "w-32" : "w-10"
      } bg-primary hover:bg-primary-focus rounded-full relative drop-shadow-lg flex justify-center items-center`}
    >
      <div
        className={`flex justify-center items-center drop-shadow-lg h-8 w-8 rounded-full bg-base-300 hover:bg-base-100
          text-base-content ${
            isOpen
              ? "absolute top-1 rtl:left-3 rtl:dark:right-3 ltr:right-3 ltr:dark:left-3"
              : ""
          } transition-all`}
      >
        {isDarkMode ? (
          <Moon className="scale-100 transition-all" />
        ) : (
          <Sun className="scale-100 transition-all" />
        )}
      </div>
    </button>
  );
};

export default Sidebar;
