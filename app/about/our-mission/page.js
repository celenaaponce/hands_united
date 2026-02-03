import Link from "next/link";
import Image from "next/image";
import classes from "./page.module.css";
import AidaFormEmbed from "components/aidaform";
import TPT from "public/images/tpt.png";



export default function Mission() {
  return (
    <>
      <main className={classes.main}>
        <section className={classes.section}>
          <h2 className={classes.section}>Our Mission</h2>
          <p>
            Hands United’s mission is to reduce language deprivation among Deaf and hard-of-hearing children in immigrant families by addressing the language and cultural barriers that often prevent effective communication and access to essential services.

          </p>
          <p>
We empower families by providing comprehensive support that includes multilingual American Sign Language classes, English/ASL instruction for newly arrived Deaf individuals, enrichment workshops, school and IEP advocacy, immigration and legal resource connections, community support programs, and employment readiness services.

          </p>
          <p>
            In addition, we strengthen the professional ecosystem that serves Deaf communities by offering interpreter and translation services, professional development workshops, and media/resource development. As part of our commitment to equitable access, we also support and provide pathways for the certification of foreign sign language interpreters—particularly for those coming from countries where no formal certification system exists—ensuring they can continue to serve their communities with recognized qualifications.

          </p>
        </section>
      </main>
    </>
  );
}
