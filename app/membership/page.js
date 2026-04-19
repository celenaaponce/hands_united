import ZeffyEmbed from "components/zeffyembed/zeffy-embed";
import classes from "./page.module.css";

export default function Membership() {
  return (
    <>
      <section className={classes.section}>
        <h2>🤝 Join the Hands United Community</h2>

        <p className={classes.description}>
          Become a member of Hands United and support our work providing
          language access, ASL education, and critical resources for Deaf and
          hard-of-hearing immigrant families.
        </p>

        <p className={classes.description}>
          Members receive exclusive benefits including discounts on workshops,
          early access to events, and access to member-only resources.
        </p>

        <p className={classes.description}>
          <strong>Get code for 10% off workshops</strong>
        </p>
        <p className={classes.helpText}>
          Have questions about membership or benefits?{" "}
          <a href="/contact">Contact us →</a>
        </p>

        <div className={classes.embedWrapper}>
          <ZeffyEmbed
            title="Hands United Community Membership"
            src="https://www.zeffy.com/en-US/ticketing/hands-united-community-membership"
          />
        </div>
      </section>
    </>
  );
}
