"use client";

import Script from "next/script";
import classes from "./page.module.css";

export default function VolunteerApply() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Apply to Volunteer</h1>

      <p className={classes.description}>
        Thank you for your interest in volunteering with Hands United.
        Please complete the form below to tell us more about your interests,
        experience, and availability.
      </p>

      {/* AidaForm Embed */}
      <div
        data-aidaform-app="form202405"
        data-url="https://celenaponce.aidaform.com/volunteer-roles"
        data-width="100%"
        data-height="500px"
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