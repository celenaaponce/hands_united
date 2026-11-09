"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  Copy,
  ExternalLink,
  FileText,
  Languages,
  Scale,
  Search,
  ShieldAlert,
} from "lucide-react";

import { languages } from "../languages";
import styles from "./page.module.css";

const BASE = "/programs/immigration-support/information";

const legalDirectory = "https://www.immigrationadvocates.org/legaldirectory/";

const helpOptions = [
  {
    title: "Immigration Lawyer",
    image: "/dictionary/attorney-lawyer.png",
    alt: "An immigration lawyer helping a person",
    short:
      "A lawyer can explain your choices and help with your immigration case.",
    details:
      "An immigration lawyer is licensed to provide legal advice. Ask whether they work on your type of case, how much their services cost, and how they will provide language access.",
  },
  {
    title: "DOJ-Accredited Representative",
    image: "/dictionary/accredited-rep.png",
    alt: "An accredited representative helping a person",
    short:
      "A trained person who can give immigration legal help through an approved organization.",
    details:
      "A DOJ-accredited representative is not a lawyer. They must work through a DOJ-recognized organization. Their authorization may be limited, so check that they can help with your particular case.",
  },
];

const appointmentItems = [
  {
    image: "/dictionary/notice-to-appear.png",
    title: "Immigration letters",
    text: "Bring letters from USCIS, ICE, or immigration court.",
  },
  {
    image: "/dictionary/a-number.png",
    title: "Your case numbers",
    text: "Bring your A-Number or receipt number, if you have one.",
  },
  {
    image: "/dictionary/deadline.png",
    title: "Important dates",
    text: "Bring hearing dates and deadlines.",
  },
  {
    image: "/dictionary/application.png",
    title: "Applications",
    text: "Bring copies of forms you already sent.",
  },
];

const scamWarnings = [
  {
    icon: "✍️",
    title: "Do not sign blank forms",
    text: "Read and understand a form before signing.",
  },
  {
    icon: "⚠️",
    title: "Be careful of promises",
    text: "Nobody can guarantee your immigration case will be approved.",
  },
  {
    icon: "🔎",
    title: "Check who is helping",
    text: "A U.S. notary public is not automatically allowed to give immigration legal advice.",
  },
];

function SectionTitle({ number, title, subtitle }) {
  return (
    <div className={styles.sectionTitle}>
      <span className={styles.stepNumber}>{number}</span>
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}

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

export default function LegalHelpPage() {
  const [copied, setCopied] = useState(false);

  const [preferredLanguage, setPreferredLanguage] = useState(
    "American Sign Language (ASL)",
  );

  const interpreterMessage =
    `Hello,\n\n` +
    `I am Deaf and am requesting a qualified interpreter for my immigration legal appointment.\n\n` +
    `My preferred language is ${preferredLanguage}.\n\n` +
    `Under the Americans with Disabilities Act (ADA), and Section 504 of the Rehabilitation Act where applicable, I have the right to effective communication.\n\n` +
    `Written notes are not an effective substitute for a qualified interpreter for my legal consultation. I need to communicate fully and understand the legal information being discussed.\n\n` +
    `Hands United / Manos Unidas can assist your office with identifying and coordinating qualified interpreters if needed (celena.a.ponce@gmail.com).\n\n` +
    `Please confirm how interpreting services will be arranged before my appointment.\n\n` +
    `Thank you.`;

  async function copyInterpreterMessage() {
    try {
      await navigator.clipboard.writeText(interpreterMessage);
      setCopied(true);
    } catch (error) {
      console.error("Unable to copy message:", error);
      setCopied(false);
    }
  }

  return (
    <main className={styles.container}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/programs/immigration-support">Immigration Support</Link>
        <span aria-hidden="true">›</span>
        <Link href={BASE}>Immigration Information</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Find Legal Help</span>
      </nav>

      <header className={styles.header}>
        <h1>Find Immigration Legal Help</h1>
        <p className={styles.lead}>Need help with your immigration case?</p>
        <p>Find someone who is allowed to give immigration legal advice.</p>
      </header>

      {/* <div className={styles.videoPlaceholder}>
        <Languages size={24} aria-hidden="true" />
        <div>
          <strong>ASL explanation</strong>
          <p>An ASL video will be added here.</p>
        </div>
      </div> */}

      {/* STEP 1 */}
      <section className={styles.section} aria-labelledby="step1">
        <SectionTitle
          number="1"
          title="Who can help me?"
          subtitle="These two types of professionals can give immigration legal advice."
        />

        <div className={styles.twoColumns} id="step1">
          {helpOptions.map((option) => (
            <article className={styles.visualCard} key={option.title}>
              <Picture src={option.image} alt={option.alt} />

              <div className={styles.cardBody}>
                <h3>{option.title}</h3>
                <p>{option.short}</p>

                <Expandable label="Learn more">
                  <p>{option.details}</p>
                </Expandable>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STEP 2 */}
      <section className={styles.section} aria-labelledby="step2">
        <SectionTitle
          number="2"
          title="Find legal help"
          subtitle="Look for a lawyer or legal organization."
        />

        <div className={styles.actionCard} id="step2">
          <div className={styles.actionIllustration}>
            <Search size={76} strokeWidth={1.6} aria-hidden="true" />
            <Scale size={54} strokeWidth={1.6} aria-hidden="true" />
          </div>

          <div className={styles.actionBody}>
            <h3>Find help near you</h3>
            <p>
              Search for immigration legal services in your state. Some
              organizations offer free or low-cost help.
            </p>

            <a
              href={legalDirectory}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              Find Immigration Legal Help
              <ExternalLink size={18} aria-hidden="true" />
            </a>

            <Expandable label="How do I use the directory?">
              <ol>
                <li>Open the legal directory.</li>
                <li>Choose your state or location.</li>
                <li>
                  Look for an organization that handles your type of case.
                </li>
                <li>
                  Contact them and ask about appointments and interpreters.
                </li>
              </ol>
              <p>
                Services and appointment availability vary. Being listed does
                not guarantee that a provider can accept your case.
              </p>
            </Expandable>
          </div>
        </div>
      </section>

      {/* STEP 3 */}
      <section className={styles.section} aria-labelledby="step3">
        <SectionTitle
          number="3"
          title="I need an interpreter"
          subtitle="Tell the legal office how you communicate."
        />

        <div className={styles.horizontalCard} id="step3">
          <Picture
            src="/dictionary/interpreter.png"
            alt="An interpreter helping people communicate"
            className={styles.horizontalPicture}
          />

          <div className={styles.horizontalBody}>
            <h3>Ask for communication access</h3>
            <p>
              Tell the office your preferred language before your appointment.
            </p>
            <p>
              You may need ASL, a Deaf interpreter, another sign language, or
              spoken-language interpretation.
            </p>

            <div className={styles.messageCard}>
              <label
                htmlFor="preferred-language"
                className={styles.languageLabel}
              >
                My preferred language
              </label>

              <select
                id="preferred-language"
                className={styles.languageSelect}
                value={preferredLanguage}
                onChange={(event) => {
                  setPreferredLanguage(event.target.value);
                  setCopied(false);
                }}
              >
                {languages.map((language) => (
                  <option key={language.value} value={language.value}>
                    {language.label}
                  </option>
                ))}
              </select>

              <strong>Message you can send</strong>

              <p>{interpreterMessage}</p>

              <button
                type="button"
                className={styles.copyButton}
                onClick={copyInterpreterMessage}
              >
                {copied ? (
                  <Check size={18} aria-hidden="true" />
                ) : (
                  <Copy size={18} aria-hidden="true" />
                )}
                {copied ? "Copied" : "Copy message"}
              </button>
            </div>

            <Expandable label="More about interpreters">
              <p>
                Ask who will arrange the interpreter, whether they are qualified
                for legal appointments, and whether there is any cost.
                Communication access obligations depend on the provider and
                circumstances.
              </p>
              <p>
                For DeafBlind clients or people who use another signed language,
                explain the specific interpreting team or communication support
                needed.
              </p>
            </Expandable>
          </div>
        </div>
      </section>

      {/* STEP 4 */}
      <section className={styles.section} aria-labelledby="step4">
        <SectionTitle
          number="4"
          title="Be careful of scams"
          subtitle="Some people take money but cannot legally help with immigration cases."
        />

        <div className={styles.scamGrid} id="step4">
          {scamWarnings.map((warning) => (
            <article className={styles.scamCard} key={warning.title}>
              <span className={styles.scamEmoji} aria-hidden="true">
                {warning.icon}
              </span>
              <h3>{warning.title}</h3>
              <p>{warning.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.storyCard}>
          <div className={styles.storyVisual}>
            <BookOpen size={64} strokeWidth={1.5} aria-hidden="true" />
            {/* <span>FTC</span> */}
          </div>

          <div className={styles.storyBody}>
            <h3>Read a picture story about immigration scams</h3>
            <p>Miriam and Pedro learn how to recognize a dishonest notario.</p>
            <p className={styles.smallText}>
              Illustrated story by the Federal Trade Commission. English PDF, 16
              pages.
            </p>

            <a
              href="https://www.consumer.ftc.gov/sites/www.consumer.ftc.gov/files/articles/pdf/pdf-0203-fotonovela-notario-scams.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              Read the Picture Story
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <Expandable label="More about avoiding scams">
          <p>
            Never sign a blank immigration form or give false information. Keep
            copies of your paperwork and ask for a written explanation of fees
            and services.
          </p>
          <p>
            A notario público in the United States is not automatically
            authorized to provide immigration legal advice.
          </p>
          <a
            href="https://www.uscis.gov/avoid-scams"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            More scam-prevention information from USCIS
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </Expandable>
      </section>

      {/* STEP 5 */}
      <section className={styles.section} aria-labelledby="step5">
        <SectionTitle
          number="5"
          title="Get ready for your appointment"
          subtitle="Bring what you have. You can still ask for help if you do not have everything."
        />

        <div className={styles.preparationGrid} id="step5">
          {appointmentItems.map((item) => (
            <article className={styles.preparationCard} key={item.title}>
              <Picture src={item.image} alt="" />
              <div className={styles.preparationText}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <Expandable label="Questions to ask your lawyer">
          <ul>
            <li>What are my immigration options?</li>
            <li>What deadlines do I have?</li>
            <li>What documents do I need?</li>
            <li>What could happen in my case?</li>
            <li>How much will legal help cost?</li>
            <li>How can I contact you?</li>
            <li>How will my interpreter be provided?</li>
          </ul>
        </Expandable>
      </section>

      {/* URGENT HELP */}
      <section className={styles.urgentSection}>
        <ShieldAlert size={36} aria-hidden="true" />
        <div>
          <h2>Do you have an urgent immigration problem?</h2>
          <p>
            Court hearing soon? Removal order? Immigration detention? Important
            deadline?
          </p>
          <p>
            Contact a qualified immigration legal professional as soon as
            possible. Asking for help does not stop a legal deadline.
          </p>

          <a
            href={legalDirectory}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Find Legal Help
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className={styles.nextSteps}>
        <h2>More Immigration Resources</h2>
        <div className={styles.nextLinks}>
          <Link href={`${BASE}/dictionary`}>
            <BookOpen size={20} aria-hidden="true" />
            Vocabulary Dictionary
          </Link>
          <Link href={`${BASE}/documents`}>
            <FileText size={20} aria-hidden="true" />
            Immigration Letters
          </Link>
          <Link href={`${BASE}/case-status`}>
            <ClipboardCheck size={20} aria-hidden="true" />
            Check My Case
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          <strong>Educational information only.</strong> This page does not
          provide legal advice or create an attorney-client relationship.
          Immigration rules and procedures may change.
        </p>

        <Link href={BASE}>
          <ArrowLeft size={17} aria-hidden="true" />
          Back to Immigration Information
        </Link>
      </footer>
    </main>
  );
}
