import ZeffyEmbed from "components/zeffyembed/zeffy-embed";
import classes from "./page.module.css";

export default function Donate() {
  return (
    <>
      <section className={classes.section}>
        <h2>Support Our Work</h2>

        <div className={classes.embedWrapper}>
          <ZeffyEmbed
            title="Hands United General Donation"
            src="https://www.zeffy.com/embed/donation-form/3ab5b5ab-dfc3-4373-a391-311962616835"
          />
        </div>
      </section>
      {/* <h2>Support Our Work</h2>

      <ZeffyEmbed
        src="3ab5b5ab-dfc3-4373-a391-311962616835"
        height={500}
        title="Hands United General Donation"
      /> */}
    </>
  );
}
