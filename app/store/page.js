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

        {/* Math */}
<section className={classes.section}>
  <h2 id="algebra-workshop">Expressions, Equations & Algebraic Reasoning</h2>

  <p>
    <strong>Three-part K–12 workshop series</strong> designed for interpreters
    working in elementary, middle, and high school classrooms who want to
    strengthen their understanding of algebraic concepts and mathematical
    language.
  </p>

  <p>
    This series explores how algebra develops across grade levels—from early
    pattern recognition and understanding the meaning of the equal sign in
    elementary school, to solving multi-step equations and analyzing abstract
    relationships in high school. Participants examine common areas of
    misunderstanding, key vocabulary, and strategies for maintaining clarity
    and accuracy when interpreting increasingly symbolic and abstract math
    instruction.
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

        {/* Immigration 101 – Hearing Community */}

          <h3 id="immigration-101-hearing">
            Immigration 101 — Hearing Community (Spoken English)
          </h3>
        <div className={classes.eventBlock}>
                    <div className={classes.imageContainer}>
            <Image
              src={immigration101FlyerHearing}
              alt="Hands United Immigration 101 workshop flyer"
              width={500}
              height={700}
              priority
            />
          </div>
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
            <strong>Time:</strong> 2:00-4:00 p.m. PST
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
