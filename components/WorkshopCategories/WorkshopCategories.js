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

const intersignCategories = [
  { label: "All", value: "all" },
  {
    label: "Latin America",
    value: "latin-america",
    icon: "/icons/latinamerica.svg",
  },
  {
    label: "Asia",
    value: "asia",
    icon: "/icons/asia.svg",
  },
  {
    label: "Africa",
    value: "africa",
    icon: "/icons/africa.svg",
  },
  {
    label: "Europe",
    value: "europe",
    icon: "/icons/europe.svg",
  },
  {
    label: "Oceania",
    value: "oceania",
    icon: "/icons/oceania.svg",
  },
  {
    label: "North America",
    value: "north-america",
    icon: "/icons/north-america.svg",
  },

];

export default function WorkshopCategories({
  selected,
  setSelected,
  type = "standard",
}) {
  const categoryList =
    type === "intersign" ? intersignCategories : categories;

  return (
    <div
      className={`${styles.container} ${
        type === "intersign" ? styles.intersign : ""
      }`}
    >
      {categoryList.map((cat, index) => (
        <span key={cat.value}>
          <button
            className={`${styles.item} ${
              selected === cat.value ? styles.active : ""
            }`}
            onClick={() => setSelected(cat.value)}
          >
            {cat.icon && (
              <img
                src={cat.icon}
                alt=""
                className={styles.categoryIcon}
              />
            )}

            <span>{cat.label}</span>
          </button>

          {index !== categoryList.length - 1 && (
            <span className={styles.divider}>|</span>
          )}
        </span>
      ))}
    </div>
  );
}