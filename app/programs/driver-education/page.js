"use client";

import Link from "next/link";
import styles from "./page.module.css";

const sections = [
  {
    title: "Information",
    description:
      "Overview of the Deaf-friendly driver's education program, requirements, and structure.",
    href: "/programs/driver-education/information",
    icon: "🚗",
  },
  {
    title: "Communication Card",
    description:
      "Digital communication board to use during traffic stops or driving instruction.",
    href: "/programs/driver-education/communication-board",
    icon: "/icons/commboard.svg",
  },
  {
    title: "Register for Classes",
    description: "Sign up for upcoming ASL-based permit classes.",
    href: "/programs/driver-education/register",
    icon: "📝",
  },
];

export default function DriversEducationPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Driver's Education</h1>
      <p className={styles.subtitle}>
        Accessible, ASL-based driver education designed for Deaf and hard of
        hearing students.
      </p>

      <div className={styles.grid}>
        {sections.map((section, index) => (
          <Link key={index} href={section.href} className={styles.card}>
            <div className={styles.emojiBlock}>
              {section.icon.endsWith(".svg") ? (
                <img src={section.icon} className={styles.svgIcon} />
              ) : (
                <span className={styles.emoji}>{section.icon}</span>
              )}
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>{section.title}</div>
              <div className={styles.cardDescription}>
                {section.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
