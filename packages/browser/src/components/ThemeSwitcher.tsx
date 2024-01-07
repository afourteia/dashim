import { useThemeStore } from "@/store/themeStore";
import { Moon, Sun } from "lucide-react";

type ThemeSwitcherProps = {
  isOpen?: boolean;
};

export const ThemeSwitcher = ({ isOpen = true }: ThemeSwitcherProps) => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className={`h-10 ${
        isOpen ? "w-32" : "w-10"
      } bg-primary hover:bg-primary-focus rounded-full relative drop-shadow-lg flex justify-center items-center transition-all`}
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
