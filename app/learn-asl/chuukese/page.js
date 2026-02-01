import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function Ayudar() {
  return (
    <>
      <h2 className={classes.section}>Chuukese </h2>
      <header className={classes.header}>
        {/* Row 1 */}
        <div className={classes.hero}>
          <h1>
              Dictionary
          </h1>
          <p>
            You can watch our dictionary in Chuukese {" "}
            <Link
              href={
                "https://www.youtube.com/playlist?list=PLAsRcYXV-4XDUsm-QDntsorey8sx-tH_1"
              }
            >
              
              here.
            </Link>{" "}
      
          </p>
                    <p>
            You can also purchase our Chuukese dictionaries {" "}
            <Link
              href={
                "https://www.teacherspayteachers.com/Product/ChuukeseASL-Dictionary-Family-14440122"
              }
            >
              
              here.
            </Link>{" "}
      
          </p>
        </div>
                <div className={classes.imageContainer}>
          <Image
            src="/images/full.png"
            alt="dictionary"
            width={200}
            height={200}
          />
        </div>
      </header>
    </>
  );
}
