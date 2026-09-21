"use client";

import styles from "./page.module.css";
import WorkshopCard from "../../../../components/WorkshopCard/WorkshopCard";
import Link from "next/link";

import { useState } from "react";
import WorkshopCategories from "../../../../components/WorkshopCategories/WorkshopCategories";

const workshops = [
  {
    title: "Sign Languages Around the World: A Global Learning Series",
    ceu: "1.4",
    price: 100,
    languages: ["ASL"],
    category: "language",
    image: "/async/around-the-world.png",
    link: "https://www.zeffy.com/en-US/ticketing/async-around-the-world-part--1",
  },
{
  title: "Bridging Language & Culture: Supporting Immigrant Families with DHH Children",
  ceu: "0.2",
  price: 40,
  languages: ["ASL"],
  category: "immigrants",
  image: "/async/ImmigrantFamilies.png",
  link: "https://www.zeffy.com/en-US/ticketing/immigrant-best-practices-ceus",
},
  {
    title: "Honoring Faith & Language: Working with Deaf Muslim Communities",
    ceu: "0.2",
    price: 40,
    languages: ["ASL", "English"],
    category: "immigrants",
    image: "/async/honoring-faith-language.png",
    link: "https://www.zeffy.com/en-US/ticketing/honoring-faith-and-language-ceus",
  },
  {
    title: "Interpreting IEPs with Deaf Immigrant Families",
    ceu: "0.2",
    price: 40,
    languages: ["ASL"],
    category: "immigrants",
    image: "/async/iep-immigrant-best-practices.png",
    link: "https://www.zeffy.com/en-US/ticketing/iep-immigrant-best-practices-ceus",
  },
{
  title: "Work Smarter with AI: Tools for Deaf & Hard of Hearing Professionals",
  ceu: "0.2",
  price: 20,
  languages: ["ASL"],
  category: "tech",
  image: "/async/ai-hacks.png",
  link: "https://www.zeffy.com/en-US/ticketing/ai-hacks-ceus",
},
  {
    title: "Supporting Hmong Deaf & Autistic Children and Their Families",
    ceu: "0.15",
    price: 20,
    languages: ["ASL", "Hmong", "English", "Spanish"],
    category: "immigrants",
    image: "/async/hmong-autism-deafness.png",
    link: "https://www.zeffy.com/en-US/ticketing/supporting-hmong-children-with-autism-and-deafness-ceus",
  },
  {
    title: "High School Math Interpreting: Concepts, Strategies & Practice",
    ceu: "0.2",
    price: 40,
    languages: ["English"],
    category: "math",
    image: "/async/general-high-school-math.png",
    link: "https://www.zeffy.com/en-US/ticketing/general-high-school-math-interpreting-ceus",
  },
  {
    title: "Mastering Zoom for Interpreters: Tips, Tools & Best Practices",
    ceu: "0.2",
    price: 40,
    languages: ["ASL"],
    category: "tech",
    image: "/async/zoom-tips-tricks.png",
    link: "https://www.zeffy.com/en-US/ticketing/zoom-tips-and-tricks-ceus",
  },
  {
    title: "Elementary Math Interpreting: Concepts, Strategies & Practice",
    ceu: "0.2",
    price: 40,
    languages: ["English"],
    category: "math",
    image: "/async/general-elementary-math.png",
    link: "https://www.zeffy.com/en-US/ticketing/general-elmentary-school-math-interpreting-ceus",
  },
  {
    title: "Middle School Math Interpreting: Concepts, Strategies & Practice",
    ceu: "0.2",
    price: 40,
    languages: ["English"],
    category: "math",
    image: "/async/general-middle-school-math.png",
    link: "https://www.zeffy.com/en-US/ticketing/general-middle-school-math-interpreting-ceus",
  },
  {
    title: "High School Number Sense: Math Interpreting Series",
    ceu: "0.1",
    price: 30,
    languages: ["English"],
    category: "math",
    image: "/async/number-sense-high-school.png",
    link: "https://www.zeffy.com/en-US/ticketing/number-sense-high-school-math-interpreting-ceus",
  },
  {
    title: "Elementary Number Sense: Math Interpreting Series",
    ceu: "0.2",
    price: 40,
    languages: ["English"],
    category: "math",
    image: "/async/number-sense-elementary-school.png",
    link: "https://www.zeffy.com/en-US/ticketing/number-sense-elementary-school-math-interpreting-ceus",
  },
  {
    title: "Middle School Number Sense: Math Interpreting Series",
    ceu: "0.2",
    price: 40,
    languages: ["English"],
    category: "math",
    image: "/async/number-sense-middle-school.png",
    link: "https://www.zeffy.com/en-US/ticketing/number-sense-middle-school-math-interpreting-ceus",
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
              <Link href="/store#async" className={styles.backLink}>
        ← Back to Store Page
      </Link>
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