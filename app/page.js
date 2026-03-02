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

import Spanish from "public/classflyers/Spanish.png"


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
            <h2>Upcoming Events</h2>
            <hr />

            {/* Spanish ASL Classes */}
            <h3>Spanish Family ASL Classes — Starting in April</h3>

            <div className={classes.responsiveImageWrapper}>
              <Image
                src={SpanishASL}
                width={500}
                height={500}
                alt="Spanish Family ASL Classes starting in April"
              />
            </div>

            <p>
              Our 8-week Spanish Family ASL classes are designed for immigrant
              families with Deaf or hard-of-hearing children. Classes focus on
              reducing language deprivation, strengthening home communication,
              and building practical everyday vocabulary.
            </p>

            <p>
              <strong>Language:</strong> ASL with spoken Spanish support
              <br />
              <strong>Start:</strong> April
              <br />
              <strong>Platform:</strong> Zoom
            </p>

            <Link href="https://manosunidasor.org/aprender-asl/clases-gratuitas/registrarse">
              Register for Spanish ASL Classes
            </Link>

            <hr />

            {/* ASL Permit Classes */}
            <h3>ASL Permit Classes — Starting March 25</h3>

            <div className={classes.responsiveImageWrapper}>
              <Image
                src={PermitASL}
                width={500}
                height={500}
                alt="ASL permit classes taught in American Sign Language"
              />
            </div>

            <p>
              Online permit classes taught fully in ASL to ensure Deaf and
              hard-of-hearing students understand traffic laws, safety
              principles, and testing expectations. Created to increase
              equitable access to driver education.
            </p>

            <p>
              <strong>Start Date:</strong> March 25
              <br />
              <strong>Platform:</strong> Zoom
            </p>

            <Link href="/store#permit-classes">
              Learn more about ASL Permit Classes
            </Link>

            <hr />

            {/* KYR Arabic + ASL */}
            <h3>Know Your Rights — ASL & Arabic Sign | March 7</h3>

            <div className={classes.responsiveImageWrapper}>
              <Image
                src={EngKYRMultilingual}
                width={500}
                height={500}
                alt="Know Your Rights workshop in ASL and Arabic Sign"
              />
            </div>
                        <div className={classes.responsiveImageWrapper}>
              <Image
                src={ArabicKYRMultilingual}
                width={500}
                height={500}
                alt="Know Your Rights workshop in ASL and Arabic Sign"
              />
            </div>

            <p>
              A Know Your Rights workshop focused on ICE interactions,
              constitutional protections, and communication rights for Deaf
              individuals. Presented in ASL and Arabic Sign to increase access
              for newly arrived communities.
            </p>

            <Link href="/programs/immigration-support/">
              View Know Your Rights Resources
            </Link>

            <hr />

            {/* Math Workshop */}
            <h3>3-Part Math Workshop — Algebraic Thinking (CEUs Available)</h3>

            <div className={classes.responsiveImageWrapper}>
              <Image
                src={math}
                width={800}
                height={500}
                alt="Algebraic thinking math workshop for interpreters"
              />
            </div>

            <p>
              A three-part professional development series supporting
              interpreters and educators working in math classrooms. Covers
              algebraic thinking across elementary, middle, and high school
              levels with practical language strategies.
            </p>

            <p>
              <strong>Dates:</strong> March 9, 11, 13
              <br />
              <strong>CEUs:</strong> Available
              <br />
              <strong>Language:</strong> Spoken English
            </p>

            <Link href="/store#algebra-workshop">Register for Math Workshop</Link>

            <hr />

            {/* Spanish for Interpreters */}
            <h3>
              Beginning Spanish for Interpreters — 3-Part Series (CEUs
              Available)
            </h3>

            <div className={classes.responsiveImageWrapper}>
              <Image
                src={Spanish}
                width={800}
                height={500}
                alt="Beginning Spanish workshop for interpreters"
              />
            </div>

            <p>
              A beginning Spanish series taught in SimCom using the Destinos
              curriculum. Designed for interpreters and ASL-fluent community
              members seeking foundational Spanish skills for working with
              immigrant families.
            </p>

            <p>
              <strong>Dates:</strong> March 23, 25, 27
              <br />
              <strong>CEUs:</strong> Available
            </p>

            <Link href="/store#spanish-workshop">
              Register for Spanish Workshop
            </Link>
          </section>
          {/* =======================
   NATIONAL PARTNERSHIPS
======================= */}

          <section className={classes.section}>
            <h2>National Partnerships & Featured Collaborations</h2>
            <hr />

            {/* NHLAD Event */}
            <h3>National Deaf Youth Day – Virtual Panel (Hosted by NHLAD)</h3>

            <div className={classes.responsiveImageWrapper}>
              <Image
                src={NHLAD} // Replace with NHLAD image if you import it
                width={800}
                height={500}
                alt="National Deaf Youth Day virtual panel hosted by NHLAD"
              />
            </div>

            <p>
              Hands United is proud to provide{" "}
              <strong>Spanish and ASL interpretation</strong>{" "}
              for NHLAD’s National Deaf Youth Day Virtual Panel.
            </p>

            <p>
              This event celebrates Deaf Hispanic/Latino high school and college
              students and highlights their leadership journeys, challenges, and
              achievements.
            </p>

            <p>
              <strong>Date:</strong> March 6, 2026
              <br />
              <strong>Time:</strong> 7:30–9:00 PM EST
            </p>

            <hr />

            {/* NILC Event */}
            <h3>
              Empower Communities: Enforcement & Detention (Hosted by NILC)
            </h3>

            <p>
              Hands United will provide <strong>ASL interpretation</strong> for
              the National Immigration Law Center’s workshop focused on
              enforcement, detention, and immigrant community protections.
            </p>

            <p>
              This collaboration ensures Deaf immigrants have equitable access
              to national-level immigration advocacy conversations.
            </p>

            <p>
              <strong>Date:</strong> March 25
            </p>
                        <Link href="https://nilc-org.zoom.us/webinar/register/8017683459097/WN_rec-edT8TOiTWkn3GOxOGQ">
              Register for NILC Workshop
            </Link>

          </section>

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
