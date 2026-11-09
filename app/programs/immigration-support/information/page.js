import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const base = "/programs/immigration-support";

const resources = [
  {
    title: "Understanding Immigration Letters",
    description:
      "See examples of immigration notices and learn what different letters mean.",
    icon: "📩",
    href: `${base}/information/documents`,
    available: true,
  },
  {
    title: "Immigration Vocabulary",
    description:
      "Learn common immigration words and their meanings in plain language.",
    icon: "📖",
    href: `${base}/information/dictionary`,
    available: true,
  },
  {
    title: "Check Your Immigration Case",
    description:
      "Learn how to check your USCIS or immigration court case and understand case numbers.",
    icon: "🔎",
    href: `${base}/information/case-status`,
    available: true,
  },
  {
    title: "Find Immigration Legal Help",
    description:
      "Find immigration lawyers, nonprofit legal services, and accredited representatives.",
    icon: "⚖️",
    href: `${base}/information/legal-help`,
    available: true,
  },
  {
    title: "Immigration Pathways",
    description: "Explore immigration processes and options.",
    icon: "🛤️",
    href: `${base}/information/pathways`,
    available: true,
  },
  {
    title: "Immigration Court & Detention",
    description:
      "Learn about immigration hearings, court notices, detention, and finding someone in custody.",
    icon: "🏛️",
    href: `${base}/information/court-detention`,
    available: true,
  },
];

const rightsResources = [
  {
    title: "Know Your Rights",
    description:
      "Learn your rights during encounters with immigration officers and law enforcement.",
    icon: "🛡️",
    href: `${base}/know-your-rights`,
    available: true,
  },
  {
    title: "Digital Rights Card",
    description: "Watch Know Your Rights videos in different sign languages.",
    icon: "📱",
    href: `${base}/digital-kyr`,
    available: true,
  },
  {
    title: "Communication Board",
    description:
      "Use visual communication tools to request interpreters and communicate your needs.",
    icon: "/icons/commboard.svg",
    available: true,
    href: `${base}/communication-board`,
  },

  {
    title: "Accessibility & Communication Rights",
    description:
      "Need an interpreter? Did not understand your interpreter? Learn how to request communication access and file a complaint.",
    icon: "🤟",
    href: `${base}/information/accessibility`,
    available: true,
  },
];

const learningResources = [
  {
    title: "Immigration Workshops",
    description:
      "Watch immigration education workshops in ASL and other sign languages.",
    icon: "🎥",
    href: `${base}/workshops`,
    available: true,
  },
  {
    title: "Social Stories",
    description:
      "Visual stories to help individuals and families understand and prepare for immigration encounters.",
    icon: "📚",
    href: `${base}/social-stories`,
    available: true,
  },
  {
    title: "Resources for Legal Professionals",
    description:
      "Information and accessibility resources for attorneys working with Deaf immigrants.",
    icon: "⚖️",
    href: `${base}/legal-professionals`,
    available: true,
  },
];

function ResourceCard({ resource }) {
  const content = (
    <>
      <div className={styles.emojiBlock}>
        {resource.icon.endsWith(".svg") ? (
          <Image
            src={resource.icon}
            alt=""
            width={65}
            height={65}
            className={styles.svgIcon}
          />
        ) : (
          <span className={styles.emoji} aria-hidden="true">
            {resource.icon}
          </span>
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{resource.title}</h3>

        <p className={styles.cardDescription}>{resource.description}</p>

        {!resource.available && (
          <span className={styles.comingSoon}>Coming Soon</span>
        )}
      </div>
    </>
  );

  if (!resource.available) {
    return (
      <div className={`${styles.card} ${styles.disabledCard}`}>{content}</div>
    );
  }

  return (
    <Link href={resource.href} className={styles.card}>
      {content}
    </Link>
  );
}

function ResourceSection({ title, description, resources }) {
  return (
    <section className={styles.resourceSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      {description && (
        <p className={styles.sectionDescription}>{description}</p>
      )}

      <div className={styles.grid}>
        {resources.map((resource) => (
          <ResourceCard key={resource.href} resource={resource} />
        ))}
      </div>
    </section>
  );
}

export default function ImmigrationInformationPage() {
  return (
    <main className={styles.container}>
      {/* PAGE INTRODUCTION */}

      <header className={styles.intro}>
        <h1 className={styles.title}>Immigration Resource Library</h1>

        <p className={styles.subtitle}>
          Free, accessible immigration information for Deaf immigrants and their
          families.
        </p>

        <p className={styles.description}>
          Understanding immigration can be difficult. Here you can find
          information about your rights, immigration documents, legal services,
          and immigration processes.
        </p>

        <p className={styles.description}>
          You do not need to understand immigration laws or know which
          government agency is involved to get started.
        </p>
      </header>

      {/* FEATURED START PAGE */}

      <section className={styles.featuredSection}>
        <div className={styles.featuredContent}>
          <div className={styles.featuredIcon} aria-hidden="true">
            🧭
          </div>

          <div>
            <h2>Where Do I Start?</h2>

            <p>
              Not sure what you need? Start here to find information about
              immigration letters, court dates, legal help, applications, and
              more.
            </p>

            <p>Answer simple questions to find resources that may help you.</p>

            <Link
              href="/programs/immigration-support/information/start"
              className={styles.helpButton}
            >
              Get Started →
            </Link>
          </div>
        </div>
      </section>

      {/* IMMIGRATION INFORMATION */}

      <ResourceSection
        title="Find Immigration Information"
        description="Understand immigration documents, processes, and available resources."
        resources={resources}
      />

      {/* RIGHTS AND COMMUNICATION */}

      <ResourceSection
        title="Know Your Rights & Communication"
        description="Learn about your rights and find accessible communication tools."
        resources={rightsResources}
      />

      {/* LEARNING RESOURCES */}

      <ResourceSection
        title="Learn More"
        description="Explore educational workshops, visual stories, and professional resources."
        resources={learningResources}
      />

      {/* EXTERNAL RESOURCES */}

      <section className={styles.resourceSection}>
        <h2 className={styles.sectionTitle}>Trusted Immigration Resources</h2>

        <p className={styles.sectionDescription}>
          These organizations provide immigration information, official case
          tools, and legal assistance resources.
        </p>

        <div className={styles.externalResources}>
          <a
            href="https://asaptogether.org/en/sample-documents/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ASAP — Sample Immigration Documents ↗
          </a>

          <a
            href="https://egov.uscis.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            USCIS — Check Case Status ↗
          </a>

          <a
            href="https://acis.eoir.justice.gov/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Immigration Court — Check Case Information ↗
          </a>

          <a
            href="https://locator.ice.gov/odls/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICE — Detainee Locator ↗
          </a>

          <a
            href="https://www.ailalawyer.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AILA — Find an Immigration Lawyer ↗
          </a>

          <a
            href="https://www.immigrationadvocates.org/legaldirectory/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Immigrationn Advocates Network — Find Legal Representation ↗
          </a>
        </div>
      </section>

      {/* CONTACT */}

      <section className={styles.helpSection}>
        <h2>Need More Help?</h2>

        <p>
          Hands United supports Deaf immigrants and immigrant families through
          accessible immigration education, communication access, and
          navigation.
        </p>

        <p>
          If you need help understanding information or finding resources,
          contact us.
        </p>

        <Link href="/contact" className={styles.helpButton}>
          Contact Hands United
        </Link>
      </section>

      {/* DISCLAIMER */}

      <footer className={styles.disclaimer}>
        <p>
          <strong>Important:</strong> These resources provide general
          immigration information and are not a substitute for individualized
          legal advice. Immigration laws, policies, procedures, and deadlines
          may change. For advice about your specific situation, consult a
          licensed immigration attorney or an authorized DOJ-accredited
          representative.
        </p>
      </footer>
    </main>
  );
}
