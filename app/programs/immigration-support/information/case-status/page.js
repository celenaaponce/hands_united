
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CircleHelp,
  ClipboardCheck,
  ExternalLink,
  FileSearch,
  FileText,
  Languages,
  LockKeyhole,
  MapPin,
  Scale,
  Search,
  ShieldAlert,
} from "lucide-react";
import styles from "./page.module.css";

const BASE = "/programs/immigration-support";
const INFO = `${BASE}/information`;

const options = [
  {
    id: "uscis",
    title: "USCIS",
    subtitle: "Check my application",
    question: "I sent an application to USCIS.",
    image: "/letters/uscis.jpeg",
    illustration: "/dictionary/receipt-number.png",
    illustrationAlt: "Immigration receipt number on a document",
    description:
      "Check an immigration application, petition, or request.",
    numberTitle: "Find your receipt number",
    numberExample: "IOE1234567890",
    numberDescription:
      "Look for Receipt Number on a USCIS letter. It usually has 3 letters and 10 numbers.",
    website: "https://egov.uscis.gov/",
    button: "Check My USCIS Case",
    steps: [
      {
        title: "Find your receipt number",
        text: "Look for 3 letters and 10 numbers.",
        icon: FileSearch,
      },
      {
        title: "Open the USCIS website",
        text: "Select the green button below.",
        icon: ExternalLink,
      },
      {
        title: "Check your result",
        text: "Read your status. Keep your official letters.",
        icon: ClipboardCheck,
      },
    ],
    examples: [
      "Work permit applications",
      "Green card applications",
      "Family petitions",
      "Some asylum applications",
      "Other USCIS applications",
    ],
    results: [
      {
        title: "Case Was Received",
        text: "USCIS received your application. It is not approved yet.",
      },
      {
        title: "Case Is Being Actively Reviewed",
        text: "USCIS is reviewing your case. A decision may still take time.",
      },
      {
        title: "Request for Evidence Was Sent",
        text: "USCIS needs more information. Read the letter for your deadline.",
      },
      {
        title: "Case Was Approved",
        text: "USCIS approved this application or petition. What happens next depends on your case.",
      },
      {
        title: "Case Was Denied",
        text: "USCIS denied this application or petition. Read the decision letter for your options and deadlines.",
      },
    ],
    warnings: [
      "The website may not show every update.",
      "Some applications use different tracking systems.",
      "Keep all letters from USCIS.",
      "Do not miss appointments or deadlines.",
      "USCIS case status does not replace immigration court information.",
    ],
    additionalLink: "https://www.uscis.gov/",
    additionalLabel: "USCIS Official Website",
  },
  {
    id: "eoir",
    title: "Immigration Court",
    subtitle: "Check my hearing",
    question: "I need my court date.",
    image: "/letters/eoir-logo.jpeg",
    illustration: "/dictionary/a-number.png",
    illustrationAlt: "A-Number highlighted on an immigration document",
    description:
      "Check information about your immigration court case.",
    numberTitle: "Find your A-Number",
    numberExample: "A123456789",
    numberDescription:
      "Look for A-Number or A# on your immigration documents.",
    website: "https://acis.eoir.justice.gov/en/",
    button: "Check My Court Date",
    steps: [
      {
        title: "Find your A-Number",
        text: "Look for A# on your documents.",
        icon: FileSearch,
      },
      {
        title: "Open the court website",
        text: "Select the green button below.",
        icon: ExternalLink,
      },
      {
        title: "Check your hearing",
        text: "Find the date, time, and court location.",
        icon: CalendarDays,
      },
    ],
    examples: [
      "Next hearing date",
      "Hearing time and location",
      "Some immigration judge decisions",
      "Some appeal information",
    ],
    results: [
      {
        title: "Next Hearing",
        text: "The system may show your next court date, time, and location.",
      },
      {
        title: "Court Decision",
        text: "The system may show a decision. Obtain the official decision.",
      },
      {
        title: "No Case Found",
        text: "This does not necessarily mean you have no court case.",
      },
      {
        title: "Hearing Changed",
        text: "Contact the court if the information differs from your notice.",
      },
    ],
    warnings: [
      "Your official court notice is important.",
      "Not every case update appears online.",
      "Missing a required hearing can lead to a removal order.",
      "Keep your address updated with the immigration court.",
      "Ask the court for an interpreter if you need one.",
    ],
    additionalLink: `${INFO}/court-detention`,
    additionalLabel: "Learn About Immigration Court",
    internalAdditional: true,
  },
  {
    id: "ice",
    title: "ICE Detention",
    subtitle: "Find someone detained",
    question: "I am looking for someone in ICE custody.",
    image: "/letters/ice-logo.jpeg",
    illustration: "/dictionary/detention.png",
    illustrationAlt: "Illustration representing immigration detention",
    description:
      "Look for someone who may be in ICE immigration detention.",
    numberTitle: "Information you may need",
    numberExample: "A123456789",
    numberDescription:
      "You may search with an A-Number and country of birth, or with the person's name, date of birth, and country of birth.",
    website: "https://locator.ice.gov/odls/",
    button: "Find Someone in ICE Custody",
    steps: [
      {
        title: "Get the person's information",
        text: "Find their A-Number or full name and birth information.",
        icon: FileSearch,
      },
      {
        title: "Open the ICE locator",
        text: "Select the green button below.",
        icon: ExternalLink,
      },
      {
        title: "Look for their location",
        text: "Check whether a detention facility is listed.",
        icon: MapPin,
      },
    ],
    examples: [
      "A family member in ICE custody",
      "A friend who may be detained",
      "Someone whose detention location is unknown",
    ],
    results: [
      {
        title: "Person Found",
        text: "The system may show a detention facility.",
      },
      {
        title: "No Record Found",
        text: "The person may still be detained. Not everyone appears in the system.",
      },
      {
        title: "Location Changed",
        text: "A detained person may have been transferred.",
      },
    ],
    warnings: [
      "The ICE locator does not show everyone.",
      "A person may be held by another agency.",
      "Locations can change after transfers.",
      "Ask about videophones, interpreters, and communication access for Deaf detainees.",
      "Seek qualified legal help promptly.",
    ],
    additionalLink: `${INFO}/court-detention`,
    additionalLabel: "Learn About Detention",
    internalAdditional: true,
  },
];

const unknownItems = [
  {
    image: "/dictionary/receipt-number.png",
    title: "USCIS letter",
    text: "Look for a receipt number.",
  },
  {
    image: "/dictionary/a-number.png",
    title: "Court or ICE document",
    text: "Look for an A-Number.",
  },
  {
    image: "/dictionary/hearing-notice.png",
    title: "Hearing notice",
    text: "Look for a court date.",
  },
];

function Picture({ src, alt, className = "" }) {
  return (
    <div className={`${styles.picture} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={320}
        height={320}
        className={styles.pictureImage}
      />
    </div>
  );
}

function Expandable({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.expandable}>
      <button
        type="button"
        className={styles.expandButton}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        {open ? (
          <ChevronUp size={20} aria-hidden="true" />
        ) : (
          <ChevronDown size={20} aria-hidden="true" />
        )}
      </button>

      {open && (
        <div className={styles.expandContent}>
          {children}
        </div>
      )}
    </div>
  );
}

function OfficialButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.primaryButton}
    >
      {children}
      <ExternalLink size={19} aria-hidden="true" />
    </a>
  );
}

function AgencyCard({ option, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`${styles.agencyCard} ${
        selected ? styles.selectedCard : ""
      }`}
      aria-pressed={selected}
      onClick={onSelect}
    >
      <div className={styles.agencyImage}>
        <Image
          src={option.image}
          alt=""
          width={120}
          height={120}
          className={styles.agencyLogo}
        />
      </div>

      <h3>{option.title}</h3>
      <p>{option.subtitle}</p>

      <span className={styles.chooseLabel}>
        {selected ? (
          <>
            <CheckCircle2 size={18} aria-hidden="true" />
            Selected
          </>
        ) : (
          <>
            Choose
            <ArrowRight size={18} aria-hidden="true" />
          </>
        )}
      </span>
    </button>
  );
}

function StepCard({ step, index }) {
  const Icon = step.icon;

  return (
    <div className={styles.stepCard}>
      <span className={styles.stepNumber}>{index + 1}</span>

      <div className={styles.stepIcon}>
        <Icon size={30} aria-hidden="true" />
      </div>

      <div className={styles.stepContent}>
        <h4>{step.title}</h4>
        <p>{step.text}</p>
      </div>
    </div>
  );
}

function SelectedAgency({ option, onBack, detailsRef }) {
  return (
    <section
      className={styles.detailsSection}
      aria-labelledby="details-heading"
    >
      <div className={styles.detailsHeader}>
        <h2
          id="details-heading"
          tabIndex={-1}
          ref={detailsRef}
        >
          {option.title}
        </h2>
        <p>{option.question}</p>
      </div>

      <div className={styles.numberCard}>
        <Picture
          src={option.illustration}
          alt={option.illustrationAlt}
        />

        <div className={styles.numberContent}>
          <h3>{option.numberTitle}</h3>
          <p>{option.numberDescription}</p>

          <div className={styles.numberExample}>
            <span>Example</span>
            <strong>{option.numberExample}</strong>
          </div>
        </div>
      </div>

      <h3 className={styles.stepsHeading}>
        Follow These 3 Steps
      </h3>

      <div className={styles.stepsGrid}>
        {option.steps.map((step, index) => (
          <StepCard
            key={step.title}
            step={step}
            index={index}
          />
        ))}
      </div>

      <div className={styles.mainAction}>
        <OfficialButton href={option.website}>
          {option.button}
        </OfficialButton>

        <p>
          <LockKeyhole size={17} aria-hidden="true" />
          Enter your personal information only on the official website.
        </p>
      </div>

      <div className={styles.moreInformation}>
        <Expandable title="What can I check?">
          <ul>
            {option.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </Expandable>

        <Expandable title="What do the results mean?">
          <div className={styles.resultsGrid}>
            {option.results.map((result) => (
              <div className={styles.resultCard} key={result.title}>
                <h4>{result.title}</h4>
                <p>{result.text}</p>
              </div>
            ))}
          </div>
        </Expandable>

        <Expandable title="Important things to remember">
          <ul>
            {option.warnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </Expandable>
      </div>

      <div className={styles.relatedHelp}>
        {option.internalAdditional ? (
          <Link href={option.additionalLink}>
            <BookOpen size={19} aria-hidden="true" />
            {option.additionalLabel}
          </Link>
        ) : (
          <a
            href={option.additionalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen size={19} aria-hidden="true" />
            {option.additionalLabel}
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        )}

        <Link href={`${INFO}/legal-help`}>
          <Scale size={19} aria-hidden="true" />
          Find Legal Help
        </Link>
      </div>

      <button
        type="button"
        className={styles.backButton}
        onClick={onBack}
      >
        <ArrowLeft size={18} aria-hidden="true" />
        Choose Another Option
      </button>
    </section>
  );
}

function UnknownAgency({ onBack, detailsRef }) {
  return (
    <section
      className={styles.detailsSection}
      aria-labelledby="unknown-heading"
    >
      <div className={styles.detailsHeader}>
        <h2
          id="unknown-heading"
          tabIndex={-1}
          ref={detailsRef}
        >
          I Don't Know Which Agency
        </h2>
        <p>Look at your immigration document.</p>
      </div>

      <div className={styles.unknownGrid}>
        {unknownItems.map((item) => (
          <article className={styles.unknownCard} key={item.title}>
            <Picture src={item.image} alt="" />
            <div className={styles.unknownContent}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.unknownActions}>
        <Link
          href={`${INFO}/documents`}
          className={styles.primaryButton}
        >
          Understand My Immigration Letter
          <ArrowRight size={18} aria-hidden="true" />
        </Link>

        <Link
          href={`${INFO}/legal-help`}
          className={styles.secondaryButton}
        >
          Find Legal Help
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>

      <button
        type="button"
        className={styles.backButton}
        onClick={onBack}
      >
        <ArrowLeft size={18} aria-hidden="true" />
        Choose Another Option
      </button>
    </section>
  );
}

export default function CaseStatusPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const detailsRef = useRef(null);

  const selectedAgency = options.find(
    (option) => option.id === selectedOption
  );

  useEffect(() => {
    if (selectedOption && detailsRef.current) {
      detailsRef.current.focus();
    }
  }, [selectedOption]);

  function chooseOption(id) {
    setSelectedOption(id);
  }

  function goBack() {
    setSelectedOption(null);
  }

  return (
    <main className={styles.container}>
      <nav
        className={styles.breadcrumb}
        aria-label="Breadcrumb"
      >
        <Link href={BASE}>Immigration Resources</Link>
        <span aria-hidden="true">›</span>
        <Link href={INFO}>Resource Library</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Check Your Immigration Case</span>
      </nav>

      <header className={styles.intro}>
        <h1 className={styles.title}>
          Check Your Immigration Case
        </h1>

        <p className={styles.subtitle}>
          What do you want to check?
        </p>

        <p className={styles.description}>
          Choose a picture below.
        </p>
      </header>

      <section className={styles.selectionSection}>
        <h2 className={styles.sectionTitle}>
          Choose an Option
        </h2>

        <div className={styles.agencyGrid}>
          {options.map((option) => (
            <AgencyCard
              key={option.id}
              option={option}
              selected={selectedOption === option.id}
              onSelect={() => chooseOption(option.id)}
            />
          ))}

          <button
            type="button"
            className={`${styles.agencyCard} ${
              selectedOption === "unknown"
                ? styles.selectedCard
                : ""
            }`}
            aria-pressed={selectedOption === "unknown"}
            onClick={() => chooseOption("unknown")}
          >
            <div className={styles.unknownIcon}>
              <CircleHelp size={64} aria-hidden="true" />
            </div>

            <h3>I Don't Know</h3>
            <p>Help me find the right agency</p>

            <span className={styles.chooseLabel}>
              {selectedOption === "unknown" ? (
                <>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  Selected
                </>
              ) : (
                <>
                  Choose
                  <ArrowRight size={18} aria-hidden="true" />
                </>
              )}
            </span>
          </button>
        </div>
      </section>

      {selectedAgency && (
        <SelectedAgency
          option={selectedAgency}
          onBack={goBack}
          detailsRef={detailsRef}
        />
      )}

      {selectedOption === "unknown" && (
        <UnknownAgency
          onBack={goBack}
          detailsRef={detailsRef}
        />
      )}

      <section className={styles.accessSection}>
        <div className={styles.accessHeading}>
          <Languages size={32} aria-hidden="true" />

          <div>
            <h2>Need an Interpreter?</h2>
            <p>
              Learn how to request communication access or report
              an interpreter problem.
            </p>
          </div>
        </div>

        <Link
          href={`${INFO}/accessibility`}
          className={styles.secondaryButton}
        >
          Communication & Accessibility
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section className={styles.helpSection}>
        <h2>Need Help With a Letter?</h2>
        <p>
          Learn what your immigration letter means.
        </p>

        <Link
          href={`${INFO}/documents`}
          className={styles.secondaryButton}
        >
          Understanding Immigration Letters
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <div className={styles.returnLink}>
        <Link href={INFO}>
          <ArrowLeft size={18} aria-hidden="true" />
          Back to Immigration Resource Library
        </Link>
      </div>

      <footer className={styles.disclaimer}>
        <p>
          <strong>Important:</strong> This page provides general
          information, not legal advice. Online systems may not
          show every update or deadline. Always read your official
          notices and get qualified legal help when needed.
        </p>
      </footer>
    </main>
  );
}
