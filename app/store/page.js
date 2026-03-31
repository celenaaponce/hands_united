import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import ZeffyEmbed from "components/zeffyembed/zeffy-embed";
import immigration101Flyer from "public/classflyers/immigration101.jpeg";
import immigration101FlyerHearing from "public/classflyers/imm101hearing.jpg";
import AmharicMeetupEN from "public/classflyers/amharic-tigrinya-meetup.png";
import AmharicMeetupAM from "public/classflyers/amharic.png";
import AmharicMeetupTI from "public/classflyers/tigrinya.png";
import HaitianMeetupEN from "public/classflyers/haitian-meetup-en.png";
import HaitianMeetupHT from "public/classflyers/haitian-meetup-ht.png";

import CitizenshipEN from "public/classflyers/citizenship-en.png";
import CitizenshipES from "public/classflyers/citizenship-es.png";

import LSCLevel2 from "public/classflyers/lsc2.png";
export const metadata = {
  title: "Hands United Events & Store",
  description:
    "Upcoming events, workshops, classes, and educational resources supporting Deaf and Hard of Hearing families",
};

export default function StorePage() {
  return (
    <main id="top">
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
      <section className={classes.section}>
        <h3>Browse Events by Program Area</h3>

        <nav className={classes.sectionNav}>
          <a href="#family-community">
            <span className={classes.navIcon}>👪</span> Family & Community
          </a>
          <span>|</span>

          <a href="#immigration">
            <span className={classes.navIcon}>⚖️</span> Immigration
          </a>
          <span>|</span>

          <a href="#professionals">
            <span className={classes.navIcon}>🎓</span> Professionals
          </a>
          <span>|</span>

          <a href="#driver-education">
            <span className={classes.navIcon}>🚗</span> Driver Education
          </a>
          <span>|</span>

          <a href="#async">
            <span className={classes.navIcon}>💻</span> Async Workshops
          </a>
          <span>|</span>

          <a href="#products">
            <span className={classes.navIcon}>📚</span> Products
          </a>
        </nav>
      </section>
      <section className={classes.section} id="family-community">
        <div className={classes.sectionHeader}>
          <span className={classes.sectionIcon}>👪</span>
          <h2> Family & Community Programs</h2>
          <a href="#top" className={classes.backToTop}>
            ↑ Back to top
          </a>
        </div>

        <div className={classes.eventBlock}>
          <h4>Spanish Family ASL Classes — Starting April</h4>

          <p>
            An 8-week ASL course designed for immigrant families with Deaf and
            hard-of-hearing children. Focuses on strengthening communication at
            home and reducing language deprivation.
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
        <div className={classes.eventBlock}>
          <h4 id="citizenship-classes">
            Deaf Citizenship Classes — Starting in April
          </h4>

          <p>
            A 10-week online citizenship preparation course taught in American
            Sign Language. Participants will study U.S. civics, practice the
            naturalization interview, and prepare for the citizenship exam.
          </p>

          <p>
            <strong>Length:</strong> 10 weeks
            <br />
            <strong>Schedule:</strong> Tuesdays or Thursdays
            <br />
            <strong>Format:</strong> Online (Zoom)
            <br />
            <strong>Cost:</strong> $50
          </p>

          {/* Registration Button */}
          <div className={classes.registrationButtonWrapper}>
            <a
              href="https://handsunited.aidaform.com/citizenship-registration-april-2026"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.registrationButton}
            >
              Register for Citizenship Classes
            </a>
          </div>

          <div className={classes.flyerGrid}>
            <div className={classes.flyerItem}>
              <Image
                src={CitizenshipEN}
                alt="Deaf citizenship class flyer English"
              />
            </div>

            <div className={classes.flyerItem}>
              <Image
                src={CitizenshipES}
                alt="Deaf citizenship class flyer Spanish"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={classes.section} id="immigration">
        <div className={classes.sectionHeader} id="immigration">
          <span className={classes.sectionIcon}>⚖️</span>
          <h2>Immigration</h2>
          <a href="#top" className={classes.backToTop}>
            ↑ Back to top
          </a>
        </div>

        <div className={classes.eventBlock}>
          <h4>Immigration 101 — March 17, 24, 31 & April 4</h4>

          <p>
            A four-part workshop designed to help professionals and community
            allies better understand the U.S. immigration system and the
            additional barriers Deaf immigrants often face.
          </p>

          <p>
            <strong>Language:</strong> ASL
            <br />
            <strong>Location:</strong> Zoom
            <br />
            <strong>CEUs:</strong> 0.8 PPO CEUs
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Immigration 101 Registration"
                src="https://www.zeffy.com/ticketing/immigration-101-professionals-asl"
              />
            </div>
          </div>
        </div>

        <div className={classes.eventBlock}>
          <h4 id="representing-deaf-workshop">
            Representing Deaf Immigrant Clients: Language Access and Legal Best
            Practices - April 28
          </h4>

          <p>
            A 90-minute virtual workshop for attorneys on effectively
            representing Deaf immigrant clients, covering language access,
            interpreter use, and practical strategies to support clear
            communication and due process.
          </p>

          <p>
            <strong>Language:</strong> spoken English
            <br />
            <strong>Location:</strong> Zoom
            <br />
            <strong>Date:</strong> April 28
            <br />
            <strong>Time:</strong> 4-5:30pm PST
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Representing Deaf Immigrant Clients Registration"
                src="https://www.zeffy.com/en-US/ticketing/representing-deaf-immigrant-clients-language-access-and-legal-best-practices"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={classes.section} id="professionals">
        <div className={classes.sectionHeader}>
          <span className={classes.sectionIcon}>🎓</span>
          <h2>Professional Development</h2>
          <a href="#top" className={classes.backToTop}>
            ↑ Back to top
          </a>
        </div>

        <p>
          Workshops designed for interpreters, educators, and professionals
          working with Deaf and multilingual communities. Many events offer
          CEUs.
        </p>

        {/* ===================== */}
        {/* SPANISH WORKSHOP */}
        {/* ===================== */}

        <div className={classes.eventCard}>
          <h3 id="spanish-workshop">
            Beginning Spanish for ASL & English Users
          </h3>

          <p>
            A three-part beginning Spanish workshop designed for participants
            fluent in ASL and English who want to develop practical Spanish
            skills for working with immigrant families and multilingual
            environments.
          </p>

          <p>
            The course uses the <strong>Destinos</strong> curriculum and is
            taught in SimCom to support accessible language learning for ASL
            users.
          </p>

          <p>
            <strong>Dates:</strong> April 6, 8, 9
            <br />
            <strong>CEUs:</strong> 0.6 available
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Spanish Workshop Registration"
                src="https://www.zeffy.com/ticketing/hands-united-spanish-destinos-classes"
              />
            </div>
          </div>
        </div>
        <div className={classes.eventBlock}>
          <h4 id="colombian-sign-language">Colombian Sign Language Level 2</h4>

          <p>
            A continuation course for interpreters and Deaf professionals who
            are fluent in ASL and have completed Colombian Sign Language Level
            1.
          </p>

          <p>
            <strong>Instructor:</strong> Andrés Ricardo Sánchez Morales
            <br />
            <strong>Length:</strong> 10 weeks
            <br />
            <strong>Schedule:</strong> Tuesday & Thursday
            <br />
            <strong>Time:</strong> 6–7 PM CST
            <br />
            <strong>CEUs:</strong> 2.0
            <br />
            <strong>Cost:</strong> $150
          </p>

          {/* <div className={classes.flyerGrid}>
            <div className={classes.flyerItem}>
              <Image
                src={LSCLevel2}
                alt="Colombian Sign Language Level 2 course flyer"
              />
            </div>
          </div> */}
          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Colombian Sign Language Workshop Registration"
                src="https://www.zeffy.com/ticketing/10-week-colombian-sign-language-2-with-andres"
              />
            </div>
          </div>
        </div>
        <div className={classes.eventBlock}>
          <h4 id="international-sign-language">
            International Sign Language Level 1
          </h4>

          <p>
            An introductory course to International Sign Language (IS) Level 1,
            designed for interpreters and Deaf professionals who are fluent in
            ASL and want to develop foundational skills for cross-linguistic and
            international communication.
          </p>

          <p>
            <strong>Instructor:</strong> Razaq Fakir
            <br />
            <strong>Length:</strong> 5 weeks
            <br />
            <strong>Schedule:</strong> Saturdays
            <br />
            <strong>Time:</strong> 9-11am PST
            <br />
            <strong>CEUs:</strong> 1.0
            <br />
            <strong>Cost:</strong> $75
          </p>

          {/* <div className={classes.flyerGrid}>
            <div className={classes.flyerItem}>
              <Image
                src={LSCLevel2}
                alt="Colombian Sign Language Level 2 course flyer"
              />
            </div>
          </div> */}
          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="International Sign Language Workshop Registration"
                src="https://www.zeffy.com/en-US/ticketing/5-week-is-with-razaq-april"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={classes.section} id="driver-education">
        <div className={classes.sectionHeader}>
          <span className={classes.sectionIcon}>🚗</span>
          <h2>Driver Education</h2>
          <a href="#top" className={classes.backToTop}>
            ↑ Back to top
          </a>
        </div>

        <div className={classes.eventBlock}>
          <h4>Driver’s Permit Classes — Starting March 25</h4>

          <p>
            A 10-week driver education program taught fully in ASL to ensure
            Deaf students have equitable access to driver education and
            licensing.
          </p>

          <p>
            <strong>Format:</strong> Live on Zoom
            <br />
            <strong>Length:</strong> 10 weeks
          </p>

          {/* CARD ACTIONS */}
          <div className={classes.asyncGrid}>
            <Link
              href="/programs/driver-education/register"
              className={classes.asyncCard}
            >
              <div>
                <h3>🚗 Enroll in Permit Classes</h3>
                <p>
                  Register for our 10-week ASL driver education program and
                  begin your path toward getting your permit.
                </p>
              </div>
              <span className={classes.asyncButton}>Register →</span>
            </Link>

            <a
              href="https://www.facebook.com/groups/YOURGROUP"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.asyncCard}
            >
              <div>
                <h3>👥 Join Community</h3>
                <p>
                  Connect with other Deaf learners, families, and instructors in
                  our Driver Education community.
                </p>
              </div>
              <span className={classes.asyncButton}>Join →</span>
            </a>

            <Link
              href="/programs/driver-education/support"
              className={classes.asyncCard}
            >
              <div>
                <h3>✊ Support the Program</h3>
                <p>
                  Help expand ASL-accessible driver education and support Deaf
                  students nationwide.
                </p>
              </div>
              <span className={classes.asyncButton}>Support →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* ASYNC WORKSHOPS */}
      {/* ===================== */}
      <section className={classes.section}>
        <div className={classes.sectionHeader}>
          <span className={classes.sectionIcon}>💻</span>
          <h2 id="async">Async Workshops</h2>
          <a href="#top" className={classes.backToTop}>
            ↑ Back to top
          </a>
        </div>
        <div className={classes.asyncGrid}>
          <Link href="/store/async/ceu" className={classes.asyncCard}>
            <div>
              <h3>🎓 CEU Workshops</h3>
              <p>
                Earn CEUs through self-paced professional trainings in ASL,
                English, Spanish, and/or Hmong.
              </p>
            </div>
            <span className={classes.asyncButton}>View CEU Workshops →</span>
          </Link>

          <Link href="/store/async/no-ceu" className={classes.asyncCard}>
            <div>
              <h3>📺 Non-CEU Workshops</h3>
              <p>Access recorded workshops and resources without CEU credit.</p>
            </div>
            <span className={classes.asyncButton}>View Workshops →</span>
          </Link>
        </div>
      </section>

      {/* ===================== */}
      {/* PRODUCTS */}
      {/* ===================== */}
      <section className={classes.section}>
        <div className={classes.sectionHeader}>
          <span className={classes.sectionIcon}>📚</span>
          <h2 id="products">Products</h2>
          <a href="#top" className={classes.backToTop}>
            ↑ Back to top
          </a>
        </div>
        <p>CURRENTLY UPDATING! SEE NEW THINGS SOON!</p>
      </section>
    </main>
  );
}
