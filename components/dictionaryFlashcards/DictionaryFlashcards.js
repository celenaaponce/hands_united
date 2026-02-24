"use client";

import { useState, useMemo } from "react";
import FlashcardList from "../flashcards/flashcardList";

export default function DictionaryFlashcards({
  dictionary,
  languageFilter = null,
  uiLanguage = null,
}) {
  const [query, setQuery] = useState("");

  // multi-language checkbox selection
  const [selectedLanguages, setSelectedLanguages] = useState(
    languageFilter ? [languageFilter] : [],
  );

  // language metadata
  const languages = {
    ht: { name: "Haitian Creole", flag: "🇭🇹" },
    es: {
      name: "Spanish",
      flags: [
        "🇲🇽",
        "🇨🇴",
        "🇩🇴",
        "🇵🇪",
        "🇨🇱",
        "🇦🇷",
        "🇬🇹",
        "🇭🇳",
        "🇸🇻",
        "🇳🇮",
        "🇨🇷",
        "🇵🇦",
        "🇵🇷",
        "🇨🇺",
        "🇻🇪",
        "🇪🇨",
        "🇵🇾",
        "🇺🇾",
      ],
    },
    chk: { name: "Chuukese", flag: "🇫🇲" },
    // ru: { name: "Russian", flag: "🇷🇺" },
    // my: { name: "Burmese", flag: "🇲🇲" },
    // ti: { name: "Tigrinya", flag: "🇪🇷" },
    // am: { name: "Amharic", flag: "🇪🇹" },
  };

  function toggleLanguage(code) {
    setSelectedLanguages((prev) =>
      prev.includes(code) ? prev.filter((l) => l !== code) : [...prev, code],
    );
  }
  function getFlag(code, seed) {
    const lang = languages[code];

    if (!lang) return "";

    if (lang.flags) {
      // deterministic hash from seed
      let hash = 0;

      for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
      }

      const index = Math.abs(hash) % lang.flags.length;

      return lang.flags[index];
    }

    return lang.flag;
  }

  const flashcards = useMemo(() => {
    const q = query.toLowerCase();

    const filtered = dictionary.filter((entry) => {
      if (entry.english.toLowerCase().includes(q)) return true;

      return entry.entries.some((e) => e.word.toLowerCase().includes(q));
    });

    const cards = filtered.flatMap((entry) => {
      let entries = entry.entries;

      // filter by checkbox selection
      if (selectedLanguages.length > 0) {
        entries = entries.filter((e) =>
          selectedLanguages.includes(e.languageCode),
        );
      }

      // filter by fixed page language
      if (languageFilter) {
        entries = entries.filter((e) => e.languageCode === languageFilter);
      }

      return entries.map((e) => {
        const lang = languages[e.languageCode];

        const wordFront = uiLanguage ? e.word : `${entry.english} — ${e.word}`;

        return {
          id: `${entry.id}-${e.languageCode}-${e.word}`,

          word: wordFront,

          sortWord: e.word,

          image: `${e.thumbnail}?v=${entry.id}`,

          link: `https://www.youtube.com/embed/${e.youtubeId}`,

          synonyms: [],

          // FLAG + LANGUAGE BADGE
          languageBadge:
            languageFilter === null
              ? `${getFlag(e.languageCode, entry.english)} ${lang.name}`
              : null,

          languageCode: e.languageCode,

          flipText:
            uiLanguage === "ht"
              ? "Gade lòt bò →"
              : uiLanguage === "es"
                ? "Ver el otro lado →"
                : uiLanguage === "chk"
                  ? "Nengeni ekis →"
                  : uiLanguage === "ru"
                    ? "Смотреть другую сторону →"
                    : uiLanguage === "my"
                      ? "တစ်ဖက်ကို ကြည့်ပါ →"
                      : uiLanguage === "ti"
                        ? "ካልእ ገጽ ርአ →"
                        : "See other side →",
        };
      });
    });

    // sort correctly
    cards.sort((a, b) => a.sortWord.localeCompare(b.sortWord));

    return cards;
  }, [dictionary, query, selectedLanguages, languageFilter, uiLanguage]);

  return (
    <div style={{ textAlign: "center" }}>
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      />

      {/* LANGUAGE CHECKBOXES */}
      {!languageFilter && (
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {Object.entries(languages).map(([code, lang]) => (
            <label
              key={code}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <input
                type="checkbox"
                checked={selectedLanguages.includes(code)}
                onChange={() => toggleLanguage(code)}
              />
              {lang.flag} {lang.name}
            </label>
          ))}
        </div>
      )}

      <FlashcardList flashcards={flashcards} />
    </div>
  );
}
