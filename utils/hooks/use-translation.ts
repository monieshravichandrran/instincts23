import { useIntl } from "react-intl";

import translations from "../../en.json";

export type TranslationKey = keyof typeof translations;

export const useTranslation = (
  id: TranslationKey,
  values?: Record<string, any>
) => {
  const intl = useIntl();

  return intl.formatMessage({ id }, values);
};
