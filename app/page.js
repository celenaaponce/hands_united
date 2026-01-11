import Link from "next/link";
import Image from "next/image";
import logo from "./icon.png";
import classes from "./page.module.css";
import AidaFormEmbed from "components/aidaform";
import TPT from "public/images/tpt.png";
import Dict from "public/images/dict.png";
import ICE from "public/images/ICEcomm.png";
import iphone from "public/images/iphone.png";
import android from "public/images/android.png";
import KYR from "public/immigration/kyr.jpg";
import hmong from "public/classflyers/0116.png";
import tech from "public/classflyers/0121.png";
import math from "public/classflyers/3.png";
import StoreFlyer from "public/classflyers/store.png";


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
      <section className={classes.section}>
        <h2>Open Letter: Access to Video Relay Services</h2>
        <p>
          In November 2024, Hands United raised concerns with federal regulators about
          barriers preventing immigrant families with Deaf children from accessing
          federally funded Video Relay Services. As of January 2026, none of these
          families have received services.
        </p>
        <Link href="/advocacy/open-letter-vrs-access">
          Read the full letter (accessible text)
        </Link>
      </section>
      <main className={classes.main}>
        <section className={classes.section}>
          <h2>Download our app!</h2>
          <div>
            <Link href="https://apps.apple.com/us/app/hands-united-oregon/id6747975975">
              <Image
                src={iphone}
                width={50}
                height={50}
                alt="Download for iPhone"
              />
              Download for iPhone
            </Link>
            <p></p>
            <Link href="https://play.google.com/store/apps/details?id=com.createcommunity.handsunitedoregon&pcampaignid=web_share">
              <Image
                src={android}
                width={75}
                height={75}
                alt="Download for Android"
              />
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
              <Image
                src={KYR}
                width={900}
                height={600}
                alt="Know Your Rights flyer"
              />
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
            We have our dictionary terms available online in our Spanish
            website. (Click image to go to dictionary.)
          </p>
          <Link href="https://manosunidasor.org/ASL/Diccionario">
            <div className={classes.responsiveImageWrapper}>
              <Image
                src={Dict}
                width={850}
                height={500}
                alt="Online dictionary"
              />
            </div>
          </Link>

          <p>
            We have also made communication boards for use in ICE/immigration
            situations. Please download them and share them as needed.
          </p>
          <Link href="https://drive.google.com/drive/folders/1OTmVwvIq9h2ntIJuCkol6lKGhCsHSPv9?usp=drive_link">
            <div className={classes.responsiveImageWrapper}>
              <Image
                src={ICE}
                width={800}
                height={500}
                alt="ICE communication boards"
              />
            </div>
          </Link>
          <section className={classes.section}>
  <h2>Hands United Store</h2>

  <p>
    To support the creation of free, accessible resources for immigrant families
    with Deaf and hard-of-hearing children, Hands United has launched the{" "}
    <strong>Hands United Store</strong>.
  </p>

  <p>
    Proceeds from the store directly fund multilingual ASL resources, family
    workshops, communication tools, and accessibility initiatives.
  </p>

  <p>
    <Link href="/store">
      Visit the Hands United Store
    </Link>
  </p>

  <div className={classes.responsiveImageWrapper}>
    <Image
      src={StoreFlyer}
      width={800}
      height={500}
      alt="Hands United Store flyer promoting multilingual ASL resources and community-created materials"
    />
  </div>

  <div style={{ marginTop: "1.5rem" }}>
    <iframe
      width="100%"
      height="315"
      
      src="https://www.youtube.com/embed/TVJjH7cuEuc"
      title="Hands United Store introduction video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</section>
          <div className={classes.responsiveImageWrapper}>
            <h2>Languages Supported</h2>
            <p>
              To date, we have provided ASL classes and resources in Tigrinya,
              Amharic, Burmese, Russian, Spanish, and Chuukese. We look forward
              to continuing to grow in our outreach. Vote on our next languages{" "}
              <Link href={"https://celenaponce.aidaform.com/language-s-needed"}>
                here
              </Link>
            </p>
          </div>
          <div className={classes.responsiveImageWrapper}>
            <h2>Upcoming Workshops</h2>
            <p>
              We are excited to be soon offering several workshops soon. These
              include tech workshops, Spanish workshops, Colombian Sign Language
              and more!
            </p>
          </div>

          <h3>January 16</h3>
          <p>
            Join us for a community-centered presentation focused on understanding autism and deafness within the Hmong community.
          </p>
          <div className={classes.responsiveImageWrapper}>
            <Image src={hmong} width={500} height={500} alt="hmong" />
          </div>
          <p>
            Register{" "}
            <Link
              href={"https://www.zeffy.com/en-US/ticketing/supporting-hmong-children-with-autism-and-deafness"}
            >
              here
            </Link>{" "}
          </p>
          <h3>January 21</h3>
          <p>
            Join us for a workshop on how to use tech tools to improve your online teaching and tutoring.  Presented in ASL.
          </p>
          <div className={classes.responsiveImageWrapper}>
            <Image src={tech} width={500} height={500} alt="techtools" />
          </div>
          <p>
            Register{" "}
            <Link
              href={
                "https://www.zeffy.com/en-US/ticketing/interactive-tools-for-virtual-instruction"
              }
            >
              here
            </Link>{" "}</p>
          <h3>January 26, 28, and 30</h3>
          <p>Join us for a three part workshop to learn Spanish through Destinos, a soap opera based curriculum.  These classes will be taught in spoken Spanish with ASL support. </p>
          <div className={classes.responsiveImageWrapper}>
            <Image src={math} width={500} height={500} alt="Destinos" />
          </div>
          <p>
            Register{" "}
            <Link
              href={
                "https://www.zeffy.com/en-US/ticketing/hands-united-spanish-destinos-classes"
              }
            >
              here
            </Link>{" "}
          </p>
        </section>

        <section className={classes.section}>
          <h2>Who We Are</h2>
          <p>
            Beginning in 2021 through the Center for Deaf and Hard of Hearing
            Youth (CDHY) in Washington State, we offered American Sign Language
            in spoken Spanish to 6 families. Since that time, we have grown to
            over 330 families across the US. In May 2024, we decided to start
            our non-profit organization to offer more services to our families.
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
            Hands United’s mission is to reduce language deprivation among Deaf and hard-of-hearing children in immigrant families by addressing the language and cultural barriers that often prevent effective communication and access to essential services.

          </p>
          <p>
We empower families by providing comprehensive support that includes multilingual American Sign Language classes, English/ASL instruction for newly arrived Deaf individuals, enrichment workshops, school and IEP advocacy, immigration and legal resource connections, community support programs, and employment readiness services.

          </p>
          <p>
            In addition, we strengthen the professional ecosystem that serves Deaf communities by offering interpreter and translation services, professional development workshops, and media/resource development. As part of our commitment to equitable access, we also support and provide pathways for the certification of foreign sign language interpreters—particularly for those coming from countries where no formal certification system exists—ensuring they can continue to serve their communities with recognized qualifications.

          </p>
          <p>
            Through these combined efforts, we strive to foster lifelong inclusivity, expand sign language proficiency across diverse populations, and promote greater independence, access, and self-determination for Deaf and hard-of-hearing individuals and their families.
          </p>
          <h2>Teachers Pay Teachers</h2>
                    <p>
            Some of our earlier multilingual resources remain available on Teachers Pay Teachers.
Our newest and most up-to-date materials are now available through the Hands United Store.
          </p>
          <Link href="https://www.teacherspayteachers.com/store/manos-unidas">
            <div className={classes.responsiveImageWrapper}>
              <Image
                src={TPT}
                width={900}
                height={500}
                alt="Teachers Pay Teachers store"
              />
            </div>
          </Link>
          <AidaFormEmbed />
        </section>
      </main>
    </>
  );
}
