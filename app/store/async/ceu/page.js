"use client";

import styles from "./page.module.css";
import WorkshopCard from "../../../../components/WorkshopCard/WorkshopCard";

import { useState } from "react";
import WorkshopCategories from "../../../../components/WorkshopCategories/WorkshopCategories";

const workshops = [
  {
    title: "General High School Math Interpreting",
    ceu: "0.2",
    price: 40,
    languages: ["English"],
    category: "math",
    link: "https://www.zeffy.com/en-US/ticketing/general-high-school-math-interpreting-ceus",
  },
  {
    title: "Honoring Faith and Language",
    ceu: "0.2",
    price: 40,
    languages: ["ASL", "English"],
    category: "immigrants",
    link: "https://www.zeffy.com/en-US/ticketing/honoring-faith-and-language-ceus",
  },
  {
    title: "Immigrant Best Practices",
    ceu: "0.2",
    price: 40,
    languages: ["ASL"],
    category: "immigrants",
    link: "https://www.zeffy.com/en-US/ticketing/immigrant-best-practices-ceus",
  },
  {
    title: "Supporting Hmong Children with Autism and Deafness",
    ceu: "0.15",
    price: 20,
    languages: ["ASL", "Hmong", "English", "Spanish"],
    category: "immigrants",
    link: "https://www.zeffy.com/en-US/ticketing/supporting-hmong-children-with-autism-and-deafness-ceus",
  },
  {
    title: "Number Sense High School Math Interpreting",
    ceu: "0.1",
    price: 30,
    languages: ["English"],
    category: "math",
    link: "https://www.zeffy.com/en-US/ticketing/number-sense-high-school-math-interpreting-ceus",
  },
  {
    title: "Number Sense Middle School Math Interpreting",
    ceu: "0.2",
    price: 40,
    languages: ["English"],
    link: "https://www.zeffy.com/en-US/ticketing/number-sense-middle-school-math-interpreting-ceus",
    category: "math",
  },
  {
    title: "General Elementary School Math Interpreting",
    ceu: "0.2",
    price: 40,
    languages: ["English"],
    link: "https://www.zeffy.com/en-US/ticketing/general-elmentary-school-math-interpreting-ceus",
    category: "math",
  },
  {
    title: "General Middle School Math Interpreting",
    ceu: "0.2",
    price: 40,
    languages: ["English"],
    link: "https://www.zeffy.com/en-US/ticketing/general-middle-school-math-interpreting-ceus",
    category: "math",
  },
  {
    title: "AI Hacks",
    ceu: "0.2",
    price: 20,
    languages: ["ASL"],
    link: "https://www.zeffy.com/en-US/ticketing/ai-hacks-ceus",
    category: "tech",
  },
  {
    title: "IEP Immigrant Best Practices",
    ceu: "0.2",
    price: 40,
    languages: ["ASL"],
    link: "https://www.zeffy.com/en-US/ticketing/iep-immigrant-best-practices-ceus",
    category: "immigrants",
  },
  {
    title: "Number Sense Elementary School Math Interpreting",
    ceu: "0.2",
    price: 40,
    languages: ["English"],
    link: "https://www.zeffy.com/en-US/ticketing/number-sense-elementary-school-math-interpreting-ceus",
    category: "math",
  },
  {
    title: "Zoom Tips and Tricks",
    ceu: "0.2",
    price: 40,
    languages: ["ASL"],
    link: "https://www.zeffy.com/en-US/ticketing/zoom-tips-and-tricks-ceus",
    category: "tech",
  },
];

export default function AsyncCEUPage() {
  const [selected, setSelected] = useState("all");

  const filtered =
    selected === "all"
      ? workshops
      : workshops.filter((w) => w.category === selected);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Async Workshops (CEUs)</h1>

      <WorkshopCategories selected={selected} setSelected={setSelected} />

      <div className={styles.grid}>
        {filtered.map((w, i) => (
          <WorkshopCard key={i} workshop={w} />
        ))}
      </div>
    </div>
  );
}
