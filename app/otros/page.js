import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Otros() {
  return (
    <>
      <h2 className={classes.section}>current free services</h2>
      <p className={classes.section}>
        All of our services are exclusive to parents who participate in our ASL
        classes or are part of one of our partner organizations. To enroll in
        our classes <Link href={"https://manosunidasor.org/ASL/Clases/Signup"}>go to our Spanish page.</Link>
      </p>
      <header className={classes.header}>
        {/* Row 1 */}
        <div className={classes.hero}>
          <h1>Workshops</h1>
          <p>
            We offer workshops on a variety of important topics: IEP, how to go
            to college, how to communicate using drawings and much more.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/others/talleres.png"
            alt="talleres"
            width={200}
            height={200}
          />
        </div>

        {/* Row 2 */}
        <div className={classes.imageContainer}>
          <Image
            src="/others/language.png"
            alt="apoyo de idioma"
            width={200}
            height={200}
            style={{ marginRight: "5rem" }}
          />
        </div>
        <div className={classes.hero}>
          <h1>Language Development</h1>
          <p>
            We have individual classes with Deaf language-deprived children to
            help them learn ASL and reading.
          </p>
        </div>
        <div className={classes.hero}>
          <h1>Connections with Other Agencies</h1>
          <p>
            We help find support at school, insurance, lawyers, technology and
            other resources families may need.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/others/support.png"
            alt="recursos"
            width={200}
            height={200}
          />
        </div>
      </header>

      <h2 className={classes.section}>Future Services</h2>
      <header className={classes.header}>
        {/* Row 3 */}
        <div className={classes.hero}>
          <h1>Drivers Education</h1>
          <p>
            Virtual classes for Deaf children with low language skill. Learn the
            rules for driving and how to drive safely.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/others/drive.png"
            alt="manejar"
            width={300}
            height={300}
          />
        </div>

        {/* Row 4 */}
        <div className={classes.imageContainer}>
          <Image
            src="/others/puberty2.png"
            alt="pubertad"
            width={200}
            height={200}
            style={{ marginRight: "5rem" }}
          />
        </div>
        <div className={classes.hero}>
          <h1>Puberty and Development</h1>
          <p>
            Virtual classes for parents with Deaf children. We teach how to talk
            about puberty with your Deaf child.
          </p>
        </div>

        {/* Row 5 */}
        <div className={classes.hero}>
          <h1>Technology</h1>
          <p>
            Virtual classes for parents with Deaf children on how to use
            technology safely.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image src="/others/tech.png" alt="tech" width={200} height={200} />
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/others/immigration.png"
            alt="immigration"
            width={300}
            height={300}
            style={{ marginRight: "5rem" }}
          />
        </div>
        <div className={classes.hero}>
          <h1>Immigrant Defense</h1>
          <p>
            Supporting families in their immigration process. Helping families
            find lawyers and understand the process of their case.
          </p>
        </div>
      </header>
    </>
  );
}
