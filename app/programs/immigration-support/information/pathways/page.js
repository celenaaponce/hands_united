
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FileText,
  HeartHandshake,
  Languages,
  Scale,
  ShieldAlert,
} from "lucide-react";
import styles from "./page.module.css";

const BASE = "/programs/immigration-support/information";

const LEGAL_DIRECTORY =
  "https://www.immigrationadvocates.org/legaldirectory/";

const pathways = [
  {
    id: "family",
    number: "1",
    title: "Family Immigration",
    question: "I have family in the United States.",
    image: "/dictionary/family-petition.png",
    alt: "Family members together, representing family immigration",
    short:
      "Some U.S. citizens and green card holders can ask for certain family members to immigrate.",
    details: [
      {
        heading: "What is family immigration?",
        text:
          "A qualifying family member may file a petition for an eligible relative. A family petition is often one step in a longer immigration process.",
      },
      {
        heading: "Who may qualify?",
        text:
          "Eligibility depends on the petitioner's immigration status, the family relationship, the person's immigration history, and other rules. Not every relative qualifies.",
      },
      {
        heading: "Does a family petition give me legal status?",
        text:
          "No. Filing or approving a family petition does not, by itself, give someone lawful immigration status or permission to work.",
      },
      {
        heading: "What happens next?",
        text:
          "Depending on the case, a person may apply for a green card inside the United States or through a U.S. consulate abroad. Some people must wait for an immigrant visa to become available.",
      },
    ],
    officialLinks: [
      {
        label: "USCIS — Family Immigration",
        url: "https://www.uscis.gov/family",
      },
    ],
    dictionary: ["family-petition", "petition", "green-card"],
  },
  {
    id: "asylum",
    number: "2",
    title: "Asylum and Protection",
    question: "I am afraid to return to my country.",
    image: "/dictionary/asylum.png",
    alt: "A person seeking safety and protection",
    short:
      "Some people may qualify for protection because they fear serious harm if they return home.",
    details: [
      {
        heading: "What is asylum?",
        text:
          "Asylum is a form of protection for some people who have experienced persecution or have a well-founded fear of persecution because of race, religion, nationality, political opinion, or membership in a particular social group.",
      },
      {
        heading: "When should I ask for help?",
        text:
          "Asylum has important deadlines and procedural rules. Many applicants are subject to a one-year filing deadline after arriving in the United States, with exceptions. Seek qualified legal advice promptly.",
      },
      {
        heading: "Are there other protections?",
        text:
          "Withholding of removal and protection under the Convention Against Torture (CAT) are different forms of protection. They have different requirements and do not provide all the same benefits as asylum.",
      },
      {
        heading: "What if I am in immigration court?",
        text:
          "Some people request asylum or other protection as a defense in immigration court. Missing a hearing or deadline can have serious consequences.",
      },
    ],
    officialLinks: [
      {
        label: "USCIS — Asylum",
        url: "https://www.uscis.gov/humanitarian/refugees-and-asylum/asylum",
      },
      {
        label: "EOIR — Immigration Court",
        url: "https://www.justice.gov/eoir",
      },
    ],
    dictionary: ["asylum", "withholding", "cat", "persecution"],
  },
  {
    id: "temporary",
    number: "3",
    title: "Temporary Immigration Options",
    question: "Can I stay in the United States temporarily?",
    image: "/dictionary/tps.png",
    alt: "A person with immigration documents representing temporary protection",
    short:
      "Some immigration programs allow certain people to stay in the United States for a limited time.",
    details: [
      {
        heading: "Temporary Protected Status (TPS)",
        text:
          "TPS may be available to eligible nationals of countries designated by the U.S. government, or certain people without nationality who last habitually resided there. Designations, eligibility dates, and registration periods can change.",
      },
      {
        heading: "Humanitarian Parole",
        text:
          "Parole may allow a person to enter or remain in the United States temporarily for urgent humanitarian reasons or significant public benefit. Parole is not the same as lawful immigration status.",
      },
      {
        heading: "Temporary Visas",
        text:
          "Some visas allow people to travel to the United States temporarily for a particular purpose, such as study, work, or visiting family. Each visa category has different requirements.",
      },
      {
        heading: "Can I work?",
        text:
          "Permission to work depends on the person's immigration category and circumstances. Some people must separately apply for employment authorization.",
      },
    ],
    officialLinks: [
      {
        label: "USCIS — Temporary Protected Status",
        url: "https://www.uscis.gov/humanitarian/temporary-protected-status",
      },
      {
        label: "USCIS — Humanitarian Parole",
        url: "https://www.uscis.gov/humanitarian/humanitarian_parole",
      },
      {
        label: "U.S. Department of State — Visas",
        url: "https://travel.state.gov/content/travel/en/us-visas.html",
      },
    ],
    dictionary: ["tps", "humanitarian-parole", "visa", "work-permit"],
  },
  {
    id: "green-card",
    number: "4",
    title: "Green Card",
    question: "How can I become a permanent resident?",
    image: "/dictionary/green-card.png",
    alt: "An illustrated green card representing permanent residence",
    short:
      "A green card allows someone to live and work permanently in the United States, subject to immigration law.",
    details: [
      {
        heading: "What is a green card?",
        text:
          "A green card is evidence of lawful permanent resident status. Permanent residents can generally live and work in the United States, but they are not U.S. citizens.",
      },
      {
        heading: "How can someone qualify?",
        text:
          "There are different eligibility categories, including certain family relationships, employment categories, humanitarian categories, and other special provisions.",
      },
      {
        heading: "Applying inside the United States",
        text:
          "Adjustment of status is a process that some eligible people can use to apply for permanent residence while physically present in the United States.",
      },
      {
        heading: "Applying outside the United States",
        text:
          "Consular processing is a process in which an eligible person applies for an immigrant visa through a U.S. embassy or consulate abroad.",
      },
      {
        heading: "Can everyone apply?",
        text:
          "No. Eligibility and risks depend on the person's circumstances. Travel or leaving the United States can have serious immigration consequences for some people, so legal advice is important before making those decisions.",
      },
    ],
    officialLinks: [
      {
        label: "USCIS — Green Card",
        url: "https://www.uscis.gov/green-card",
      },
    ],
    dictionary: [
      "green-card",
      "permanent-resident",
      "adjustment-of-status",
    ],
  },
  {
    id: "citizenship",
    number: "5",
    title: "U.S. Citizenship",
    question: "How can I become a U.S. citizen?",
    image: "/dictionary/naturalization.png",
    alt: "A person participating in a naturalization ceremony",
    short:
      "Some permanent residents can apply to become U.S. citizens through naturalization.",
    details: [
      {
        heading: "What is naturalization?",
        text:
          "Naturalization is the process through which an eligible person becomes a U.S. citizen after meeting legal requirements.",
      },
      {
        heading: "Who may qualify?",
        text:
          "Many applicants qualify after at least five years as permanent residents. Some may qualify after three years under specific marriage-based rules, or through other provisions. Additional requirements apply.",
      },
      {
        heading: "What about the English and civics tests?",
        text:
          "Many naturalization applicants must meet English and civics requirements. Some applicants qualify for age-and-residence exceptions or disability-related exceptions.",
      },
      {
        heading: "What if I am Deaf?",
        text:
          "Deaf applicants can request appropriate disability accommodations for the naturalization process. Being Deaf does not automatically waive the English or civics requirements. A disability exception requires meeting separate legal criteria.",
      },
      {
        heading: "Can children become citizens?",
        text:
          "Some children acquire or derive U.S. citizenship through their parents under specific laws. Not every citizenship case requires naturalization.",
      },
    ],
    officialLinks: [
      {
        label: "USCIS — Citizenship and Naturalization",
        url: "https://www.uscis.gov/citizenship",
      },
      {
        label: "USCIS — Disability Accommodations",
        url: "https://www.uscis.gov/accommodations",
      },
    ],
    dictionary: ["naturalization", "citizenship", "us-citizen"],
  },
];

function Picture({ src, alt }) {
  return (
    <div className={styles.picture}>
      <Image
        src={src}
        alt={alt}
        width={360}
        height={360}
        className={styles.pictureImage}
      />
    </div>
  );
}

function Expandable({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.expandable}>
      <button
        type="button"
        className={styles.expandButton}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>{label}</span>
        {open ? (
          <ChevronUp size={20} aria-hidden="true" />
        ) : (
          <ChevronDown size={20} aria-hidden="true" />
        )}
      </button>

      {open && <div className={styles.expandContent}>{children}</div>}
    </div>
  );
}

function PathwayCard({ pathway }) {
  return (
    <article className={styles.pathwayCard} id={pathway.id}>
      <div className={styles.pathwayImage}>
        <Picture src={pathway.image} alt={pathway.alt} />
      </div>

      <div className={styles.pathwayContent}>
        <div className={styles.pathwayHeading}>
          <span className={styles.numberBadge}>{pathway.number}</span>
          <h2>{pathway.title}</h2>
        </div>

        <p className={styles.pathwayQuestion}>{pathway.question}</p>
        <p className={styles.pathwayShort}>{pathway.short}</p>

        <Expandable label="Learn more about this option">
          <div className={styles.detailsList}>
            {pathway.details.map((detail) => (
              <div className={styles.detailItem} key={detail.heading}>
                <h3>{detail.heading}</h3>
                <p>{detail.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.officialResources}>
            <h3>Official Information</h3>

            {pathway.officialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceLink}
              >
                {link.label}
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className={styles.dictionaryLinks}>
            <h3>Words to Learn</h3>

            <Link href={`${BASE}/dictionary`}>
              <BookOpen size={17} aria-hidden="true" />
              Open the Immigration Vocabulary Dictionary
            </Link>
          </div>

          <div className={styles.legalReminder}>
            <Scale size={20} aria-hidden="true" />
            <p>
              A qualified immigration legal professional can help you
              understand whether this option may apply to your situation.
            </p>
          </div>
        </Expandable>
      </div>
    </article>
  );
}

export default function ImmigrationPathwaysPage() {
  return (
    <main className={styles.container}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/programs/immigration-support">
          Immigration Support
        </Link>
        <span aria-hidden="true">›</span>
        <Link href={BASE}>Immigration Information</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Immigration Pathways</span>
      </nav>

      <header className={styles.header}>
        <h1>Immigration Pathways</h1>
        <p className={styles.lead}>What are my options?</p>
        <p>
          There are different ways people may qualify for immigration
          protection or status in the United States.
        </p>
        <p>
          Choose a picture below to learn about each option.
        </p>
      </header>

      {/* <div className={styles.videoPlaceholder}>
        <Languages size={26} aria-hidden="true" />
        <div>
          <strong>ASL Explanation</strong>
          <p>An ASL video will be added here.</p>
        </div>
      </div> */}

      <section className={styles.introSection}>
        <div className={styles.introIcon}>
          <HeartHandshake size={34} aria-hidden="true" />
        </div>
        <div>
          <h2>Every immigration case is different.</h2>
          <p>
            These pictures explain possible immigration pathways.
            They do not tell you which option you qualify for.
          </p>
        </div>
      </section>

      <section className={styles.pathwaysSection}>
        <h2 className={styles.sectionHeading}>Explore Immigration Options</h2>

        <div className={styles.pathwayGrid}>
          {pathways.map((pathway) => (
            <PathwayCard key={pathway.id} pathway={pathway} />
          ))}
        </div>
      </section>

      <section className={styles.importantSection}>
        <ShieldAlert size={34} aria-hidden="true" />
        <div>
          <h2>Important: Immigration Rules Can Change</h2>
          <p>
            Immigration programs have different requirements, deadlines,
            and risks. Some programs may be unavailable or limited at
            certain times.
          </p>
          <p>
            Before applying, check current official information and
            speak with a qualified immigration legal professional.
          </p>
        </div>
      </section>

      <section className={styles.helpSection}>
        <div className={styles.helpHeading}>
          <Scale size={34} aria-hidden="true" />
          <div>
            <h2>Not sure which option applies to you?</h2>
            <p>
              An immigration lawyer or DOJ-accredited representative
              can help explain your options.
            </p>
          </div>
        </div>

        <div className={styles.helpActions}>
          <Link
            href={`${BASE}/legal-help`}
            className={styles.primaryButton}
          >
            Find Immigration Legal Help
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

          <a
            href={LEGAL_DIRECTORY}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            Search Legal Services Directory
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className={styles.nextSteps}>
        <h2>Continue Learning</h2>

        <div className={styles.nextLinks}>
          <Link href={`${BASE}/start`}>
            <CheckCircle2 size={21} aria-hidden="true" />
            Where Do I Start?
          </Link>

          <Link href={`${BASE}/dictionary`}>
            <BookOpen size={21} aria-hidden="true" />
            Immigration Vocabulary
          </Link>

          <Link href={`${BASE}/documents`}>
            <FileText size={21} aria-hidden="true" />
            Understanding Immigration Letters
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          <strong>Educational information only.</strong> This page
          provides general immigration information. It does not
          provide individualized legal advice or determine eligibility
          for immigration benefits.
        </p>

        <Link href={BASE}>
          <ArrowLeft size={17} aria-hidden="true" />
          Back to Immigration Information
        </Link>
      </footer>
    </main>
  );
}
