import classes from "./page.module.css";

export const metadata = {
  title: "Hands United Store",
  description:
    "Async workshops and educational products supporting Deaf and Hard of Hearing families",
};

export default function StorePage() {
  return (
    <main>
      {/* Intro */}
      <section className={classes.section}>
        <h2>Hands United Store</h2>

        <p>
          To support the creation of free, accessible resources for immigrant
          families with Deaf and hard-of-hearing children, Hands United has
          launched the <strong>Hands United Store</strong>.
        </p>

        <p>
          Proceeds from the store directly fund multilingual ASL resources,
          family workshops, communication tools, and accessibility initiatives.
        </p>
      </section>

      {/* Async Workshops */}
      <section className={classes.section}>
        <h2>Async Workshops</h2>

        <p>
          Self-paced workshops you can watch anytime. These recordings do not
          include CEUs.
        </p>

        <div className={classes.imageContainer}>
          <div className={classes.embedWrapper}>
            <iframe
              title="Hands United Async Workshop Store"
              src="https://www.zeffy.com/embed/ticketing/hands-uniteds-async-workshop-store"
              allowPaymentRequest
              allowTransparency="true"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className={classes.section}>
        <h2>Products</h2>

        <p>
          Educational materials, dictionaries, and visual resources created in
          collaboration with the Deaf community. Designed to be low-language,
          highly visual, and culturally responsive.
        </p>

        <div className={classes.imageContainer}>
          <div className={classes.embedWrapper}>
            <iframe
              title="Hands United Product Store"
              src="https://www.zeffy.com/embed/ticketing/hands-uniteds-shop"
              allowPaymentRequest
              allowTransparency="true"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
