import Link from "next/link";
import classes from "./page.module.css";

export default function ProgramsPage() {
  return (
    <main className={classes.main}>
      <header className={classes.header}>
        <h1>Our Programs</h1>
        <p>
          Hands United offers community-centered programs designed to support
          Deaf and hard-of-hearing individuals and families navigating education,
          immigration, communication access, and professional systems.
        </p>
      </header>

      <section className={classes.grid}>
        {/* Family & Community */}
        <Link href="/programs/family-community" className={classes.card}>
          <h2>Family & Community</h2>
          <p>
            Support for families raising Deaf and hard-of-hearing children,
            including advocacy, education, enrichment, and community resources.
          </p>
        </Link>

        {/* Immigration Support */}
        <Link
          href="/programs/immigration-support"
          className={classes.card}
        >
          <h2>Immigration Support</h2>
          <p>
            Accessible immigration education and resources for Deaf and
            hard-of-hearing immigrants, including Know Your Rights and workshops.
          </p>
        </Link>

        {/* Driver Education */}
        <Link
          href="/programs/driver-education"
          className={classes.card}
        >
          <h2>Driver Education</h2>
          <p>
            Deaf-accessible permit and driver education taught visually and in
            sign language to promote safety, independence, and confidence.
          </p>
        </Link>

        {/* Professional Services */}
        <Link
          href="/programs/professional-services"
          className={classes.card}
        >
          <h2>Professional Services</h2>
          <p>
            Interpreter education, professional development, translation,
            and media services that strengthen access across systems.
          </p>
        </Link>
      </section>
    </main>
  );
}
