"use client";

import styles from "./page.module.css";
import WorkshopCard from "../../../../components/WorkshopCard/WorkshopCard";
import Link from "next/link";

import { useState } from "react";
import WorkshopCategories from "../../../../components/WorkshopCategories/WorkshopCategories";

const workshops = [
  {
    title: "Mexican Sign Language Course",
    ceu: 0.425,
    price: 40,
    languages: ["English", "Spanish"],
    category: "latin-america",
    link: "https://www.zeffy.com/en-US/ticketing/mexican-sign-language-course",
    image: "/IUclasses/LSM.png"
  },
    {
    title: "Mexican Sign Language Course",
    ceu: "###",
    price: 40,
    languages: ["English", "Spanish"],
    category: "latin-america",
    link: "https://www.zeffy.com/en-US/ticketing/mexican-sign-language-course",
    image: "/IUclasses/LSM.png"
  },
    {
    title: "Mexican Sign Language Course",
    ceu: "###",
    price: 40,
    languages: ["English", "Spanish"],
    category: "latin-america",
    link: "https://www.zeffy.com/en-US/ticketing/mexican-sign-language-course",
    image: "/IUclasses/LSM.png"
  },
];

export default function AsyncIntersign() {
  const [selected, setSelected] = useState("all");

  const filtered =
    selected === "all"
      ? workshops
      : workshops.filter((w) => w.category === selected);

  return (
    <div className={styles.container}>
              <Link href="/store#async" className={styles.backLink}>
        ← Back to Store Page
      </Link>
      <h1 className={styles.title}>Intersign University Async Workshops (CEUs)</h1>

      <WorkshopCategories selected={selected} setSelected={setSelected} type="intersign" />

      <div className={styles.grid}>
        {filtered.map((w, i) => (
          <WorkshopCard key={i} workshop={w} />
        ))}
      </div>
    </div>
  );
}
