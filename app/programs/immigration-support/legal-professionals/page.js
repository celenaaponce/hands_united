"use client";

import Image from "next/image";
import { useEffect } from "react";
import classes from "./page.module.css";

import LawyerPSA from "public/psa.png";

export default function LegalProfessionalSupport() {
  useEffect(() => {
    const existingScript = document.getElementById("aidaform-app");

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "aidaform-app";
      script.src = "https://widget.aidaform.com/embed.js";
      script.async = true;

      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
    <main className={classes.page}>
    <h2 className={classes.section}>
        Legal Professional Resources &amp; Case Support
    </h2>

    {/* rest of page */}
        <section className={classes.intro}>
          <h1>Supporting Legal Teams Working With Deaf Immigrants</h1>

          <p>
            Hands United supports attorneys, legal service providers, and
            advocates working with Deaf and hard of hearing immigrants.
          </p>

          <p>
            We provide practical resources, consultation, and connections to
            specialized professionals to help legal teams identify and address
            language, communication, cultural, and disability-access needs.
          </p>
        </section>

        <section className={classes.resourceSection}>
          <h2>Quick Tips for Working With Deaf Clients</h2>

          <p>
            Accessible communication is not one-size-fits-all. These reminders
            can help attorneys and legal professionals communicate more
            effectively with Deaf clients and support meaningful participation
            in their own cases.
          </p>

          <div className={classes.psaWrapper}>
            <Image
              src={LawyerPSA}
              alt="Quick tips for attorneys working with Deaf clients"
              className={classes.psaImage}
              priority
            />
          </div>
        </section>

        <section className={classes.supportSection}>
          <h2>Request Case Support</h2>

          <p>
            Need help identifying the right professional or communication
            support for a Deaf or hard of hearing client? Hands United may be
            able to assist with:
          </p>

          <ul>
            <li>
              <strong>Global Sign Language Interpreters</strong>
            </li>
            <li>
              <strong>DHH-Specific Country Conditions Experts</strong>
            </li>
            <li>
              <strong>DHH-Specific Evaluators</strong>
            </li>
            <li>
              <strong>Communication Evaluations</strong>
            </li>
            <li>
              <strong>Language Access &amp; Interpreter Consultation</strong>
            </li>
            <li>
              <strong>Case Consultation</strong>
            </li>
          </ul>
        </section>

        <section className={classes.formSection}>
          <h2>Legal Professional Case Support Request</h2>

          <p>
            Please complete the form below with enough information for us to
            understand the request and determine what support may be available.
          </p>

          <p className={classes.formNote}>
            Please do not include unnecessary confidential records, medical
            records, A-numbers, or other sensitive documents in this initial
            request.
          </p>

          <div className={classes.formContainer}>
            <div
              data-aidaform-app="form202405"
              data-url="https://handsunited.aidaform.com/legal-contact-form"
              data-width="100%"
              data-height="900px"
              data-do-resize
            ></div>
          </div>
        </section>
      </main>
    </>
  );
}