import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function FamilyCommunity() {
  return (
    <>
      {/* Page Title */}
      <h2 className={classes.section}>Family & Community</h2>

      <header className={classes.header}>
        {/* Intro */}
        <div className={classes.hero}>
          <p>
            Hands United supports immigrant families with Deaf and hard of hearing
            children by building language access, strengthening family communication,
            and reducing isolation through education, advocacy, and community
            connection.
          </p>
          <p>
            Our Family & Community programs center families as experts in their own
            lives and provide tools to navigate education, technology, and daily
            communication with confidence.
          </p>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-family.png"
            alt="Family and community support programs"
            width={300}
            height={300}
          />
        </div>
                <div className={classes.imageContainer}>
          <Image
            src="/images/families.png"
            alt="Families supported"
            width={300}
            height={300}
          />
        </div>

        {/* Who This Is For */}
        <div className={classes.hero}>
          <h3>Who This Program Is For</h3>
          <ul>
            <li>Immigrant families with Deaf or hard of hearing children</li>
            <li>Deaf immigrants navigating U.S. systems</li>
            <li>Families using ASL and other spoken or signed languages</li>
            <li>Hearing siblings and extended family members</li>
          </ul>
        </div>



        {/* Language & Communication Support */}
        <div className={classes.hero}>
          <h3>Language & Communication Support</h3>
          <p>
            We provide accessible ASL instruction and communication support designed
            for multilingual families with Deaf and hard of hearing children.
          </p>
          <ul>
            <li>ASL classes in Spanish and other languages</li>
            <li>English/ASL classes for newly arrived Deaf immigrants</li>
            <li>ASL support for hearing siblings</li>
            <li>1:1 ASL practice sessions with interpreters</li>
            <li>VRI services for parents and DHH youth</li>
          </ul>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-language.png"
            alt="ASL and multilingual language access"
            width={300}
            height={300}
          />
        </div>
                <div className={classes.imageContainer}>
          <Image
            src="/images/school.png"
            alt="Education and school advocacy"
            width={300}
            height={300}
          />
        </div>

        {/* Education & School Advocacy */}
        <div className={classes.hero}>
          <h3>Education & School Advocacy</h3>
          <p>
            We help families understand their educational rights and navigate school
            systems that are often inaccessible to Deaf children and immigrant
            families.
          </p>
          <ul>
            <li>IEP advocacy and meeting support</li>
            <li>School resource advocacy</li>
            <li>Connections to Deaf tutors</li>
            <li>Educational rights guidance</li>
            <li>Workshops on transition topics (puberty, substance use, college)</li>
            <li>FAFSA and post-secondary transition support</li>
          </ul>
        </div>



        {/* Family & Community Support */}
        <div className={classes.hero}>
          <h3>Family & Community Support</h3>
          <p>
            Beyond education and language, families often need practical support and
            connection to community resources to reduce isolation and stress.
          </p>
          <ul>
            <li>Spanish-language parent support groups</li>
            <li>Social groups for Deaf youth and young adults</li>
            <li>Assistance filling out paperwork and forms</li>
            <li>Technology support for families</li>
            <li>Connections to low-cost internet and devices</li>
            <li>Advocacy to restore access to essential services like VRS</li>
          </ul>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/social.png"
            alt="Community support and connection"
            width={300}
            height={300}
          />
        </div>
                <div className={classes.imageContainer}>
          {/* <Image
            src="/images/impact-community.png"
            alt="Community support and connection"
            width={300}
            height={300}
          /> */}
        </div>

        {/* Impact Snapshot */}
        <div className={classes.hero}>
          <h3>Program Impact</h3>
          <p>
            Through our Family & Community work, Hands United has supported over
            <strong> 330 immigrant families</strong> across the United States, providing
            more than <strong>600 hours of instruction</strong> in
            <strong> 7 languages</strong>.
          </p>
        </div>

        


        {/* Support CTA */}
        <div className={classes.hero}>
          <h3>Support Family & Community Programs</h3>
          <p>
            Community-centered programs are only possible with sustained support.
            Donations help us provide accessible classes, advocacy, and direct
            assistance to families who need it most.
          </p>
          <p>
            <Link href="https://www.zeffy.com/en-US/donation-form/hands-united-education-and-community-services-fund">
              Support Family & Community programs →
            </Link>
          </p>
        </div>

        <div className={classes.imageContainer} />
      </header>
    </>
  );
}
