"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

import {
  BookOpen,
  FileText,
  Landmark,
  ShieldCheck,
  IdCard,
  Users,
  ClipboardCheck,
} from "lucide-react";

const INFO = "/programs/immigration-support/information";
const LEGAL = "https://www.immigrationadvocates.org/legaldirectory/";
const SOURCE =
  "https://immigrationlitigation.org/wp-content/uploads/2024/09/24.09.27-Spanish-Glossary-Chart-Final.pdf";

const categoryIcons = {
  "All Words": BookOpen,
  Documents: FileText,
  "Immigration Court": Landmark,
  Protection: ShieldCheck,
  "Immigration Status": IdCard,
  "People & Agencies": Users,
  "Case Status": ClipboardCheck,
};

// Original plain-language descriptions, not copied from the reference glossary.
// Add image: "/dictionary/example.png" and video: "https://..." when available.
const terms = [
  [
    "a-number",
    "A-Number",
    "Número A / Número de registro de extranjero",
    "Documents",
    "An identification number used in many U.S. immigration records. It often has 7 to 9 digits.",
    "Look for A-Number or A# on a notice.",
  ],
  [
    "receipt-number",
    "Receipt Number",
    "Número de recibo",
    "Documents",
    "A tracking number USCIS gives to many applications and petitions. It commonly has three letters followed by ten numbers.",
    "You can use it to check many USCIS cases online.",
  ],
  [
    "receipt-notice",
    "Receipt Notice",
    "Aviso de recibo",
    "Documents",
    "A notice confirming that USCIS received a filing. It does not mean the filing was approved.",
    "Keep the notice and its receipt number.",
  ],
  [
    "notice-to-appear",
    "Notice to Appear (NTA)",
    "Notificación de comparecencia",
    "Documents",
    "A government document listing allegations and charges that may start removal proceedings in immigration court.",
    "A hearing date may be sent separately.",
  ],
  [
    "hearing-notice",
    "Notice of Hearing",
    "Aviso de audiencia",
    "Documents",
    "A notice giving information about an immigration court hearing, such as its date, time, and location.",
    "Read the notice and confirm the hearing details.",
  ],
  [
    "rfe",
    "Request for Evidence (RFE)",
    "Solicitud de pruebas adicionales",
    "Documents",
    "A USCIS notice asking for more information or documents before it decides a case.",
    "Look for exactly what is requested and the response deadline.",
  ],
  [
    "biometrics",
    "Biometrics Appointment",
    "Cita para datos biométricos",
    "Documents",
    "An appointment to collect identifying information such as fingerprints or a photograph.",
    "Check the date, place, identification requirements, and accommodation instructions.",
  ],
  [
    "work-permit",
    "Employment Authorization Document (EAD)",
    "Documento de autorización de empleo / Permiso de trabajo",
    "Documents",
    "A document showing that a person is authorized to work in the United States for a specified period or under specified conditions.",
    "An EAD is not the same as a green card.",
  ],
  [
    "removal-order",
    "Removal Order",
    "Orden de expulsión / Orden de deportación",
    "Documents",
    "A legal order directing that a person be removed from the United States.",
    "Get qualified legal help promptly to understand any available options.",
  ],
  [
    "order-supervision",
    "Order of Supervision",
    "Orden de supervisión",
    "Documents",
    "An immigration document setting conditions a person must follow while under government supervision.",
    "Conditions may include reporting and address updates.",
  ],
  [
    "immigration-court",
    "Immigration Court",
    "Corte de inmigración / Tribunal de inmigración",
    "Immigration Court",
    "A court that handles certain immigration cases, including removal proceedings.",
    "Immigration court is part of EOIR, not USCIS.",
  ],
  [
    "immigration-judge",
    "Immigration Judge",
    "Juez o jueza de inmigración",
    "Immigration Court",
    "An official who conducts immigration court hearings and makes decisions in cases assigned to the court.",
    "An immigration judge is different from a USCIS officer.",
  ],
  [
    "hearing",
    "Hearing",
    "Audiencia",
    "Immigration Court",
    "A scheduled court session where a case is discussed or considered.",
    "The hearing notice tells you when and how to appear.",
  ],
  [
    "master-calendar",
    "Master Calendar Hearing",
    "Audiencia preliminar / Audiencia de calendario maestro",
    "Immigration Court",
    "An immigration court hearing often used to address the charges, rights, representation, and next steps in a case.",
    "It is generally different from a full individual merits hearing.",
  ],
  [
    "individual-hearing",
    "Individual Hearing",
    "Audiencia individual",
    "Immigration Court",
    "A hearing at which an immigration judge may consider testimony and evidence about a person's application for relief.",
    "Prepare with qualified legal help when possible.",
  ],
  [
    "respondent",
    "Respondent",
    "Persona demandada / Parte demandada",
    "Immigration Court",
    "The person whose case is being considered in immigration court removal proceedings.",
    "This word may appear on court paperwork.",
  ],
  [
    "removal-proceedings",
    "Removal Proceedings",
    "Proceso de expulsión / Proceso de deportación",
    "Immigration Court",
    "The legal process used to decide whether a person may be removed from the United States.",
    "A Notice to Appear is commonly associated with this process.",
  ],
  [
    "appeal",
    "Appeal",
    "Apelación",
    "Immigration Court",
    "A request for an authorized body to review a decision.",
    "Who may appeal and the deadline depend on the decision.",
  ],
  [
    "bia",
    "Board of Immigration Appeals (BIA)",
    "Junta de Apelaciones de Inmigración",
    "Immigration Court",
    "An administrative body that reviews certain immigration judge and DHS decisions.",
    "Not every decision can be appealed to the BIA.",
  ],
  [
    "in-absentia",
    "In Absentia Order",
    "Orden en ausencia",
    "Immigration Court",
    "An order entered when a person does not appear at a required immigration court hearing under applicable rules.",
    "Missing a hearing can have serious consequences.",
  ],
  [
    "asylum",
    "Asylum",
    "Asilo",
    "Protection",
    "A form of protection for certain people who meet legal requirements related to persecution in their home country.",
    "Asylum has specific eligibility and filing rules.",
  ],
  [
    "asylum-seeker",
    "Asylum Seeker",
    "Solicitante de asilo",
    "Protection",
    "A person who is asking for asylum and whose request may still be pending.",
    "Applying for asylum does not itself mean asylum has been granted.",
  ],
  [
    "credible-fear",
    "Credible Fear Interview",
    "Entrevista de temor creíble",
    "Protection",
    "A screening interview used in certain immigration processes to assess whether a person may have a qualifying fear of persecution or torture.",
    "A screening result is not the same as a final asylum decision.",
  ],
  [
    "reasonable-fear",
    "Reasonable Fear Interview",
    "Entrevista de temor razonable",
    "Protection",
    "A screening interview used in certain cases to assess a person's fear of persecution or torture.",
    "The procedure and next steps differ from a credible fear interview.",
  ],
  [
    "withholding",
    "Withholding of Removal",
    "Suspensión de la expulsión / Retención de expulsión",
    "Protection",
    "A form of protection that may prevent removal to a particular country when specific legal requirements are met.",
    "It is not the same as asylum or permanent residence.",
  ],
  [
    "cat",
    "Convention Against Torture (CAT) Protection",
    "Protección bajo la Convención contra la Tortura",
    "Protection",
    "Protection that may prevent removal to a country where a person meets the legal standard involving risk of torture.",
    "The available protections and effects depend on the decision.",
  ],
  [
    "persecution",
    "Persecution",
    "Persecución",
    "Protection",
    "Serious harm or mistreatment that can be relevant to certain protection claims when connected to legally specified reasons.",
    "Not every harmful experience meets the legal definition.",
  ],
  [
    "refugee",
    "Refugee",
    "Refugiado / Refugiada",
    "Protection",
    "A person who meets the legal definition for refugee protection; U.S. refugee admissions usually involve processing outside the United States.",
    "Refugee status and asylum are related but different processes.",
  ],
  [
    "tps",
    "Temporary Protected Status (TPS)",
    "Estatus de Protección Temporal (TPS)",
    "Protection",
    "A temporary immigration protection available to certain eligible nationals of countries designated by the U.S. government.",
    "Country designations and eligibility rules can change.",
  ],
  [
    "humanitarian-parole",
    "Humanitarian Parole",
    "Permiso de permanencia temporal por razones humanitarias",
    "Protection",
    "Permission for certain people to enter or remain in the United States temporarily under applicable parole authority.",
    "Parole is not the same as admission or permanent residence.",
  ],
  [
    "green-card",
    "Green Card",
    "Tarjeta de residencia permanente",
    "Immigration Status",
    "A commonly used name for the card showing lawful permanent resident status.",
    "The card and the underlying immigration status are related but not identical.",
  ],
  [
    "permanent-resident",
    "Lawful Permanent Resident (LPR)",
    "Residente permanente legal",
    "Immigration Status",
    "A person who has been granted permission to live permanently in the United States under immigration law.",
    "Often called a green card holder.",
  ],
  [
    "visa",
    "Visa",
    "Visa",
    "Immigration Status",
    "A document issued by a U.S. consulate that generally allows a person to seek entry for a particular purpose.",
    "A visa does not guarantee admission at the border.",
  ],
  [
    "status",
    "Immigration Status",
    "Estatus migratorio",
    "Immigration Status",
    "A person's legal classification under U.S. immigration rules at a particular time.",
    "Status, a visa, and work authorization are not the same thing.",
  ],
  [
    "naturalization",
    "Naturalization",
    "Naturalización",
    "Immigration Status",
    "The legal process through which an eligible noncitizen becomes a U.S. citizen.",
    "Requirements depend on the applicant's situation.",
  ],
  [
    "citizenship",
    "Citizenship",
    "Ciudadanía",
    "Immigration Status",
    "Legal membership in a country with associated rights and responsibilities.",
    "U.S. citizenship can be acquired in different ways.",
  ],
  [
    "family-petition",
    "Family-Based Petition",
    "Petición familiar",
    "Immigration Status",
    "A filing through which a qualifying family member asks immigration authorities to recognize a family relationship for immigration purposes.",
    "Approval of a petition does not automatically grant a green card.",
  ],
  [
    "uscis",
    "USCIS",
    "Servicio de Ciudadanía e Inmigración de Estados Unidos",
    "People & Agencies",
    "The federal agency that handles many immigration applications, petitions, and benefit requests.",
    "Its full English name is U.S. Citizenship and Immigration Services.",
  ],
  [
    "eoir",
    "EOIR",
    "Oficina Ejecutiva de Revisión de Casos de Inmigración",
    "People & Agencies",
    "The Department of Justice office responsible for immigration courts and the Board of Immigration Appeals.",
    "EOIR is different from USCIS and ICE.",
  ],
  [
    "ice",
    "ICE",
    "Servicio de Inmigración y Control de Aduanas",
    "People & Agencies",
    "A federal agency with immigration enforcement and detention responsibilities.",
    "Its full English name is U.S. Immigration and Customs Enforcement.",
  ],
  [
    "dhs",
    "DHS",
    "Departamento de Seguridad Nacional",
    "People & Agencies",
    "The federal department that includes USCIS, ICE, and Customs and Border Protection.",
    "DHS is not the immigration court system.",
  ],
  [
    "cbp",
    "CBP",
    "Oficina de Aduanas y Protección Fronteriza",
    "People & Agencies",
    "The federal agency responsible for certain border, port-of-entry, and customs functions.",
    "Its full English name is U.S. Customs and Border Protection.",
  ],
  [
    "attorney",
    "Immigration Attorney",
    "Abogado o abogada de inmigración",
    "People & Agencies",
    "A licensed lawyer who may provide immigration legal advice and representation, subject to applicable rules.",
    "Check qualifications before hiring someone.",
  ],
  [
    "accredited-rep",
    "DOJ-Accredited Representative",
    "Representante acreditado por el Departamento de Justicia",
    "People & Agencies",
    "A non-attorney authorized through a federal recognition and accreditation program to provide certain immigration legal services through a recognized organization.",
    "Accreditation and permitted representation depend on the person's authorization.",
  ],
  [
    "interpreter",
    "Interpreter",
    "Intérprete",
    "People & Agencies",
    "A person who communicates meaning between languages, including signed and spoken languages.",
    "Ask for qualified communication access when needed.",
  ],
  [
    "pending",
    "Pending",
    "Pendiente",
    "Case Status",
    "A case or request has not yet received a final decision in the relevant process.",
    "Pending does not automatically mean approved or denied.",
  ],
  [
    "approved",
    "Approved",
    "Aprobado / Aprobada",
    "Case Status",
    "The agency granted the specific application, petition, or request being decided.",
    "Read the notice to understand exactly what was approved.",
  ],
  [
    "denied",
    "Denied",
    "Denegado / Denegada",
    "Case Status",
    "The agency or court did not grant the specific request.",
    "Read the decision for the reason and any available review options.",
  ],
  [
    "deadline",
    "Deadline",
    "Fecha límite / Plazo",
    "Case Status",
    "The last date or time allowed for a required action under applicable rules.",
    "Different deadlines may be calculated in different ways.",
  ],
  [
    "deportation-removal",
    "Deportation / Removal",
    "Deportación / Expulsión",
    "Immigration Court",
    "The process of requiring a person to leave the United States under immigration law.",
    "A removal order is a legal decision; removal is the process of carrying it out.",
  ],
  [
    "detention",
    "Immigration Detention",
    "Detención migratoria",
    "People & Agencies",
    "Being held in government custody for immigration-related reasons.",
    "A detained person may need legal assistance and communication accommodations.",
  ],
  [
    "bond",
    "Immigration Bond",
    "Fianza de inmigración",
    "Immigration Court",
    "Money that may be required as a condition of release from immigration detention in certain cases.",
    "Not everyone is eligible for bond; conditions and procedures depend on the case.",
  ],
  [
    "application",
    "Application",
    "Solicitud",
    "Documents",
    "A form or request submitted to an immigration agency to ask for a benefit or permission.",
    "Different immigration applications have different requirements.",
  ],

  [
    "petition",
    "Petition",
    "Petición",
    "Documents",
    "A formal request submitted to an immigration agency, often by a person or organization on someone else's behalf.",
    "Approval of a petition does not automatically grant immigration status.",
  ],

  [
    "lawful-status",
    "Lawful Immigration Status",
    "Estatus migratorio legal",
    "Status",
    "An immigration classification that allows a person to be in the United States under specific rules.",
    "Having a visa or an immigration application pending does not always mean someone has lawful status.",
  ],

  [
    "undocumented",
    "Undocumented",
    "Indocumentado/a",
    "Status",
    "A person who does not currently have lawful immigration status in the United States.",
    "An undocumented person may still have identification, a passport, or other documents.",
  ],

  [
    "adjustment-of-status",
    "Adjustment of Status",
    "Ajuste de estatus",
    "Status",
    "A process that allows certain eligible people already in the United States to apply for lawful permanent residence without leaving the country.",
    "Not everyone qualifies. Eligibility depends on immigration history and other legal requirements.",
  ],

  [
    "us-citizen",
    "U.S. Citizen",
    "Ciudadano/a estadounidense",
    "Status",
    "A person who has U.S. citizenship through birth, qualifying parents, or naturalization.",
    "U.S. citizens can apply for a U.S. passport and have rights and responsibilities under U.S. law.",
  ],
];

const categories = [
  "All Words",
  "Documents",
  "Immigration Court",
  "Protection",
  "Immigration Status",
  "People & Agencies",
  "Case Status",
];
const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function ImmigrationDictionaryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Words");
  const [expanded, setExpanded] = useState([]);

  const images = {
    // Documents
    "a-number": "a-number.png",
    "receipt-notice": "receipt-notice.png",
    "notice-to-appear": "notice-to-appear.png",
    "hearing-notice": "hearing-notice.png",
    rfe: "request-for-evidence.png",
    biometrics: "biometrics.png",
    "work-permit": "work-permit.png",
    "removal-order": "removal-order.png",
    application: "application.png",
    petition: "petition.png",

    // Immigration Court
    "immigration-court": "immigration-court.png",
    "immigration-judge": "immigration-judge.png",
    hearing: "hearing.png",
    "master-calendar": "master-calendar-hearing.png",
    "individual-hearing": "individual-hearing.png",
    respondent: "respondant.png",
    "removal-proceedings": "removal-proceedings.png",
    appeal: "appeal.png",
    bia: "BIA.png",
    "deportation-removal": "deportation-removal.png",
    detention: "detention.png",
    bond: "bond.png",

    // Asylum and Protection
    asylum: "asylum.png",
    "asylum-seeker": "asylum-seeker.png",
    "credible-fear": "credible-fear-interview.png",
    "reasonable-fear": "reasonable-fear-interview.png",
    withholding: "withholding.png",
    cat: "cat.png",
    persecution: "persecution.png",
    refugee: "refugee.png",
    tps: "tps.png",

    // Immigration Status
    "green-card": "green-card.png",

    // People and Agencies
    uscis: "USCIS.png",
    eoir: "EOIR.png",
    ice: "ICE.png",
    attorney: "attorney-lawyer.png",
    "accredited-rep": "accredited-rep.png",
    interpreter: "interpreter.png",

    // Case Status
    pending: "pending.png",
    approved: "approval.png",
    denied: "denial.png",
    deadline: "deadline.png",

    // Batch 9 — Immigration Status and Citizenship
    visa: "visa.png",
    "permanent-resident": "permanent-resident.png",
    "lawful-status": "lawful-status.png",
    undocumented: "undocumented.png",
    "adjustment-of-status": "adjustment-of-status.png",
    naturalization: "naturalization.png",
    "us-citizen": "us-citizen.png",

    // Batch 10 — Documents and Immigration Processes
    "receipt-number": "receipt-number.png",
    "order-supervision": "order-supervision.png",
    "in-absentia": "in-absentia.png",
    "humanitarian-parole": "humanitarian-parole.png",
    status: "status.png",

    // Batch 11 — Citizenship, Family, and Agencies
    citizenship: "citizenship.png",
    "family-petition": "family-petition.png",
    dhs: "dhs.png",
    cbp: "cbp.png",
  };

  const entries = useMemo(
    () =>
      terms.map(([id, english, spanish, group, definition, tip]) => ({
        id,
        english,
        spanish,
        group,
        definition,
        tip,
        image: images[id] ? `/dictionary/${images[id]}` : null,
        video: null,
      })),
    [],
  );
  const filtered = useMemo(
    () =>
      entries.filter(
        (term) =>
          (category === "All Words" || term.group === category) &&
          normalize(
            `${term.english} ${term.spanish} ${term.definition} ${term.tip}`,
          ).includes(normalize(query.trim())),
      ),
    [entries, category, query],
  );
  const toggle = (id) =>
    setExpanded((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );

  return (
    <main className={styles.container}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/programs/immigration-support">Immigration Resources</Link>
        <span aria-hidden="true">›</span>
        <Link href={INFO}>Resource Library</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Vocabulary Dictionary</span>
      </nav>

      <header className={styles.header}>
        <h1>Immigration Vocabulary Dictionary</h1>
        <p className={styles.lead}>
          Understand immigration words in plain English and Spanish.
        </p>
        <p>
          Choose a topic or search for a word. Select a card to read a simple
          explanation and an example of when you might see the term.
        </p>
      </header>

      <section className={styles.tools} aria-label="Find vocabulary">
        <label htmlFor="dictionary-search">Search in English or Spanish</label>
        <input
          id="dictionary-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Example: asylum, asilo, hearing, audiencia"
          className={styles.search}
        />
        <div
          className={styles.filters}
          role="group"
          aria-label="Filter vocabulary by topic"
        >
          {categories.map((item) => {
            const Icon = categoryIcons[item];

            return (
              <button
                key={item}
                type="button"
                className={`${styles.filter} ${category === item ? styles.activeFilter : ""}`}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {Icon && <Icon size={18} strokeWidth={2} aria-hidden="true" />}
                <span>{item}</span>
              </button>
            );
          })}
        </div>
        <p className={styles.count} role="status">
          Showing {filtered.length} of {entries.length} words
        </p>
      </section>

      <section className={styles.results} aria-label="Dictionary entries">
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <h2>No matching words</h2>
            <p>Try a different spelling, word, or topic.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All Words");
              }}
            >
              Clear search and filters
            </button>
          </div>
        ) : (
          filtered.map((term) => {
            const isOpen = expanded.includes(term.id);
            return (
              <article className={styles.card} key={term.id}>
                <button
                  type="button"
                  className={styles.cardButton}
                  aria-expanded={isOpen}
                  aria-controls={`definition-${term.id}`}
                  onClick={() => toggle(term.id)}
                >
                  {term.image && (
                    <img
                      className={styles.cardThumbnail}
                      src={term.image}
                      alt=""
                      loading="lazy"
                      width="112"
                      height="112"
                    />
                  )}
                  <span className={styles.cardHeading}>
                    <strong>{term.english}</strong>
                    <span className={styles.spanish}>{term.spanish}</span>
                    <span className={styles.category}>{term.group}</span>
                  </span>
                  <span className={styles.expand} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div id={`definition-${term.id}`} className={styles.details}>
                    <h3>What does it mean?</h3>
                    <p>{term.definition}</p>
                    <h3>Helpful to know</h3>
                    <p>{term.tip}</p>
                    {term.image && (
                      <img
                        className={styles.illustration}
                        src={term.image}
                        alt={`AAC illustration explaining ${term.english}`}
                        loading="lazy"
                      />
                    )}
                    {/* {term.video && (
                      <a
                        className={styles.videoLink}
                        href={term.video}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch ASL explanation ↗
                      </a>
                    )} */}
                  </div>
                )}
              </article>
            );
          })
        )}
      </section>

      <section className={styles.help}>
        <h2>Need more information?</h2>
        <p>
          For explanations of immigration notices, visit{" "}
          <Link href={`${INFO}/documents`}>
            Understanding Immigration Letters
          </Link>
          . To check a case, visit{" "}
          <Link href={`${INFO}/case-status`}>Check Your Immigration Case</Link>.
        </p>
        <a
          href={LEGAL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.legalLink}
        >
          Find Immigration Legal Help ↗
        </a>
      </section>

      <footer className={styles.footer}>
        <p>
          <strong>Reference:</strong> Terminology informed in part by the{" "}
          <a href={SOURCE} target="_blank" rel="noopener noreferrer">
            National Immigration Litigation Alliance English–Spanish immigration
            glossary (PDF)
          </a>
          . Definitions here are independently written for general education;
          translations may vary by country and context.
        </p>
        <p>
          <strong>Important:</strong> This dictionary is educational and is not
          legal advice. Immigration terms can have precise legal meanings that
          depend on the case.
        </p>
        <Link href={INFO}>← Back to Immigration Resource Library</Link>
      </footer>
    </main>
  );
}
