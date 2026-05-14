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
          <h4 id="international-sign-language-level-2">
            International Sign Language Level 2
          </h4>

          <p>
            Build on your foundational skills in International Sign Language
            (IS) in this Level 2 course designed for interpreters and Deaf
            professionals who are already fluent in ASL. This course focuses on
            expanding vocabulary, improving cross-linguistic communication
            strategies, and developing confidence in international settings.
          </p>

          <p>
            <strong>Instructor:</strong> Razaq Fakir
            <br />
            <strong>Length:</strong> 5 weeks
            <br />
            <strong>Schedule:</strong> Saturdays
            <br />
            <strong>Time:</strong> 8–10am PST
            <br />
            <strong>Start Date:</strong> May 9
            <br />
            <strong>CEUs:</strong> 1.0
            <br />
            <strong>Cost:</strong> $75
          </p>

          <div className={classes.imageContainer}>
            <div className={classes.embedWrapper}>
              <ZeffyEmbed
                title="International Sign Language Level 2 Registration"
                src="https://www.zeffy.com/en-US/ticketing/5-week-is-with-razaq-level-2-may"
              />
            </div>
          </div>
        </div>

        <div className={classes.eventBlock}>
        <h4 id="around-the-world">
          Around the World: Foreign Sign Languages & Deaf Cultures
        </h4>

        <p>
          An 8-week workshop series introducing participants to signed languages and
          Deaf cultures from around the world. Designed for interpreters, ITP
          students, Deaf professionals, and community members interested in expanding
          their global understanding of Deaf communication and cultural practices.
        </p>

        <p>
          Participants will explore a variety of foreign sign languages, cultural
          norms, interpreting considerations, and real-world applications for working
          with increasingly diverse Deaf communities.
        </p>

        <p>
          <strong>Schedule:</strong> Sundays, 9:00–11:00 AM PST
          <br />
          <strong>Length:</strong> 8 weeks
          <br />
          <strong>Dates:</strong> June 14 – August 2
          <br />
          <strong>CEUs:</strong> 1.6 total
          <br />
          <strong>Single Class Option:</strong> 0.2 CEUs for $20
          <br />
          <strong>Cost:</strong> $120 full series
        </p>

        <div className={classes.imageContainer}>
          <div className={classes.embedWrapper}>
            <ZeffyEmbed
              title="Around the World Registration"
              src="https://www.zeffy.com/en-US/ticketing/around-the-world-2"
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
