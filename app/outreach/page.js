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
            We have connection with organizations in 10 different states,
            allowing us to connect families with services in their local area.  
              <Link href="/outreach/partners">Click here</Link> to connect with our partners.
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
        <div className={classes.imageContainer}>
          <Image
            src="/images/familiessupported.png"
            alt="supportedmap"
            width={200}
            height={200}
            style={{ marginRight: "5rem" }}
          />
        </div>
        <div className={classes.hero}>
          <h1>Families Supported</h1>
          <p>
            Since 2022 we have supported over 150 immigrant families with Deaf
            and hard of hearing children in 22 states.
          </p>
        </div>
        <div className={classes.hero}>
          <h1>YouTube Channel</h1>
          <p>
            Our <a href="https://www.youtube.com/@manosunidasor" target="_blank">YouTube channel</a> has had over 5,000 views since first launching in 2022.  On our channel
            we offer over 16 hours of prerecorded classes on a variety of topics.  We also have videos
            on tech how-tos such as how to cast your phone to your TV, how to put parental controls on
            technology and how to enter Google Classroom.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <a href="https://www.youtube.com/@manosunidasor" target="_blank"><Image
            src="/images/youtube.svg"
            alt="YouTube"
            width={200}
            height={200}
          /></a>
        </div>
      </header>
    </>
  );
}
