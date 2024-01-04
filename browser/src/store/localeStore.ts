import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { createSelectors } from "./helpers/createSelectors";

type LocaleState = {
  locale: "ar" | "en";
  setLocale: (lang: string) => void;
};

const useBaseLocaleStore = create<LocaleState, [["zustand/persist", unknown]]>(
  persist(
    (set) => ({
      // initial state
      locale: "ar",
      setLocale: (lang: string) => set(() => ({ locale: lang as "ar" | "en" })),
    }),
    {
      name: "locale-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state: LocaleState) => ({
        locale: state.locale,
      }),
    }
  )
);

export const useLocaleStore = createSelectors(useBaseLocaleStore);
