
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
  Copy,
  ExternalLink,
  FileText,
  Languages,
  MessageCircleWarning,
  Scale,
  ShieldAlert,
  Users,
} from "lucide-react";
import { languages } from "../languages";
import styles from "./page.module.css";

const BASE = "/programs/immigration-support/information";

const LINKS = {
  eoirComplaint:
    "https://www.justice.gov/eoir/filing-a-complaint-regarding-an-immigration-court-interpreter",
  eoirPolicy:
    "https://www.justice.gov/eoir/policy-manual-eoir/part-II/icpm/chapter-3-10",
  dhsComplaint:
    "https://www.dhs.gov/file-civil-rights-complaint",
  ada:
    "https://www.ada.gov/resources/effective-communication/",
  legalDirectory:
    "https://www.immigrationadvocates.org/legaldirectory/",
};

const complaintDestinations = {
  court: {
    label: "Immigration court (EOIR)",
    agency: "Executive Office for Immigration Review (EOIR)",
    email: "complaints.interpreter@usdoj.gov",
    url: LINKS.eoirComplaint,
    button: "EOIR Interpreter Complaint Instructions",
    note:
      "This is the specific EOIR process for concerns about immigration court interpreters.",
  },
  uscis: {
    label: "USCIS appointment or interview",
    agency: "DHS Office for Civil Rights and Civil Liberties (CRCL)",
    email: "",
    url: LINKS.dhsComplaint,
    button: "DHS Civil Rights Complaint",
    note:
      "DHS CRCL receives complaints involving language access and civil rights in DHS programs.",
  },
  ice: {
    label: "ICE detention or ICE activity",
    agency: "DHS Office for Civil Rights and Civil Liberties (CRCL)",
    email: "",
    url: LINKS.dhsComplaint,
    button: "DHS Civil Rights Complaint",
    note:
      "If someone is detained, also ask the facility and their legal representative for immediate communication access.",
  },
  otherDhs: {
    label: "Other DHS agency or activity",
    agency: "DHS Office for Civil Rights and Civil Liberties (CRCL)",
    email: "",
    url: LINKS.dhsComplaint,
    button: "DHS Civil Rights Complaint",
    note:
      "This includes possible language-access concerns involving other DHS components.",
  },
  lawyer: {
    label: "Lawyer or nonprofit legal office",
    agency: "Legal service provider",
    email: "",
    url: LINKS.ada,
    button: "Learn About Effective Communication",
    note:
      "Ask the office to correct the communication problem. Depending on the circumstances, disability-rights or professional complaint processes may also apply.",
  },
  other: {
    label: "Somewhere else / Not sure",
    agency: "Organization responsible for the appointment",
    email: "",
    url: `${BASE}/legal-help`,
    internal: true,
    button: "Find Legal Help",
    note:
      "Different agencies have different complaint procedures. A qualified advocate or legal professional can help identify the correct process.",
  },
};

const topics = [
  {
    id: "did-not-understand",
    number: "1",
    title: "I Did Not Understand My Interpreter",
    question: "The interpreter signed, but I did not understand.",
    image: "/dictionary/interpreter-problem.png",
    icon: MessageCircleWarning,
    alt: "A Deaf person having difficulty understanding an interpreter",
    short:
      "You can explain the problem and ask for communication that works for you.",
    details: [
      {
        title: "What should I do right away?",
        text:
          "Tell the judge, officer, or person running the appointment that you do not understand the interpreter. Ask them to stop or pause so the problem can be addressed.",
      },
      {
        title: "What if the interpreter uses the wrong sign language?",
        text:
          "Explain which language you use. ASL is not the same as Mexican, Honduran, Guatemalan, or other national sign languages.",
      },
      {
        title: "Can I ask for someone else?",
        text:
          "You can request a different qualified interpreter, a Deaf interpreter, or an interpreting team when needed for effective communication.",
      },
      {
        title: "What should I write down afterward?",
        text:
          "Record the date, place, interpreter's name if known, what you could not understand, what you requested, and what happened next.",
      },
    ],
  },
  {
    id: "need-interpreter",
    number: "2",
    title: "I Need an Interpreter",
    question: "I need to communicate in my language.",
    image: "/dictionary/interpreter.png",
    icon: Languages,
    alt: "An interpreter supporting communication",
    short:
      "Ask for a qualified interpreter before your appointment or hearing.",
    details: [
      {
        title: "Immigration court",
        text:
          "EOIR provides interpreters at government expense when needed for a person to understand and participate in removal proceedings. Request interpreting as early as possible.",
      },
      {
        title: "USCIS and ICE",
        text:
          "DHS agencies have language-access and civil-rights responsibilities. The process for requesting an interpreter depends on the agency and type of appointment.",
      },
      {
        title: "Lawyers and legal organizations",
        text:
          "Many legal service providers have obligations to communicate effectively with people with disabilities under the ADA or Section 504, where applicable.",
      },
      {
        title: "Are written notes enough?",
        text:
          "Written notes may work for some simple conversations. They are not automatically sufficient for complicated legal discussions, especially when the person does not communicate effectively through written English.",
      },
    ],
  },
  {
    id: "different-support",
    number: "3",
    title: "I Need Different Communication Support",
    question: "ASL does not work for me.",
    image: "/dictionary/communication-support.png",
    icon: Users,
    alt: "People using individualized communication support",
    short:
      "Tell the agency or legal office what communication support you need.",
    details: [
      {
        title: "Different signed languages",
        text:
          "A Deaf person may use a national or regional sign language other than ASL. Ask for an interpreter who understands that language.",
      },
      {
        title: "Deaf interpreters",
        text:
          "Some people benefit from a qualified Deaf interpreter working with another interpreter as a team.",
      },
      {
        title: "DeafBlind communication",
        text:
          "Some DeafBlind people use tactile signing, protactile communication, or other individualized methods.",
      },
      {
        title: "Home signs and emerging language",
        text:
          "A person may use home signs or have limited access to a conventional signed language. Communication planning may require specialized assessment and support.",
      },
      {
        title: "Other supports",
        text:
          "Depending on the person, visual aids, captioning, assistive technology, or plain-language explanations may help. These do not automatically replace a qualified interpreter.",
      },
    ],
  },
  {
    id: "make-complaint",
    number: "4",
    title: "I Want to Make a Complaint",
    question: "I asked for help, but communication did not work.",
    image: "/dictionary/file-complaint.png",
    icon: FileText,
    alt: "A person preparing a written complaint",
    short:
      "You can report a problem with an interpreter or communication access.",
    details: [
      {
        title: "Immigration court",
        text:
          "EOIR has a specific process for complaints about immigration court interpreters. You can report what happened even if you do not know every detail.",
      },
      {
        title: "USCIS or ICE",
        text:
          "The DHS Office for Civil Rights and Civil Liberties accepts complaints about possible civil-rights and language-access problems in DHS programs.",
      },
      {
        title: "What if I do not write English?",
        text:
          "DHS accepts civil-rights complaints in languages other than English. You may also ask someone you trust to help document what happened.",
      },
      {
        title: "Will a complaint change my immigration case?",
        text:
          "Not automatically. An interpreter complaint is not the same as a motion, appeal, or request to reopen an immigration case.",
      },
    ],
  },
  {
    id: "get-support",
    number: "5",
    title: "I Need Help With My Complaint",
    question: "I need someone to help explain what happened.",
    image: "/dictionary/get-help.png",
    icon: Scale,
    alt: "A Deaf person receiving support from an advocate",
    short:
      "Hands United may be able to help you identify communication needs and complaint options.",
    details: [
      {
        title: "How can Hands United help?",
        text:
          "Hands United / Manos Unidas may be able to help document communication barriers, identify the appropriate complaint process, and coordinate interpreter referrals when available.",
      },
      {
        title: "What should I save?",
        text:
          "Keep appointment notices, emails, interpreter requests, written responses, and notes about what happened.",
      },
      {
        title: "Do I need legal help too?",
        text:
          "If the communication problem affected an immigration hearing, interview, decision, or deadline, contact a qualified immigration legal professional promptly.",
      },
    ],
  },
];

const problems = [
  {
    value: "wrong-language",
    label: "The interpreter used a language I do not understand.",
  },
  {
    value: "not-understood",
    label: "I could not understand the interpreter's signing.",
  },
  {
    value: "no-interpreter",
    label: "No interpreter was provided.",
  },
  {
    value: "written-only",
    label: "I was told to communicate through writing.",
  },
  {
    value: "not-qualified",
    label: "The interpreter could not communicate effectively with me.",
  },
  {
    value: "no-deaf-interpreter",
    label: "I requested a Deaf interpreter or team but did not receive one.",
  },
  {
    value: "other",
    label: "Something else happened.",
  },
];

function Picture({ src, alt, Icon }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={styles.picture}>
      {src && !failed ? (
        <Image
          src={src}
          alt={alt}
          width={360}
          height={360}
          className={styles.pictureImage}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={styles.pictureFallback} role="img" aria-label={alt}>
          <Icon size={76} strokeWidth={1.5} aria-hidden="true" />
        </div>
      )}
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

function TopicCard({ topic }) {
  return (
    <article className={styles.topicCard} id={topic.id}>
      <div className={styles.topicImage}>
        <Picture
          src={topic.image}
          alt={topic.alt}
          Icon={topic.icon}
        />
      </div>

      <div className={styles.topicContent}>
        <div className={styles.topicHeading}>
          <span className={styles.numberBadge}>{topic.number}</span>
          <h2>{topic.title}</h2>
        </div>

        <p className={styles.topicQuestion}>{topic.question}</p>
        <p className={styles.topicShort}>{topic.short}</p>

        <Expandable label="Learn more">
          <div className={styles.detailsList}>
            {topic.details.map((detail) => (
              <div className={styles.detailItem} key={detail.title}>
                <h3>{detail.title}</h3>
                <p>{detail.text}</p>
              </div>
            ))}
          </div>
        </Expandable>
      </div>
    </article>
  );
}

function ComplaintGenerator() {
  const [location, setLocation] = useState("court");
  const [language, setLanguage] = useState("");
  const [customLanguage, setCustomLanguage] = useState("");
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [interpreterName, setInterpreterName] = useState("");
  const [judgeName, setJudgeName] = useState("");
  const [details, setDetails] = useState("");
  const [contact, setContact] = useState("");
  const [copied, setCopied] = useState(false);

  const destination = complaintDestinations[location];

  const otherValues = [
    "A sign language not listed",
    "A language not listed",
    "An unidentified regional or home sign system",
  ];

  const needsCustomLanguage = otherValues.includes(language);

  const selectedLanguage = needsCustomLanguage
    ? customLanguage.trim() || "[my language]"
    : language || "[my language]";

  const selectedDescriptions = problems
    .filter((problem) => selectedProblems.includes(problem.value))
    .map((problem) => problem.label);

  const complaintMessage = [
    `Subject: Interpreter or Communication Access Complaint`,
    "",
    `To: ${destination.agency}`,
    "",
    "Hello,",
    "",
    "I am reporting a problem with interpreting or communication access.",
    "",
    `Where it happened: ${destination.label}`,
    `Date: ${date || "[date]"}`,
    `Location / court / facility: ${place || "[location]"}`,
    `My preferred language: ${selectedLanguage}`,
    ...(location === "court"
      ? [
          `Interpreter's name: ${interpreterName || "Unknown"}`,
          `Immigration judge's name: ${judgeName || "Unknown"}`,
        ]
      : []),
    "",
    "The problem:",
    selectedDescriptions.length
      ? selectedDescriptions.map((item) => `- ${item}`).join("\n")
      : "[Describe the communication problem]",
    "",
    "More information:",
    details.trim() || "[Explain what happened and what you requested]",
    "",
    "I need communication that allows me to understand and participate fully.",
    "Please review this concern and explain what steps can be taken.",
    "",
    `My contact information: ${contact.trim() || "[name and contact information]"}`,
    "",
    "Thank you.",
  ].join("\n");

  function toggleProblem(value) {
    setSelectedProblems((previous) =>
      previous.includes(value)
        ? previous.filter((item) => item !== value)
        : [...previous, value]
    );
    setCopied(false);
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(complaintMessage);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const groups = [
    "Signed Languages",
    "Spoken Languages",
    "Other / Not Sure",
  ];

  return (
    <div className={styles.complaintGenerator} id="complaint-generator">
      <div className={styles.generatorHeading}>
        <MessageCircleWarning size={34} aria-hidden="true" />
        <div>
          <h2>Report an Interpreter Problem</h2>
          <p>
            Answer a few questions. Copy a message to report what happened.
          </p>
        </div>
      </div>

      <div className={styles.privacyNote}>
        <ShieldAlert size={21} aria-hidden="true" />
        <p>
          This form creates a message in your browser. It does not send
          your complaint to Hands United or any government agency.
          Avoid entering unnecessary sensitive information on a shared device.
        </p>
      </div>

      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <label htmlFor="complaint-location">
            1. Where did the problem happen?
          </label>
          <select
            id="complaint-location"
            className={styles.formInput}
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
              setCopied(false);
            }}
          >
            {Object.entries(complaintDestinations).map(([value, item]) => (
              <option key={value} value={value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formField}>
          <label htmlFor="complaint-language">
            2. What language do you use?
          </label>
          <select
            id="complaint-language"
            className={styles.formInput}
            value={language}
            onChange={(event) => {
              setLanguage(event.target.value);
              setCopied(false);
            }}
          >
            <option value="">Choose a language</option>
            {groups.map((group) => (
              <optgroup key={group} label={group}>
                {languages
                  .filter((item) => item.group === group)
                  .map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>

        {needsCustomLanguage && (
          <div className={styles.formField}>
            <label htmlFor="complaint-custom-language">
              Describe your language
            </label>
            <input
              id="complaint-custom-language"
              className={styles.formInput}
              type="text"
              value={customLanguage}
              onChange={(event) => {
                setCustomLanguage(event.target.value);
                setCopied(false);
              }}
              placeholder="Language or communication method"
            />
          </div>
        )}

        <fieldset className={styles.problemFieldset}>
          <legend>3. What went wrong? Choose all that apply.</legend>

          <div className={styles.problemOptions}>
            {problems.map((problem) => (
              <label className={styles.problemOption} key={problem.value}>
                <input
                  type="checkbox"
                  checked={selectedProblems.includes(problem.value)}
                  onChange={() => toggleProblem(problem.value)}
                />
                <span>{problem.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className={styles.formField}>
          <label htmlFor="complaint-date">4. When did it happen?</label>
          <input
            id="complaint-date"
            className={styles.formInput}
            type="date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
              setCopied(false);
            }}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="complaint-place">
            5. Where exactly did it happen?
          </label>
          <input
            id="complaint-place"
            className={styles.formInput}
            type="text"
            value={place}
            onChange={(event) => {
              setPlace(event.target.value);
              setCopied(false);
            }}
            placeholder="Court, office, city, or facility"
          />
        </div>

        {location === "court" && (
          <>
            <div className={styles.formField}>
              <label htmlFor="complaint-interpreter">
                Interpreter's name (if known)
              </label>
              <input
                id="complaint-interpreter"
                className={styles.formInput}
                type="text"
                value={interpreterName}
                onChange={(event) => {
                  setInterpreterName(event.target.value);
                  setCopied(false);
                }}
                placeholder="Name or unknown"
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="complaint-judge">
                Immigration judge's name (if known)
              </label>
              <input
                id="complaint-judge"
                className={styles.formInput}
                type="text"
                value={judgeName}
                onChange={(event) => {
                  setJudgeName(event.target.value);
                  setCopied(false);
                }}
                placeholder="Name or unknown"
              />
            </div>
          </>
        )}

        <div className={`${styles.formField} ${styles.fullWidth}`}>
          <label htmlFor="complaint-details">
            6. Tell us what happened
          </label>
          <textarea
            id="complaint-details"
            className={styles.formTextarea}
            rows={5}
            value={details}
            onChange={(event) => {
              setDetails(event.target.value);
              setCopied(false);
            }}
            placeholder="What could you not understand? Did you ask for help? What happened next?"
          />
        </div>

        <div className={`${styles.formField} ${styles.fullWidth}`}>
          <label htmlFor="complaint-contact">
            7. Your name and contact information (optional here)
          </label>
          <textarea
            id="complaint-contact"
            className={styles.formTextarea}
            rows={2}
            value={contact}
            onChange={(event) => {
              setContact(event.target.value);
              setCopied(false);
            }}
            placeholder="Name, email, and accessible way to contact you"
          />
        </div>
      </div>

      <div className={styles.messageCard}>
        <h3>Your Complaint Message</h3>
        <p className={styles.messageInstructions}>
          Review the message. Replace any information in brackets
          before sending it.
        </p>

        <pre className={styles.messagePreview}>
          {complaintMessage}
        </pre>

        <button
          type="button"
          className={styles.copyButton}
          onClick={copyMessage}
        >
          {copied ? (
            <CheckCircle2 size={19} aria-hidden="true" />
          ) : (
            <Copy size={19} aria-hidden="true" />
          )}
          {copied ? "Copied" : "Copy Complaint"}
        </button>
      </div>

      <div className={styles.destinationCard}>
        <h3>Where Do I Send My Complaint?</h3>
        <p>{destination.note}</p>

        {destination.email && (
          <div className={styles.emailDestination}>
            <strong>EOIR interpreter complaint email:</strong>
            <a href={`mailto:${destination.email}`}>
              {destination.email}
            </a>
          </div>
        )}

        {destination.internal ? (
          <Link href={destination.url} className={styles.primaryButton}>
            {destination.button}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        ) : (
          <a
            href={destination.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            {destination.button}
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        )}

        {location === "court" && (
          <p className={styles.smallNote}>
            EOIR requests the interpreter's name, immigration judge's
            name, hearing date and time, court location, explanation,
            and complainant contact details. Provide what you know
            and consult EOIR's instructions.
          </p>
        )}
      </div>

      <div className={styles.deadlineWarning}>
        <ShieldAlert size={24} aria-hidden="true" />
        <p>
          <strong>Important:</strong> Filing an interpreter complaint does
          not automatically change a court decision, reopen a case,
          extend a deadline, or stop removal. If the problem affected
          your case, seek qualified immigration legal help immediately.
        </p>
      </div>
    </div>
  );
}

export default function AccessibilityPage() {
  return (
    <main className={styles.container}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/programs/immigration-support">
          Immigration Support
        </Link>
        <span aria-hidden="true">›</span>
        <Link href={BASE}>Immigration Information</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Accessibility</span>
      </nav>

      <header className={styles.header}>
        <h1>Accessibility & Communication Rights</h1>
        <p className={styles.lead}>
          You need to understand. You need to be understood.
        </p>
        <p>
          Learn how to request communication access and report problems.
        </p>
      </header>

      {/* <div className={styles.videoPlaceholder}>
        <Languages size={28} aria-hidden="true" />
        <div>
          <strong>ASL Explanation</strong>
          <p>An ASL video will be added here.</p>
        </div>
      </div> */}

      <section className={styles.featuredSection}>
        <div className={styles.featuredIcon}>
          <MessageCircleWarning size={54} aria-hidden="true" />
        </div>

        <div>
          <h2>I Did Not Understand My Interpreter</h2>
          <p>
            You can report an interpreter problem, including when
            the interpreter used a language you do not understand.
          </p>
          <a
            href="#complaint-generator"
            className={styles.primaryButton}
          >
            Report an Interpreter Problem
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className={styles.rightsSection}>
        <h2>Interpreter Present Does Not Always Mean Interpreter Understood</h2>

        <div className={styles.rightsGrid}>
          <div className={styles.rightsCard}>
            <span className={styles.rightsSymbol} aria-hidden="true">
              ✕
            </span>
            <h3>Wrong Language</h3>
            <p>The interpreter uses signs I do not understand.</p>
          </div>

          <div className={styles.rightsCard}>
            <span className={styles.rightsSymbol} aria-hidden="true">
              ✕
            </span>
            <h3>Writing Does Not Work</h3>
            <p>Written English does not let me understand the conversation.</p>
          </div>

          <div className={styles.rightsCard}>
            <span className={styles.rightsSymbol} aria-hidden="true">
              ✓
            </span>
            <h3>Communication That Works</h3>
            <p>I can understand, ask questions, and explain my answers.</p>
          </div>
        </div>

        <p className={styles.rightsNote}>
          Effective communication depends on the person's needs and the
          situation. Different agencies and organizations have different
          legal obligations.
        </p>

        <a
          href={LINKS.ada}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resourceLink}
        >
          Learn About ADA Effective Communication
          <ExternalLink size={17} aria-hidden="true" />
        </a>
      </section>

      <section className={styles.topicsSection}>
        <h2 className={styles.sectionHeading}>
          Learn About Your Communication Rights
        </h2>

        <div className={styles.topicGrid}>
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>

      <section className={styles.generatorSection}>
        <ComplaintGenerator />
      </section>

      <section className={styles.helpSection}>
        <div className={styles.helpHeading}>
          <Users size={36} aria-hidden="true" />
          <div>
            <h2>Hands United Can Help</h2>
            <p>
              Hands United / Manos Unidas may be able to help you
              document communication problems, understand complaint
              options, and coordinate interpreter referrals when available.
            </p>
          </div>
        </div>

        <Link
          href={`${BASE}/legal-help`}
          className={styles.primaryButton}
        >
          Find Immigration Legal Help
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section className={styles.nextSteps}>
        <h2>More Immigration Resources</h2>

        <div className={styles.nextLinks}>
          <Link href={`${BASE}/court-detention`}>
            <Scale size={20} aria-hidden="true" />
            Immigration Court & Detention
          </Link>

          <Link href={`${BASE}/legal-help`}>
            <Users size={20} aria-hidden="true" />
            Find Legal Help
          </Link>

          <Link href={`${BASE}/dictionary`}>
            <BookOpen size={20} aria-hidden="true" />
            Immigration Vocabulary
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          <strong>Educational information only.</strong> This page does
          not provide individualized legal advice. Complaint processes
          and legal requirements vary by agency and circumstance.
        </p>

        <Link href={BASE}>
          <ArrowLeft size={17} aria-hidden="true" />
          Back to Immigration Information
        </Link>
      </footer>
    </main>
  );
}
