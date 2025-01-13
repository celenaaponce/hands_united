import Image from "next/image";
import classes from "./page.module.css";

export default function Board() {
  return (
    <>
      <h2 className={classes.section}>Hand's United Board</h2>
      <header className={classes.header}>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/cponce.jpeg"
            alt="Celena Ponce"
            width={400}
            height={303}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            {" "}
            Celena Ponce our president and the proud godmother of a Deaf Latina
            young adult whose journey inspired the creation of this nonprofit.
            Through her relationship with her goddaughter, Ms. Ponce was able to
            connect with both the Latino and Deaf communities and realize how
            few services were available in families’ native language, furthering
            the impact of language deprivation that starkly affected her
            goddaughter. She also has a history of working with immigrant
            communities, curriculum creation, technology skills and community
            organizing that has been key to getting the word out about our
            services, thereby increasing our impact.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/Janice.png"
            alt="Janice Stotts"
            width={300}
            height={300}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Janice Stotts, our secretary, is a Deaf educator with over 30 years
            of experience teaching English/Language Arts through ASL to students
            facing language challenges. She has taught middle and high school at
            the California School for the Deaf in Fremont and the Washington
            School for the Deaf in Vancouver. Ms. Stotts holds a master’s in
            special education from Lewis and Clark College and a bachelors in
            counseling from The Evergreen State College. Along with her
            teaching, she has helped establish several non-profit Deaf services
            programs, including Hands United.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/Dorinda.jpg"
            alt="Dorinda Davidson"
            width={300}
            height={313}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Our treasurer and right-hand woman is Dorinda Davidson. Dorinda, who
            is Deaf-blind, has had the opportunity to connect with many Latino
            and Latina young adults alongside Ms. Ponce. It has been an
            incredible journey watching these young adults grow. As a Deaf
            individual, Ms. Davidson has witnessed firsthand the lack of
            resources and support available for families who speak languages
            other than English. This realization sparked the idea and
            inspiration to collaborate with Ms. Ponce and create our nonprofit.
            Ms. Davidson is currently pursuing her Master of Science
            Rehabilitation Counseling from Western Oregon University.
          </p>
        </div>
      </header>
      <h2 className={classes.section}>Certifications Held</h2>
      
        <h1 className={classes.section}>Celena Ponce</h1>
        <p className={classes.section}>
          State of Washington Department of Social and Health Services (DSHS)
          Professional Language Certificate in Spanish
        </p>
        <p className={classes.section}>
          Bachelors of Arts in Liberal Arts with a focus on psychology,
          anthropology and sociology and a minor in Spanish
        </p>
        <p className={classes.section}>
          Bachelors of Science in Electrical Engineering with a focus in Digital
          Sign Processing and a minor in math
        </p>
        <p className={classes.section}>Certificate in Immigrant Accompaniment</p>
        <p className={classes.section}>
          Oregon State Drivers Ed Certified instructor
        </p>
        <p className={classes.section}>Oregon State Health Assister</p>
        <p className={classes.section}>Health Insurance Market Place Assister</p>
        <p className={classes.section}>Slingerland Multimodal Instructor</p>
        <p className={classes.section}>Red Cross First Aid/CPR/AED</p>
        <p className={classes.section}>
          Certificate of Professional Interpreter in Special Education
        </p>
        <p className={classes.section}>
          RIT Trilingual Interpreter Certification (in progress)
        </p>
        <p className={classes.section}>
          Certificate in Immigrant Advocacy (in progress)
        </p>
        <p className={classes.section}>
          Certificate in Immigration Trial Advocacy (in progress)
        </p>
        <p className={classes.section}>
          Washington State Drivers Ed Certified instructor (in progress)
        </p>
        <h1 className={classes.section}>Janice Stotts</h1>
        <p className={classes.section}>Master’s in Special Education</p>
        <p className={classes.section}>Bachelors in counseling</p>
        <h1 className={classes.section}>Dorinda Davidson</h1>
        <p className={classes.section}>Bachelors in ASL/English Interpretation and minor in health</p>
        <p className={classes.section}>Master’s in Rehabilitation Counseling (in progress)</p>
      
    </>
  );
}
