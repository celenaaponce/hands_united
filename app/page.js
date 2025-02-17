import Link from "next/link";
import Image from "next/image";
import logo from "./icon.png";
import classes from "./page.module.css";
import AidaFormEmbed from "components/aidaform";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <Image
            src={logo}
            width={300}
            height={300}
            alt="manos unidas logo"
          ></Image>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Hands United</h1>

            <p>
              Supporting immigrant families families with children who are Deaf
              or hard of hearing to connect and grow with their child.{" "}
            </p>
          </div>
          <div className={classes.cta}>
            <a href="https://manosunidasor.org/">Ver en español</a>
            <Link href="/otros">Our Services</Link>
          </div>
        </div>
      </header>
      <main className={classes.main}>
        <section className={classes.section}>
            <h2>Request Workshops</h2>
            <p>
              In partnership with Deaf and CODA instructors, we offer
              workshops on basic foreign signed langauges presented in ASL.
              To date, we are offering Mexican Sign Language (LSM) and 
              Guatemalan Sign Language (LENSEGUA).  To request other workshops
              please fill out <a href="https://forms.gle/uMKttFSJQkkbacnw7">this form</a>.
            </p>
        </section>
        <section className={classes.section}>
          <h2>Who We Are</h2>
          <p>
            Beginning in 2021 through the Center for Deaf and Hard of Hearing
            Youth (CDHY) in Washington State, we offered American Sign Language in spoken
            Spanish to 6 families. Since that time, we have grown to over 90
            families across the US. In May 2024, we decided to start our
            non-profit business to offer more services to our families.
          </p>

          <p>
            Our board members have over 50 years of experience working with Deaf
            children and immigrant families. We also partner with organizations
            in 10 states. <Link href="/outreach/us">Click here</Link> for more information about our board.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Our Mission</h2>
          <p>
            Hands United’s mission is to help decrease the prevalence of
            language deprivation among Deaf and hard-of-hearing children in
            immigrant families. We recognize that language and cultural barriers
            represent a large portion of the reason that immigrant families are
            unable to communicate with their Deaf and hard-of-hearing children.
          </p>
          <p>
            To that end, we wish to empower immigrant families with Deaf and
            hard-of-hearing children by providing comprehensive support through
            American Sign Language classes in their native language, offering
            enrichment classes such as how to transition from high school to
            college and how to use technology, and facilitating access to
            resources. We strive to foster lifelong inclusivity within the Deaf
            community by promoting the expansion of sign language proficiency
            among diverse populations to support increased independence and self
            determination for diverse Deaf populations.
          </p>
          <AidaFormEmbed/>
        </section>
        
      </main>
    </>
  );
}
