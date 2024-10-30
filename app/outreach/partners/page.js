import Image from "next/image";
import classes from "./page.module.css";

export default function Partners() {
  return (
    <>
      <h2 className={classes.section}>Hand's United Partners</h2>
      <header className={classes.header}>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/trilingual.jpeg"
            alt="Trilingual Therapy logo"
            width={100}
            height={100}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Marlene M Nero at{" "}
            <a href="https://trilingualtherapy.com/" target="_blank">
              Trilingual Therapy Center LLC
            </a>
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/ripin.svg"
            alt="RIPIN logo"
            width={100}
            height={100}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Gladys Medina at{" "}
            <a href="https://ripin.org/" target="_blank">
              RIPIN
            </a>
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/EHDI-logo.png"
            alt="EHDI logo"
            width={100}
            height={100}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Keila Armas Velasquez at{" "}
            <a
              href="https://www.ncdhhs.gov/divisions/child-and-family-well-being/whole-child-health-section/genetics-and-newborn-screening/early-hearing-detection-and-intervention-services"
              target="_blank"
            >
              EHDI
            </a>
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/idla.jpg"
            alt="IDLA logo"
            width={100}
            height={100}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Karen Armas at{" "}
            <a href="https://www.facebook.com/IDLA2008" target="_blank">
              IDLA
            </a>
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/TCNJ.png"
            alt="TCNJ logo"
            width={150}
            height={100}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Heather Osowski at{" "}
            <a href="https://njcscd.tcnj.edu/" target="_blank">
              The College of New Jersey School of Education's Center for Sensory
              and Complex Disabilities
            </a>
          </p>
          <p>
            The Center provides professional efforts on meeting the needs of
            those infants, children, youth and adults with the most significant
            challenges to their development, education, and inclusion within our
            schools and communities.
          </p>
        </div>
      </header>
    </>
  );
}
