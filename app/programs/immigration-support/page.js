import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function ImmigrationSupport() {
  return (
    <>
      {/* Page Title */}
      <h2 className={classes.section}>Immigration Support</h2>

      <header className={classes.header}>
        {/* Intro */}
        <div className={classes.hero}>
          <p>
            Hands United provides accessible immigration education and support
            for Deaf immigrants and immigrant families who face significant
            language and communication barriers when navigating U.S. immigration
            systems.
          </p>
          <p>
            Our work focuses on language access, education, and informed
            decision-making so individuals and families can better understand
            their rights and options.
          </p>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-immigration.png"
            alt="Accessible immigration education and support"
            width={300}
            height={300}
          />
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-who.png"
            alt="People practicing reading"
            width={300}
            height={300}
          />
        </div>

        {/* Who This Is For */}
        <div className={classes.hero}>
          <h3>Who This Program Is For</h3>
          <ul>
            <li>Deaf immigrants navigating U.S. immigration systems</li>
            <li>Immigrant families with Deaf or hard of hearing members</li>
            <li>Individuals with limited English or written-language access</li>
            <li>Families seeking prevention-focused education and resources</li>
          </ul>
        </div>

        {/* Know Your Rights */}
        <div className={classes.hero}>
          <h3>Know Your Rights (KYR)</h3>
          <p>
            We provide Know Your Rights education in ASL and other languages to
            help Deaf immigrants and families understand their rights during
            interactions with law enforcement, ICE, and immigration authorities.
          </p>
          <ul>
            <li>ASL-based Know Your Rights workshops</li>
            <li>Multilingual and low-literacy visual resources</li>
            <li>Clear explanations of common immigration encounters</li>
            <li>Focus on prevention and preparedness</li>
          </ul>
          <p>
            <Link href="/programs/immigration-support/kyr">
              View Know Your Rights resources →
            </Link>
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-kyr.png"
            alt="Know Your Rights presentaton"
            width={300}
            height={300}
          />
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-navigation.png"
            alt="Immigration education and navigation support"
            width={300}
            height={300}
          />
        </div>

        {/* Immigration Education & Navigation */}
        <div className={classes.hero}>
          <h3>Immigration Education & Navigation</h3>
          <p>
            Immigration systems are complex and often inaccessible to Deaf
            individuals, especially those with language deprivation or limited
            literacy. We focus on education and navigation rather than legal
            representation.
          </p>
          <ul>
            <li>Accessible explanations of immigration processes</li>
            <li>Support understanding forms, notices, and appointments</li>
            <li>Connections to trusted legal and community resources</li>
            <li>Assistance preparing questions for attorneys or advocates</li>
          </ul>
        </div>

        {/* Advocacy & Documentation Support */}
        <div className={classes.hero}>
          <h3>Advocacy & Documentation Support</h3>
          <p>
            In some cases, families need support documenting language access
            needs or explaining barriers faced by Deaf individuals in
            immigration contexts.
          </p>
          <ul>
            <li>Immigration support letters focused on communication access</li>
            <li>Documentation of language and accessibility barriers</li>
            <li>Advocacy related to interpretation and accommodations</li>
          </ul>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-support.png"
            alt="Advocacy and Documentation Support"
            width={300}
            height={300}
          />
        </div>
        <div className={classes.columnSpacer}>

        </div>
        <div className={classes.hero}>
          <h3>Additional Immigration Resources</h3>
          <ul>
            <li>
              <Link href="https://youtube.com/playlist?list=PLAsRcYXV-4XDGRbtnqPcXjFjL-Bdk-LYl&si=M9O0Ww1xxHF5WDRC">
                Sign language videos explaining immigration situations
              </Link>
            </li>
            <li>
              <Link href="https://drive.google.com/drive/folders/1OTmVwvIq9h2ntIJuCkol6lKGhCsHSPv9?usp=drive_link">
                Communication boards for ICE or law enforcement encounters
              </Link>
            </li>
                        <li>
              <Link href="https://drive.google.com/drive/folders/1FpHwuBRiyJ_ntHlOTWGLZeZUdz1jvunw?usp=drive_link">
                Social stories explaining what to expect
              </Link>
            </li>
            <li>
              <Link href="https://drive.google.com/file/d/16daxkMvOyyFnlocwfj4B471exwoMYYn1/view?usp=drive_link">
                Printable Know Your Rights cards
              </Link>
            </li>

          </ul>
        </div>

        {/* Important Clarification */}
        <div className={classes.hero}>
          <h3>Important Clarification</h3>
          <p>
            Hands United does not provide legal representation. Our role is to
            ensure language access, education, and informed decision-making, and
            to connect individuals with appropriate legal and community
            resources when needed.
          </p>
        </div>

        <div className={classes.columnSpacer}>

        </div>
        <div className={classes.columnSpacer}>

        </div>

        {/* Impact Snapshot */}
        <div className={classes.hero}>
          <h3>Program Impact</h3>
          <p>
            Through accessible immigration education and advocacy, Hands United
            has supported Deaf immigrants and families across the U.S. by
            increasing understanding, preparedness, and access to critical
            information in languages they can understand.
          </p>
        </div>
        <div className={classes.columnSpacer}>

        </div>
        <div className={classes.columnSpacer}>

        </div>


        {/* Support CTA */}
        <div className={classes.hero}>
          <h3>Support Immigration Support Programs</h3>
          <p>
            Donations help us create accessible Know Your Rights materials,
            deliver multilingual education, and provide critical navigation
            support for Deaf immigrants and families.
          </p>
          <p>
            <Link href="https://www.zeffy.com/en-US/donation-form/hands-united-immigration-fund">
              Support Immigration Support →
            </Link>
          </p>
        </div>

        <div className={classes.imageContainer} />
      </header>
    </>
  );
}
