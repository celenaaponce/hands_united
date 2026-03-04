"use client";

import Script from "next/script";
import classes from "./page.module.css";

export default function DriversEducationRegister() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Register for Driver's Education</h1>

      <p className={classes.description}>
        Thank you for your interest in our ASL-based driver’s education program.
        Please complete the form below to register for upcoming permit classes.
        We will contact you with class dates, payment information, and next steps.
      </p>

      {/* AidaForm Embed */}
      <div
        data-aidaform-app="form202405"
        data-url="https://celenaponce.aidaform.com/permit-class-registration-march-2026"
        data-width="100%"
        data-height="600px"
        data-do-resize
      ></div>

      <Script
        id="aidaform-script"
        src="https://widget.aidaform.com/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}