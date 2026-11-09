"use client";

import { useState } from "react";
import Image from "next/image";
import { languages } from "../languages";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Copy,
  ExternalLink,
  FileText,
  Languages,
  MapPin,
  Scale,
  Search,
  ShieldAlert,
} from "lucide-react";
import styles from "./page.module.css";

const BASE = "/programs/immigration-support/information";

const LINKS = {
  eoir: "https://acis.eoir.justice.gov/",
  courtInformation:
    "https://www.justice.gov/eoir/immigration-court-information",
  courtInterpreters:
    "https://www.justice.gov/eoir/policy-manual-eoir/part-II/icpm/chapter-3-10",
  missedHearing:
    "https://www.justice.gov/eoir/policy-manual-eoir/part-II/icpm/chapter-4-9",
  detention: "https://locator.ice.gov/odls/",
  legalDirectory: "https://www.immigrationadvocates.org/legaldirectory/",
  eoirOverview: "https://www.justice.gov/eoir/learn-about-immigration-court",
};

const sections = [
  {
    id: "hearing",
    number: "1",
    title: "I Have an Immigration Court Hearing",
    question: "I need to go to court.",
    image: "/dictionary/hearing-notice.png",
    alt: "An immigration court hearing notice",
    short: "Find your hearing date, time, and location. Go to your hearing.",
    actionLabel: "Check My Court Case",
    actionUrl: LINKS.eoir,
    details: [
      {
        title: "What is immigration court?",
        text: "An immigration judge decides certain immigration cases. Immigration court is different from criminal court.",
      },
      {
        title: "How do I know when to go?",
        text: "Read your Notice of Hearing. It may tell you the date, time, location, or whether the hearing is online. You can also check the EOIR case information system.",
      },
      {
        title: "What if the website is different from my letter?",
        text: "Court notices are the official source. Contact your immigration court or legal representative to resolve any difference. Do not assume a hearing is canceled.",
      },
      {
        title: "Do I need a lawyer?",
        text: "You may have a lawyer or other authorized representative, but immigration court generally does not provide a free lawyer for you.",
      },
      {
        title: "What if I move?",
        text: "You must keep the immigration court informed of your current contact information using the required process. Updating another immigration agency may not update your court record.",
      },
    ],
    resourceLabel: "Learn About Immigration Court",
    resourceUrl: LINKS.eoirOverview,
  },
  {
    id: "interpreter",
    number: "2",
    title: "I Need an Interpreter in Court",
    question: "I need to understand what happens.",
    image: "/dictionary/interpreter.png",
    alt: "An interpreter helping people communicate",
    short:
      "Tell the immigration court which language you use. Ask for a qualified interpreter.",
    actionLabel: "Read EOIR Interpreter Information",
    actionUrl: LINKS.courtInterpreters,
    details: [
      {
        title: "Does immigration court provide interpreters?",
        text: "EOIR provides interpreters at government expense when a person cannot adequately understand and participate in proceedings in English.",
      },
      {
        title: "When should I ask?",
        text: "EOIR says the person or their legal representative should request an interpreter no later than 30 days before the hearing when possible. If your hearing is sooner, contact the court immediately.",
      },
      {
        title: "What if I use a different sign language?",
        text: "Tell the court the specific signed language you use. ASL is not understood by everyone who is Deaf. Explain if you need a Deaf interpreter, relay interpreting team, or other communication support.",
      },
      {
        title: "What if I cannot understand the interpreter?",
        text: "Tell the immigration judge immediately. Explain what is not working. Do not pretend to understand.",
      },
    ],
    resourceLabel: "EOIR Court Interpreter Policy",
    resourceUrl: LINKS.courtInterpreters,
  },
  {
    id: "missed-hearing",
    number: "3",
    title: "I Missed My Hearing",
    question: "I did not go to court.",
    image: "/dictionary/in-absentia.png",
    alt: "An illustration explaining a missed immigration court hearing",
    short:
      "The judge may have made a decision without you. Get legal help quickly.",
    actionLabel: "Check My Court Case",
    actionUrl: LINKS.eoir,
    urgent: true,
    details: [
      {
        title: "What can happen?",
        text: "An immigration judge may order someone removed when they do not attend a required hearing. This is called an in absentia order.",
      },
      {
        title: "Can my case be reopened?",
        text: "Sometimes. A motion to reopen may be available, depending on why the hearing was missed and other legal requirements.",
      },
      {
        title: "Are there deadlines?",
        text: "Yes. Some motions based on exceptional circumstances generally must be filed within 180 days. Different rules can apply when proper notice was not received or a person was in qualifying custody through no fault of their own.",
      },
      {
        title: "What should I do?",
        text: "Check your court case, keep your notices, write down why you missed the hearing, and contact a qualified immigration legal professional immediately.",
      },
    ],
    resourceLabel: "EOIR Rules for Missed Hearings",
    resourceUrl: LINKS.missedHearing,
  },
  {
    id: "detention",
    number: "4",
    title: "Someone Is in Immigration Detention",
    question: "I cannot find my family member.",
    image: "/dictionary/detention.png",
    alt: "An illustration representing immigration detention",
    short:
      "Use the ICE detainee locator to look for someone in immigration custody.",
    actionLabel: "Find Someone in ICE Custody",
    actionUrl: LINKS.detention,
    details: [
      {
        title: "What information do I need?",
        text: "You can search using the person's A-Number and country of birth, or their exact name and other required information.",
      },
      {
        title: "What if the person does not appear?",
        text: "The online locator does not show everyone. It does not search records for people under age 18. A missing result does not prove the person is not detained.",
      },
      {
        title: "Is detention the same as immigration court?",
        text: "No. ICE manages immigration detention. EOIR handles immigration court proceedings. A detained person may also have an immigration court case.",
      },
      {
        title: "What if the detained person is Deaf?",
        text: "Tell the detention facility and legal representative about the person's communication needs. Ask for qualified interpreting and accessible communication with legal counsel.",
      },
      {
        title: "Can the person request release?",
        text: "Release and immigration bond depend on the person's legal circumstances. Not everyone is eligible. A qualified legal professional can help explain available options.",
      },
    ],
    resourceLabel: "ICE Online Detainee Locator",
    resourceUrl: LINKS.detention,
  },
  {
    id: "removal",
    number: "5",
    title: "I Received a Removal Order",
    question: "The government says I must leave.",
    image: "/dictionary/removal-order.png",
    alt: "An illustrated immigration removal order",
    short: "A removal order is serious. Ask for legal help immediately.",
    actionLabel: "Find Immigration Legal Help",
    actionUrl: `${BASE}/legal-help`,
    internal: true,
    urgent: true,
    details: [
      {
        title: "What is a removal order?",
        text: "A removal order is a legal decision requiring a person to leave the United States. Different agencies and procedures may be involved.",
      },
      {
        title: "Can I appeal?",
        text: "Some immigration judge decisions can be appealed to the Board of Immigration Appeals (BIA). Many appeals have a 30-day deadline, but not all removal orders have the same appeal rights or deadlines.",
      },
      {
        title: "What if the judge ordered removal because I missed court?",
        text: "An in absentia removal order has different procedures. A motion to reopen may be possible, but the order itself generally cannot be directly appealed to the BIA.",
      },
      {
        title: "Does filing something stop removal?",
        text: "Not always. Whether removal is paused depends on the type of order, filing, and applicable rules. Get legal advice immediately.",
      },
    ],
    resourceLabel: "Learn About Immigration Court",
    resourceUrl: LINKS.eoirOverview,
  },
];

const courtChecklist = [
  {
    image: "/dictionary/hearing-notice.png",
    title: "Hearing notice",
    text: "Find the date, time, and location.",
  },
  {
    image: "/dictionary/a-number.png",
    title: "A-Number",
    text: "Keep your immigration case number.",
  },
  {
    image: "/dictionary/interpreter.png",
    title: "Interpreter",
    text: "Tell the court what language you use.",
  },
  {
    image: "/dictionary/attorney-lawyer.png",
    title: "Legal help",
    text: "Ask a qualified professional for help.",
  },
];

function Picture({ src, alt, className = "" }) {
  return (
    <div className={`${styles.picture} ${className}`}>
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
        onClick={() => setOpen((previous) => !previous)}
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

function ActionLink({ href, internal, children }) {
  if (internal) {
    return (
      <Link href={href} className={styles.primaryButton}>
        {children}
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.primaryButton}
    >
      {children}
      <ExternalLink size={18} aria-hidden="true" />
    </a>
  );
}

function TopicCard({ topic }) {
  return (
    <article
      className={styles.topicCard}
      id={topic.id}
      aria-labelledby={`${topic.id}-title`}
    >
      <div className={styles.topicImage}>
        <Picture src={topic.image} alt={topic.alt} />
      </div>

      <div className={styles.topicContent}>
        <div className={styles.topicHeading}>
          <span className={styles.numberBadge}>{topic.number}</span>
          <h2 id={`${topic.id}-title`}>{topic.title}</h2>
        </div>

        <p className={styles.topicQuestion}>{topic.question}</p>
        <p className={styles.topicShort}>{topic.short}</p>

        {topic.urgent && (
          <div className={styles.urgentLabel}>
            <ShieldAlert size={20} aria-hidden="true" />
            <span>Get legal help quickly.</span>
          </div>
        )}

        <div className={styles.topicActions}>
          <ActionLink href={topic.actionUrl} internal={topic.internal}>
            {topic.actionLabel}
          </ActionLink>
        </div>

        <Expandable label="Learn more">
          <div className={styles.detailsList}>
            {topic.details.map((detail) => (
              <div className={styles.detailItem} key={detail.title}>
                <h3>{detail.title}</h3>
                <p>{detail.text}</p>
              </div>
            ))}
          </div>

          <a
            href={topic.resourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceLink}
          >
            {topic.resourceLabel}
            <ExternalLink size={17} aria-hidden="true" />
          </a>

          <div className={styles.legalReminder}>
            <Scale size={20} aria-hidden="true" />
            <p>
              Immigration cases are different. A qualified legal professional
              can explain what applies to your case.
            </p>
          </div>
        </Expandable>
      </div>
    </article>
  );
}

function InterpreterRequest() {
  const [language, setLanguage] = useState("");
  const [otherLanguage, setOtherLanguage] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedLanguage =
    language === "Other"
      ? otherLanguage.trim() || "[my language]"
      : language || "[my language]";

  const message =
    `Hello,\n\n` +
    `I have an immigration court hearing and need a qualified interpreter.\n\n` +
    `My preferred language is ${selectedLanguage}.\n\n` +
    `Please confirm that the court has arranged an interpreter ` +
    `who can communicate effectively with me. ` +
    `If a Deaf interpreter or interpreting team is needed, ` +
    `please let me know how to request that support.\n\n` +
    `Thank you.`;

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={styles.interpreterRequest}>
      <div className={styles.requestHeading}>
        <Languages size={30} aria-hidden="true" />
        <div>
          <h3>Ask the Court for an Interpreter</h3>
          <p>You or your legal representative can contact the court.</p>
        </div>
      </div>

      <label htmlFor="court-language" className={styles.formLabel}>
        My preferred language
      </label>

      <select
        id="court-language"
        className={styles.languageSelect}
        value={language}
        onChange={(event) => {
          setLanguage(event.target.value);
          setCopied(false);
        }}
      >
        <option value="">Choose a language</option>

        {["Signed Languages", "Spoken Languages", "Other / Not Sure"].map(
          (group) => (
            <optgroup key={group} label={group}>
              {languages
                .filter((item) => item.group === group)
                .map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
            </optgroup>
          ),
        )}
      </select>

      {language === "Other" && (
        <>
          <label htmlFor="court-other-language" className={styles.formLabel}>
            What language do you use?
          </label>
          <input
            id="court-other-language"
            type="text"
            className={styles.languageSelect}
            value={otherLanguage}
            onChange={(event) => {
              setOtherLanguage(event.target.value);
              setCopied(false);
            }}
            placeholder="Enter your language"
          />
        </>
      )}

      <div className={styles.messageCard}>
        <strong>Message you can copy</strong>
        <p>{message}</p>

        <button
          type="button"
          className={styles.copyButton}
          onClick={copyMessage}
        >
          {copied ? (
            <CheckCircle2 size={18} aria-hidden="true" />
          ) : (
            <Copy size={18} aria-hidden="true" />
          )}
          {copied ? "Copied" : "Copy Message"}
        </button>
      </div>

      <p className={styles.requestNote}>
        Request an interpreter as early as possible. EOIR generally asks for
        requests at least 30 days before the hearing. If less time remains,
        contact the court right away.
      </p>

      <a
        href={LINKS.courtInterpreters}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resourceLink}
      >
        Read EOIR Interpreter Rules
        <ExternalLink size={17} aria-hidden="true" />
      </a>
    </div>
  );
}

export default function CourtDetentionPage() {
  return (
    <main className={styles.container}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/programs/immigration-support">Immigration Support</Link>
        <span aria-hidden="true">›</span>
        <Link href={BASE}>Immigration Information</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Court & Detention</span>
      </nav>

      <header className={styles.header}>
        <h1>Immigration Court & Detention</h1>
        <p className={styles.lead}>What do I need to do?</p>
        <p>
          Learn about court hearings, interpreters, missed hearings, detention,
          and removal orders.
        </p>
      </header>

      {/* <div className={styles.videoPlaceholder}>
        <Languages size={28} aria-hidden="true" />
        <div>
          <strong>ASL Explanation</strong>
          <p>An ASL video will be added here.</p>
        </div>
      </div> */}

      <section className={styles.quickActions}>
        <h2>What Do You Need Right Now?</h2>

        <div className={styles.quickActionGrid}>
          <a
            href={LINKS.eoir}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickAction}
          >
            <CalendarDays size={32} aria-hidden="true" />
            <span>Check My Court Date</span>
            <ExternalLink size={16} aria-hidden="true" />
          </a>

          <a
            href={LINKS.detention}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickAction}
          >
            <MapPin size={32} aria-hidden="true" />
            <span>Find Someone Detained</span>
            <ExternalLink size={16} aria-hidden="true" />
          </a>

          <Link href={`${BASE}/legal-help`} className={styles.quickAction}>
            <Scale size={32} aria-hidden="true" />
            <span>Find Legal Help</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className={styles.noticeSection}>
        <ShieldAlert size={30} aria-hidden="true" />
        <div>
          <h2>Do Not Miss Your Court Hearing</h2>
          <p>
            Missing a hearing can have serious consequences. Check your official
            court notice and ask for help if you do not understand it.
          </p>
        </div>
      </section>

      <section className={styles.topicsSection}>
        <h2 className={styles.sectionHeading}>
          Learn About Immigration Court & Detention
        </h2>

        <div className={styles.topicGrid}>
          {sections.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>

      <section className={styles.interpreterSection}>
        <InterpreterRequest />
      </section>

      <section className={styles.checklistSection}>
        <h2>Get Ready for Immigration Court</h2>
        <p>These things can help you prepare.</p>

        <div className={styles.checklistGrid}>
          {courtChecklist.map((item) => (
            <article className={styles.checklistCard} key={item.title}>
              <Picture src={item.image} alt="" />
              <div className={styles.checklistText}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.helpSection}>
        <Scale size={34} aria-hidden="true" />
        <div>
          <h2>Need Help With Your Immigration Case?</h2>
          <p>
            An immigration lawyer or DOJ-accredited representative can explain
            your options.
          </p>

          <Link href={`${BASE}/legal-help`} className={styles.primaryButton}>
            Find Immigration Legal Help
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className={styles.nextSteps}>
        <h2>Continue Learning</h2>

        <div className={styles.nextLinks}>
          <Link href={`${BASE}/documents`}>
            <FileText size={20} aria-hidden="true" />
            Immigration Letters
          </Link>

          <Link href={`${BASE}/case-status`}>
            <Search size={20} aria-hidden="true" />
            Check My Case
          </Link>

          <Link href={`${BASE}/dictionary`}>
            <BookOpen size={20} aria-hidden="true" />
            Immigration Vocabulary
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          <strong>Educational information only.</strong> This page provides
          general information, not individualized legal advice. Court
          procedures, deadlines, and immigration rules may change.
        </p>

        <Link href={BASE}>
          <ArrowLeft size={17} aria-hidden="true" />
          Back to Immigration Information
        </Link>
      </footer>
    </main>
  );
}
