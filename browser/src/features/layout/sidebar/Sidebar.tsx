import { useThemeStore } from "@/store/themeStore";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, Settings, Home } from "lucide-react";
import { ReactNode } from "react";

const Sidebar = () => {
  return (
    <nav className="flex flex-col gap-3 bg-base-300 items-center h-full p-3 w-44 drop-shadow-lg rounded-md">
      <SidebarElement icon={<Home />} title="Home" link="/" isActive />
      <SidebarElement icon={<Settings />} title="Settings" link="/settings" />
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

const SidebarElement = ({
  icon,
  title,
  link,
  isActive = false,
}: SidebarElementProps) => (
  <Link to={link} className="w-full">
    <div
      className={`flex ${
        isActive ? "bg-primary" : "bg-transparent"
      } h-12 w-full rounded-lg items-center font-bold justify-start p-3 gap-2 text-primary-content`}
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
      <div className="absolute flex justify-center items-center drop-shadow-lg h-8 w-8 rounded-full bg-base-100 text-primary-content top-1 right-3 dark:left-3 transition-all">
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
