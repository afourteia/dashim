import { LocaleKeys, locales } from "@/lang/i18n-config";
import { useLocaleStore } from "@/store/localeStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const LanguageSwitcher = () => {
  const { setLocale, locale } = useLocaleStore();

  return (
    <Select onValueChange={(e: LocaleKeys) => setLocale(e)}>
      <SelectTrigger className="bg-neutral w-full py-2 rounded-lg text-neutral-content border-2 border-neutral-focus">
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
