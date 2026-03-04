import { languageMeta } from "../../utils/getLanguageFlag";

export const supportedLanguages = Object.entries(languageMeta).map(
  ([code, data]) => ({
    code,
    label: data.label,
  })
);