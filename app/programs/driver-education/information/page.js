import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function DriverEducation() {
  return (
    <>
      {/* Page Title */}
      <h2 className={classes.section}>Driver Education</h2>

      <header className={classes.header}>
        {/* Intro */}
        <div className={classes.hero}>
          <p>
            Hands United provides Deaf-accessible driver education designed
            specifically for Deaf and hard of hearing learners, including
            immigrant families who face language and access barriers in
            traditional driver education programs.
          </p>
          <p>
            Our approach emphasizes visual learning, clear ASL instruction,
            and culturally responsive teaching to support safety, independence,
            and confidence on the road.
          </p>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/drive.png"
            alt="Deaf accessible driver education"
            width={300}
            height={300}
          />
        </div>

                <div className={classes.imageContainer}>
          <Image
            src="/images/impact-safety.png"
            alt="Road safety and visual learning"
            width={300}
            height={300}
          />
        </div>

        {/* Who This Is For */}
        <div className={classes.hero}>
          <h3>Who This Program Is For</h3>
          <ul>
            <li>Deaf and hard of hearing youth preparing for a learner’s permit</li>
            <li>Deaf immigrants unfamiliar with U.S. driving systems</li>
            <li>Families supporting Deaf teens and young adults</li>
            <li>Adults seeking Deaf-accessible road safety education</li>
          </ul>
        </div>



        {/* What We Offer */}
        <div className={classes.hero}>
          <h3>What We Offer</h3>
          <p>
            Our driver education program is built from the ground up for Deaf
            learners, rather than adapting hearing-centered materials.
          </p>
          <ul>
            <li>ASL-based permit instruction</li>
            <li>Visual explanations of traffic laws and road signs</li>
            <li>Instruction on pavement markings, signals, and lane usage</li>
            <li>Safety education around impaired driving</li>
            <li>Clear explanations of U.S. driving expectations and norms</li>
          </ul>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-permit.png"
            alt="ASL permit instruction and visual materials"
            width={300}
            height={300}
          />
        </div>


        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-access.png"
            alt="Accessible learning environment"
            width={300}
            height={300}
          />
        </div>

        {/* How Access Works */}
        <div className={classes.hero}>
          <h3>How Access Works</h3>
          <p>
            Driver education offerings may include live classes, prerecorded
            lessons, or workshops depending on community need and capacity.
          </p>
          <ul>
            <li>Instruction provided directly in ASL</li>
            <li>Visual materials designed for low-literacy learners</li>
            <li>Supportive learning environment for questions and clarification</li>
          </ul>
          <p>
            Families and individuals can contact us to learn about upcoming
            sessions or request driver education support.
          </p>
        </div>


        {/* Why This Matters */}
        <div className={classes.hero}>
          <h3>Why Deaf-Accessible Driver Education Matters</h3>
          <p>
            Access to driver education increases independence, employment
            opportunities, and safety. For Deaf immigrants, barriers to learning
            traffic laws in an accessible language can delay or prevent licensure.
          </p>
          <p>
            By providing instruction directly in ASL and prioritizing visual
            understanding, Hands United helps reduce risk and support long-term
            stability for Deaf individuals and families.
          </p>
        </div>

        <div className={classes.imageContainer}>
          {/* <Image
            src="/images/impact-access.png"
            alt="Accessible learning environment"
            width={300}
            height={300}
          /> */}
        </div>
                <div className={classes.imageContainer}>
          {/* <Image
            src="/images/impact-access.png"
            alt="Accessible learning environment"
            width={300}
            height={300}
          /> */}
        </div>

        {/* Support CTA */}
        <div className={classes.hero}>
          <h3>Support Driver Education Programs</h3>
          <p>
            Donations help us develop accessible materials, deliver instruction,
            and expand Deaf-centered driver education to more communities.
          </p>
          <p>
            <Link href="https://www.zeffy.com/en-US/donation-form/hands-united-drivers-ed-fund">
              Support Driver Education →
            </Link>
          </p>
        </div>

        <div className={classes.imageContainer} />
      </header>
    </>
  );
}
