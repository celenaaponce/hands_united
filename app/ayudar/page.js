import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Ayudar() {
  return (
    <>
      <h2 className={classes.section}>How to Support Our Mission</h2>
      <header className={classes.header}>
        {/* Row 1 */}
        <div className={classes.hero}>
          <h1>
            <Link
              href={
                "https://www.teacherspayteachers.com/store/manos-unidas"
              }
            >
              Teachers Pay Teachers
            </Link>
          </h1>
          <p>
            You can buy our resources at
            <Link
              href={
                "https://www.teacherspayteachers.com/store/manos-unidas"
              }
            >
              {" "}
              TeachersPayTeachers.
            </Link>{" "}
            All proceeds go towards Hands United programs.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/help/tpt.png"
            alt="comprar en linea"
            width={200}
            height={200}
          />
        </div>
        {/* Row 2 */}
        <div className={classes.imageContainer}>
          <Image
            src="/help/give.png"
            alt="donar"
            width={200}
            height={200}
            style={{ marginRight: "5rem" }}
          />
        </div>
        <div className={classes.hero}>
          <h1>Donate</h1>
          <p>
            Your donation will help provide services to immigrant families with
            Deaf and hard of hearing children. <a href="https://www.zeffy.com/donation-form/3ab5b5ab-dfc3-4373-a391-311962616835" target="_blank">Click here to donate.</a>
          </p>
        </div>
        <div className={classes.hero}>
          <h1>Translation Services</h1>
          <p>
            We provide translation services from ASL to Spanish, English to
            Spanish, and English to ASL. Through our unique skillsets, we are
            able to maintain fidelity between your message in one language to
            another language.  Samples and prices are available upon request.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/translate.png"
            alt="translation services"
            width={200}
            height={200}
          />
        </div>
      </header>
    </>
  );
}
