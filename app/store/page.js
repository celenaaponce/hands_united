import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import ZeffyEmbed from "components/zeffyembed/zeffy-embed"

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
  <a href="#professional-programs">events and professional trainings</a>, and{" "}
  <a href="#store">educational resources</a> to support immigrant families with
  Deaf and hard-of-hearing children.
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
          <h3>Spanish ASL Classes (Ongoing)</h3>
          <p>
            We are currently in Week 3 of our Spanish ASL classes. Space is still
            available, especially on Wednesdays and Thursdays.
          </p>

          {/* OPTIONAL flyer slot */}
          {/*
          <div className={classes.responsiveImageWrapper}>
            <Image
              src={aslClassFlyer}
              width={500}
              height={700}
              alt="Flyer for Spanish ASL classes"
            />
          </div>
          */}

          <Link href="REPLACE_AIDAFORM_LINK">
            Register for Spanish ASL Classes
          </Link>
        </div>

        {/* Immigration Consultation */}
        <div className={classes.eventBlock}>
          <h3>Free Immigration Consultation for DHHDB Immigrants</h3>
          <p>
            Tuesday, January 20. Free immigration consultation for Deaf, Hard of
            Hearing, DeafBlind, and DeafDisabled immigrants, supported by Deaf
            and hearing interpreters.
          </p>

          <div className={classes.responsiveImageWrapper}>
            <Image
              src={immigrationFlyer}
              width={500}
              height={700}
              alt="Flyer for free immigration consultation for Deaf immigrants"
            />
          </div>

          <p>
            <Link href="REPLACE_ASL_VIDEO_LINK">
              Watch ASL advertisement
            </Link>
          </p>
        </div>

        {/* Monthly Family Meeting */}
        <div className={classes.eventBlock}>
          <h3>Monthly ASL Family Meeting (Amharic & Tigrinya)</h3>
          <p>
            Saturday, January 24. Monthly ASL family meeting with Amharic and
            Tigrinya-speaking families.
          </p>

          <div className={classes.responsiveImageWrapper}>
            <Image
              src={familyMeetingFlyer}
              width={500}
              height={500}
              alt="Flyer for monthly ASL family meeting in Amharic and Tigrinya"
            />
          </div>

          <Link href="REPLACE_ZOOM_LINK">
            Join via Zoom
          </Link>
        </div>

        {/* Sign Name Celebration */}
        <div className={classes.eventBlock}>
          <h3>Sign Name Celebration</h3>
          <p>
            Friday, January 23. Invite-only event where families meet with Deaf
            leaders to invent name signs. Trilingual volunteers are still needed.
          </p>

          <div className={classes.responsiveImageWrapper}>
            <Image
              src={signNameFlyer}
              width={500}
              height={500}
              alt="Flyer for Sign Name Celebration with Deaf leaders"
            />
          </div>
        </div>

        {/* Driver’s Permit Classes */}
        <div className={classes.eventBlock}>
          <h3>Driver’s Permit Classes (Enrollment Opening)</h3>
          <p>
            Ten-week course taught fully in ASL by a Deaf instructor. Classes
            meet once a week for one hour.
          </p>

          <Link href="REPLACE_PERMIT_REGISTRATION_LINK">
            Enroll in Permit Classes
          </Link>
        </div>
      </section>

{/* ======================================= */}
      {/* PROFESSIONAL & COMMUNITY PARTNERS */}
      {/* ======================================= */}
      <section className={classes.section}>
        <h2 id="professional-programs">Programs for Professionals & Community Partners</h2>

        <p>
          Workshops and trainings for educators, interpreters, lawyers, and
          community organizations. Some events include CEUs.
        </p>

        {/* Tech Workshop */}
<section className={classes.section}>
  <h3 id="tech-workshop">Interactive Tools for Virtual Instruction (Postponed due to low enrollment)</h3>

  <p>
    A hands-on workshop for educators, interpreters, and service providers
    focused on creating accessible, engaging video-based instruction.
  </p>

  <ul className={classes.eventDetails}>
    📅 TBD
    ⏰ 4:00–6:00 PM PST
    🎓 0.2 CEUs available
    🧏 Presented in ASL
  </ul>

  <p>
    Topics include:
    <br />• Adding images to video
    <br />• Hard-coded captions
    <br />• Embedding slides
    <br />• Accessible video strategies
  </p>

  <p>
    <a href="https://youtu.be/kl9VmuM1-J0">Watch short overview video</a>
  </p>

  {/* Zeffy embed goes AFTER context */}
  <div className={classes.embedWrapper}>
    <ZeffyEmbed
      title="Tech Workshop Registration"
      src="https://www.zeffy.com/embed/ticketing/interactive-tools-for-virtual-instruction"
      allowPaymentRequest
    />
  </div>
</section>


        {/* Guest Speaker */}
<section className={classes.section}>
  <h3>Language Can’t Wait!</h3>

  <p className={classes.subtitle}>
    Sign languages and full development in Deaf children
  </p>

  <p>
    A two-hour virtual presentation for families of Deaf children and
    professionals working with Deaf communities. This session addresses
    language deprivation as a neurological emergency and emphasizes the
    importance of ensuring a full first language through sign languages.
  </p>

  <p>
    Topics include debunking myths about speech-only approaches, discussion of
    cochlear implants, and practical strategies families and professionals can
    take immediately to support healthy language development.
  </p>

  <ul className={classes.eventDetails}>
    📅 <strong>Date:</strong> February 21, 2026 <br></br>
    ⏰ <strong>Time:</strong> 10am PT · 12pm CT · 2pm PR <br></br>
    🎤 <strong>Presenter:</strong> Professor Alejandro Oviedo <br></br>
    🗣️ <strong>Language:</strong> Spanish <br></br>
    🧏 <strong>Interpretation:</strong> English and ASL <br></br>
    🎓 <strong>CEUs:</strong> 0.2 available for professionals <br></br>
  </ul>

  <p>
    <strong>Cost:</strong><br />
    Families: Free<br />
    Professionals: $50 with CEUs · $30 without CEUs
  </p>
<section className={classes.section}>
  <h4>Register</h4>

  <div className={classes.embedWrapper}>
    <ZeffyEmbed
      title="Language Can’t Wait Registration"
      src="https://www.zeffy.com/embed/ticketing/language-cant-wait"
      allowPaymentRequest
      allowTransparency="true"
    />
  </div>
</section>

</section>

      </section>

      {/* ===================== */}
      {/* CLASSES & COHORTS */}
      {/* ===================== */}
      <section className={classes.section}>
        <h2>Classes & Multi-Week Programs</h2>

 <section className={classes.section}>
            {/* Spanish Destinos */}
      <section className={classes.section}>
        <h2 id="spanish-destinos">Spanish Workshops — Destinos</h2>

        {/* Flyer */}

        {/* Description */}
        <p>
          <strong>Hands United Spanish Workshops</strong> use the <em>Destinos</em>{" "}
          curriculum to support interpreters and professionals working between
          ASL and spoken Spanish.
        </p>

        <p>
          Sessions are taught in <strong>ASL and spoken Spanish</strong> and are
          open to interpreters, interpreting students, hearing participants, and
          DHH professionals.
        </p>

        <p>
          <strong>January Session:</strong> Destinos 6–8<br />
          <strong>Dates:</strong> January 26, 28, 30<br />
          <strong>Total Instruction:</strong> 6 hours<br />
          <strong>CEUs:</strong> 0.6<br />
          <strong>Cost:</strong> $60
        </p>

        <p>
          <strong>Time Zones:</strong><br />
          4:00 p.m. PST · 5:00 p.m. MST · 6:00 p.m. CST · 7:00 p.m. EST · 8:00 p.m.
          Puerto Rico
        </p>

        <p>
          Discounted packages are available for participants enrolling in
          multiple months.
        </p>

        {/* Zeffy Embed */}
        <div className={classes.imageContainer}>
          <div className={classes.embedWrapper}>
            <ZeffyEmbed
              title="Spanish Destinos Registration"
              src="https://www.zeffy.com/embed/ticketing/hands-united-spanish-destinos-classes"
              allowPaymentRequest
              allowTransparency="true"
            />
          </div>
        </div>
               <section className={classes.section}>
        <h2>Math Workshops</h2>

        {/* Flyer */}


        <p>
          <strong>Hands United Math Workshops</strong> are designed specifically
          for educational interpreters and focus on building the math content
          knowledge needed for accurate interpretation.
        </p>

        <p>
          Sessions are taught in <strong>spoken English</strong> and geared toward
          interpreters working in K–12 educational settings.
        </p>

        <p>
          <strong>February Workshop:</strong> Number Sense & Operations<br />
          <strong>Dates:</strong> February 2, 4, 6<br />
          <strong>Session Length:</strong> 2 hours each<br />
          <strong>CEUs:</strong> 0.2 per session<br />
          <strong>Cost:</strong> $110
        </p>

        <p>
          <strong>Grade-Level Focus:</strong><br />
          Monday – Elementary<br />
          Wednesday – Middle School<br />
          Friday – High School
        </p>

        <p>
          <strong>Time Zones:</strong><br />
          4:00 p.m. PST · 5:00 p.m. MST · 6:00 p.m. CST · 7:00 p.m. EST · 8:00 p.m.
          Puerto Rico
        </p>

        {/* ✅ CORRECT Zeffy Embed — Math */}
        <div className={classes.imageContainer}>
          <div style={{ position: "relative", width: "100%", paddingTop: "450px" }}>
            <ZeffyEmbed
              title="Hands United Math Workshops Registration"
              src="https://www.zeffy.com/embed/ticketing/hands-united-math-classes"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allowPaymentRequest
              allowTransparency="true"
            />
          </div>
        </div>
      </section>
      </section>
        <h2>International Sign Language</h2>

        {/* Flyer */}


        {/* Description */}
        <p>
          <strong>5-week International Sign Language class</strong> designed for
          Deaf professionals, interpreters, and others with strong ASL fluency
          working in multilingual and international contexts.
        </p>

        <p>
          This course builds cross-linguistic signing strategies and supports
          communication beyond ASL in global and professional settings.
        </p>

        <p>
          <strong>Dates:</strong> Starting February 3<br />
          <strong>Schedule:</strong> Tuesdays & Thursdays<br />
          <strong>Time:</strong> 9:00–11:00 a.m. PST<br />
          <strong>Instructor:</strong> Razaq Fakir<br />
          <strong>Cost:</strong> $150 (includes 2.0 CEUs)
        </p>

        {/* Zeffy Embed */}
        <div className={classes.imageContainer}>
          <div className={classes.embedWrapper}>
            <ZeffyEmbed
              title="International Sign Language Registration"
              src="https://www.zeffy.com/embed/ticketing/5-week-international-sign-language-with-razaq"
              allowPaymentRequest
              allowTransparency="true"
            />
          </div>
        </div>
      </section>

        {/* LSM */}
           <section className={classes.section}>
        <h2>Mexican Sign Language (LSM)</h2>

        {/* Flyer */}


        {/* Description */}
        <p>
          <strong>10-week Mexican Sign Language (LSM) course</strong> for ASL
          interpreters, Deaf and Hard of Hearing individuals, and ITP students.
        </p>

        <p>
          Learn LSM vocabulary and concepts not found in ASL, including cultural
          topics such as Mexican foods, cities, traditions, and holidays.
        </p>

        <p>
          <strong>Dates:</strong> February 3 – April 9<br />
          <strong>Schedule Options:</strong><br />
          • Level 1: Tuesdays or Wednesdays at 7:00 p.m. CST<br />
          • Level 2: Thursdays at 7:00 p.m. CST<br />
          <strong>Instructor:</strong> Karen Macias<br />
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



      <section className={classes.section}>
  <h2>Book Club — <em>A Mother’s Voice</em></h2>

  {/* Flyer */}


  {/* Description */}
  <p>
    Join our virtual book club centered on <strong><em>A Mother’s Voice</em></strong>,
    written by Deaf author <strong>Tali Etedgi</strong>. This series explores
    Deaf experiences, language access, family advocacy, and meaningful change.
  </p>

  <p>
    The book club includes multiple live discussions and a{" "}
    <strong>final session with the author</strong>.
  </p>

  <p>
    <strong>Meeting Platform:</strong> Zoom<br />
    <strong>Time:</strong> 5:00 p.m. PST<br />
    <strong>Dates:</strong> February 11, February 25, March 11, March 25<br />
    <strong>Final Session:</strong> April 11 at <strong>9:00 a.m. PST</strong>{" "}
    (with the author)
  </p>

  <p>
    <strong>CEU Options:</strong><br />
    • $125 — 1.4 CEUs (includes 0.4 CEUs for reading time)<br />
    • $100 — No CEUs
  </p>

  <p>
    This book club is ideal for interpreters, educators, and professionals
    seeking deeper understanding of Deaf experiences, as well as families and
    community members interested in storytelling and advocacy.
  </p>
    <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
    <ZeffyEmbed
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/mcsyBIawp88"
      title="Author Tali Etedgi introduces A Mother’s Voice"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>

  {/* Zeffy Embed — Book Club */}
  <div className={classes.imageContainer}>
    <div style={{ position: "relative", width: "100%", paddingTop: "450px" }}>
      <ZeffyEmbed
        title="A Mother’s Voice Book Club Registration"
        src="https://www.zeffy.com/embed/ticketing/a-mothers-voice"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        allowPaymentRequest
        allowTransparency="true"
      />
    </div>
  </div>
</section>
      </section>

      {/* ===================== */}
      {/* ASYNC WORKSHOPS */}
      {/* ===================== */}
      <section className={classes.section}>
        <h2 id="store">Async Workshops</h2>
        <p>Self-paced recordings available anytime. These do not include CEUs.</p>

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
        <h2>Products</h2>
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
