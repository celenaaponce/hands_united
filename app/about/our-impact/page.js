import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Outreach() {
  return (
    <>
      <h2 className={classes.section}>Our Reach So Far</h2>
      <header className={classes.header}>
        {/* Row 1 */}
        <div className={classes.hero}>
          <h1>Partner Organizations</h1>
          <p>
            We have connection with organizations in 19 different states,
            allowing us to connect families with services in their local area.
            <Link href="/outreach/partners"> Click here</Link> to connect with
            our partners.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/partners.png"
            alt="map of partners"
            width={200}
            height={200}
          />
        </div>
        {/* Row 2 */}
        {/* <div className={classes.imageContainer}>
          <Image
            src="/images/familiessupported.png"
            alt="supportedmap"
            width={200}
            height={200}
            style={{ marginRight: "5rem" }}
          />
        </div> */}
        
        
        {/* <div className={classes.hero}>
          <h1>Families Supported</h1>
          <p>
            Since 2022 we have supported over 300 immigrant families with Deaf
            and hard of hearing children in 30 states.
          </p>
        </div> */}
<h2 className={classes.section}>Impact Across Our Programs</h2>
<div className={classes.hero}>
  <h3>Family & Community</h3>
  <p>We supported over <strong>330 immigrant families</strong> with Deaf and hard of hearing children through direct ASL access, multilingual family education, community spaces, and advocacy around communication access.</p>
  <p>Our work includes ASL classes for families, prerecorded and live learning opportunities, technology support, and community advocacy such as restoring access to essential services like Video Relay Service (VRS).</p>
  <p>
  <Link href="https://www.zeffy.com/en-US/donation-form/hands-united-education-and-community-services-fund">
    Support Family & Community programs →
  </Link>
</p>
</div>

<div className={classes.imageContainer}>
  <Image
    src="/images/impact-family.png"
    alt="Family and community programs"
    width={200}
    height={200}
  />
</div>
<div className={classes.imageContainer}>
  <Image
    src="/images/impact-immigration.png"
    alt="Immigration support and Know Your Rights sessions"
    width={200}
    height={200}
  />
</div>

<div className={classes.hero}>
  <h3>Immigration Support</h3>
  <p>We provided accessible immigration education through <strong>Know Your Rights (KYR)</strong> sessions in ASL and other languages, helping Deaf immigrants and families understand their rights in interactions with law enforcement, ICE, and immigration systems.</p>
  <p>This work focuses on prevention, education, and language access — ensuring families receive critical information in a language they can understand.</p>
  <p>
  <Link href="https://www.zeffy.com/en-US/donation-form/hands-united-immigration-fund">
    Support Immigration programs →
  </Link>
</p>
</div>
<div className={classes.hero}>
  <h3>Driver Education</h3>
  <p>We delivered Deaf-accessible driver education, including permit instruction and road safety content designed specifically for Deaf and hard of hearing learners.</p>
  <p>This program increases independence, employment access, and safety for Deaf immigrants and family members.</p>
  <p>
  <Link href="https://www.zeffy.com/en-US/donation-form/hands-united-drivers-ed-fund">
    Support Drivers Education programs →
  </Link>
</p>
</div>

<div className={classes.imageContainer}>
  <Image
    src="/images/impact-driver.png"
    alt="Deaf accessible driver education"
    width={200}
    height={200}
  />
</div> 
<div className={classes.imageContainer}>
  <Image
    src="/images/impact-professional.png"
    alt="Professional development workshops"
    width={200}
    height={200}
  />
</div>

<div className={classes.hero}>
  <h3>Professional Services</h3>
  <p>We delivered <strong>28 professional development workshops</strong> for interpreters, educators, and service providers working with Deaf immigrants and multilingual families.</p>
  <p>These workshops strengthen the systems surrounding families by improving language access, cultural responsiveness, and best practices across education, healthcare, and legal settings.</p>
  <p>
  <Link href="https://www.zeffy.com/en-US/donation-form/hands-united-professional-fund">
    Support Professional programs →
  </Link>
</p>
</div>

          {/* <p>
            Our{" "}
            <a href="https://www.youtube.com/@manosunidasor" target="_blank">
              YouTube channel
            </a>{" "}
            has had over 5,000 views since first launching in 2022. On our
            channel we offer over 27 hours of prerecorded classes on a variety
            of topics. We also have videos on tech how-tos such as how to cast
            your phone to your TV, how to put parental controls on technology
            and how to enter Google Classroom.
          </p> */}
     
        {/* <div className={classes.imageContainer}>
          <a href="https://www.youtube.com/@manosunidasor" target="_blank">
            <Image
              src="/images/youtube.svg"
              alt="YouTube"
              width={200}
              height={200}
            />
          </a>
        </div> */}

        <div className={classes.hero}>
          <h1>YouTube Channel</h1>
          <p>
            Our{" "}
            <a href="https://www.youtube.com/@manosunidasor" target="_blank">
              YouTube channel
            </a>{" "}
            has had over 5,000 views since first launching in 2022. On our
            channel we offer over 27 hours of prerecorded classes on a variety
            of topics. We also have videos on tech how-tos such as how to cast
            your phone to your TV, how to put parental controls on technology
            and how to enter Google Classroom.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <a href="https://www.youtube.com/@manosunidasor" target="_blank">
            <Image
              src="/images/youtube.svg"
              alt="YouTube"
              width={200}
              height={200}
            />
          </a>
        </div>
      </header>
    </>
  );
}
