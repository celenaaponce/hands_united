import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import ZeffyEmbed from "components/zeffyembed/zeffy-embed";
import immigration101Flyer from "public/classflyers/immigration101.jpeg";
import immigration101FlyerHearing from "public/classflyers/imm101hearing.jpg";
export const metadata = {
  title: "Hands United Events & Store",
  description:
    "Upcoming events, workshops, classes, and educational resources supporting Deaf and Hard of Hearing families",
};

export default function StorePage() {
  return (
    <main>
      {/* ===================== */}
      {/* INTRO */}
      {/* ===================== */}
      <section className={classes.section}>
        <h2>Events & Store</h2>

        <p>
          Hands United offers community-centered{" "}
          <a href="#professional-programs">events and professional trainings</a>
          , and <a href="#products">educational resources</a> to support
          immigrant families with Deaf and hard-of-hearing children.
        </p>

        <p>
          Proceeds from paid events and store purchases directly fund free
          multilingual ASL resources, family programs, and accessibility
          initiatives.
        </p>
      </section>

      {/* ===================== */}
      {/* PROGRAMS FOR FAMILIES */}
      {/* ===================== */}

      {/* ===================== */}
      {/* CLASSES & COHORTS */}
      {/* ===================== */}
      {/* ===================== */}
      {/* ENROLLMENT PROGRAMS  */}
      {/* ===================== */}

      <section className={classes.section}>
        <h2>Enrollment Programs & Workshops</h2>

        <p>
          Registration-based programs for families, interpreters, and educators.
          Proceeds directly support free multilingual ASL resources and
          community access initiatives.
        </p>

        {/* ===================== */}
        {/* FAMILY PROGRAMS */}
        {/* ===================== */}

        <h2>Programs for Families</h2>

        {/* Spanish ASL */}
        <div className={classes.eventBlock}>
          <h4 id="spanish-asl">
            Spanish Family ASL Classes — Starting in April
          </h4>

          <p>
            An 8-week ASL course designed for immigrant families with Deaf and
            hard-of-hearing children. Focuses on reducing language deprivation,
            strengthening home communication, and building practical everyday
            vocabulary.
          </p>

          <p>
            <strong>Language:</strong> ASL with spoken Spanish support
            <br />
            <strong>Format:</strong> Live on Zoom
          </p>

          <Link href="https://manosunidasor.org/aprender-asl/clases-gratuitas/registrarse">
            Register for Spanish ASL Classes
          </Link>
        </div>

        {/* Permit Classes */}
        <div className={classes.eventBlock}>
          <h4 id="permit-classes">
            Driver’s Permit Classes — Starting March 25
          </h4>

          <p>
            A 10-week ASL-based permit course taught fully in ASL. Prepares Deaf
            and hard-of-hearing students for the written permit exam using
            accessible, visual instruction.
          </p>

          <p>
            <strong>Format:</strong> Live on Zoom
            <br />
            <strong>Length:</strong> 10 weeks
          </p>

          <Link href="/programs/driver-education/register">
            Enroll in Permit Classes
          </Link>
        </div>

        <hr />

        {/* ===================== */}
        {/* PROFESSIONAL WORKSHOPS */}
        {/* ===================== */}

        <h2>Professional Workshops</h2>
        {/* Immigration 101 */}
        <div className={classes.eventBlock}>
          <h4 id="immigration-101">
            Immigration 101 — March 17, 24, 31 & April 4
          </h4>

          <p>
            A four-part workshop series for professionals and community allies
            who work with Deaf and hard-of-hearing immigrant communities. Taught
            in ASL and open to both DHH and hearing participants, this series
            provides a practical overview of how the U.S. immigration system
            actually works— including real pathways, real costs, typical
            timelines, court backlogs, and common barriers. It also covers
            additional access challenges Deaf immigrants often face, including
            interpreter access and written notices.
          </p>

          <p>
            <strong>Dates:</strong> March 17, 24, 31 & April 4<br />
            <strong>Time:</strong> 4:00–6:00 PM PST
            <br />
            <strong>Location:</strong> Zoom
            <br />
            <strong>Language of instruction:</strong> ASL
            <br />
            <strong>Audience:</strong> Professionals (interpreters, educators,
            social workers, healthcare providers, attorneys/legal advocates,
            nonprofit and government service providers)
          </p>

          <p>
            <strong>Important:</strong> This series focuses on understanding
            systems and options and does <strong>not</strong> provide individual
            legal advice.
          </p>

          <p>
            <strong>CEUs:</strong> Pending (live attendance required for CEUs)
          </p>
                    <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Immigration 101 Registration"
                src="https://www.zeffy.com/embed/ticketing/immigration-101-professionals-asl"
              />
            </div>
          </div>

          {/* <div className={classes.imageContainer}>
            <Image
              src={immigration101Flyer}
              alt="Hands United Immigration 101 workshop flyer"
              className={classes.flyerImage}
              priority
            />
          </div> */}
        </div>

        {/* Algebra Workshop */}
        <section className={classes.section}>
          <h3 id="algebra-workshop">
            Expressions, Equations & Algebraic Reasoning
          </h3>

          <p>
            <strong>Three-part K–12 workshop series</strong> designed for
            interpreters working in elementary, middle, and high school
            classrooms who want to strengthen their understanding of algebraic
            concepts and mathematical language.
          </p>

          <p>
            This series explores how algebra develops across grade levels—from
            early pattern recognition and understanding the meaning of the equal
            sign in elementary school, to solving multi-step equations and
            analyzing abstract relationships in high school. Participants
            examine common areas of misunderstanding, key vocabulary, and
            strategies for maintaining clarity and accuracy when interpreting
            increasingly symbolic and abstract math instruction.
          </p>

          <p>
            <strong>Format:</strong> Live and recorded options available
            <br />
            <strong>Sessions:</strong>
            <br />• Elementary – Foundations of Algebraic Thinking
            <br />• Middle School – Expressions & Equations
            <br />• High School – Algebraic Structure & Reasoning
            <br />
            <strong>CEUs:</strong> Available for live sessions
            <br />
            <strong>Cost:</strong> Varies by session
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Algebra Workshop Registration"
                src="https://www.zeffy.com/embed/ticketing/hands-united-math-classes"
              />
            </div>
          </div>
        </section>

        {/* Spanish for Interpreters */}
        <div className={classes.eventBlock}>
          <h4 id="spanish-workshop">
            Beginning Spanish for Interpreters — March 23, 25, 27
          </h4>

          <p>
            A three-part beginning Spanish workshop taught in SimCom using the
            Destinos curriculum. Designed for interpreters and ASL-fluent
            community members seeking foundational Spanish skills for working
            with immigrant families.
          </p>

          <p>
            <strong>CEUs:</strong> Available
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Spanish Workshop Registration"
                src="https://www.zeffy.com/embed/ticketing/hands-united-spanish-destinos-classes"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* ASYNC WORKSHOPS */}
      {/* ===================== */}
      <section className={classes.section}>
        <h2 id="async">Async Workshops</h2>

        <p>
          Self-paced recordings available anytime. There are workshops that
          include CEUs.
        </p>

        <div className={classes.imageContainer}>
          <div className={classes.embedWrapper}>
            <ZeffyEmbed
              title="Async Workshop Store"
              src="https://www.zeffy.com/embed/ticketing/hands-uniteds-async-workshop-store"
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* PRODUCTS */}
      {/* ===================== */}
      <section className={classes.section}>
        <h2 id="products">Products</h2>

        <p>
          Educational materials and visual resources created in collaboration
          with the Deaf community.
        </p>

        <div className={classes.imageContainer}>
          <div className={classes.embedWrapper}>
            <ZeffyEmbed
              title="Hands United Product Store"
              src="https://www.zeffy.com/embed/ticketing/hands-uniteds-shop"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
