import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Ayudar() {
  return (
    <>
      <h2 className={classes.section}>Haitian Creole </h2>
      <header className={classes.header}>
        {/* Row 1 */}
        <div className={classes.hero}>
          <h1>
              Recorded Classes
          </h1>
          <p>
            You can watch our classes in Haitian Creole {" "}
            <Link
              href={
                "https://www.youtube.com/playlist?list=PLAsRcYXV-4XAYLuNJu8J5GKx5iGxVErQt"
              }
            >
              
              here.
            </Link>{" "}
      
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
