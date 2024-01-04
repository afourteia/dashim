import { useThemeStore } from "@/store/themeStore";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, Settings, Home } from "lucide-react";
import { ReactNode } from "react";

const Sidebar = () => {
  return (
    <nav className="flex flex-col gap-3 items-center h-full p-3 w-44 bg-gray-300 dark:bg-slate-600 drop-shadow-lg rounded-md">
      <NavLink icon={<Home />} title="Home" link="/" />
      <NavLink icon={<Settings />} title="Settings" link="/settings" />
      <ThemeSwitcher />
    </nav>
  );
};

type NavLinkProps = {
  icon: ReactNode;
  title: string;
  link: string;
};

const NavLink = ({ icon, title, link }: NavLinkProps) => (
  <Link to={link} className="w-full">
    <div className="flex flex-row bg-gray-300 h-12 w-full rounded-lg items-center font-bold justify-start p-3 gap-2">
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
      className="h-10 w-20 dark:bg-white bg-slate-600 rounded-full relative drop-shadow-lg"
    >
      <div className="absolute flex justify-center items-center drop-shadow-lg h-8 w-8 rounded-full dark:bg-slate-600 dark:text-white bg-white top-1 right-3 dark:left-3 transition-all">
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
