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
        <p>
          Not sure where to start or have questions?{" "}
          <Link href="/contact">Contact us</Link> and we’ll help you find the
          right program or service.
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

          <a href="#services">
            <span className={classes.navIcon}>🎥</span> Services
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

        <div className={classes.eventBlock}>
          <h4 id="understand-your-case">
            Understand Your Case: Know Your Next Step
          </h4>

          <p>
            A 3-part virtual workshop series designed for Deaf immigrants to
            better understand their immigration case, learn what happens next,
            and build confidence in checking their case status independently.
          </p>

          <p>
            <strong>Language:</strong> ASL, LSM, and Latin American gestures
            <br />
            <strong>Location:</strong> Zoom
            <br />
            <strong>Dates:</strong> May 8, 15, and 22
            <br />
            <strong>Cost:</strong> $5 (all 3 sessions)
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Understand Your Case Workshop Registration"
                src="https://www.zeffy.com/en-US/ticketing/understand-your-case-know-your-next-step"
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

        <div className={classes.eventBlock}>
          <h4 id="nigerian-sign-language">Nigerian Sign Language</h4>

          <p>
            A comprehensive course in Nigerian Sign Language (NSL), designed for
            interpreters and Deaf professionals who are fluent in ASL and want
            to expand their skills in cross-linguistic communication and engage
            with Deaf communities in Nigeria.
          </p>

          <p>
            <strong>Instructor:</strong> Jaafaru Sadiq Adamu
            <br />
            <strong>Length:</strong> 10 weeks
            <br />
            <strong>Schedule:</strong> Saturdays
            <br />
            <strong>Time:</strong> 10:00 AM – 12:00 PM CST
            <br />
            <strong>CEUs:</strong> 2.0
            <br />
            <strong>Cost:</strong> $150
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Nigerian Sign Language Registration"
                src="https://www.zeffy.com/en-US/ticketing/10-week-nsl-classes-with-jaafaru"
              />
            </div>
          </div>
        </div>

        <div className={classes.eventBlock}>
          <h4 id="algebra-interpreters">Algebra 1 & 2 for Interpreters</h4>

          <p>
            An 8-week workshop designed to build a strong foundation in algebra
            using a visual, conceptual approach. Designed for interpreters and
            Deaf professionals working in educational settings.
          </p>

          <p>
            <strong>Instructor:</strong> Celena Ponce
            <br />
            <strong>Schedule:</strong> Tuesdays & Thursdays
            <br />
            <strong>Length:</strong> 8 weeks
            <br />
            <strong>Start Date:</strong> June 16
            <br />
            <strong>CEUs:</strong> 3.2
            <br />
            <strong>Cost:</strong> $225
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Algebra 1 & 2 for Interpreters Registration"
                src="https://www.zeffy.com/en-US/ticketing/algebra-1-and-2-for-interpreters-math-u-see-based"
              />
            </div>
          </div>
        </div>

        <div className={classes.eventBlock}>
          <h4 id="precalc-calculus-interpreters">
            Precalculus & Calculus for Interpreters
          </h4>

          <p>
            An 8-week workshop focused on understanding advanced math concepts
            including functions, limits, and rates of change using a visual and
            conceptual approach for interpreters.
          </p>

          <p>
            <strong>Instructor:</strong> Celena Ponce
            <br />
            <strong>Schedule:</strong> Mondays & Wednesdays
            <br />
            <strong>Length:</strong> 8 weeks
            <br />
            <strong>Start Date:</strong> June 15
            <br />
            <strong>CEUs:</strong> 3.2
            <br />
            <strong>Cost:</strong> $225
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="Precalculus & Calculus for Interpreters Registration"
                src="https://www.zeffy.com/en-US/ticketing/pre-calculus-and-calculus-for-interpreters-math-u-see-based"
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
      {/* SERVICES */}
      {/* ===================== */}
      <section className={classes.section}>
        <div className={classes.sectionHeader}>
          <span className={classes.sectionIcon}>🎥</span>
          <h2 id="services">Services</h2>
          <a href="#top" className={classes.backToTop}>
            ↑ Back to top
          </a>
        </div>

        <div className={classes.cardGrid}>
          <Link href="/contact" className={classes.asyncCard}>
            <div>
              <h3>🎥 GallerySplit</h3>

              <p>
                Turn one Zoom gallery recording into individual video files for
                each participant.
              </p>

              <p>
                Ideal for ASL classes, interpreter training, workshops, and
                feedback review.
              </p>

              <p className={classes.cardSubtext}>
                ✅ Clean, organized, labeled files
                <br />
                ✅ Ready for training, feedback, or documentation
                <br />✅ You send the recording — we send the files
              </p>
            </div>

            <span className={classes.asyncButton}>
              Ask About GallerySplit →
            </span>
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

        <div className={classes.cardGrid}>
          <Link href="/store/products" className={classes.asyncCard}>
            <div>
              <h3>📚 Learning Materials</h3>

              <p>
                Multilingual ASL resources designed for families, including
                dictionaries, slides, and visual learning tools.
              </p>

              <p className={classes.cardSubtext}>
                🌍 Spanish • Haitian Creole • Chuukese
                <br />
                👪 Family-focused content
              </p>
            </div>

            <span className={classes.asyncButton}>Browse Products →</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
