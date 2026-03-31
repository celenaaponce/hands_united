"use client";

import styles from "./WorkshopCategories.module.css";

const categories = [
    { label: "✨ All", value: "all" },
  { label: "📊 Math", value: "math" },
  { label: "⚖️ Immigrants", value: "immigrants" },
  { label: "💻 Tech", value: "tech" },
  { label: "🌍 Languages", value: "languages" },
  { label: "📦 Other", value: "other" },
];

export default function WorkshopCategories({ selected, setSelected }) {
  return (
    <div className={styles.container}>
      {categories.map((cat, index) => (
        <span key={cat.value}>
          <button
            className={`${styles.item} ${
              selected === cat.value ? styles.active : ""
            }`}
            onClick={() => setSelected(cat.value)}
          >
            {cat.label}
          </button>

          {index !== categories.length - 1 && (
            <span className={styles.divider}>|</span>
          )}
        </span>
      ))}
    </div>
  );
}