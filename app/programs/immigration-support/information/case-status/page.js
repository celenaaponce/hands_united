"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const BASE = "/programs/immigration-support";
const INFO = `${BASE}/information`;

const options = [
  {
    id: "uscis",
    image: "/letters/uscis.jpeg",
    title: "USCIS",
    subtitle: "Check an immigration application",
    description:
      "Check the status of an application, petition, or request submitted to USCIS.",
    examples: [
      "Work permit (Form I-765)",
      "Green card application (Form I-485)",
      "Asylum application (Form I-589), when tracked by USCIS",
      "Family petition (Form I-130)",
      "Other USCIS applications",
    ],
    numberTitle: "You Usually Need a Receipt Number",
    numberDescription:
      "Your USCIS receipt number is usually printed near the top of a receipt notice or other USCIS correspondence.",
    numberExample: "Example: IOE1234567890",
    numberHelp: [
      "Look for the words Receipt Number.",
      "A USCIS receipt number usually contains 3 letters followed by 10 numbers.",
      "Common prefixes include IOE, EAC, WAC, LIN, SRC, and MSC.",
      "Enter the number without dashes when checking your case.",
    ],
    steps: [
      "Find your USCIS receipt number.",
      "Open the official USCIS Case Status Online website.",
      "Enter your receipt number.",
      "Select Check Status.",
      "Read the result carefully and follow any instructions in your actual notices.",
    ],
    results: [
      {
        title: "Case Was Received",
        description:
          "USCIS received your application. This does not mean it has been approved.",
      },
      {
        title: "Case Is Being Actively Reviewed",
        description:
          "USCIS is reviewing your case. This does not necessarily mean a decision will be made soon.",
      },
      {
        title: "Request for Evidence Was Sent",
        description:
          "USCIS is requesting additional information or documents. Check the notice for the response deadline.",
      },
      {
        title: "Case Was Approved",
        description:
          "USCIS approved the particular application or petition. What this means for your immigration status depends on the type of case.",
      },
      {
        title: "Case Was Denied",
        description:
          "USCIS denied the application or petition. Read the decision notice for the reasons and any available options or deadlines.",
      },
    ],
    warnings: [
      "Online case status may not show every update.",
      "Some USCIS case types may have different tracking procedures.",
      "Keep all letters and notices from USCIS.",
      "Do not miss appointments or deadlines while waiting for an online update.",
      "USCIS case status does not replace immigration court case information.",
    ],
    links: [
      {
        label: "Check USCIS Case Status",
        href: "https://egov.uscis.gov/",
        primary: true,
      },
      {
        label: "USCIS Official Website",
        href: "https://www.uscis.gov/",
      },
    ],
  },
  {
    id: "eoir",
    image: "/letters/eoir-logo.jpeg",
    title: "Immigration Court",
    subtitle: "Check a court case or hearing",
    description:
      "Find available information about an immigration court case handled by the Executive Office for Immigration Review (EOIR).",
    examples: [
      "Immigration court hearing dates",
      "Immigration court hearing locations",
      "Some immigration judge decisions",
      "Some immigration appeal information",
    ],
    numberTitle: "You Usually Need Your A-Number",
    numberDescription:
      "Your A-number, also called an Alien Registration Number, is an identification number used in immigration records.",
    numberExample: "Example: A123456789",
    numberHelp: [
      "Look for A-Number, A#, or Alien Registration Number.",
      "It may appear on your Notice to Appear (Form I-862), hearing notice, or other immigration documents.",
      "An A-number generally has 7, 8, or 9 digits, sometimes preceded by the letter A.",
      "Follow the instructions on the official EOIR website when entering the number.",
    ],
    steps: [
      "Find the A-number on your immigration documents.",
      "Open the EOIR Automated Case Information website.",
      "Enter your A-number as instructed.",
      "Review the available hearing and case information.",
      "If information is missing, unclear, or different from your notice, contact the immigration court or your legal representative.",
    ],
    results: [
      {
        title: "Next Hearing Information",
        description:
          "The system may show your next scheduled hearing date, time, and court location.",
      },
      {
        title: "Court Decision",
        description:
          "The system may show information about a decision. You should obtain and read the actual written or oral decision information.",
      },
      {
        title: "No Case Information Found",
        description:
          "This does not necessarily mean that you have no immigration case or no obligation to attend court.",
      },
      {
        title: "Information Has Changed",
        description:
          "Court hearings can be rescheduled or moved. Confirm any changes with the court and review official notices.",
      },
    ],
    warnings: [
      "The EOIR online system is not a substitute for official hearing notices.",
      "Not all immigration proceedings or case updates appear in the system.",
      "Missing a required immigration court hearing can have serious consequences.",
      "Keep your address updated with the immigration court when required.",
      "Contact the court if you need sign language interpretation or other communication accommodations.",
    ],
    links: [
      {
        label: "Check Immigration Court Case",
        href: "https://acis.eoir.justice.gov/en/",
        primary: true,
      },
      {
        label: "EOIR Official Website",
        href: "https://www.justice.gov/eoir",
      },
    ],
  },
  {
    id: "ice",
    image: "/letters/ice-logo.jpeg",
    title: "ICE Detention",
    subtitle: "Find someone in immigration detention",
    description:
      "Use the ICE Online Detainee Locator System to search for someone who may be in ICE custody.",
    examples: [
      "A family member who may be detained",
      "A friend who may be in ICE custody",
      "Someone whose detention location is unknown",
    ],
    numberTitle: "Information You May Need",
    numberDescription:
      "The ICE locator offers different ways to search for a person. The required information depends on the search method.",
    numberExample: "Example A-number: A123456789",
    numberHelp: [
      "One search method uses an A-number and country of birth.",
      "Another uses the person's full name, country of birth, and date of birth.",
      "Use the person's identifying information as accurately as possible.",
      "You do not need to enter this information on the Hands United website.",
    ],
    steps: [
      "Open the official ICE Online Detainee Locator System.",
      "Choose the available search method.",
      "Enter the required identifying information directly on the ICE website.",
      "Review any location information returned.",
      "Contact the detention facility or a qualified immigration legal professional for additional help.",
    ],
    results: [
      {
        title: "Person Located",
        description:
          "The system may show a detention facility. Contact the facility to confirm current information and communication procedures.",
      },
      {
        title: "No Record Found",
        description:
          "This does not necessarily mean the person is not detained. The locator has eligibility limitations and information may be delayed.",
      },
      {
        title: "Location Changed",
        description:
          "A detained person may be transferred between facilities. Confirm current location information.",
      },
    ],
    warnings: [
      "The ICE locator does not include every person in government custody.",
      "A person may be in another agency's custody or may not yet appear in the system.",
      "Information can change as people are transferred.",
      "Ask the detention facility how a Deaf person can access videophones, qualified interpreters, and other communication accommodations.",
      "Seek qualified legal help promptly if someone is detained.",
    ],
    links: [
      {
        label: "Open ICE Detainee Locator",
        href: "https://locator.ice.gov/odls/",
        primary: true,
      },
      {
        label: "ICE Official Website",
        href: "https://www.ice.gov/",
      },
    ],
  },
];

const unknownSteps = [
  {
    title: "Look at the Top of Your Document",
    description: "Find the agency name, form number, or document title.",
  },
  {
    title: "Look for a Receipt Number",
    description:
      "A USCIS receipt number commonly begins with three letters, such as IOE, followed by ten numbers.",
  },
  {
    title: "Look for an A-Number",
    description:
      "An A-number may appear on immigration court documents, ICE documents, or USCIS correspondence.",
  },
  {
    title: "Check for Important Dates",
    description:
      "Look for hearings, appointments, response deadlines, and reporting instructions.",
  },
  {
    title: "Get Help Identifying Your Document",
    description:
      "If you are unsure which agency sent it, use the Understanding Immigration Letters guide or seek qualified legal help.",
  },
];

function ExternalLink({ href, children, primary = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={primary ? styles.primaryLink : styles.resourceLink}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function CaseStatusPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const detailsRef = useRef(null);

  const selectedAgency = options.find((option) => option.id === selectedOption);

  useEffect(() => {
    if (selectedOption && detailsRef.current) {
      detailsRef.current.focus();
    }
  }, [selectedOption]);

  return (
    <main className={styles.container}>
      {/* BREADCRUMBS */}

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href={BASE}>Immigration Resources</Link>
        <span aria-hidden="true">›</span>
        <Link href={INFO}>Resource Library</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Check Your Immigration Case</span>
      </nav>

      {/* INTRODUCTION */}

      <header className={styles.intro}>
        <h1 className={styles.title}>Check Your Immigration Case</h1>

        <p className={styles.subtitle}>
          Do you want to know what is happening with your immigration case?
        </p>

        <p className={styles.description}>
          Different government agencies have different systems for checking
          immigration cases. This guide will help you find the correct official
          website.
        </p>

        <p className={styles.description}>
          Choose the agency handling your case. We will explain what information
          you need, where to find it, and how to check your case.
        </p>
      </header>

      {/* PRIVACY NOTICE */}

      <aside className={styles.privacyNotice}>
        <strong>
          <span aria-hidden="true">🔒 </span>
          Protect Your Personal Information
        </strong>

        <p>
          Hands United does not ask you to enter your receipt number, A-number,
          date of birth, or other personal immigration information on this page.
          Enter this information only on the appropriate official government
          website.
        </p>
      </aside>

      {/* AGENCY SELECTION */}

      <section
        className={styles.selectionSection}
        aria-labelledby="agency-heading"
      >
        <h2 id="agency-heading" className={styles.sectionTitle}>
          What Do You Want to Check?
        </h2>

        <p className={styles.sectionDescription}>
          Select one of the options below.
        </p>

        <div className={styles.grid}>
          {options.map((option) => {
            const isSelected = selectedOption === option.id;

            return (
              <button
                key={option.id}
                type="button"
                className={`${styles.situationCard} ${
                  isSelected ? styles.selectedCard : ""
                }`}
                onClick={() => setSelectedOption(option.id)}
                aria-pressed={isSelected}
              >
                <span className={styles.cardIcon}>
                  <Image
                    src={option.image}
                    alt={`${option.title} logo`}
                    width={110}
                    height={110}
                    className={styles.agencyLogo}
                  />
                </span>

                <span className={styles.cardTitle}>{option.title}</span>

                <span className={styles.cardSubtitle}>{option.subtitle}</span>

                <span className={styles.cardDescription}>
                  {option.description}
                </span>

                <span className={styles.cardAction}>
                  {isSelected ? "Selected ✓" : "Choose →"}
                </span>
              </button>
            );
          })}

          {/* I DON'T KNOW */}

          <button
            type="button"
            className={`${styles.situationCard} ${
              selectedOption === "unknown" ? styles.selectedCard : ""
            }`}
            onClick={() => setSelectedOption("unknown")}
            aria-pressed={selectedOption === "unknown"}
          >
            <span className={styles.cardIcon} aria-hidden="true">
              ❓
            </span>

            <span className={styles.cardTitle}>I Don't Know</span>

            <span className={styles.cardSubtitle}>
              Help me find the right agency
            </span>

            <span className={styles.cardDescription}>
              I have an immigration document but do not know which website to
              use.
            </span>

            <span className={styles.cardAction}>
              {selectedOption === "unknown" ? "Selected ✓" : "Choose →"}
            </span>
          </button>
        </div>
      </section>

      {/* SELECTED AGENCY */}

      {selectedAgency && (
        <section
          className={styles.detailsSection}
          aria-labelledby="details-heading"
        >
          <h2
            id="details-heading"
            className={styles.detailsTitle}
            tabIndex={-1}
            ref={detailsRef}
          >
            {selectedAgency.title}
          </h2>

          <p className={styles.detailsIntroduction}>
            {selectedAgency.description}
          </p>

          {/* EXAMPLES */}

          <h3 className={styles.subheading}>What Can I Check?</h3>

          <ul className={styles.checkList}>
            {selectedAgency.examples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* NUMBER INFORMATION */}

          <div className={styles.numberSection}>
            <h3 className={styles.subheading}>{selectedAgency.numberTitle}</h3>

            <p>{selectedAgency.numberDescription}</p>

            <div className={styles.numberExample}>
              {selectedAgency.numberExample}
            </div>

            <ul className={styles.checkList}>
              {selectedAgency.numberHelp.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* STEP-BY-STEP GUIDE */}

          <h3 className={styles.subheading}>How Do I Check My Case?</h3>

          <ol className={styles.stepsList}>
            {selectedAgency.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          {/* OFFICIAL WEBSITE LINKS */}

          <div className={styles.officialLinks}>
            <h3 className={styles.subheading}>Official Government Websites</h3>

            <p>
              Use the official government website to check your information.
            </p>

            <div className={styles.linksList}>
              {selectedAgency.links.map((link) => (
                <ExternalLink
                  key={link.href}
                  href={link.href}
                  primary={link.primary}
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>

          {/* WHAT RESULTS MEAN */}

          <h3 className={styles.subheading}>What Might the Results Mean?</h3>

          <div className={styles.resultsGrid}>
            {selectedAgency.results.map((result) => (
              <div key={result.title} className={styles.resultCard}>
                <h4>{result.title}</h4>
                <p>{result.description}</p>
              </div>
            ))}
          </div>

          {/* WARNINGS */}

          <aside className={styles.warning}>
            <strong>Important Reminders</strong>

            <ul className={styles.warningList}>
              {selectedAgency.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          </aside>

          {/* LEGAL HELP */}

          <div className={styles.legalHelp}>
            <h3 className={styles.subheading}>Need Immigration Legal Help?</h3>

            <p>
              If your case has a deadline, denial, hearing, or detention issue,
              consider contacting a qualified immigration attorney or
              DOJ-accredited representative.
            </p>

            <ExternalLink href="https://www.immigrationadvocates.org/legaldirectory/">
              Find Immigration Legal Help
            </ExternalLink>
          </div>

          <button
            type="button"
            className={styles.backButton}
            onClick={() => setSelectedOption(null)}
          >
            ← Choose Another Option
          </button>
        </section>
      )}

      {/* UNKNOWN AGENCY */}

      {selectedOption === "unknown" && (
        <section
          className={styles.detailsSection}
          aria-labelledby="unknown-heading"
        >
          <h2
            id="unknown-heading"
            className={styles.detailsTitle}
            tabIndex={-1}
            ref={detailsRef}
          >
            I Don't Know Which Agency
          </h2>

          <p className={styles.detailsIntroduction}>
            That is okay. You can look for a few important details on your
            document to identify the agency.
          </p>

          <ol className={styles.unknownSteps}>
            {unknownSteps.map((step, index) => (
              <li key={step.title} className={styles.unknownStep}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {index + 1}
                </span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.linksList}>
            <Link href={`${INFO}/documents`} className={styles.primaryLink}>
              Understanding Immigration Letters →
            </Link>

            <ExternalLink href="https://www.immigrationadvocates.org/legaldirectory/">
              Find Immigration Legal Help
            </ExternalLink>
          </div>

          <button
            type="button"
            className={styles.backButton}
            onClick={() => setSelectedOption(null)}
          >
            ← Choose Another Option
          </button>
        </section>
      )}

      {/* ACCESSIBILITY */}

      <section className={styles.accessSection}>
        <h2>Communication and Accessibility</h2>

        <p>
          Deaf and hard-of-hearing immigrants have the right to request
          appropriate communication accommodations when interacting with
          government agencies.
        </p>

        <p>
          Depending on the situation, accommodations may include qualified sign
          language interpreters, Deaf Interpreters, communication support, or
          other accessible methods.
        </p>

        <p>
          If you need communication accommodations for an appointment, court
          hearing, or detention-related interaction, contact the responsible
          agency or facility.
        </p>

        <Link
          href={`${BASE}/communication-board`}
          className={styles.accessLink}
        >
          Open Communication Board →
        </Link>
      </section>

      {/* ADDITIONAL HELP */}

      <section className={styles.helpSection}>
        <h2>Need Help Understanding a Document?</h2>

        <p>
          If you received a letter from USCIS, immigration court, or ICE, you
          can learn what it may mean and what information to look for.
        </p>

        <div className={styles.helpActions}>
          <Link href={`${INFO}/documents`} className={styles.helpButton}>
            Understanding Immigration Letters →
          </Link>

          <ExternalLink href="https://www.immigrationadvocates.org/legaldirectory/">
            Find Immigration Legal Help
          </ExternalLink>
        </div>
      </section>

      {/* RETURN TO LIBRARY */}

      <div className={styles.returnLink}>
        <Link href={INFO}>← Back to Immigration Resource Library</Link>
      </div>

      {/* DISCLAIMER */}

      <footer className={styles.disclaimer}>
        <p>
          <strong>Important:</strong> This page provides general educational
          information and does not provide legal advice. Government case status
          systems may not display every update, deadline, or requirement. Always
          read your official documents and contact the appropriate agency or a
          qualified immigration legal professional when necessary.
        </p>
      </footer>
    </main>
  );
}
