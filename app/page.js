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
import HCDict from "public/classflyers/HCDict.png";
import LanguageCantWait from "public/classflyers/eng.png";
import SpanishASL from "public/classflyers/Eneroclasses.png";
import PermitASL from "public/classflyers/permit-asl.png";
import KYRWeekly from "public/classflyers/kyr-weekly.png";
import KYRYouth from "public/classflyers/kyryouth.png";
import KYRMultilingual from "public/images/kyr-multilingual.png";
import immigration101Flyer from "public/classflyers/immigration101.jpeg";
import immigration101FlyerHearing from "public/classflyers/imm101hearing.jpg";

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
              <Link href="/store#resources" className={classes.featureCard}>
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

            {/* Immigration 101 – Deaf / DHH (Feb 13, 20, 27) */}
            <h3>Immigration 101 — Deaf & Hard-of-Hearing Only</h3>

            <div className={classes.responsiveImageWrapper}>
              <Image
                src={immigration101Flyer}
                width={800}
                height={500}
                alt="Immigration 101 flyer for Deaf and Hard-of-Hearing community members"
              />
            </div>

            <p>
              A three-part workshop series created specifically for Deaf and
              hard-of-hearing community members.
            </p>

            <ul>
              <ul>Immigration paths and realistic costs</ul>
              <ul>How the immigration system and court actually work</ul>
              <ul>Deaf-specific access barriers and interpreter issues</ul>
            </ul>

            <p>
              <strong>Dates:</strong> February 13, 20, and 27
              <br />
              <strong>Time:</strong> 4:00–6:00 pm PST
              <br />
              <strong>Platform:</strong> Zoom
            </p>

            <Link href="/store#immigration-101">
              Learn more & register (Deaf / DHH)
            </Link>

            {/* Immigration 101 – Hearing (Feb 21, 28) */}
            <h3>Immigration 101 — Hearing Community (Spoken English)</h3>
            <div className={classes.responsiveImageWrapper}>
              <Image
                src={immigration101FlyerHearing}
                width={800}
                height={500}
                alt="Immigration 101 flyer for Hearing community members"
              />
            </div>

            <p>
              A three-session series for professionals, volunteers, and
              community members who support Deaf immigrants and their families.
            </p>

            <p>
              <strong>Dates:</strong> February 21, February 28, and March 7
              <br />
              <strong>Language:</strong> Spoken English
              <br />
              <strong>Platform:</strong> Zoom
            </p>

            <Link href="/store#immigration-101-hearing">
              Learn more & register (hearing community)
            </Link>

            <hr />

            {/* Weekly KYR */}
            <h3>Know Your Rights in ASL — Every Thursday</h3>

            <div className={classes.responsiveImageWrapper}>
              <Image
                src={KYRWeekly}
                width={800}
                height={500}
                alt="Weekly Know Your Rights in ASL flyer"
              />
            </div>

            <p>
              Weekly Know Your Rights sessions in ASL focused on ICE
              interactions, communication during enforcement encounters, and
              access barriers faced by Deaf immigrants.
            </p>

            <p>
              <strong>Time:</strong> Thursdays at 4:00 pm PST
              <br />
              <strong>Platform:</strong> Zoom
            </p>
            {/* Weekly KYR */}

            <Link href="/programs/immigration-support/kyr">
              View Know Your Rights resources
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
          <section className={classes.section}>
            <h2>Hands United Store</h2>

            <p>
              To support the creation of free, accessible resources for
              immigrant families with Deaf and hard-of-hearing children, Hands
              United has launched the <strong>Hands United Store</strong>.
            </p>

            <p>
              Proceeds from the store directly fund multilingual ASL resources,
              family workshops, communication tools, and accessibility
              initiatives.
            </p>

            <p>
              <Link href="/store">Visit the Hands United Store</Link>
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
          <section className={classes.section}>
            <h2>Featured Events & Classes</h2>

            <hr />

            <h3>Know Your Rights in ASL — Every Thursday</h3>
            <div className={classes.responsiveImageWrapper}>
              <Image
                src={KYRWeekly}
                width={800}
                height={500}
                alt="Weekly Know Your Rights in ASL flyer"
              />
            </div>
            <p>
              Weekly Know Your Rights sessions in ASL focused on interacting
              with ICE, understanding your rights, and staying safe. Designed
              for Deaf and hard-of-hearing immigrants and their families.
            </p>
            <Link href="/programs/immigration-support/kyr">
              View KYR resources
            </Link>

            <hr />

            <h3>ASL Permit Classes — Starting March 11</h3>
            <div className={classes.responsiveImageWrapper}>
              <Image
                src={PermitASL}
                width={800}
                height={500}
                alt="ASL permit classes flyer taught by Deaf instructor"
              />
            </div>
            <p>
              Online ASL permit classes taught by a Deaf instructor. Classes
              meet on Wednesdays and Fridays and support Deaf and
              hard-of-hearing students preparing for their learner’s permit.
            </p>
            <Link href="/store#permit-classes">
              Learn more about ASL Permit Classes
            </Link>
          </section>
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
