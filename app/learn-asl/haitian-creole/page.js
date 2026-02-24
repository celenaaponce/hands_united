import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

import DictionaryFlashcards from "../../../components/dictionaryFlashcards/DictionaryFlashcards";
import dictionary from "../../data/hands-united-dictionary.json";

export default function Ayudar() {
  return (
    <div className="theme-ht">

      <h2 className={classes.section}>
        Kreyòl Ayisyen
        <br />
        <span className={classes.subheading}>Haitian Creole</span>
      </h2>

      <header className={classes.header}>

        {/* Recorded Classes */}
        <div className={classes.hero}>

          <h1>
            Klas ki anrejistre
            <br />
            <span className={classes.subheading}>Recorded Classes</span>
          </h1>

          <p>
            Ou ka gade klas nou yo an Kreyòl Ayisyen{" "}
            <Link href="https://www.youtube.com/playlist?list=PLAsRcYXV-4XAYLuNJu8J5GKx5iGxVErQt">
              isit la
            </Link>.
            <br />
            <span className={classes.subheading}>
              You can watch our classes in Haitian Creole{" "}
              <Link href="https://www.youtube.com/playlist?list=PLAsRcYXV-4XAYLuNJu8J5GKx5iGxVErQt">
                here
              </Link>.
            </span>
          </p>

        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/classes2.png"
            alt="Classes"
            width={200}
            height={200}
          />
        </div>

        {/* Dictionary image */}
        <div className={classes.imageContainer}>
          <Image
            src="/images/full.png"
            alt="Dictionary"
            width={200}
            height={200}
          />
        </div>

        {/* Dictionary section */}
        <div className={classes.hero}>

          <h1>
            Diksyonè
            <br />
            <span className={classes.subheading}>Dictionary</span>
          </h1>

          <p>
            Ou ka chèche nan diksyonè nou an an Kreyòl Ayisyen{" "}
            <Link href="/learn-asl/haitian-creole/dictionary">
              isit la
            </Link>.
            <br />
            <span className={classes.subheading}>
              You can search our dictionary in Haitian Creole{" "}
              <Link href="/learn-asl/haitian-creole/dictionary">
                here
              </Link>.
            </span>
          </p>

          <p>
            Ou ka achte diksyonè Kreyòl Ayisyen nou yo{" "}
            <Link href="/store#products">
              isit la
            </Link>.
            <br />
            <span className={classes.subheading}>
              You can also purchase our Haitian Creole dictionaries{" "}
              <Link href="/store#products">
                here
              </Link>.
            </span>
          </p>

        </div>

      </header>

    </div>
  );
}