import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Volunteer() {
  return (
    <>
      <h2 className={classes.section}>Volunteer With Hands United</h2>
      <header className={classes.header}>

        {/* Intro */}
        <div className={classes.hero}>
          <h1>Why Volunteer?</h1>
          <p>
            Hands United supports Deaf and Hard of Hearing immigrants and
            families navigating language deprivation, education systems,
            immigration processes, and community access. Volunteers are a
            critical part of reducing communication barriers and strengthening
            families.
          </p>
          <p>
            Whether you are a community member, interpreter, educator, or
            bilingual professional — there is a place for you here.
          </p>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/imm-support.png"
            alt="Volunteers supporting Deaf immigrant families"
            width={200}
            height={200}
          />
        </div>

        <h2 className={classes.section}>Community-Based Volunteer Opportunities</h2>

        {/* 1:1 ASL / Spanish */}
        <div className={classes.hero}>
          <h3>1:1 ASL / Spanish Practice</h3>
          <p>
            Meet virtually with immigrant families to practice American Sign
            Language and strengthen communication between Deaf children and
            their parents.
          </p>
          <p>
            This work directly combats language deprivation and builds family
            connection.
          </p>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/practice-asl.png"
            alt="ASL practice session"
            width={200}
            height={200}
          />
        </div>

        {/* 1:1 English / Spanish */}
                <div className={classes.imageContainer}>
          <Image
            src="/images/practiceenglish.png"
            alt="English language practice"
            width={200}
            height={200}
          />
        </div>

        <div className={classes.hero}>
          <h3>1:1 English / Spanish Practice</h3>
          <p>
            Support hearing immigrant parents and Deaf adults in building
            conversational English skills for school meetings, medical
            appointments, employment, and daily life.
          </p>
        </div>


        {/* Voiceover */}
        <div className={classes.hero}>
          <h3>Voiceover Projects</h3>
          <p>
            Contribute voice recordings in English or Spanish for educational
            materials, immigration resources, and family dictionaries.
          </p>
          <p>
            Help make multilingual resources accessible to families with
            varying literacy levels.
          </p>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/voiceover.png"
            alt="Voiceover recording"
            width={200}
            height={200}
          />
        </div>

        <h2 className={classes.section}>Interpreting & Advocacy Opportunities</h2>

        {/* Low Risk Interpreting */}
        <div className={classes.hero}>
          <h3>Low-Risk Interpreting (Virtual Workshops)</h3>
          <p>
            Interpret during virtual educational workshops such as Know Your
            Rights (KYR) sessions and family education classes.
          </p>
          <p>
            These structured environments provide meaningful practice while
            supporting community access.
          </p>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/workshop.png"
            alt="Virtual workshop interpreting"
            width={200}
            height={200}
          />
        </div>

        {/* Parent Advocacy */}
                <div className={classes.imageContainer}>
          <Image
            src="/images/advocacy.png"
            alt="Parent advocacy support"
            width={200}
            height={200}
          />
        </div>
        <div className={classes.hero}>
          <h3>Parent Advocacy Support</h3>
          <p>
            Assist families in preparing for school meetings, understanding
            educational rights, and accessing appropriate services for their
            Deaf child.
          </p>
        </div>



        {/* IEP Practice Interpreting */}
        <div className={classes.hero}>
          <h3>IEP Practice Interpreting</h3>
          <p>
            Participate in mock IEP scenarios designed to strengthen
            interpreter skills in educational terminology and multilingual
            family contexts.
          </p>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/iep.png"
            alt="IEP meeting practice"
            width={200}
            height={200}
          />
        </div>

        {/* Professional Interpreting */}
                <div className={classes.imageContainer}>
          <Image
            src="/images/professional.png"
            alt="Professional event interpreting"
            width={200}
            height={200}
          />
        </div>
        <div className={classes.hero}>
          <h3>Professional Interpreting – Events</h3>
          <p>
            Volunteer professional interpreting services for conferences,
            workshops, and community events hosted by Hands United.
          </p>
          <p>
            We often utilize Deaf–hearing interpreter teams for foreign sign
            language access.
          </p>
        </div>



        {/* Immigration Interpreting */}
        <div className={classes.hero}>
          <h3>Professional Interpreting – Immigration Support</h3>
          <p>
            Provide professional interpreting for immigration-related services,
            including attorney meetings, Know Your Rights sessions, and
            language access support for detained Deaf individuals.
          </p>
          <p>
            This work requires high ethical standards, confidentiality, and
            experience in legal settings.
          </p>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/immterp.png"
            alt="Immigration legal interpreting"
            width={200}
            height={200}
          />
        </div>

        {/* Call to Action */}
        <div className={classes.hero}>
          <h1>Ready to Get Involved?</h1>
          <p>
            Join us in reducing language deprivation, strengthening immigrant
            families, and expanding communication access nationwide.
          </p>
          <p>
            <Link href="/about/volunteer/apply">
              Apply to Volunteer →
            </Link>
          </p>
        </div>

      </header>
    </>
  );
}