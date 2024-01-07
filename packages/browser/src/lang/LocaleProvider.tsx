import { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { useLocaleStore } from "@/store/localeStore";
import { defaultLocale, locales } from "./i18n-config";

type I18nProps = {
  children: ReactNode;
};

export const LocaleProvider = ({ children }: I18nProps) => {
  const locale = useLocaleStore().locale;

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={locales[locale]?.messages}
    >
      {children}
    </IntlProvider>
  );
};
