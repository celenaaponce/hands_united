export const languageMeta = {
  es: {
    label: "Español",
    flags: [
      "🇲🇽", "🇨🇴", "🇩🇴", "🇵🇪", "🇨🇱",
      "🇦🇷", "🇬🇹", "🇭🇳", "🇸🇻", "🇳🇮",
      "🇨🇷", "🇵🇦", "🇵🇷", "🇨🇺", "🇻🇪",
      "🇪🇨", "🇵🇾", "🇺🇾",
    ],
  },
  ru: { label: "Русский", flag: "🇷🇺" },
  my: { label: "မြန်မာဘာသာ", flag: "🇲🇲" },
  ht: { label: "Kreyòl Ayisyen", flag: "🇭🇹" },
  ti: { label: "ትግርኛ", flag: "🇪🇷" },
  am: { label: "አማርኛ", flag: "🇪🇹" },
  chk: { label: "Chuukese", flag: "🇫🇲" },
};

export function getLanguageFlag(code, seed = "default") {
  const lang = languageMeta[code];
  if (!lang) return "";

  if (lang.flags) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % lang.flags.length;
    return lang.flags[index];
  }

  return lang.flag;
}