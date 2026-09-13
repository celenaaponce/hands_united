import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import PermitMap from "public/driveredmap.png";
import ZoomHosting from "public/classflyers/zoomhandle.png";
import TechWorkshopsEN from "public/images/technology-workshops-en.png";
import TechWorkshopsES from "public/images/technology-workshops-es.png";
import HotlineWorkshop from "public/images/hotlineworkshop.png";
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

import VirtualTours from "public/classflyers/virtualtours.png";
import IEPVerification from "public/classflyers/iep.png";
import MathConsult from "public/classflyers/mathconsult.png";
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
          <h3 id="asl-classes-october">Spanish ASL Classes — October</h3>

          <p>
            Our next round of ASL classes begins in{" "}
            <strong>October 2026</strong>. Hands United offers accessible ASL
            instruction designed for immigrant families, with classes taught
            using families' spoken languages.
          </p>

          <p>
            <strong>Next Session:</strong> October 2026
            <br />
            <strong>Format:</strong> Virtual
            <br />
            <strong>Language:</strong> Spanish
          </p>

          <p>
            <Link href="/learn-asl">Learn More About ASL Classes →</Link>
          </p>
        </div>

        <div className={classes.eventBlock}>
          <h3 id="citizenship-classes">Deaf Citizenship Classes — TBD</h3>

          <p>
            A 10-week online citizenship preparation course taught in American
            Sign Language. Participants will study U.S. civics, practice the
            naturalization interview, and prepare for the citizenship exam.{" "}
            <Link href="/contact">Contact us</Link> to express interest.
          </p>
        </div>

        <div className={classes.eventBlock}>
          <h3 id="free-technology-workshops">
            Free Technology Workshops | Talleres Tecnológicos Gratuitos
          </h3>

          <p>
            Hands United / Manos Unidas is offering a series of{" "}
            <strong>free virtual technology workshops</strong> designed to build
            confidence using everyday technology.
          </p>

          <p>
            Workshops are trilingual and accessible in{" "}
            <strong>ASL, English, and Spanish</strong>. Each workshop is 1.5
            hours and will be held virtually on Zoom.
          </p>

          <div className={classes.imageContainer}>
            <Image
              src={TechWorkshopsEN}
              alt="Free Technology Workshops schedule in English"
              className={classes.eventFlyer}
            />
          </div>

          <h4>Workshop Schedule</h4>

          <p>
            <strong>September 30:</strong> Video Conference Basics
            <br />
            <strong>October 1:</strong> Internet Basics
            <br />
            <strong>October 2:</strong> Cybersecurity Basics
            <br />
            <strong>October 5:</strong> Mobile Device — iOS Basics
            <br />
            <strong>October 6:</strong> QR Code Basics
            <br />
            <strong>October 7:</strong> Computer Basics — macOS
            <br />
            <strong>October 8:</strong> Computer Basics — Windows
            <br />
            <strong>October 10:</strong> Digital Citizenship
          </p>

          <p>
            <strong>Format:</strong> Virtual on Zoom
            <br />
            <strong>Length:</strong> 1.5 hours each
            <br />
            <strong>Cost:</strong> FREE
            <br />
            <strong>Languages:</strong> ASL, English &amp; Spanish
            <br />
            <strong>Zoom Meeting ID:</strong> 843 6105 4543
            <br />
            <strong>Password:</strong> TECH
          </p>

          <p>
            Workshop times vary by U.S. region. Please see the map on the flyer
            for your local time.
          </p>

          <p>
            <a
              href="https://handsunitedor.s.gy/reminders"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up for Text Reminders →
            </a>
          </p>

          <hr />

          <h4>Talleres Tecnológicos Gratuitos</h4>

          <p>
            Manos Unidas ofrecerá una serie de{" "}
            <strong>talleres virtuales de tecnología gratuitos</strong> para
            ayudar a miembros de la comunidad a desarrollar habilidades y
            sentirse más seguros usando la tecnología cotidiana.
          </p>

          <p>
            Los talleres serán trilingües en{" "}
            <strong>ASL, inglés y español</strong>, tendrán una duración de 1.5
            horas cada uno y se ofrecerán por Zoom.
          </p>

          <div className={classes.imageContainer}>
            <Image
              src={TechWorkshopsES}
              alt="Calendario de talleres tecnológicos gratuitos en español"
              className={classes.eventFlyer}
            />
          </div>

          <p>
            <strong>30 de septiembre:</strong> Conceptos básicos sobre
            videoconferencias
            <br />
            <strong>1 de octubre:</strong> Conceptos básicos de Internet
            <br />
            <strong>2 de octubre:</strong> Conceptos básicos de ciberseguridad
            <br />
            <strong>5 de octubre:</strong> Conceptos básicos sobre dispositivos
            móviles con iOS
            <br />
            <strong>6 de octubre:</strong> Conceptos básicos sobre los códigos
            QR
            <br />
            <strong>7 de octubre:</strong> Conceptos básicos de computación en
            macOS
            <br />
            <strong>8 de octubre:</strong> Conceptos básicos de computación:
            Windows
            <br />
            <strong>10 de octubre:</strong> Ciudadanía digital
          </p>

          <p>
            <a
              href="https://manosunidasor.s.gy/recordatorios"
              target="_blank"
              rel="noopener noreferrer"
            >
              Regístrese para recibir recordatorios →
            </a>
          </p>
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
        <p>
          Workshops and trainings to help the Deaf community better understand
          immigration and help the legal community better understand Deaf.
        </p>
        <div className={classes.eventBlock}>
          <h3 id="immigration-diagnostic-evaluations-dhh">
            Immigration Diagnostic Evaluations for DHH Mental Health Providers
          </h3>

          <p>
            Hands United is collaborating on a virtual training specifically
            accessible to Deaf and hard of hearing mental health professionals
            who want to learn how to conduct diagnostic evaluations for
            immigration cases.
          </p>

          <p>
            Participants will learn how to conduct immigration diagnostic
            evaluations for USCIS and Immigration Court, prepare professional
            evaluation reports, understand common immigration case types, work
            with attorneys, maintain appropriate ethical boundaries, and develop
            the skills needed to testify as an expert witness.
          </p>

          <p>
            Topics include evaluations related to asylum, VAWA, U Visas, T
            Visas, Extreme Hardship Waivers, and Cancellation of Removal, as
            well as the use of clinical interviews, collateral information,
            behavioral observations, assessment tools, and DSM-5-TR diagnostic
            criteria.
          </p>

          <p>
            <strong>Dates:</strong> October, 2026
            <br />
            <strong>Location:</strong> Virtual
            <br />
            <strong>Language Access:</strong> ASL interpretation provided
            <br />
            <strong>CE Hours:</strong> 7.5 CAMFT-approved CE hours
            <br />
            <strong>Cost:</strong> $1,000
            <br />
            <strong>Payment Option:</strong> Two payments of $500
          </p>

          <p>
            Training fees are paid directly to the trainers. Hands United does
            not receive any proceeds from this training.
          </p>

          <p>
            Immigration evaluations are typically private-pay services, with
            clinicians commonly charging approximately $800–$2,500 per
            evaluation depending on experience, location, and the type of
            evaluation.
          </p>

          {/* <h5>Free Information Session</h5>

          <p>
            Interested but want to learn more before committing? Join a free
            virtual information session to learn more about the training and ask
            questions.
          </p>

          <p>
            <strong>Date:</strong> Saturday, August 22
            <br />
            <strong>Time:</strong> 4 PM Pacific | 7 PM Eastern
            <br />
            <strong>Location:</strong> Zoom
            <br />
            <strong>Language Access:</strong> ASL interpretation provided
            <br />
            <strong>Meeting ID:</strong> 852 7011 9917
            <br />
            <strong>Passcode:</strong> DHH
          </p>

          <p>
            <a
              href="https://us06web.zoom.us/j/85270119917?pwd=lmPRgs1dh9wnIOVcp3hDp2OeHXkwbC.1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Free Information Session →
            </a>
          </p> */}

          <p>
            There is a growing need for mental health professionals who
            understand the linguistic, cultural, and accessibility needs of DHH
            immigrants. This training is designed to help expand the number of
            DHH professionals prepared to provide these important evaluations.
          </p>
        </div>{" "}
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
          <h3 id="hotline-foundations-training">
            Hotline Foundations: Accessible Communication &amp; Navigation with
            Deaf Immigrant Communities
          </h3>

          <p>
            Join Hands United for a three-part training focused on accessible
            communication and navigation when supporting Deaf immigrant
            communities.
          </p>

          <p>
            This training is designed for current and prospective Hands United
            volunteers, other community volunteers, and professionals who want
            to strengthen their skills when working with Deaf immigrants.
          </p>

          <div className={classes.imageContainer}>
            <Image
              src={HotlineWorkshop}
              alt="Hotline Foundations training October 19, 21 and 23"
              className={classes.eventFlyer}
            />
          </div>

          <p>
            Participants will build foundational skills for providing accessible
            communication, helping individuals navigate resources and systems,
            and supporting Deaf immigrants through community-based hotline
            services.
          </p>

          <p>
            <strong>Dates:</strong> October 19, 21 &amp; 23, 2026
            <br />
            <strong>Time:</strong> 4–6 PM Pacific
            <br />
            <strong>Location:</strong> Virtual on Zoom
            <br />
            <strong>Language:</strong> Presented in ASL; interpretation
            available upon request
            <br />
            <strong>Length:</strong> 3 sessions / 6 hours
            <br />
            <strong>CEUs:</strong> 0.6 CEUs available
          </p>

          <p>
            <strong>Cost:</strong>
            <br />
            Hands United volunteers without CEUs — <strong>FREE</strong>
            <br />
            Hands United volunteers requesting CEUs — <strong>$15</strong>
            <br />
            Non-volunteers — <strong>$60</strong>
          </p>

          <p>
            Interested in volunteering with Hands United? This training provides
            the foundational skills needed to support Deaf immigrant communities
            through accessible communication, navigation, referrals, and hotline
            services.
          </p>

          <p>
            <a
              href="https://handsunitedor.s.gy/hotline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register for Hotline Foundations →
            </a>
          </p>
        </div>

        <div className={classes.eventBlock}>
          <h3 id="around-the-world-latin-america">
            Around the World: Central &amp; South America
          </h3>

          <p>
            Our first 8-week Around the World series has wrapped up, and we are
            now planning the next round! This upcoming series will focus on
            signed languages and Deaf cultures throughout Central and South
            America.
          </p>

          <p>
            The series will provide opportunities to learn directly from Deaf
            presenters about their countries, signed languages, Deaf
            communities, cultural norms, and communication practices.
          </p>

          <p>
            Before we finalize the schedule, we want to hear from you! Complete
            our interest survey to tell us which countries and signed languages
            you are most interested in learning about and help us plan the next
            Around the World series.
          </p>

          <p>
            <strong>Focus:</strong> Central &amp; South America
            <br />
            <strong>Format:</strong> Virtual
            <br />
            <strong>Dates:</strong> Coming soon
            <br />
            <strong>Registration:</strong> Coming soon
          </p>

          <p>
            <a
              href="https://handsunitedor.s.gy/latinamerica"
              target="_blank"
              rel="noopener noreferrer"
            >
              Complete the Around the World Interest Survey →
            </a>
          </p>
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
          <h3 id="permit-classes-october">
            Deaf-Accessible Permit Classes — Starting October 2026
          </h3>

          <p>
            Hands United is planning our next round of Deaf-accessible permit
            classes for October! Classes provide accessible, visual instruction
            to help Deaf and hard of hearing students prepare for the written
            permit test and better understand driving laws, road signs, and safe
            driving practices.
          </p>

          <p>
            We are currently gathering interest for two class options. Each
            class will be offered if we have at least{" "}
            <strong>10 students registered</strong> for that class period.
          </p>

          <p>
            <strong>Next Session:</strong> October 2026
            <br />
            <strong>Class Options:</strong> Wednesdays or Fridays
            <br />
            <strong>Time:</strong>
            <Image
              src={PermitMap}
              alt="ASL Permit Class times by U.S. region"
              className={classes.permitMap}
            />
            <strong>Format:</strong> Virtual
            <br />
            <strong>Minimum Enrollment:</strong> 10 students per class period
            <br />
          </p>

          <p>
            <a
              href="/programs/driver-education/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register here →
            </a>
          </p>
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

        <div className={`${classes.cardGrid} ${classes.servicesGrid}`}>
          {/* Global Sign Language Interpreting */}
          <Link href="/contact" className={classes.asyncCard}>
            <div>
              <h3>🌎 Global Sign Language Interpreting</h3>

              <p>
                Accessible interpreting for Deaf individuals who use sign
                languages from around the world or who communicate across
                multiple signed languages and gestural systems.
              </p>

              <p>
                We team with{" "}
                <strong>
                  Deaf interpreters with extensive experience in global sign
                  languages
                </strong>{" "}
                to support accurate, culturally responsive communication.
              </p>

              <p className={classes.cardSubtext}>
                🤟 Mexican Sign Language (LSM)
                <br />
                🤟 Venezuelan Sign Language (LSV)
                <br />
                🤟 Ecuadorian Sign Language (LSEC)
                <br />
                🤟 Russian Sign Language (RSL)
                <br />
                🌎 International Sign
                <br />
                🌎 Latin American gestural communication
              </p>

              <p>
                Additional sign languages and communication needs may be
                available depending on the assignment.
              </p>
            </div>

            <span className={classes.asyncButton}>
              Ask About Interpreting →
            </span>
          </Link>
          {/* IEP Translation Verification */}
          <Link href="/contact" className={classes.asyncCard}>
            <div>
              <Image
                src={IEPVerification}
                alt="IEP Translation Verification"
                className={classes.serviceImage}
              />

              <h3>📄 IEP Translation Verification</h3>

              <p>
                Have Spanish translations of IEPs and other educational
                documents reviewed for accuracy, terminology, and clarity.
              </p>

              <p className={classes.cardSubtext}>
                ✅ Spanish translation verification
                <br />
                ✅ Review for fidelity to the original document
                <br />
                ✅ Terminology and consistency review
                <br />✅ Conducted by experienced trilingual interpreters
              </p>
            </div>

            <span className={classes.asyncButton}>
              Ask About Translation Verification →
            </span>
          </Link>

          {/* School for the Deaf Virtual Tours */}
          <Link href="/contact" className={classes.asyncCard}>
            <div>
              <Image
                src={VirtualTours}
                alt="Schools for the Deaf Virtual Tours"
                className={classes.serviceImage}
              />

              <h3>🏫 School for the Deaf Virtual Tours</h3>

              <p>
                Partner with Hands United to offer accessible virtual school
                tours for immigrant families considering Schools for the Deaf.
              </p>

              <p className={classes.cardSubtext}>
                ✅ Full virtual-tour technology support
                <br />
                ✅ ASL, English &amp; Spanish interpretation
                <br />
                ✅ Additional languages available upon request
                <br />✅ Accessible opportunities for families to ask questions
              </p>
            </div>

            <span className={classes.asyncButton}>Partner With Us →</span>
          </Link>

          {/* Math Interpreter Consultations */}
          <Link href="/contact" className={classes.asyncCard}>
            <div>
              <Image
                src={MathConsult}
                alt="Math Interpreter Consultations"
                className={classes.serviceImage}
              />

              <h3>➗ Math Interpreter Consultations</h3>

              <p>
                Specialized, case-based math language consultation for
                educational interpreters focused on accuracy, conceptual
                integrity, and student access.
              </p>

              <p className={classes.cardSubtext}>
                ✅ Specialized math consultation
                <br />
                ✅ Interactive, discussion-based sessions
                <br />
                ✅ Recordings for internal use
                <br />✅ Individual and district/agency options
              </p>
            </div>

            <span className={classes.asyncButton}>
              Ask About Math Consultations →
            </span>
          </Link>

          {/* Custom Dictionaries */}
          <Link href="/contact" className={classes.asyncCard}>
            <div>
              <h3>📚 Custom Multilingual Dictionaries</h3>

              <p>
                Hands United creates customized visual dictionaries connecting a
                spoken or written language with a signed language.
              </p>

              <p>
                Organizations choose the languages and vocabulary they need, and
                we develop a resource tailored to their community, program,
                classroom, or service setting.
              </p>

              <p className={classes.cardSubtext}>
                🌎 One spoken/written language + one signed language
                <br />
                📝 Vocabulary selected by you
                <br />
                🤟 Sign language-specific content
                <br />
                🎯 Customized for your population and setting
                <br />
                📚 Designed as a reusable visual resource
              </p>
            </div>

            <span className={classes.asyncButton}>
              Ask About a Custom Dictionary →
            </span>
          </Link>

          <Link href="/contact" className={classes.asyncCard}>
            <div>
              <Image
                src={ZoomHosting}
                alt="Professional Zoom Hosting for Deaf and Hard of Hearing Events"
                className={classes.serviceImage}
              />

              <h3>💻 Professional Zoom Hosting</h3>

              <p>
                Let us handle the technology so you can focus on your event.
                Hands United provides professional Zoom hosting designed with
                Deaf and hard of hearing audiences in mind.
              </p>

              <p className={classes.cardSubtext}>
                ✅ Spotlight interpreters and presenters
                <br />
                ✅ Share slides and media
                <br />
                ✅ Manage breakout rooms
                <br />
                ✅ Set up and share Zoom meeting links
                <br />
                ✅ Record meetings and provide video files
                <br />✅ Experienced with Deaf and hard of hearing audiences
              </p>

              <p>
                Available for workshops, conferences, classes, and community
                events.
              </p>
            </div>

            <span className={classes.asyncButton}>
              Ask About Zoom Hosting →
            </span>
          </Link>

          {/* GallerySplit */}
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
