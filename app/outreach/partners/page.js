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
            Marlene M Nero at <a href="https://ripin.org/">Trilingual Therapy Center LLC</a>
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
            Gladys Medina at <a href="https://ripin.org/">RIPIN</a>
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
            <a href="https://www.ncdhhs.gov/divisions/child-and-family-well-being/whole-child-health-section/genetics-and-newborn-screening/early-hearing-detection-and-intervention-services">
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
            Karen Armas at <a href="https://www.facebook.com/IDLA2008">IDLA</a>
          </p>
        </div>
      </header>
    </>
  );
}
