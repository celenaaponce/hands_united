import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Ayudar() {
  return (
    <div className="theme-chk">

      <h2 className={classes.section}>
        Chuukese
        <br />
        <span className={classes.subheading}>Chuukese</span>
      </h2>

      <header className={classes.header}>

        <div className={classes.hero}>

          <h1>
            Ais mi wor ASL Chuukese
            <br />
            <span className={classes.subheading}>Chuukese ASL Dictionary</span>
          </h1>

          {/* Search dictionary */}
          <p>
            En mi tongeni kukkun non ach ais mi wor ASL Chuukese{" "}
            <Link href="/learn-asl/chuukese/dictionary">ikei</Link>.
            <br />
            <span className={classes.subheading}>
              You can search our Chuukese ASL dictionary{" "}
              <Link href="/learn-asl/chuukese/dictionary">here</Link>.
            </span>
          </p>

          {/* Purchase dictionary */}
          <p>
            En mi tongeni amwono ach ais mi wor ASL Chuukese{" "}
            <Link href="/store#products">ikei</Link>.
            <br />
            <span className={classes.subheading}>
              You can also purchase our Chuukese dictionaries{" "}
              <Link href="/store#products">here</Link>.
            </span>
          </p>

        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/full.png"
            alt="Chuukese Dictionary"
            width={200}
            height={200}
          />
        </div>

      </header>

    </div>
  );
}