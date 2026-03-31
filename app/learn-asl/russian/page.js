import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Ayudar() {
  return (
    <>
      <h2 className={classes.section}>Russian | единство жестов </h2>
      <header className={classes.header}>
        {/* Row 1 */}
        <div className={classes.hero}>
          <h1>
            Записанные занятия
            <br />
            <span className={classes.subheading}>Recorded Classes</span>
          </h1>

          <p>
            <Link href="/learn-asl/haitian-creole/videos">Здесь</Link>
             {" "}вы можете посмотреть наши уроки на русском языке.
          
            <br />
            <span className={classes.subheading}>
              You can watch our classes in Russian{" "}
              <Link href="/learn-asl/russian/videos">here</Link>.
            </span>
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/classes2.png"
            alt="classes"
            width={200}
            height={200}
          />
        </div>
      </header>
    </>
  );
}
