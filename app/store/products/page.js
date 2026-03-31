"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import ZeffyEmbed from "../../../components/zeffyembed/zeffy-embed";

const products = [
  {
    title: "Family Signs Spanish ASL English Dictionary + Coloring Pages",
    languages: ["Spanish"],
    theme: "family",
    type: "dictionary",
    format: "dictionary + coloring pages",
    price: 25,
    link: "https://www.zeffy.com/en-US/ticketing/family-signs-spanish-asl-english-dictionary-coloring-pages",
  },
  {
    title: "Family Signs Haitian Creole ASL English Dictionary",
    languages: ["Haitian Creole"],
    theme: "family",
    type: "dictionary",
    format: "dictionary",
    price: 18,
    link: "https://www.zeffy.com/en-US/ticketing/family-signs-haitian-creole-asl-english-dictionary",
  },
  {
    title: "Family Signs Chuukese ASL English Dictionary",
    languages: ["Chuukese"],
    theme: "family",
    type: "dictionary",
    format: "dictionary",
    price: 18,
    link: "https://www.zeffy.com/en-US/ticketing/family-signs-chuukese-asl-english-dictionary",
  },
  {
    title: "Clase asincrona",
    languages: ["español"],
    type: "class",
    description:
      "20 horas de material, aprenda ASL en español a su propio ritmo",
    link: "https://www.zeffy.com/en-US/ticketing/clase-asincrona",
  },
];

export default function ProductsPage() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  const toggleSelection = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((v) => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  // ✅ FILTER LOGIC
  const filtered = products.filter((p) => {
    const languageMatch =
      selectedLanguages.length === 0 ||
      selectedLanguages.some((lang) => p.languages.includes(lang));

    const themeMatch =
      selectedThemes.length === 0 || selectedThemes.includes(p.theme);

    return languageMatch && themeMatch;
  });

  return (
    <div className={styles.container}>
      <Link href="/store#products" className={styles.backLink}>
        ← Back to Store Page
      </Link>
      {/* ===================== */}
      {/* FILTERS */}
      {/* ===================== */}
      <div className={styles.filtersWrapper}>
        <h1 className={styles.title}>Products</h1>

        <div className={styles.filters}>
          {/* LEFT: LANGUAGE */}
          <div className={styles.filterColumn}>
            <p className={styles.filterLabel}>Language:</p>

            <label>
              <input
                type="checkbox"
                checked={selectedLanguages.includes("Spanish")}
                onChange={() =>
                  toggleSelection(
                    "Spanish",
                    selectedLanguages,
                    setSelectedLanguages,
                  )
                }
              />
              🇪🇸 Spanish
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedLanguages.includes("Haitian Creole")}
                onChange={() =>
                  toggleSelection(
                    "Haitian Creole",
                    selectedLanguages,
                    setSelectedLanguages,
                  )
                }
              />
              🇭🇹 Haitian Creole
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedLanguages.includes("Chuukese")}
                onChange={() =>
                  toggleSelection(
                    "Chuukese",
                    selectedLanguages,
                    setSelectedLanguages,
                  )
                }
              />
              🇫🇲 Chuukese
            </label>
          </div>

          {/* RIGHT: THEME */}
          <div className={styles.filterColumn}>
            <p className={styles.filterLabel}>Theme:</p>

            {[
              { key: "family", label: "👪 Family" },
              { key: "food", label: "🍽️ Food" },
              { key: "chores", label: "🧹 Chores" },
              { key: "schedule", label: "📅 Schedule" },
              { key: "emotions", label: "😊 Emotions" },
            ].map((t) => (
              <label key={t.key}>
                <input
                  type="checkbox"
                  checked={selectedThemes.includes(t.key)}
                  onChange={() =>
                    toggleSelection(t.key, selectedThemes, setSelectedThemes)
                  }
                />
                {t.label}
              </label>
            ))}
          </div>

          {/* CLEAR BUTTON */}
          <div className={styles.clearWrapper}>
            <button
              className={styles.clearButton}
              onClick={() => {
                setSelectedLanguages([]);
                setSelectedThemes([]);
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* ===================== */}
      {/* GRID */}
      {/* ===================== */}
      <div className={styles.grid}>
        {filtered.map((p, i) => (
          <div
            key={i}
            className={styles.card}
            onClick={() => setActiveProduct(p)}
          >
            <div>
              <h3>{p.title}</h3>

              <p>🌍 {p.languages.join(" • ")}</p>

              {p.theme && <p>📂 {p.theme}</p>}

              {/* ❌ hide price if 0 */}
              {p.price > 0 && <p>💲 {p.price}</p>}

              {/* ✅ dictionary bundle */}
              {p.type === "dictionary" && (
                <div className={styles.bundle}>
                  <p>🌍 Choose 2 language sets → $4 off each</p>
                  <p>🌍 Choose 3 language sets → $5 off each</p>
                  <p className={styles.small}>Mix & match languages</p>
                </div>
              )}

              {/* ✅ description (for async class etc) */}
              {p.description && (
                <p className={styles.description}>{p.description}</p>
              )}
            </div>

            <span className={styles.button}>View Product →</span>
          </div>
        ))}
      </div>

      {/* ===================== */}
      {/* MODAL */}
      {/* ===================== */}
      {activeProduct && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveProduct(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              className={styles.closeButton}
              onClick={() => setActiveProduct(null)}
            >
              ✕
            </button>

            <h2>{activeProduct.title}</h2>

            {activeProduct.description && (
              <p className={styles.modalDescription}>
                {activeProduct.description}
              </p>
            )}

            {/* bundle again inside modal */}
            {activeProduct.type === "dictionary" && (
              <div className={styles.bundleBox}>
                <p>
                  <strong>Multi-Language Bundle</strong>
                </p>
                <p>🌍 Buy 2 dictionaries → $4 off each (code: HU2)</p>
                <p>🌍 Buy 3 dictionaries → $5 off each (code: HU3)</p>
                <p className={styles.small}>
                  Mix & match languages • Applied at checkout
                </p>
              </div>
            )}

            {/* ZEFFY */}
            <div className={styles.embedWrapper}>
              <ZeffyEmbed
                title={activeProduct.title}
                src={activeProduct.link}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
