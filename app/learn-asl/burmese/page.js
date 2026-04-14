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
            မှတ်တမ်းတင်ထားသော သင်တန်းများ
            <br />
            <span className={classes.subheading}>Recorded Classes</span>
          </h1>

          <p>
                        <Link href="/learn-asl/burmese/videos">
              ဒီမှာ
            </Link>
            {" "}ဗမာဘာသာဖြင့် ကျွန်ုပ်တို့၏ သင်တန်းများကို ကြည့်ရှုနိုင်ပါသည်။.
            <br />
            <span className={classes.subheading}>
              You can watch our classes in Burmese{" "}
              <Link href="/learn-asl/burmese/videos">
                here
              </Link>.
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
