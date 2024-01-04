import { ReactNode, useState } from "react";
import {
  Moon,
  Sun,
  Settings,
  Home,
  ChevronRight,
  ChevronLeft,
  CompassIcon,
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
      className={`flex flex-col gap-3 bg-base-100 items-start h-full p-3 drop-shadow-lg rounded-md relative ${
        isOpen ? "w-60" : "w-20"
      }`}
    >
      <ToggleSidebar isOpen={isOpen} onClick={() => setIsOpen((pre) => !pre)} />
      <Logo />

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
      <LanguageSwitcher />
      <ThemeSwitcher />
    </nav>
  );
};

type SidebarElementProps = {
  icon: ReactNode;
  title: string;
  link: string;
  isActive?: boolean;
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

const Logo = () => {
  return (
    <div className="flex gap-3">
      <div className="flex justify-center items-center h-12 w-12 bg-primary rounded-lg drop-shadow-lg text-white">
        <CompassIcon className="scale-150" />
      </div>
      <p className="text-lg font-bold text-base-content">Dalil Shafi</p>
    </div>
  );
};

const SidebarElement = ({
  icon,
  title,
  link,
  isActive = false,
}: SidebarElementProps) => (
  <Link to={link} className="w-full">
    <div
      className={`flex ${
        isActive
          ? "bg-primary text-primary-content"
          : "bg-transparent text-base-content"
      } h-12 w-full rounded-lg items-center font-bold justify-start p-3 gap-2
        hover:bg-primary-focus hover:text-primary-content
      `}
    >
      {icon}
      {title}
    </div>
  </Link>
);

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="h-10 w-20 bg-primary rounded-full relative drop-shadow-lg"
    >
      <div
        className="absolute flex justify-center items-center drop-shadow-lg h-8 w-8 rounded-full bg-base-100 
          text-base-content top-1 rtl:left-3 rtl:dark:right-3 ltr:right-3 ltr:dark:left-3 transition-all"
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
