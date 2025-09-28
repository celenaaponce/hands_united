import Link from "next/link";
import Image from "next/image";
import logo from "./icon.png";
import classes from "./page.module.css";
import AidaFormEmbed from "components/aidaform";
import TPT from "public/images/tpt.png";
import Dict from "public/images/dict.png";
import ICE from "public/images/ICEcomm.png";
import HC from "public/images/hc.png";
import Esp from "public/images/octclass.png";
import iphone from "public/images/iphone.png";
import android from "public/images/android.png";
import KYR from "public/immigration/kyr.jpg";
import AI from "public/classflyers/AI hacks.png";
import IEPen from "public/classflyers/eng.png";
import IEPes from "public/classflyers/spa.png";
import IEPbest from "public/classflyers/EnglishBestPractices.png";
import IEPbestA from "public/classflyers/ASLBestPractices.png";
import IS from "public/classflyers/IS.png";
import LSC from "public/classflyers/LSC.png";
import Muslim from "public/classflyers/Muslimworkshop.png";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <Image src={logo} width={300} height={300} alt="manos unidas logo" />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Hands United</h1>
            <p>
              Supporting immigrant families with children who are Deaf or hard
              of hearing to connect and grow with their child.
            </p>
          </div>
          <div className={classes.cta}>
            <a href="https://manosunidasor.org/">Ver en español</a>
            <Link href="/otros">Our Services</Link>
          </div>
        </div>
      </header>

      <main className={classes.main}>
        <section className={classes.section}>
          <h2>Download our app!</h2>
          <div>
            <Link href="https://apps.apple.com/us/app/hands-united-oregon/id6747975975">
              <Image src={iphone} width={150} height={50} alt="Download for iPhone" />
              Download for iPhone
            </Link>
            <p></p>
            <Link href="https://play.google.com/store/apps/details?id=com.createcommunity.handsunitedoregon&pcampaignid=web_share">
              <Image src={android} width={150} height={75} alt="Download for Android" />
              Download for Android
            </Link>
          </div>

          <h2>Know Your Rights card in Sign Languages!</h2>
          <p>
            Here is our Know Your Rights card in multiple sign languages (Click
            image to go to the page). This page will continue to grow as videos
            come in.
          </p>
          <Link href="/kyr">
            <div className={classes.responsiveImageWrapper}>
              <Image src={KYR} width={900} height={600} alt="Know Your Rights flyer" />
            </div>
          </Link>
          <p>
            Click{" "}
            <a href="https://drive.google.com/file/d/16daxkMvOyyFnlocwfj4B471exwoMYYn1/view?usp=sharing">
              here
            </a>{" "}
            to download the printable version.
          </p>

          <h2>Resources Galore!</h2>
          <p>We are excited to share our resources with you!</p>

          <p>
            We have multilingual dictionaries (ASL, English, Spanish, LSM)
            available on Teachers Pay Teachers. (Click image to go to TPT)
          </p>
          <Link href="https://www.teacherspayteachers.com/store/manos-unidas">
            <div className={classes.responsiveImageWrapper}>
              <Image src={TPT} width={900} height={500} alt="Teachers Pay Teachers store" />
            </div>
          </Link>

          <p>
            We also have our dictionary terms available online in our Spanish
            website. (Click image to go to dictionary.)
          </p>
          <Link href="https://manosunidasor.org/ASL/Diccionario">
            <div className={classes.responsiveImageWrapper}>
              <Image src={Dict} width={850} height={500} alt="Online dictionary" />
            </div>
          </Link>

          <p>
            We have also made communication boards for use in ICE/immigration
            situations. Please download them and share them as needed.
          </p>
          <Link href="https://drive.google.com/drive/folders/1OTmVwvIq9h2ntIJuCkol6lKGhCsHSPv9?usp=drive_link">
            <div className={classes.responsiveImageWrapper}>
              <Image src={ICE} width={800} height={500} alt="ICE communication boards" />
            </div>
          </Link>

          <h2>Upcoming Classes</h2>
          <p>
            We are excited to be soon offering ASL classes in spoken Spanish as
            well as in spoken Haitian Creole.
          </p>
          <div className={classes.responsiveImageWrapper}>
            <Image src={HC} width={500} height={500} alt="Haitian Creole class flyer" />
            <Image src={Esp} width={500} height={500} alt="Spanish class flyer" />
          </div>

          <h2>Upcoming Workshops</h2>
          <p>
            We are excited to be soon offering several workshops soon. These
            include AI tips for DHH to interact with the hearing community, how
            to work with the Muslim community, IEP interpreting workshops, IEP
            best practices workshops, Colombian Sign Language and International
            Sign Language!
          </p>
          <div className={classes.responsiveImageWrapper}>
            <Image src={AI} width={500} height={500} alt="AI tips flyer" />
            <Image src={IEPen} width={500} height={500} alt="IEP English flyer" />
            <Image src={IEPes} width={500} height={500} alt="IEP Spanish flyer" />
            <Image src={Muslim} width={500} height={500} alt="Muslim workshop flyer" />
            <Image src={IEPbestA} width={500} height={500} alt="ASL Best Practices flyer" />
            <Image src={IEPbest} width={500} height={500} alt="English Best Practices flyer" />
            <Image src={IS} width={500} height={500} alt="International Sign flyer" />
            <Image src={LSC} width={500} height={500} alt="Colombian Sign Language flyer" />
          </div>
        </section>

        <section className={classes.section}>
          <h2>Request Workshops</h2>
          <p>
            In partnership with Deaf and CODA instructors, we offer workshops on
            basic foreign signed languages presented in ASL. To date, we are
            offering Mexican Sign Language (LSM) and Guatemalan Sign Language
            (LENSEGUA). To request other workshops please fill out{" "}
            <a href="https://forms.gle/uMKttFSJQkkbacnw7">this form</a>.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Who We Are</h2>
          <p>
            Beginning in 2021 through the Center for Deaf and Hard of Hearing
            Youth (CDHY) in Washington State, we offered American Sign Language
            in spoken Spanish to 6 families. Since that time, we have grown to
            over 230 families across the US. In May 2024, we decided to start
            our non-profit business to offer more services to our families.
          </p>
          <p>
            Our board members have over 50 years of experience working with Deaf
            children and immigrant families. We also partner with organizations
            in 10 states. <Link href="/outreach/us">Click here</Link> for more
            information about our board.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Our Mission</h2>
          <p>
            Hands United’s mission is to help decrease the prevalence of
            language deprivation among Deaf and hard-of-hearing children in
            immigrant families. We recognize that language and cultural barriers
            represent a large portion of the reason that immigrant families are
            unable to communicate with their Deaf and hard-of-hearing children.
          </p>
          <p>
            To that end, we wish to empower immigrant families with Deaf and
            hard-of-hearing children by providing comprehensive support through
            American Sign Language classes in their native language, offering
            enrichment classes such as how to transition from high school to
            college and how to use technology, and facilitating access to
            resources. We strive to foster lifelong inclusivity within the Deaf
            community by promoting the expansion of sign language proficiency
            among diverse populations to support increased independence and self
            determination for diverse Deaf populations.
          </p>
          <AidaFormEmbed />
        </section>
      </main>
    </>
  );
}