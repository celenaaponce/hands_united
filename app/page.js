import Link from "next/link";
import Image from "next/image";
import logo from "./icon.png";
import classes from "./page.module.css";
import AidaFormEmbed from "components/aidaform";
import TPT from "public/images/tpt.png";
import ICE from "public/images/ICEcomm.png";
import iphone from "public/images/iphone.png";
import android from "public/images/android.png";
import math from "public/classflyers/marchmath.png";
import StoreFlyer from "public/classflyers/multilingdict.jpg";
import NHLAD from "public/classflyers/NHLAD.jpg";

import PermitASL from "public/classflyers/permit-asl.png";
import KYRWeekly from "public/classflyers/kyr-weekly.png";
import SpanishASL from "public/classflyers/ASLSpanishclass.jpeg";
import EngKYRMultilingual from "public/classflyers/aslarabic.png";
import ArabicKYRMultilingual from "public/classflyers/arabicarabic.png";

import Spanish from "public/classflyers/Spanish.png";

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
            <Link href="/programs">Our Programs</Link>
          </div>
        </div>
      </header>
      <main className={classes.main}>
        {/* =======================
URGENT COMMUNITY SUPPORT
======================= */}

        <section className={classes.urgentSection}>
          <h2>🚨 Urgent Community Support</h2>

          <p className={classes.urgentIntro}>
            Two Deaf immigrants connected to our community urgently need
            support. Hands United is currently raising funds to help provide
            legal access, advocacy, and humanitarian support.
          </p>

          <div className={classes.urgentGrid}>
            {/* Case 1 */}
            <div className={classes.urgentCard}>
              <h3>👨‍👩‍👧 Deaf Child & Family Deported</h3>

              <p>
                A family with a Deaf child connected to our community was
                recently deported. The family now needs support for legal
                consultation, transition assistance, and continued advocacy to
                explore possible legal options for the future.
              </p>

              <p>
                Deaf children face extreme barriers after deportation, including
                lack of access to education, language, and Deaf community
                support.
              </p>

              <a
                href="https://www.zeffy.com/en-US/donation-form/support-a-deaf-child-and-family-facing-deportation"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.donateButton}
              >
                Support This Family
              </a>
            </div>

            {/* Case 2 */}
            <div className={classes.urgentCard}>
              <h3>⚖️ Deaf Man Unlawfully Deported</h3>

              <p>
                A Deaf man was deported without an interpreter present and
                without documentation explaining the deportation. He is
                currently stranded in a country that is not his country of
                origin and does not know why he was removed.
              </p>

              <p>
                We are raising funds to support legal investigation, advocacy,
                and assistance as we work to understand what happened and
                explore possible legal remedies.
              </p>

              <a
                href="https://www.zeffy.com/en-US/donation-form/support-a-deaf-immigrant-in-emergency-crisis-after-deportation"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.donateButton}
              >
                Support His Case
              </a>
            </div>
            <div className={classes.urgentCard}>
              <h3>🩺 Neuropsychological Evaluation for a Deaf Detainee</h3>

              <p>
                We are raising funds to support a neuropsychological evaluation
                conducted by a Deaf clinician for a Deaf individual currently in
                immigration detention. This evaluation will help ensure they
                receive an accurate diagnosis before being deported to a country
                where they do not know the written language or local sign
                language.
              </p>

              <a
                href="https://www.zeffy.com/en-US/donation-form/help-fund-a-deaf-clinician-evaluation-before-deportation"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.donateButton}
              >
                Support His Case
              </a>
            </div>
            <div className={classes.urgentCard}>
              <h3>👧 Child Lost Hearing After Medical Neglect in Detention</h3>

              <p>
                A family seeking asylum was detained at the ICE family detention
                center in Dilley, Texas. During their detention, their daughter
                did not receive timely treatment for an ear infection.
              </p>

              <p>
                Because of the delay in medical care, she now has hearing loss.
                We are amplifying this fundraiser to support the family as they
                recover from what happened in detention.
              </p>

              <a
                href="https://gofund.me/0baa57b6e"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.donateButton}
              >
                Support This Family
              </a>
            </div>
          </div>
        </section>
        <section className={classes.section}>
          {/* =======================
    DOWNLOAD OUR APP
======================= */}
          <section className={classes.section}>
            <h2>Download Our App</h2>

            <div className={classes.featureGrid}>
              {/* iPhone */}
              <a
                href="https://apps.apple.com/us/app/hands-united-oregon/id6747975975"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.featureCard}
              >
                <div className={classes.imageWrapper}>
                  <Image
                    src={iphone}
                    alt="Download Hands United app for iPhone"
                    width={120}
                    height={120}
                  />
                </div>
                <h3>Download for iPhone</h3>
                <p>Available on the Apple App Store.</p>
              </a>

              {/* Android */}
              <a
                href="https://play.google.com/store/apps/details?id=com.createcommunity.handsunitedoregon&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.featureCard}
              >
                <div className={classes.imageWrapper}>
                  <Image
                    src={android}
                    alt="Download Hands United app for Android"
                    width={120}
                    height={120}
                  />
                </div>
                <h3>Download for Android</h3>
                <p>Available on Google Play.</p>
              </a>
            </div>
          </section>
          {/* =======================
    NEW FEATURED RESOURCES
======================= */}
          {/* =======================
    NEW FEATURED RESOURCES
======================= */}
          <section className={classes.section}>
            <h2>New & Featured Resources</h2>

            <div className={classes.featureGrid}>
              {/* Searchable Dictionary */}
              <Link
                href="/learn-asl/dictionary"
                className={classes.featureCard}
              >
                <div className={classes.featureEmoji}>🔎</div>
                <h3>Search All Dictionaries</h3>
                <p>
                  Explore our new multilingual ASL dictionary. Search across all
                  languages in one place.
                </p>
              </Link>

              {/* Store Dictionaries */}
              <Link href="/store#products" className={classes.featureCard}>
                <div className={classes.featureEmoji}>📚</div>
                <h3>Buy Our Printed Dictionaries</h3>
                <p>
                  Support our work and access full-color multilingual ASL
                  dictionaries for families and classrooms.
                </p>
              </Link>

              {/* Digital KYR Card */}
              <Link
                href="/programs/immigration-support/digital-kyr"
                className={classes.featureCard}
              >
                <div className={classes.featureEmoji}>📱</div>
                <h3>Digital Know Your Rights Card</h3>
                <p>
                  Interactive digital rights card. Choose your sign language and
                  watch the video in your language.
                </p>
              </Link>

              {/* Printable KYR Card */}
              <Link
                href="/programs/immigration-support/know-your-rights"
                className={classes.featureCard}
              >
                <div className={classes.featureEmoji}>🪪</div>
                <h3>Download Know Your Rights Card</h3>
                <p>
                  Printable and downloadable Know Your Rights cards for ICE
                  situations and legal protection.
                </p>
              </Link>
            </div>
          </section>

          <section className={classes.section}>
            <h2>Upcoming Programs</h2>
            <p>
              Hands United offers classes, workshops, and community programs
              supporting Deaf immigrants, families, and professionals working in
              multilingual environments.
            </p>

            <div className={classes.featureGrid}>
              {/* Immigration 101 */}
              <Link
                href="/store#immigration101"
                className={classes.featureCard}
              >
                <div className={classes.imageWrapper}>
                  <Image
                    src={KYRWeekly}
                    alt="Immigration 101 workshop for Deaf immigrants"
                    width={300}
                    height={200}
                  />
                </div>
                <h3>Immigration 101 Workshop</h3>
                <p>
                  Learn the basics of the U.S. immigration system and your
                  rights.
                </p>
                <p>
                  <strong>Dates:</strong> March 17, 24, 31 & April 4
                </p>
              </Link>

              {/* Permit Classes */}
              <Link
                href="/store#permit-classes"
                className={classes.featureCard}
              >
                <div className={classes.imageWrapper}>
                  <Image
                    src={PermitASL}
                    alt="ASL permit classes for Deaf students"
                    width={300}
                    height={200}
                  />
                </div>
                <h3>ASL Permit Classes</h3>
                <p>
                  Online driver permit classes taught fully in American Sign
                  Language.
                </p>
                <p>
                  <strong>Start:</strong> March 25
                </p>
              </Link>

              {/* Spanish Family ASL */}
              <Link
                href="https://manosunidasor.org/aprender-asl/clases-gratuitas/registrarse"
                className={classes.featureCard}
              >
                <div className={classes.imageWrapper}>
                  <Image
                    src={SpanishASL}
                    alt="Spanish ASL classes for immigrant families"
                    width={300}
                    height={200}
                  />
                </div>
                <h3>Spanish Family ASL Classes</h3>
                <p>
                  8-week ASL classes for Spanish-speaking families with Deaf
                  children.
                </p>
                <p>
                  <strong>Start:</strong> April
                </p>
              </Link>
            </div>

            <div className={classes.programButtons}>
              <Link
                href="/store#family-community"
                className={classes.programButton}
              >
                <span aria-hidden="true" className={classes.programEmoji}>
                  👨‍👩‍👧
                </span>
                <span>See Family &amp; Community Workshops</span>
              </Link>

              <Link href="/store#immigration" className={classes.programButton}>
                <span aria-hidden="true" className={classes.programEmoji}>
                  ⚖️
                </span>
                <span>See Immigration Workshops</span>
              </Link>

              <Link
                href="/store#professionals"
                className={classes.programButton}
              >
                <span aria-hidden="true" className={classes.programEmoji}>
                  🎓
                </span>
                <span>See Professional Development</span>
              </Link>

              <Link
                href="/store#driver-education"
                className={classes.programButton}
              >
                <span aria-hidden="true" className={classes.programEmoji}>
                  🚗
                </span>
                <span>See Driver Education Classes</span>
              </Link>
            </div>
          </section>
          {/* =======================
   NATIONAL PARTNERSHIPS
======================= */}


          <h2>Resources Galore!</h2>
          <p>We are excited to share our resources with you!</p>

          <p>
            We have a{" "}
            <Link href="www.manosunidasor.org/aprender-asl/diccionario">
              searchable Spanish/ASL dictionary
            </Link>{" "}
            available online in our Spanish website.
          </p>

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
            <div style={{ marginTop: "1.5rem" }}>
              <Link
                href="/store"
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "0.5rem",
                  background: "linear-gradient(90deg, #72b200, #b4e956)",
                  color: "#ffffff",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                See all upcoming events & registrations
              </Link>
            </div>
          </div>
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
            in 10 states. <Link href="/about/our-team">Click here</Link> for
            more information about our board.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Our Mission</h2>
          <p>
            Hands United’s mission is to reduce language deprivation among Deaf
            and hard-of-hearing children in immigrant families by addressing the
            language and cultural barriers that often prevent effective
            communication and access to essential services.
          </p>
          <p>
            We empower families by providing comprehensive support that includes
            multilingual American Sign Language classes, English/ASL instruction
            for newly arrived Deaf individuals, enrichment workshops, school and
            IEP advocacy, immigration and legal resource connections, community
            support programs, and employment readiness services.
          </p>
          <p>
            In addition, we strengthen the professional ecosystem that serves
            Deaf communities by offering interpreter and translation services,
            professional development workshops, and media/resource development.
            As part of our commitment to equitable access, we also support and
            provide pathways for the certification of foreign sign language
            interpreters—particularly for those coming from countries where no
            formal certification system exists—ensuring they can continue to
            serve their communities with recognized qualifications.
          </p>
          <p>
            Through these combined efforts, we strive to foster lifelong
            inclusivity, expand sign language proficiency across diverse
            populations, and promote greater independence, access, and
            self-determination for Deaf and hard-of-hearing individuals and
            their families.
          </p>
          <h2>Teachers Pay Teachers</h2>
          <p>
            Some of our earlier multilingual resources remain available on
            Teachers Pay Teachers. Our newest and most up-to-date materials are
            now available through the Hands United Store.
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
