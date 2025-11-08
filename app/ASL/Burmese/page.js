import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Ayudar() {
  return (
    <>
      <h2 className={classes.section}>Burmese | သို့ ဆက်သွယ်ပါ။</h2>
      <header className={classes.header}>
        {/* Row 1 */}
        <div className={classes.hero}>
          <h1>
              Recorded Classes
          </h1>
          <p>
            You can watch our classes in Burmese {" "}
            <Link
              href={
                "https://www.youtube.com/playlist?list=PLAsRcYXV-4XD64fIW2FB_kbm6FjDdmbX7"
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
