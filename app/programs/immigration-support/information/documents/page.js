"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const BASE = "/programs/immigration-support";
const INFO = `${BASE}/information`;

const categories = [
  {
    id: "uscis",
    image: "/letters/uscis.jpeg",
    title: "USCIS Letters",
    description:
      "Letters about immigration applications, appointments, requests, and decisions.",
  },
  {
    id: "eoir",
    image: "/letters/eoir-logo.jpeg",
    title: "Immigration Court",
    description:
      "Notices about immigration court cases, hearings, and court decisions.",
  },
  {
    id: "ice",
    image: "/letters/ice-logo.jpeg",
    title: "ICE Documents",
    description:
      "Documents about immigration enforcement, custody, and supervision.",
  },
  {
    id: "unknown",
    image: "/commboard/start-idk.png",
    title: "I Don't Know",
    description: "I received a document but do not know which agency sent it.",
  },
];

const documents = [
  // =========================
  // USCIS DOCUMENTS
  // =========================
  {
    id: "receipt",
    category: "uscis",
    title: "Receipt Notice",
    form: "Form I-797 / I-797C",
    image: "/letters/uscis-receipt.png",
    summary: "USCIS received an application, petition, or request.",
    explanation:
      "A receipt notice generally confirms that USCIS received a filing. It does not automatically mean the application was approved.",
    lookFor: [
      "Receipt number",
      "Applicant or petitioner name",
      "Type of application",
      "Received date",
      "Notice date",
      "Any instructions",
    ],
    nextSteps: [
      "Keep the notice in a safe place.",
      "Use the receipt number to check your USCIS case status.",
      "Read any instructions carefully.",
      "Keep your address updated with USCIS.",
    ],
    important:
      "A receipt notice is not the same as an approval notice or proof of lawful immigration status.",
    links: [
      {
        label: "USCIS — Check Case Status",
        href: "https://egov.uscis.gov/",
      },
      {
        label: "ASAP — Sample Immigration Documents",
        href: "https://asaptogether.org/en/sample-documents/",
      },
    ],
  },
  {
    id: "biometrics",
    category: "uscis",
    title: "Biometrics Appointment Notice",
    form: "Form I-797C",
    image: "/letters/uscis-biometrics.png",
    summary:
      "USCIS scheduled an appointment to collect fingerprints, a photograph, or other identifying information.",
    explanation:
      "USCIS may require biometrics as part of an immigration application. The notice provides information about when and where to attend.",
    lookFor: [
      "Appointment date",
      "Appointment time",
      "Appointment location",
      "Documents to bring",
      "Instructions for rescheduling",
    ],
    nextSteps: [
      "Read the entire appointment notice.",
      "Check the appointment date, time, and address.",
      "Review what identification or documents to bring.",
      "Follow the notice instructions if you cannot attend.",
      "Request communication accommodations if needed.",
    ],
    important:
      "Missing a required biometrics appointment without following the applicable instructions can affect an application.",
    links: [
      {
        label: "USCIS — Preparing for Your Biometrics Appointment",
        href: "https://www.uscis.gov/forms/filing-guidance/preparing-for-your-biometric-services-appointment",
      },
    ],
  },
  {
    id: "rfe",
    category: "uscis",
    title: "Request for Evidence",
    form: "RFE",
    image: "/letters/uscis-rfe.png",
    summary: "USCIS is asking for more information or documents.",
    explanation:
      "A Request for Evidence means USCIS needs additional evidence before making a decision on an application or petition.",
    lookFor: [
      "What documents USCIS is requesting",
      "Response deadline",
      "Instructions for submitting evidence",
      "Where to send the response",
      "Receipt number",
    ],
    nextSteps: [
      "Read the entire request carefully.",
      "Identify exactly what USCIS is asking for.",
      "Check the response deadline.",
      "Speak with an authorized immigration legal professional if you need help.",
      "Keep copies of anything submitted.",
    ],
    important:
      "An RFE has a response deadline. Failure to respond appropriately and on time may result in a denial.",
    links: [
      {
        label: "USCIS — Official Website",
        href: "https://www.uscis.gov/",
      },
      {
        label: "ASAP — Sample Documents",
        href: "https://asaptogether.org/en/sample-documents/",
      },
    ],
  },
  {
    id: "approval",
    category: "uscis",
    title: "Approval Notice",
    form: "Form I-797",
    image: "/letters/uscis-approval.png",
    summary: "USCIS approved a particular application, petition, or request.",
    explanation:
      "An approval notice explains which immigration filing USCIS approved. The legal effect depends on the type of application or petition.",
    lookFor: [
      "Type of application approved",
      "Approval date",
      "Validity dates, if listed",
      "Any next steps",
      "Information about additional documents",
    ],
    nextSteps: [
      "Read what USCIS actually approved.",
      "Check whether another appointment or process is required.",
      "Keep the approval notice in a safe place.",
      "Ask a qualified legal professional if you are unsure what the approval means for your status.",
    ],
    important:
      "Approval of a petition does not always mean a person has lawful status, a visa, or permission to work.",
    links: [
      {
        label: "USCIS — Official Website",
        href: "https://www.uscis.gov/",
      },
    ],
  },
  {
    id: "denial",
    category: "uscis",
    title: "Denial Notice",
    form: "Decision Notice",
    image: "/letters/uscis-denial.png",
    summary: "USCIS denied an application, petition, or request.",
    explanation:
      "A denial notice generally explains the reason for the decision. Some decisions may have appeal, motion, or other options, depending on the case.",
    lookFor: [
      "What was denied",
      "Reason for denial",
      "Date of decision",
      "Appeal or motion instructions, if any",
      "Deadlines",
    ],
    nextSteps: [
      "Read the notice carefully.",
      "Identify any deadlines.",
      "Keep the complete notice and envelope.",
      "Contact an authorized immigration legal professional promptly.",
    ],
    important:
      "Deadlines to challenge immigration decisions can be short. Do not assume every denial has the same options.",
    links: [
      {
        label: "USCIS — Appeals and Motions",
        href: "https://www.uscis.gov/forms/all-forms/questions-and-answers-appeals-and-motions",
      },
      {
        label: "DOJ — Find Legal Representation",
        href: "https://www.immigrationadvocates.org/legaldirectory/",
      },
    ],
  },

  // =========================
  // IMMIGRATION COURT (EOIR)
  // =========================
  {
    id: "nta",
    category: "eoir",
    title: "Notice to Appear",
    form: "Form I-862",
    image: "/letters/eoir-nta.png",
    summary:
      "A government document stating allegations and charges that may begin removal proceedings.",
    explanation:
      "A Notice to Appear, often called an NTA, describes why the government believes a person may be removable from the United States. It is used in immigration court proceedings.",
    lookFor: [
      "Name and A-number",
      "Allegations and legal charges",
      "Court information",
      "Hearing date and time, if listed",
      "Instructions",
    ],
    nextSteps: [
      "Keep the entire Notice to Appear.",
      "Check whether a court hearing has been scheduled.",
      "Use the EOIR case information system to check your case.",
      "Seek help from an immigration attorney or authorized representative.",
      "Keep your address updated with the appropriate agencies.",
    ],
    important:
      "A Notice to Appear may not list a hearing date. Check official court information and subsequent notices. Do not assume you have no court obligations.",
    links: [
      {
        label: "EOIR — Check Court Case",
        href: "https://acis.eoir.justice.gov/en/",
      },
      {
        label: "DOJ — Find Legal Representation",
        href: "https://www.immigrationadvocates.org/legaldirectory/",
      },
    ],
  },
  {
    id: "hearing",
    category: "eoir",
    title: "Notice of Hearing",
    form: "Immigration Court Notice",
    image: "/letters/eoir-hearing.png",
    summary:
      "A notice with information about a scheduled immigration court hearing.",
    explanation:
      "A Notice of Hearing tells a person when and where a scheduled immigration court hearing will take place, or provides other hearing details.",
    lookFor: [
      "Hearing date",
      "Hearing time",
      "Court location",
      "Whether the hearing is in person or remote",
      "A-number",
      "Any special instructions",
    ],
    nextSteps: [
      "Read the complete hearing notice.",
      "Confirm the hearing information with the immigration court.",
      "Plan how to attend the hearing.",
      "Contact the court about interpretation or accessibility needs.",
      "Seek authorized legal help before the hearing.",
    ],
    important:
      "Missing an immigration court hearing can lead to a removal order in a person's absence.",
    links: [
      {
        label: "EOIR — Check Court Case",
        href: "https://acis.eoir.justice.gov/en/",
      },
      {
        label: "EOIR — Immigration Court Information",
        href: "https://www.justice.gov/eoir",
      },
    ],
  },
  {
    id: "eoir-decision-grants",
    category: "eoir",
    title: "Immigration Judge's Decision — Granted",
    form: "Immigration Judge's Decision",
    image: "/letters/eoir-decision-grants.png",
    summary:
      "An immigration judge granted a person's request for relief, such as asylum.",
    explanation:
      "An immigration judge may grant asylum or another form of relief from removal. The meaning of the decision depends on what was granted and whether the decision is final.",
    lookFor: [
      "Your name and A-number",
      "The type of relief granted",
      "The date of the decision",
      "Whether the decision is final or can be appealed",
      "Any additional instructions",
    ],
    nextSteps: [
      "Read the entire decision carefully.",
      "Keep a copy for your records.",
      "Check whether either party has appealed or waived appeal.",
      "Speak with a qualified immigration attorney or accredited representative about your next steps.",
    ],
    important:
      "A favorable decision may not be final immediately. Appeal rights and other requirements depend on the decision and circumstances.",
    links: [
      {
        label: "EOIR — Official Website",
        href: "https://www.justice.gov/eoir",
      },
      {
        label: "EOIR — Check Court Case",
        href: "https://acis.eoir.justice.gov/en/",
      },
      {
        label: "DOJ — Find Legal Representation",
        href: "https://www.immigrationadvocates.org/legaldirectory/",
      },
    ],
  },
  {
    id: "eoir-decision-denies",
    category: "eoir",
    title: "Immigration Judge's Decision — Denied",
    form: "Immigration Judge's Decision",
    image: "/letters/eoir-decision-denies.png",
    summary:
      "An immigration judge denied a person's request for relief, such as asylum.",
    explanation:
      "An immigration judge may deny asylum or another form of relief from removal. The decision may include a removal order and information about appeal rights.",
    lookFor: [
      "Your name and A-number",
      "The type of relief denied",
      "The date of the decision",
      "Whether a removal order was issued",
      "Whether an appeal is available and the deadline",
    ],
    nextSteps: [
      "Read the entire decision carefully.",
      "Check whether you have the right to appeal.",
      "Pay close attention to any appeal deadline.",
      "Keep a copy of the decision.",
      "Contact a qualified immigration attorney or accredited representative as soon as possible.",
    ],
    important:
      "A denial may have serious consequences. Appeal rights and deadlines depend on the decision and procedural circumstances. Seek legal help promptly.",
    links: [
      {
        label: "EOIR — Official Website",
        href: "https://www.justice.gov/eoir",
      },
      {
        label: "EOIR — Check Court Case",
        href: "https://acis.eoir.justice.gov/en/",
      },
      {
        label: "DOJ — Find Legal Representation",
        href: "https://www.immigrationadvocates.org/legaldirectory/",
      },
    ],
  },

  // =========================
  // ICE DOCUMENTS
  // =========================
  {
    id: "ice-supervision",
    category: "ice",
    title: "Order of Supervision",
    form: "Form I-220B",
    image: "/letters/ice-supervision.png",
    summary:
      "A document describing conditions a person must follow while under immigration supervision.",
    explanation:
      "An Order of Supervision may require a person to follow specific reporting, address, or other conditions.",
    lookFor: [
      "Reporting instructions",
      "Check-in dates",
      "Required conditions",
      "Contact information",
      "Any changes to existing requirements",
    ],
    nextSteps: [
      "Read all conditions carefully.",
      "Keep a copy of the document.",
      "Track required appointments and reporting dates.",
      "Seek legal advice if you do not understand a condition.",
      "Request communication accommodations for required interactions.",
    ],
    important:
      "Failure to comply with supervision conditions can have serious consequences. The requirements depend on the individual document.",
    links: [
      {
        label: "ICE — Official Website",
        href: "https://www.ice.gov/",
      },
      {
        label: "DOJ — Find Legal Representation",
        href: "https://www.immigrationadvocates.org/legaldirectory/",
      },
    ],
  },
  {
    id: "ice-custody",
    category: "ice",
    title: "Custody Determination",
    form: "Form I-286",
    image: "/letters/ice-custody.png",
    summary: "A document concerning an immigration custody determination.",
    explanation:
      "A custody determination may provide information about whether a person will remain detained or whether release conditions or a bond have been set.",
    lookFor: [
      "Person's name and A-number",
      "Custody decision",
      "Bond information, if any",
      "Dates",
      "Instructions",
    ],
    nextSteps: [
      "Keep a copy of the document.",
      "Identify the custody determination and any instructions.",
      "Contact an immigration attorney or authorized representative for advice about custody or bond options.",
      "Tell the legal provider about any Deaf communication needs.",
    ],
    important:
      "Custody and bond eligibility depend on the person's circumstances and applicable law.",
    links: [
      {
        label: "ICE — Detainee Locator",
        href: "https://locator.ice.gov/odls/",
      },
      {
        label: "DOJ — Find Legal Representation",
        href: "https://www.immigrationadvocates.org/legaldirectory/",
      },
    ],
  },
];

const realExamples = {
  receipt: [
    {
      label: "USCIS Asylum Application Receipt Notice",
      href: "https://asaptogether.org/en/uscis-asylum-application-receipt-notice/",
    },
    {
      label: "Defensive Asylum Application Receipt Notice",
      href: "https://asaptogether.org/en/uscis-defensive-asylum-application-receipt-notice/",
    },
    {
      label: "Work Permit Receipt Notice",
      href: "https://asaptogether.org/en/work-permit-receipt-notice/",
    },
    {
      label: "Online Work Permit Receipt Notice",
      href: "https://asaptogether.org/en/work-permit-receipt-notice-online/",
    },
    {
      label: "TPS Work Permit Receipt Notices",
      href: "https://asaptogether.org/en/tps-work-permit-receipts/",
    },
  ],

  biometrics: [
    {
      label: "Asylum Application Biometrics Appointment",
      href: "https://asaptogether.org/en/asylum-application-biometrics-appointment/",
    },
  ],

  rfe: [
    {
      label: "Request for Evidence (RFE)",
      href: "https://asaptogether.org/en/rfe/",
    },
  ],

  approval: [
    {
      label: "Work Permit Approval Notice",
      href: "https://asaptogether.org/en/work-permit-approval-notice/",
    },
  ],

  nta: [
    {
      label: "Notice to Appear (NTA)",
      href: "https://asaptogether.org/en/nta/",
    },
  ],

  hearing: [
    {
      label: "Immigration Court Hearing Notice",
      href: "https://asaptogether.org/en/hearing-notice/",
    },
  ],

  denial: [
    {
      label: "USCIS Denial Letter",
      href: "https://asaptogether.org/en/uscis-dismissal/",
    },
  ],

  "eoir-decision-grants": [
    {
      label: "EOIR Grant Letter",
      href: "/letters/granted-asylum.jpeg",
    },
  ],

  "eoir-decision-grants": [
    {
      label: "EOIR Denial Letter",
      href: "/letters/judge-denied.png",
    },
  ],

  "ice-supervision": [
    {
      label: "Order of Supervision (Form I-220B)",
      href: "https://asaptogether.org/en/form-i220b/",
    },
  ],
  "ice-custody": [
    {
      label: "Order of Release on Recognizance",
      href: "/letters/286-example.png",
    },
  ],
};

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.resourceLink}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function ImmigrationDocumentsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);

  const detailsRef = useRef(null);

  const selectedDocument = documents.find(
    (document) => document.id === selectedDocumentId,
  );

  const visibleDocuments = documents.filter(
    (document) => document.category === selectedCategory,
  );

  useEffect(() => {
    if (selectedDocumentId && detailsRef.current) {
      detailsRef.current.focus();
    }
  }, [selectedDocumentId]);

  function selectCategory(id) {
    setSelectedCategory(id);
    setSelectedDocumentId(null);
  }

  function resetSelection() {
    setSelectedCategory(null);
    setSelectedDocumentId(null);
  }

  return (
    <main className={styles.container}>
      {/* BREADCRUMBS */}

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href={BASE}>Immigration Resources</Link>
        <span aria-hidden="true">›</span>
        <Link href={INFO}>Resource Library</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Immigration Letters</span>
      </nav>

      {/* INTRODUCTION */}

      <header className={styles.intro}>
        <h1 className={styles.title}>Understanding Immigration Letters</h1>

        <p className={styles.subtitle}>
          Did you receive an immigration letter or document?
        </p>

        <p className={styles.description}>
          Immigration documents can be confusing. This page explains common
          notices from USCIS, immigration court, and ICE.
        </p>

        <p className={styles.description}>
          Choose the type of document you received. You can learn what it may
          mean, what information to look for, and where to find more help.
        </p>
      </header>

      {/* IMPORTANT REMINDER */}

      <aside className={styles.warning}>
        <strong>Important: Check for deadlines</strong>

        <p>
          Some immigration documents include deadlines, hearing dates,
          appointments, or instructions that require action. Keep the complete
          document and envelope. Seek qualified legal assistance promptly if you
          are unsure what to do.
        </p>
      </aside>

      {/* AGENCY SELECTION */}

      <section
        className={styles.selectionSection}
        aria-labelledby="category-heading"
      >
        <h2 id="category-heading" className={styles.sectionTitle}>
          Who Sent Your Document?
        </h2>

        <p className={styles.sectionDescription}>
          Select an agency below. If you are not sure, choose "I Don't Know."
        </p>

        <div className={styles.grid}>
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                className={`${styles.situationCard} ${
                  isSelected ? styles.selectedCard : ""
                }`}
                onClick={() => selectCategory(category.id)}
                aria-pressed={isSelected}
              >
                <span className={styles.agencyImageBlock}>
                  <Image
                    src={category.image}
                    alt=""
                    width={160}
                    height={160}
                    className={styles.agencyImage}
                  />
                </span>

                <span className={styles.cardTitle}>{category.title}</span>

                <span className={styles.cardDescription}>
                  {category.description}
                </span>

                <span className={styles.cardAction}>
                  {isSelected ? "Selected ✓" : "Choose →"}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* UNKNOWN AGENCY HELP */}

      {selectedCategory === "unknown" && (
        <section className={styles.detailsSection}>
          <h2 className={styles.detailsTitle}>
            How Can I Identify My Document?
          </h2>

          <p className={styles.detailsIntroduction}>
            Look at the top of your document. You may see the name of a
            government agency or a form number.
          </p>

          <div className={styles.identificationGrid}>
            <div className={styles.identificationCard}>
              <h3>USCIS</h3>
              <p>U.S. Citizenship and Immigration Services</p>
              <p>
                Often sends application receipts, appointment notices, requests
                for evidence, and decisions.
              </p>
            </div>

            <div className={styles.identificationCard}>
              <h3>EOIR</h3>
              <p>Executive Office for Immigration Review</p>
              <p>
                Handles immigration court proceedings, hearing notices, and
                immigration judge decisions.
              </p>
            </div>

            <div className={styles.identificationCard}>
              <h3>ICE</h3>
              <p>Immigration and Customs Enforcement</p>
              <p>
                May issue documents involving immigration custody, supervision,
                and enforcement.
              </p>
            </div>

            <div className={styles.identificationCard}>
              <h3>DHS</h3>
              <p>Department of Homeland Security</p>
              <p>
                Some immigration documents show DHS instead of a specific agency
                name. Check for a form number and issuing office.
              </p>
            </div>
          </div>

          <h3 className={styles.subheading}>What Should I Look For?</h3>

          <ol className={styles.stepsList}>
            <li>Find the agency name or logo.</li>
            <li>Look for a form number, such as I-797 or I-862.</li>
            <li>Find any hearing date, appointment, or deadline.</li>
            <li>Keep the entire document and envelope.</li>
            <li>
              If you cannot identify the document, seek help from a qualified
              legal professional.
            </li>
          </ol>

          <div className={styles.linksList}>
            <ExternalLink href="https://asaptogether.org/en/sample-documents/">
              View ASAP Sample Immigration Documents
            </ExternalLink>

            <ExternalLink href="https://www.immigrationadvocates.org/legaldirectory/">
              Find Immigration Legal Help
            </ExternalLink>
          </div>
        </section>
      )}

      {/* DOCUMENT SELECTION */}

      {selectedCategory && selectedCategory !== "unknown" && (
        <section className={styles.documentsSection}>
          <h2 className={styles.sectionTitle}>Choose Your Document</h2>

          <p className={styles.sectionDescription}>
            Select the document that looks most like the one you received.
          </p>

          <div className={styles.documentGrid}>
            {visibleDocuments.map((document) => {
              const isSelected = selectedDocumentId === document.id;

              return (
                <button
                  key={document.id}
                  type="button"
                  className={`${styles.documentCard} ${
                    isSelected ? styles.selectedDocument : ""
                  }`}
                  onClick={() => setSelectedDocumentId(document.id)}
                  aria-pressed={isSelected}
                >
                  <span className={styles.documentIcon}>📄</span>

                  <span className={styles.documentTitle}>{document.title}</span>

                  <span className={styles.documentForm}>{document.form}</span>

                  <span className={styles.documentSummary}>
                    {document.summary}
                  </span>

                  <span className={styles.cardAction}>Learn More →</span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* SELECTED DOCUMENT DETAILS */}

      {selectedDocument && (
        <section
          className={styles.detailsSection}
          aria-labelledby="document-heading"
        >
          <h2
            id="document-heading"
            className={styles.detailsTitle}
            tabIndex={-1}
            ref={detailsRef}
          >
            {selectedDocument.title}
          </h2>

          <p className={styles.formLabel}>{selectedDocument.form}</p>

          <p className={styles.detailsIntroduction}>
            {selectedDocument.explanation}
          </p>

          {/* EDUCATIONAL DOCUMENT IMAGE */}
          {selectedDocument.image && (
            <div className={styles.documentImageWrapper}>
              <h3 className={styles.subheading}>Educational Example</h3>

              <Image
                src={selectedDocument.image}
                alt={`Educational example of ${selectedDocument.title}`}
                width={1086}
                height={1408}
                className={styles.documentImage}
              />

              <p className={styles.imageDisclaimer}>
                Educational example only. Not a government document. Your actual
                notice may look different.
              </p>
            </div>
          )}

          {/* REAL DOCUMENT EXAMPLES FROM ASAP */}
          {realExamples[selectedDocument.id]?.length > 0 && (
            <div className={styles.realExamplesSection}>
              <h3 className={styles.subheading}>
                See Real Examples (ASAP & Other Organizations)
              </h3>

              <p className={styles.realExamplesDescription}>
                The Asylum Seeker Advocacy Project (ASAP) and other
                organizations provide examples of actual immigration documents.
                Compare these with the educational illustration above to
                understand what your document may look like.
              </p>

              <div className={styles.linksList}>
                {realExamples[selectedDocument.id].map((example) => (
                  <ExternalLink key={example.href} href={example.href}>
                    {example.label}
                  </ExternalLink>
                ))}
              </div>
            </div>
          )}

          <h3 className={styles.subheading}>
            What Information Should I Look For?
          </h3>

          <ul className={styles.checkList}>
            {selectedDocument.lookFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className={styles.subheading}>What Can I Do Next?</h3>

          <ol className={styles.stepsList}>
            {selectedDocument.nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <aside className={styles.warning}>
            <strong>Important</strong>
            <p>{selectedDocument.important}</p>
          </aside>

          <h3 className={styles.subheading}>Helpful Resources</h3>

          <div className={styles.linksList}>
            {selectedDocument.links.map((link) => (
              <ExternalLink key={link.href} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>

          <button
            type="button"
            className={styles.backButton}
            onClick={() => setSelectedDocumentId(null)}
          >
            ← Choose Another Document
          </button>
        </section>
      )}

      {/* SAMPLE DOCUMENT COLLECTION */}

      <section className={styles.sampleSection}>
        <h2>See Real Examples of Immigration Documents</h2>

        <p>
          The Asylum Seeker Advocacy Project (ASAP) provides examples of common
          immigration documents. You can compare these samples with your own
          notice.
        </p>

        <ExternalLink href="https://asaptogether.org/en/sample-documents/">
          View ASAP Sample Documents
        </ExternalLink>
      </section>

      {/* LANGUAGE ACCESS */}

      <section className={styles.accessSection}>
        <h2>Need an Interpreter or Communication Support?</h2>

        <p>
          Deaf individuals may need ASL, another sign language, a Deaf
          Interpreter, or other communication accommodations to understand
          immigration documents and appointments.
        </p>

        <p>
          You can use Hands United's communication resources to explain your
          communication needs.
        </p>

        <Link
          href={`${BASE}/communication-board`}
          className={styles.accessLink}
        >
          Open Communication Board →
        </Link>
      </section>

      {/* LEGAL HELP */}

      <section className={styles.helpSection}>
        <h2>Need Help With Your Document?</h2>

        <p>
          If your document contains a deadline, court date, denial, or other
          important instructions, consider speaking with an authorized
          immigration legal professional.
        </p>

        <div className={styles.helpActions}>
          <ExternalLink href="https://www.immigrationadvocates.org/legaldirectory/">
            Find Immigration Legal Help
          </ExternalLink>

          <Link href="/contact" className={styles.helpButton}>
            Contact Hands United
          </Link>
        </div>
      </section>

      {/* RETURN TO START */}

      <div className={styles.returnLink}>
        <Link href={`${INFO}/start`}>← Back to Where Do I Start?</Link>
      </div>

      {/* DISCLAIMER */}

      <footer className={styles.disclaimer}>
        <p>
          <strong>Important:</strong> This resource provides general educational
          information and does not determine what a particular immigration
          document means for an individual's legal situation. Forms, procedures,
          and deadlines can change. For advice about your specific case, consult
          a licensed immigration attorney or an authorized DOJ-accredited
          representative.
        </p>
      </footer>
    </main>
  );
}
