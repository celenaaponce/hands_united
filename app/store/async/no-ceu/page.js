"use client";

import styles from "./page.module.css";
import WorkshopCard from "../../../../components/WorkshopCard/WorkshopCard";

import { useState } from "react";
import WorkshopCategories from "../../../../components/WorkshopCategories/WorkshopCategories";

const workshops = [
  {
    title: "General High School Math Interpreting",
    price: 20,
    languages: ["English"],
    category: "math",
    link: "https://www.zeffy.com/en-US/ticketing/general-high-school-math-interpreting-no-ceus",
  },
  {
    title: "Honoring Faith and Language",
    price: 20,
    languages: ["ASL", "English"],
    category: "immigrants",
    link: "https://www.zeffy.com/en-US/ticketing/honoring-faith-and-language-no-ceus",
  },
  {
    title: "Immigrant Best Practices",
    price: 20,
    languages: ["ASL"],
    category: "immigrants",
    link: "https://www.zeffy.com/en-US/ticketing/immigrant-best-practices-no-ceus",
  },
  {
    title: "Supporting Hmong Children with Autism and Deafness",
    price: 15,
    languages: ["ASL", "Hmong", "English", "Spanish"],
    category: "immigrants",
    link: "https://www.zeffy.com/en-US/ticketing/supporting-hmong-children-with-autism-and-deafness-2",
  },
  {
    title: "Number Sense High School Math Interpreting",
    price: 15,
    languages: ["English"],
    category: "math",
    link: "https://www.zeffy.com/en-US/ticketing/number-sense-high-school-math-interpreting-no-ceus",
  },
  {
    title: "Number Sense Middle School Math Interpreting",
    price: 20,
    languages: ["English"],
    link: "http://zeffy.com/en-US/ticketing/number-sense-middle-school-math-interpreting-no-ceus",
    category: "math",
  },
  {
    title: "General Elementary School Math Interpreting",
    price: 20,
    languages: ["English"],
    link: "https://www.zeffy.com/en-US/ticketing/general-elementary-school-math-interpreting-no-ceus",
    category: "math",
  },
  {
    title: "General Middle School Math Interpreting",
    price: 20,
    languages: ["English"],
    link: "http://zeffy.com/en-US/ticketing/general-middle-school-math-interpreting-no-ceus",
    category: "math",
  },
  {
    title: "AI Hacks",
    price: 5,
    languages: ["ASL"],
    link: "https://www.zeffy.com/en-US/ticketing/ai-hacks-no-ceus",
    category: "tech",
  },
  {
    title: "IEP Immigrant Best Practices",
    price: 20,
    languages: ["ASL"],
    link: "https://www.zeffy.com/en-US/ticketing/iep-immigrant-best-practices-no-ceus",
    category: "immigrants",
  },
  {
    title: "Number Sense Elementary School Math Interpreting",
    price: 20,
    languages: ["English"],
    link: "https://www.zeffy.com/en-US/ticketing/number-sense-elementary-school-math-interpreting-no-ceus",
    category: "math",
  },
  {
    title: "Zoom Tips and Tricks",
    price: 20,
    languages: ["ASL"],
    link: "https://www.zeffy.com/en-US/ticketing/zoom-tips-and-tricks-no-ceus-2",
    category: "tech",
  },
    {
    title: "AI Voiceover",
    price: 10,
    languages: ["English"],
    link: "https://www.zeffy.com/en-US/ticketing/ai-voiceover-no-ceus",
    category: "tech",
  },
    {
    title: "AI Voiceover and Image Embedding",
    price: 10,
    languages: ["ASL"],
    link: "https://www.zeffy.com/en-US/ticketing/ai-voiceover-image-embedding-no-ceus",
    category: "tech",
  },
];

export default function AsyncNoCEUPage() {
  const [selected, setSelected] = useState("all");

  const filtered =
    selected === "all"
      ? workshops
      : workshops.filter((w) => w.category === selected);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Async Workshops (no CEUs)</h1>

      <WorkshopCategories selected={selected} setSelected={setSelected} />

      <div className={styles.grid}>
        {filtered.map((w, i) => (
          <WorkshopCard key={i} workshop={w} />
        ))}
      </div>
    </div>
  );
}
