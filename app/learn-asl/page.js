import Link from "next/link";
import classes from "./page.module.css";

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
    flag: "🌎",
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
      <h1 className={classes.title}>Learn ASL</h1>

      <p className={classes.subtitle}>
        Select your primary language to access American Sign Language classes,
        resources, and family-centered materials.
      </p>

      <section className={classes.cardGrid}>
        {languages.map((lang) => {
          const CardContent = (
            <>
              <h2 className={classes.cardTitle}>
                {lang.name} {lang.flag}
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
