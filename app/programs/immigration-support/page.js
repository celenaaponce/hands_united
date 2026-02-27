"use client";

import Link from "next/link";
import styles from "./page.module.css";

const sections = [
  {
    title: "Information",
    description:
      "General immigration guidance, rights, and resources for Deaf and hard of hearing individuals.",
    href: "/programs/immigration-support/information",
    icon: "📘",
  },
  {
    title: "Social Stories",
    description:
      "Visual stories to help families prepare for possible ICE situations.",
    href: "/programs/immigration-support/social-stories",
    icon: "📖",
  },
  {
    title: "Know Your Rights",
    description:
      "Printable Know Your Rights cards and accessible materials.",
    href: "/programs/immigration-support/know-your-rights",
    icon: "🪪",
  },
  {
    title: "Digital Rights Card",
    description:
      "Interactive digital Know Your Rights card. Select your sign language and watch the video in your language.",
    href: "/programs/immigration-support/digital-kyr",
    icon: "📱",
  },
  {
    title: "Workshops",
    description:
      "Recorded immigration workshops in ASL and international sign languages.",
    href: "/programs/immigration-support/workshops",
    icon: "🎥",
  },
];


export default function ImmigrationPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Immigration Resources</h1>
      <p className={styles.subtitle}>
        Accessible immigration resources designed for Deaf and hard of hearing individuals and families.
      </p>

      <div className={styles.grid}>
        {sections.map((section, index) => (
          <Link key={index} href={section.href} className={styles.card}>
            
            <div className={styles.emojiBlock}>
              <span className={styles.emoji}>{section.icon}</span>
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