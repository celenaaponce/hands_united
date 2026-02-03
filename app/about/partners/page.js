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
            width={125}
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
            Karen Macias at{" "}
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
        <div className={classes.imageContainer}>
          <Image
            src="/partners/NHLAD.png"
            alt="NHLAD logo"
            width={150}
            height={100}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Octavio Cuenca Maldonado at{" "}
            <a href="https://www.nhlad.org/" target="_blank">
              National Hispanic and Latino Association of the Deaf
            </a>
          </p>
          <p>
            The mission for NHLAD is to build an alliance between Deaf Latino
            and the Hispanic community through the preservation of our language,
            culture & customs. We recognize the importance of gaining
            empowerment through the promotion of leadership and education in the
            Hispanic and Latino community.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/silenthornfoundation.png"
            alt="Silent Horn logo"
            width={200}
            height={200}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Samira Duale at{" "}
            <a href="https://thesilenthornfoundation.org/" target="_blank">
              the Silent Horn Foundation
            </a>
          </p>
          <p>
            The Silent Horn Foundation is fighting for it's Deaf Somali
            community to access their rights and achieve their dreams in the UK
            whilst strengthening their identity and culture in Somali Sign
            Language.
          </p>
        </div>
      </header>
    </>
  );
}
