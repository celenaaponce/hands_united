"use client";

import Script from "next/script";
import classes from "./page.module.css";

export default function DriversEducationRegister() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Show Support for Driver's Education Curriculum in ASL
      </h1>

      <p className={classes.description}>
        Thank you for your interest in improving access to driver’s education
        curriculum in American Sign Language (ASL). Please complete the short
        survey below to share your experience and show your support for
        ASL-accessible driver’s education. Your responses will help demonstrate
        community interest and support efforts to make driver’s education fully
        accessible.
      </p>

      {/* AidaForm Embed */}
      <div
        data-aidaform-app="form202405"
        data-url="https://handsunited.aidaform.com/asl-drivers-ed"
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
