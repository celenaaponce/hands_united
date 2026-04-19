"use client";

import Script from "next/script";
import classes from "./page.module.css";

export default function ContactPage() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Contact Us</h1>

      <p className={classes.description}>
        Have a question, request, or need support? Complete the form below and
        our team will connect you with the right program or service.
      </p>

      <p className={classes.description}>
        <strong>
          Someone from our team will get in touch with you within a week.
        </strong>
      </p>

      <p className={classes.description}>
        ¿Tiene alguna pregunta o necesita ayuda? Complete el formulario a
        continuación y le conectaremos con el programa o servicio adecuado.
      </p>

      <p className={classes.description}>
        <strong>
          Alguien de nuestro equipo se comunicará con usted dentro de una semana.
        </strong>
      </p>

      {/* AidaForm Embed */}
      <div
        data-aidaform-app="form202405"
        data-url="https://handsunited.aidaform.com/contact-form"
        data-width="100%"
        data-height="700px"
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