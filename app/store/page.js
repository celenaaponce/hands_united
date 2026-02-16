import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import ZeffyEmbed from "components/zeffyembed/zeffy-embed";
import immigration101Flyer from "public/classflyers/immigration101.jpeg";

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
      <section className={classes.section}>
        <h2>Programs for Families</h2>

        <p>
          Free and low-cost programs designed for families with Deaf and
          hard-of-hearing children. Many events include ASL and spoken-language
          support.
        </p>

        {/* Spanish ASL Classes */}
        <div className={classes.eventBlock}>
          <h3 id="spanish-asl">Spanish ASL Classes (Ongoing)</h3>
          <p>
            Our current round of classes are full. We will be starting our next
            round in April. In the mean time, parents can fill out our{" "}
            <Link href="https://manosunidas.aidaform.com/miembro-de-la-comunidad-de-manos-unidas">
              Community Member form
            </Link>{" "}
            to get more information about our services.
          </p>
        </div>

        {/* Driver’s Permit Classes */}
        <div className={classes.eventBlock}>
          <h3 id="permit-classes">
            Driver’s Permit Classes (Enrollment Opening)
          </h3>

          <p>
            Our next 10-week driver’s permit course begins March 11. Classes are
            taught fully in ASL by a Deaf instructor and meet once per week for
            one hour. This course prepares Deaf and hard-of-hearing students for
            the written permit exam by teaching essential vocabulary, traffic
            laws, and test concepts in an accessible, visual format.
          </p>

          <Link href="https://celenaponce.aidaform.com/permit-class-registration-march-2026">
            Enroll in Permit Classes
          </Link>
        </div>
      </section>

      {/* ===================== */}
      {/* CLASSES & COHORTS */}
      {/* ===================== */}
      <section className={classes.section}>
        <h2>Classes & Multi-Week Programs</h2>

        {/* LSM */}
        <section className={classes.section}>
          <h2 id="lsm">Mexican Sign Language (LSM)</h2>

          <p>
            <strong>10-week Mexican Sign Language (LSM) course</strong> designed
            for interpreters, Deaf and hard-of-hearing professionals, and
            students who work with or support Mexican Deaf individuals and
            families.
          </p>

          <p>
            This course focuses on functional communication in LSM and on
            linguistic and cultural differences between ASL and LSM.
            Participants learn everyday and community-based vocabulary
            (including foods, places, and daily life topics), as well as
            cultural norms and perspectives within the Mexican Deaf community to
            better support Deaf clients, students, and families.
          </p>

          <p>
            <strong>Dates:</strong> February 3 – April 9
            <br />
            <strong>Schedule Options:</strong>
            <br />• Level 1: Tuesdays or Wednesdays at 7:00 p.m. CST
            <br />• Level 2: Thursdays at 7:00 p.m. CST
            <br />
            <strong>Instructor:</strong> Karen Macias
            <br />
            <strong>Cost:</strong> $150 (includes 2.0 CEUs)
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Mexican Sign Language Registration"
                src="https://www.zeffy.com/embed/ticketing/10-week-lsm-classes-with-karen"
              />
            </div>
          </div>
        </section>

        {/* Immigration 101 – Deaf / DHH */}
        <div className={classes.eventBlock}>
          <h3 id="immigration-101">
            Immigration 101 — Deaf & Hard of Hearing Only
          </h3>

          <div className={classes.imageContainer}>
            <Image
              src={immigration101Flyer}
              alt="Hands United Immigration 101 workshop flyer"
              width={500}
              height={700}
              priority
            />
          </div>

          <p>
            <strong>Immigration 101</strong> is a three-part workshop series
            designed specifically for Deaf and Hard of Hearing community
            members.
          </p>

          <p>
            This series explains <strong>real immigration pathways</strong>,{" "}
            <strong>real costs</strong>, <strong>real wait times</strong>, and
            why there is no single “line” to immigrate to the United States.
          </p>

          <p>
            <strong>Dates:</strong> February 13, 20, 27
            <br />
            <strong>Time:</strong> 4:00–6:00 p.m. PST
            <br />
            <strong>Platform:</strong> Zoom
          </p>

          <p>
            <strong>Pricing:</strong>
            <br />• General admission — $5 (no CEUs)
            <br />• Student — $25 (0.6 CEUs)
            <br />• Professional — $60 (0.6 CEUs)
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Immigration 101 Registration"
                src="https://www.zeffy.com/embed/ticketing/there-is-no-line-a-deaf-accessible-immigration--101"
              />
            </div>
          </div>
        </div>
        {/* LSC Professional Workshop */}
        <div className={classes.eventBlock}>
          <h3 id="lsc-professional-workshop">
            Basic Colombian Sign Language (LSC) Workshop – Professionals
          </h3>

          <p>
            A beginner workshop for interpreters, educators, and professionals
            who work with Colombian Deaf individuals and families.
          </p>

          <p>
            Participants will learn:
            <br />• food vocabulary in Colombian Sign Language (LSC)
            <br />• location and everyday place vocabulary in LSC
            <br />• cultural information about the Colombian Deaf community
          </p>

          <p>
            <strong>Date:</strong> February 15
            <br />
            <strong>Audience:</strong> Professionals and community partners
            <br />
            <strong>Cost:</strong> $15
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="LSC Professional Workshop Registration"
                src="https://www.zeffy.com/embed/ticketing/lsc-family-workshop"
              />
            </div>
          </div>
        </div>

        {/* Immigration 101 – Hearing Community */}
        <div className={classes.eventBlock}>
          <h3 id="immigration-101-hearing">
            Immigration 101 — Hearing Community (Spoken English)
          </h3>

          <p>
            <strong>Immigration 101</strong> for the hearing community is a
            three-part workshop designed for professionals, volunteers, and
            community members who support Deaf immigrants and their families.
          </p>

          <p>
            This series covers:
            <br />• immigration pathways and costs (with realistic wait times),
            <br />• how the immigration system and court process actually work,
            and
            <br />• how the system impacts Deaf immigrants and how hearing
            professionals can provide better, more accessible support.
          </p>

          <p>
            <strong>Dates:</strong> February 21, February 28, and March 7
            <br />
            <strong>Platform:</strong> Zoom
            <br />
            <strong>Language:</strong> Spoken English
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Immigration 101 – Hearing Community Registration"
                src="https://www.zeffy.com/embed/ticketing/there-is-no-line-immigration--101"
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
          Self-paced recordings available anytime. These do not include CEUs.
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
