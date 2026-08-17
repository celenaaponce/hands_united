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
            Hands United is planning a series of free virtual technology
            workshops designed to help community members feel more confident
            using everyday technology. Workshops will be offered in ASL,
            English, and Spanish.
          </p>

          <p>
            We are currently asking community members which topics they are most
            interested in so we can plan future workshops based on community
            needs.
          </p>

          <p>
            <strong>Possible Workshop Topics:</strong>
          </p>

          <ul>
            <ul>Mac &amp; Windows computer basics</ul>
            <ul>Internet basics</ul>
            <ul>Email basics</ul>
            <ul>Cybersecurity</ul>
            <ul>Android &amp; Apple mobile devices</ul>
            <ul>QR codes</ul>
            <ul>Video conferencing</ul>
            <ul>Digital citizenship for teens &amp; tweens</ul>
          </ul>

          <p>
            <strong>Format:</strong> Virtual
            <br />
            <strong>Cost:</strong> Free
            <br />
            <strong>Languages:</strong> ASL, English, and Spanish
            <br />
            <strong>Dates:</strong> To be announced based on community interest
          </p>

          <p>
            <strong>Which workshops should we offer?</strong> Complete the
            interest survey to vote for the technology topics you would most
            like to see.
          </p>

          <p>
            <a
              href="https://handsunitedor.s.gy/surveytechnology"
              target="_blank"
              rel="noopener noreferrer"
            >
              Complete the English Survey →
            </a>
          </p>

          <hr />

          <h5>Talleres Tecnológicos Gratuitos</h5>

          <p>
            Manos Unidas está planeando una serie de talleres virtuales de
            tecnología gratuitos para ayudar a miembros de la comunidad a
            sentirse más seguros usando la tecnología de todos los días. Los
            talleres estarán disponibles en ASL, inglés y español.
          </p>

          <p>
            Actualmente estamos preguntando a la comunidad cuáles temas les
            interesan más para poder planificar los próximos talleres según sus
            necesidades.
          </p>

          <p>
            Los posibles temas incluyen computadoras Mac y Windows, Internet,
            correo electrónico, ciberseguridad, dispositivos Android y Apple,
            códigos QR, videoconferencias y ciudadanía digital para adolescentes
            y preadolescentes.
          </p>

          <p>
            <strong>Formato:</strong> Virtual
            <br />
            <strong>Costo:</strong> Gratis
            <br />
            <strong>Idiomas:</strong> ASL, inglés y español
            <br />
            <strong>Fechas:</strong> Se anunciarán según el interés de la
            comunidad
          </p>

          <p>
            <a
              href="https://manosunidasor.s.gy/encuestatecnología"
              target="_blank"
              rel="noopener noreferrer"
            >
              Completar la encuesta en español →
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
            <strong>Dates:</strong> September 19–20, 2026
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

          <h5>Free Information Session</h5>

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
          </p>

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

          <p>
            Participants will build foundational skills for providing accessible
            communication, helping individuals navigate resources and systems,
            and supporting Deaf immigrants through community-based hotline
            services.
          </p>

          <p>
            <strong>Dates:</strong> August 24, 27 &amp; 28
            <br />
            <strong>Time:</strong> 4–6 PM Pacific | 7–9 PM Eastern
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
            Hands United volunteers — <strong>FREE</strong>
            <br />
            Other volunteers — <strong>$15</strong>
            <br />
            Non-volunteers — <strong>$60</strong>
          </p>

          <p>
            Interested in volunteering with Hands United? This training is a
            great opportunity to develop the foundational skills needed to
            provide accessible support to Deaf immigrant communities.
          </p>

          <p>
            <a
              href="https://handsunitedor.s.gy/hotline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register for Hotline Foundations Training →
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
            Deaf-Accessible Permit Classes — October
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
            <strong>Month:</strong> October 2026
            <br />
            <strong>Class Options:</strong> Wednesdays or Fridays
            <br />
            <strong>Format:</strong> Virtual
            <br />
            <strong>Minimum Enrollment:</strong> 10 students per class period
            <br />
            <strong>Registration:</strong> Coming soon
          </p>

          <p>
            Interested in joining the next class? Complete the interest form and
            let us know which class period works best for you. We will use the
            responses to determine which October classes have enough students to
            move forward.
          </p>

          <p>
            <a
              href="https://handsunitedor.s.gy/permit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Complete the Permit Class Interest Form →
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
