import Link from "next/link";
import classes from "./page.module.css";

const aboutPages = [
  {
    title: "Our Mission",
    description:
      "Learn why Hands United exists and how we work to reduce language deprivation and improve access for Deaf and hard-of-hearing families.",
    href: "/about/our-mission",
  },
  {
    title: "Our Impact",
    description:
      "See the reach of our programs, families served, languages supported, and the real-world outcomes of our work.",
    href: "/about/our-impact",
  },
  {
    title: "Our Team",
    description:
      "Meet the people behind Hands United — Deaf leaders, educators, interpreters, and advocates committed to access and equity.",
    href: "/about/our-team",
  },
  {
    title: "Partners",
    description:
      "Explore the organizations and community partners we collaborate with across the U.S. and internationally.",
    href: "/outreach/partners",
  },
];

export default function AboutPage() {
  return (
    <main className={classes.main}>
      <section className={classes.headerBlock}>
        <h1 className={classes.title}>About Hands United</h1>

        <p className={classes.subtitle}>
          Learn more about who we are, what we do, and how our work supports
          Deaf and hard-of-hearing individuals and immigrant families.
        </p>
      </section>

      <section className={classes.cardGrid}>
        {aboutPages.map((page) => (
          <Link key={page.title} href={page.href} className={classes.card}>
            <h2 className={classes.cardTitle}>{page.title}</h2>
            <p className={classes.description}>{page.description}</p>
            <p className={classes.cta}>Learn more →</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
