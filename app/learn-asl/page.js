"use client";

import Link from "next/link";
import classes from "./page.module.css";
import RandomFlag from "../../components/RandomFlag.js";

const languages = [
  {
    name: "Burmese",
    native: "မြန်မာဘာသာ",
    href: "/learn-asl/burmese",
    flag: "🇲🇲",
  },
  {
    name: "Chuukese",
    native: "Chuuk",
    href: "/learn-asl/chuukese",
    flag: "🇫🇲",
  },
  {
    name: "Haitian Creole",
    native: "Kreyòl Ayisyen",
    href: "/learn-asl/haitian-creole",
    flag: "🇭🇹",
  },
  {
    name: "Russian",
    native: "Русский язык",
    href: "/learn-asl/russian",
    flag: "🇷🇺",
  },
  {
    name: "Spanish",
    native: "Español",
    href: "https://manosunidasor.org/",
    external: true,
    langCode: "es", // used for RandomFlag
  },
  {
    name: "Tigrinya & Amharic",
    native: "ትግርኛ · አማርኛ",
    href: "/learn-asl/tigrinya-amharic",
    flag: "🇪🇹 🇪🇷",
  },
];

export default function LearnASLPage() {
  return (
    <main className={classes.main}>
      <section className={classes.headerBlock}>
        <h1 className={classes.title}>Learn ASL</h1>

        <p className={classes.subtitle}>
          Select your primary language to access American Sign Language classes,
          resources, and family-centered materials.
        </p>
      </section>

      {/* FEATURED DICTIONARY CARD */}
      <section className={classes.featured}>
        <Link
          href="/learn-asl/dictionary"
          className={`${classes.card} ${classes.featuredCard}`}
        >
          <h2 className={classes.cardTitle}>Search All Dictionaries 🌎</h2>
          <p className={classes.native}>
            Search across all available languages
          </p>
          <p className={classes.cta}>Open dictionary search →</p>
        </Link>
      </section>

      {/* LANGUAGE CARDS */}
      <section className={classes.cardGrid}>
        {languages.map((lang) => {
          const CardContent = (
            <>
              <h2 className={classes.cardTitle}>
                {lang.name}{" "}
                {lang.langCode === "es" ? (
                  <RandomFlag lang="es" />
                ) : (
                  lang.flag
                )}
              </h2>

              <p className={classes.native}>{lang.native}</p>
              <p className={classes.cta}>View resources →</p>
            </>
          );

          return lang.external ? (
            <a
              key={lang.name}
              href={lang.href}
              className={classes.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CardContent}
            </a>
          ) : (
            <Link key={lang.name} href={lang.href} className={classes.card}>
              {CardContent}
            </Link>
          );
        })}
      </section>
    </main>
  );
}