
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const BASE = "/programs/immigration-support";
const INFO = `${BASE}/information`;

const situations = [
  {
    id: "letter",
    image: "/commboard/start-letter.png",
    title: "I received a letter",
    description:
      "I received an immigration document and need help understanding it.",
    heading: "Understanding Your Immigration Letter",
    introduction:
      "Immigration letters can come from different government agencies. The first step is to identify who sent the letter and what it says.",
    steps: [
      "Find the name of the agency that sent the letter.",
      "Look for important dates, appointments, or deadlines.",
      "Find any case number or receipt number on the letter.",
      "Keep the original letter and its envelope.",
      "If you do not understand the letter, ask for help from a qualified professional.",
    ],
    links: [
      {
        label: "See Sample Immigration Documents",
        href: "https://asaptogether.org/en/sample-documents/",
        external: true,
      },
      {
        label: "Understanding Immigration Letters",
        href: `${INFO}/documents`,
        available: true,
      },
    ],
    warning:
      "Some immigration letters require a response by a specific deadline. Do not ignore a letter because you do not understand it.",
  },
  {
    id: "court",
    image: "/commboard/start-court.png",
    title: "I have a court date",
    description:
      "I need information about my immigration court hearing.",
    heading: "Understanding Your Immigration Court Date",
    introduction:
      "Immigration court is different from USCIS. If you have an immigration court case, you may be able to check your hearing information online.",
    steps: [
      "Find your A-number on your immigration documents.",
      "Check your case information using the EOIR website.",
      "Read your official hearing notice for the date, time, and location.",
      "Contact the immigration court about your interpreter or communication needs.",
      "If possible, speak with an immigration attorney or authorized representative before your hearing.",
    ],
    links: [
      {
        label: "Check Immigration Court Case Information",
        href: "https://acis.eoir.justice.gov/en/",
        external: true,
      },
      {
        label: "Find Immigration Legal Help",
        href: "https://www.immigrationadvocates.org/legaldirectory/",
        external: true,
      },
    ],
    warning:
      "Do not miss a scheduled immigration court hearing. Online case information may be incomplete. Follow official court notices and seek legal help promptly if information conflicts.",
  },
  {
    id: "lawyer",
    image: "/commboard/start-lawyer.png",
    title: "I need a lawyer",
    description: "I want help with my immigration case.",
    heading: "Finding Immigration Legal Help",
    introduction:
      "Immigration attorneys and authorized representatives can help you understand your legal options, prepare applications, and respond to immigration problems.",
    steps: [
      "Identify what kind of immigration help you need.",
      "Look for a licensed immigration attorney or DOJ-accredited representative.",
      "Ask whether the provider offers free or low-cost services.",
      "Ask about interpreter access before your appointment.",
      "Verify the person's credentials before paying for services.",
    ],
    links: [
      {
        label: "Find an Immigration Lawyer — AILA",
        href: "https://www.ailalawyer.com/",
        external: true,
      },
      {
        label: "DOJ — Find Legal Representation",
        href: "https://www.immigrationadvocates.org/legaldirectory/",
        external: true,
      },
    ],
    warning:
      "Notarios, immigration consultants, and document preparers are not automatically authorized to provide immigration legal advice.",
  },
  {
    id: "apply",
    image: "/commboard/start-apply.png",
    title: "I want to apply",
    description: "I want to understand my immigration options.",
    heading: "Learning About Immigration Options",
    introduction:
      "There are different immigration processes. Which ones may be available depends on a person's individual circumstances.",
    steps: [
      "Learn about common immigration pathways.",
      "Identify the type of application or process you want to understand.",
      "Gather documents you already have, including immigration notices.",
      "Review official information about requirements, fees, and deadlines.",
      "Speak with an authorized immigration legal professional before making decisions about eligibility or filing.",
    ],
    links: [
      {
        label: "Explore USCIS Immigration Information",
        href: "https://www.uscis.gov/",
        external: true,
      },
      {
        label: "Find Immigration Legal Help",
        href: "https://www.immigrationadvocates.org/legaldirectory/",
        external: true,
      },
    //   {
    //     label: "Immigration Pathway Checklists",
    //     href: `${INFO}/pathways`,
    //     available: false,
    //   },
    ],
    warning:
      "Not every immigration pathway is available to every person. Filing the wrong application or missing a deadline can have serious consequences.",
  },
  {
    id: "status",
    image: "/commboard/start-case.png",
    title: "I want to check my case",
    description: "I already applied or have an immigration case.",
    heading: "Checking Your Immigration Case",
    introduction:
      "The website you use depends on which government agency is handling your case.",
    steps: [
      "Find your receipt number or A-number.",
      "If your application is with USCIS, use the USCIS case status website.",
      "If your case is in immigration court, use the EOIR case information website.",
      "Read any official notices you received.",
      "If you moved, check whether you need to update your address with USCIS, EOIR, or both.",
    ],
    links: [
      {
        label: "USCIS — Check Case Status",
        href: "https://egov.uscis.gov/",
        external: true,
      },
      {
        label: "EOIR — Check Court Case",
        href: "https://acis.eoir.justice.gov/en/",
        external: true,
      },
      {
        label: "USCIS — Change Your Address",
        href: "https://www.uscis.gov/addresschange",
        external: true,
      },
    ],
    warning:
      "A USCIS receipt number and an A-number are different. Some people have both. Case status websites do not replace official notices.",
  },
  {
    id: "detained",
    image: "/commboard/detained.png",
    title: "Someone is detained",
    description:
      "I am looking for someone in immigration custody.",
    heading: "Finding Someone in Immigration Detention",
    introduction:
      "If someone has been detained by immigration authorities, you may be able to locate them using the ICE Online Detainee Locator System.",
    steps: [
      "Gather the person's full name and other identifying information if available.",
      "If you have their A-number, keep it available.",
      "Search the ICE detainee locator.",
      "If the person does not appear, consider contacting an immigration attorney or trusted legal organization.",
      "Tell the legal provider if the detained person is Deaf and needs communication accommodations.",
    ],
    links: [
      {
        label: "ICE Online Detainee Locator",
        href: "https://locator.ice.gov/odls/",
        external: true,
      },
      {
        label: "Find Immigration Legal Help",
        href: "https://www.immigrationadvocates.org/legaldirectory/",
        external: true,
      },
    ],
    warning:
      "Not everyone appears in the online locator. A missing result does not necessarily mean the person is not detained. The system does not provide records for children under 18.",
  },
  {
    id: "unsure",
    image: "/commboard/start-idk.png",
    title: "I don't know where to start",
    description:
      "I have an immigration question, but I am not sure what I need.",
    heading: "Let's Find a Starting Point",
    introduction:
      "You do not need to know immigration words or understand government agencies to begin looking for information.",
    steps: [
      "If you received a letter, start by identifying the agency that sent it.",
      "If you have a court date or appointment, check the date and location.",
      "If you already applied for something, look for a receipt number or A-number.",
      "If you want to understand possible immigration options, start with basic immigration education.",
      "If you need individual legal advice, find an authorized immigration legal professional.",
    ],
    links: [
      {
        label: "Immigration Workshops",
        href: `${BASE}/workshops`,
      },
      {
        label: "Sample Immigration Documents",
        href: "https://asaptogether.org/en/sample-documents/",
        external: true,
      },
      {
        label: "Contact Hands United",
        href: "/contact",
      },
    ],
    warning:
      "If you have a hearing, appointment, response deadline, or an urgent detention situation, do not wait to seek appropriate assistance.",
  },
];

function ResourceLink({ resource }) {
  if (resource.available === false) {
    return (
      <div className={styles.unavailableLink}>
        <span>{resource.label}</span>
        <span className={styles.comingSoon}>Coming Soon</span>
      </div>
    );
  }

  if (resource.external) {
    return (
      <a
        href={resource.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resourceLink}
      >
        <span>{resource.label}</span>
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link href={resource.href} className={styles.resourceLink}>
      <span>{resource.label}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export default function WhereDoIStartPage() {
  const [selectedId, setSelectedId] = useState(null);
  const detailsRef = useRef(null);

  const selected = situations.find(
    (situation) => situation.id === selectedId
  );

  function chooseSituation(id) {
    if (selectedId === id) {
      setSelectedId(null);
      return;
    }

    setSelectedId(id);

    // Move keyboard focus to the details heading after React
    // renders the newly selected content.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        detailsRef.current?.focus();
      });
    });
  }

  return (
    <main className={styles.container}>
      {/* BREADCRUMBS */}

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href={BASE}>Immigration Resources</Link>
        <span aria-hidden="true">›</span>
        <Link href={INFO}>Information</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Where Do I Start?</span>
      </nav>

      {/* PAGE INTRODUCTION */}

      <header className={styles.intro}>
        <h1 className={styles.title}>Where Do I Start?</h1>

        <p className={styles.subtitle}>
          Do you need help with immigration?
        </p>

        <p className={styles.description}>
          Choose what you need below. We will show you information,
          resources, and possible next steps.
        </p>

        <p className={styles.description}>
          You do not need to know immigration laws or government
          agency names to get started.
        </p>
      </header>

      {/* SITUATION CARDS */}

      <section
        className={styles.selectionSection}
        aria-labelledby="choose-heading"
      >
        <h2 id="choose-heading" className={styles.sectionTitle}>
          What do you need help with?
        </h2>

        <p className={styles.sectionDescription}>
          Select one option to see more information.
          You can choose another option at any time.
        </p>

        <div className={styles.grid}>
          {situations.map((situation) => {
            const isSelected = selectedId === situation.id;

            return (
              <button
                key={situation.id}
                type="button"
                className={`${styles.situationCard} ${
                  isSelected ? styles.selectedCard : ""
                }`}
                onClick={() => chooseSituation(situation.id)}
                aria-expanded={isSelected}
                aria-controls={
                  isSelected ? "situation-details" : undefined
                }
              >
                {/* CUSTOM ILLUSTRATION */}

                <span className={styles.imageBlock}>
                  <Image
                    src={situation.image}
                    alt=""
                    width={220}
                    height={220}
                    className={styles.cardImage}
                    sizes="(max-width: 768px) 180px, 220px"
                  />
                </span>

                <span className={styles.cardTitle}>
                  {situation.title}
                </span>

                <span className={styles.cardDescription}>
                  {situation.description}
                </span>

                <span className={styles.cardAction}>
                  {isSelected ? "Selected ✓" : "Choose →"}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* SELECTED SITUATION DETAILS */}

      {selected && (
        <section
          id="situation-details"
          className={styles.detailsSection}
          aria-labelledby="details-heading"
          key={selected.id}
        >
          <div className={styles.detailsHeader}>
            <div className={styles.detailsHeadingGroup}>
              <Image
                src={selected.image}
                alt=""
                width={90}
                height={90}
                className={styles.detailsImage}
              />

              <h2
                id="details-heading"
                ref={detailsRef}
                tabIndex={-1}
              >
                {selected.heading}
              </h2>
            </div>

            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setSelectedId(null)}
              aria-label="Close information"
            >
              ✕
            </button>
          </div>

          <p className={styles.detailsIntroduction}>
            {selected.introduction}
          </p>

          <h3 className={styles.subheading}>
            What can I do next?
          </h3>

          <ol className={styles.stepsList}>
            {selected.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <h3 className={styles.subheading}>
            Helpful Resources
          </h3>

          <div className={styles.linksList}>
            {selected.links.map((resource) => (
              <ResourceLink
                key={resource.href}
                resource={resource}
              />
            ))}
          </div>

          {selected.warning && (
            <aside className={styles.warning}>
              <strong>Important</strong>
              <p>{selected.warning}</p>
            </aside>
          )}

          <button
            type="button"
            className={styles.backButton}
            onClick={() => setSelectedId(null)}
          >
            ← Choose Another Topic
          </button>
        </section>
      )}

      {/* KNOW YOUR RIGHTS */}

      <section className={styles.rightsSection}>
        <div className={styles.rightsIcon} aria-hidden="true">
          🛡️
        </div>

        <div>
          <h2>Know Your Rights</h2>

          <p>
            Learn about your rights during encounters with
            immigration officers and law enforcement.
          </p>

          <Link
            href={`${BASE}/know-your-rights`}
            className={styles.rightsLink}
          >
            Explore Know Your Rights Resources →
          </Link>
        </div>
      </section>

      {/* COMMUNICATION SUPPORT */}

      <section className={styles.accessSection}>
        <h2>Need Communication Support?</h2>

        <p>
          I am Deaf. I need an interpreter. I use a different
          sign language. I do not understand this document.
        </p>

        <p>
          Hands United provides visual resources to help
          Deaf individuals communicate their needs.
        </p>

        <Link
          href={`${BASE}/communication-board`}
          className={styles.accessLink}
        >
          Open Communication Board →
        </Link>
      </section>

      {/* CONTACT */}

      <section className={styles.helpSection}>
        <h2>Still Need Help?</h2>

        <p>
          Hands United provides accessible immigration
          education and navigation support for Deaf
          immigrants and their families.
        </p>

        <Link href="/contact" className={styles.helpButton}>
          Contact Hands United
        </Link>
      </section>

      {/* DISCLAIMER */}

      <footer className={styles.disclaimer}>
        <p>
          <strong>Important:</strong> This page provides general
          immigration information, not individual legal advice.
          Immigration rules, procedures, and deadlines can change.
          For advice about your specific situation, contact a
          licensed immigration attorney or an authorized
          DOJ-accredited representative.
        </p>
      </footer>
    </main>
  );
}
