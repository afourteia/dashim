import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { createSelectors } from "./helpers/createSelectors";

type ThemeState = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const useBaseThemeStore = create<ThemeState, [["zustand/persist", unknown]]>(
  persist(
    (set) => ({
      // initial state
      isDarkMode: false, // Assuming default is light mode
      toggleTheme: () =>
        set((state) => {
          const isDarkMode = !state.isDarkMode;
          // Apply the correct class based on the new theme state
          if (isDarkMode) {
            document.querySelector("html")!.className = "";
            document.querySelector("html")?.classList.add("dark");
          } else {
            document.querySelector("html")!.className = "";
            document.querySelector("html")?.classList.add("light");
          }
          return { isDarkMode };
        }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state: ThemeState) => ({
        isDarkMode: state.isDarkMode,
      }),
      // Rehydrate the class on the body when the store is reinitialized
      onRehydrateStorage: () => (state) => {
        if (state) {
          if (state.isDarkMode) {
            document.querySelector("html")!.className = "";
            document.querySelector("html")?.classList.add("dark");
          } else {
            document.querySelector("html")!.className = "";
            document.querySelector("html")?.classList.add("light");
          }
        }
      },
    }
  )
);

export const useThemeStore = createSelectors(useBaseThemeStore);
