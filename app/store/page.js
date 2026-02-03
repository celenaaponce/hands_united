import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import ZeffyEmbed from "components/zeffyembed/zeffy-embed";
import immigration101Flyer from "public/classflyers/immigration101.jpeg";

/* =========================
   FLYER IMAGE PLACEHOLDERS
   Replace these imports with
   your actual flyer paths
   ========================= */

// FAMILY PROGRAM FLYERS
import immigrationFlyer from "public/classflyers/consult.png";
import familyMeetingFlyer from "public/classflyers/0124eng.png";
import signNameFlyer from "public/classflyers/celebration.jpeg";

// OPTIONAL: add more as needed
// import aslClassFlyer from "public/classflyers/REPLACE_asl_classes.png";
// import driversEdFlyer from "public/classflyers/REPLACE_drivers_ed.png";

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
              Community Member form{" "}
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
            Ten-week course taught fully in ASL by a Deaf instructor. Classes
            meet once a week for one hour.
          </p>

          <Link href="https://celenaponce.aidaform.com/permit-class-registration-march-2026">
            Enroll in Permit Classes
          </Link>
        </div>
      </section>

      {/* ======================================= */}
      {/* PROFESSIONAL & COMMUNITY PARTNERS */}
      {/* ======================================= */}
      {/* <section className={classes.section}>
        <h2 id="professional-programs">
          Programs for Professionals & Community Partners
        </h2>

        <p>
          Workshops and trainings for educators, interpreters, lawyers, and
          community organizations. Some events include CEUs.
        </p>

      </section> */}

      {/* ===================== */}
      {/* CLASSES & COHORTS */}
      {/* ===================== */}
      <section className={classes.section}>
        <h2>Classes & Multi-Week Programs</h2>

        <section className={classes.section}>
          <h2 id="math">Math Workshops</h2>

          {/* Flyer */}

          <p>
            <strong>Hands United Math Workshops</strong> are designed
            specifically for educational interpreters and focus on building the
            math content knowledge needed for accurate interpretation.
          </p>

          <p>
            Sessions are taught in <strong>spoken English</strong> and geared
            toward interpreters working in K–12 educational settings.
          </p>

          <p>
            <strong>February Workshop:</strong> Number Sense & Operations
            <br />
            <strong>Dates:</strong> February 2, 4, 6<br />
            <strong>Session Length:</strong> 2 hours each
            <br />
            <strong>CEUs:</strong> 0.2 per session
            <br />
            <strong>Cost:</strong> $110
          </p>

          <p>
            <strong>Grade-Level Focus:</strong>
            <br />
            Monday – Elementary
            <br />
            Wednesday – Middle School
            <br />
            Friday – High School
          </p>

          <p>
            <strong>Time Zones:</strong>
            <br />
            4:00 p.m. PST · 5:00 p.m. MST · 6:00 p.m. CST · 7:00 p.m. EST · 8:00
            p.m. Puerto Rico
          </p>

          {/* ✅ CORRECT Zeffy Embed — Math */}
          <div className={classes.embedWrapper}>
            <ZeffyEmbed
              title="Hands United Math Workshops Registration"
              src="https://www.zeffy.com/embed/ticketing/hands-united-math-classes"
            />
          </div>
        </section>

        {/* LSM */}
        <section className={classes.section}>
          <h2 id="lsm">Mexican Sign Language (LSM)</h2>

          {/* Flyer */}

          {/* Description */}
          <p>
            <strong>10-week Mexican Sign Language (LSM) course</strong> for ASL
            interpreters, Deaf and Hard of Hearing individuals, and ITP
            students.
          </p>

          <p>
            Learn LSM vocabulary and concepts not found in ASL, including
            cultural topics such as Mexican foods, cities, traditions, and
            holidays.
          </p>

          <p>
            <strong>Dates:</strong> February 3 – April 9<br />
            <strong>Schedule Options:</strong>
            <br />
            • Level 1: Tuesdays or Wednesdays at 7:00 p.m. CST
            <br />
            • Level 2: Thursdays at 7:00 p.m. CST
            <br />
            <strong>Instructor:</strong> Karen Macias
            <br />
            <strong>Cost:</strong> $150 (includes 2.0 CEUs)
          </p>

          {/* Zeffy Embed */}
          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Mexican Sign Language Registration"
                src="https://www.zeffy.com/embed/ticketing/10-week-lsm-classes-with-karen"
                allowPaymentRequest
                allowTransparency="true"
              />
            </div>
          </div>
        </section>
        {/* Immigration 101 Workshop */}
        <div className={classes.eventBlock}>
          <h3 id="immigration-101">
            Immigration 101 — Deaf & Hard of Hearing Only
          </h3>

          {/* Flyer */}
          <div className={classes.imageContainer}>
            <Image
              src={immigration101Flyer}
              alt="Hands United Immigration 101 workshop flyer"
              width={500}
              height={700}
              priority
            />
          </div>

          {/* Description */}
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
            <br />
            • General admission — $5 (no CEUs)
            <br />
            • Student — $25 (0.6 CEUs)
            <br />• Professional — $60 (0.6 CEUs)
          </p>

          {/* Zeffy Embed */}
          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Immigration 101 Registration"
                src="https://www.zeffy.com/embed/ticketing/there-is-no-line-a-deaf-accessible-immigration--101"
                allowPaymentRequest
                allowTransparency="true"
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
              allowPaymentRequest
              allowTransparency="true"
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
              allowPaymentRequest
              allowTransparency="true"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
