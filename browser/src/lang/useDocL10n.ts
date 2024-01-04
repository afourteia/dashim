import { useEffect } from "react";
import { useIntl } from "react-intl";
import { locales } from "./i18n-config";

export const useDocL10n = () => {
  const { locale } = useIntl();

  useEffect(() => {
    if (locale === "ar" || locale === "en") {
      document.dir = locales[locale].dir;
      document.title = locales[locale].messages["app.title"];
    }
  }, [locale]);
};
