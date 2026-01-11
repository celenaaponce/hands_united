import Link from "next/link";
import styles from "./page.module.css";


export default function OpenLetterVRSAccess() {
  return (
    <main className={styles.letter}>
      <article>
        <header>
          <h1>
            Open Letter on Ongoing Discriminatory Barriers to Video Relay Services
            for Deaf and Hard of Hearing Youth in Immigrant Families
          </h1>
          <p>
            <strong>January 2026</strong>
          </p>
        </header>

        <section>
          <p>
            To federal regulators, Video Relay Service providers, disability
            rights advocates, and the public:
          </p>

          <p>
            Hands United is a U.S.-based nonprofit organization dedicated to
            preventing language deprivation among Deaf and hard-of-hearing (DHH)
            children in immigrant families. We work nationally with families
            whose children are Deaf, DeafDisabled, DeafBlind, or hard of hearing—
            many of whom do not yet have full access to spoken language or
            American Sign Language (ASL) due to linguistic, systemic, and access
            barriers.
          </p>

          <p>
            In <strong>November 2024</strong>, we formally contacted FCC
            leadership to raise serious concerns about barriers our families were
            facing when attempting to access federally funded Video Relay
            Services (VRS), specifically through Purple ZVRS. At that time,
            families we supported had already been waiting{" "}
            <strong>up to five months</strong> for services they fully qualified
            to receive.
          </p>

          <p>
            As of <strong>January 2026</strong>, more than a year later,{" "}
            <strong>
              none of these families have received VRS devices or services
            </strong>
            .
          </p>

          <p>
            We have received no response to our original correspondence.
            Meanwhile, the harm continues.
          </p>
        </section>

        <section>
          <h2>The core concern</h2>

          <p>
            Families report that Purple ZVRS requires Deaf minor children—some as
            young as <strong>five years old</strong>—to personally contact
            customer service to verify their eligibility and provide personal
            information such as addresses and phone numbers. These interactions
            are conducted with adult representatives and require the child to
            communicate directly in sign language.
          </p>

          <p>This practice is deeply concerning for several reasons:</p>

          <ul>
            <li>
              Many of these children are <strong>language-deprived</strong>, a
              condition widely recognized as a neurological and developmental
              emergency.
            </li>
            <li>
              Expecting young children—Deaf or hearing—to independently provide
              accurate personal information is{" "}
              <strong>developmentally inappropriate</strong>.
            </li>
            <li>
              Requiring children to act as intermediaries for complex
              administrative and legal processes places an undue and
              inappropriate burden on them.
            </li>
            <li>
              Parents who do not speak English are often unable to effectively
              communicate with customer service representatives through written
              English or spoken phone calls, leaving families with no viable
              alternative pathway.
            </li>
          </ul>

          <p>
            Through discussions with other VRS providers, we understand that
            requiring Deaf minor children to personally verify eligibility in
            this manner is <strong>not an FCC mandate</strong>. Yet families
            continue to face excessive wait times—often exceeding two hours per
            attempt—and repeated failed efforts to complete verification.
          </p>
        </section>

        <section>
          <h2>Prolonged and disproportionate harm to immigrant families</h2>

          <p>
            These practices disproportionately impact families whose primary
            language is not English. Parents are effectively excluded from
            participating in the process, while their children—who may not yet
            have full linguistic access in <em>any</em> language—are expected to
            navigate adult systems alone.
          </p>

          <p>
            This harm is not marginal. National data indicate that approximately{" "}
            <strong>
              33% of Deaf and hard-of-hearing children in the United States live
              in households where English is not the primary language
            </strong>
            . When access to federally funded telecommunications services is
            conditioned on written English proficiency—or on a child’s ability
            to navigate adult administrative systems—these families are
            systematically excluded from services explicitly intended to ensure
            communication equity.
          </p>

          <p>
            What began as months-long delays in 2024 has now become{" "}
            <strong>
              a complete and ongoing denial of access extending into 2026
            </strong>
            .
          </p>

          <p>
            VRS is not a luxury. It is an essential telecommunications service.
            Delays and denials have real consequences: children cannot
            independently communicate with schools, medical providers, emergency
            services, or extended family members. For Deaf youth—especially
            those already at risk of language deprivation—this compounds
            isolation, inequity, and harm.
          </p>
        </section>

        <section>
          <h2>Our call to action</h2>

          <ol>
            <li>
              The elimination of age-inappropriate verification practices that
              require Deaf minor children to independently engage in customer
              service and eligibility verification processes.
            </li>
            <li>
              Accessible verification pathways for parents and guardians,
              including language-accessible support and the ability for adults
              to complete verification on behalf of their children without
              relying on the child as an intermediary.
            </li>
            <li>
              Transparency and clarification regarding which verification
              practices are required by the FCC versus those imposed by
              individual providers, communicated in accessible formats. This
              information must not be provided solely in written English, but
              made available through multiple modalities, including
              plain-language translations, audio formats, and accessible sign
              language formats.
            </li>
            <li>
              Immediate provision of devices and services for families who
              clearly qualify under federal guidelines and have already
              experienced prolonged delays.
            </li>
            <li>
              Oversight and guidance from the FCC to ensure that VRS providers
              are not creating discriminatory barriers that disproportionately
              exclude Deaf youth and immigrant families from federally
              guaranteed services.
            </li>
          </ol>
        </section>

        <section>
          <h2>Silence is not neutrality</h2>

          <p>
            We raised these concerns formally in November 2024. More than a year
            later, with no response and no resolution, families remain without
            access to services they are legally entitled to receive.
          </p>

          <p>
            Hands United publishes this letter not to assign blame, but to demand
            accountability, transparency, and child-centered practices that
            align with the intent and purpose of federally funded Video Relay
            Service programs.
          </p>

          <p>
            Deaf children deserve access to communication. Immigrant families
            deserve equitable treatment. Language deprivation cannot wait.
          </p>
        </section>

        <footer>
          <p>
            Respectfully,
            <br />
            <strong>Celena Ponce</strong>
            <br />
            President and Founder, Hands United
            <br />
            Trilingual Interpreter (ASL–English–Spanish)
            <br />
            Advocate for Deaf and Hard of Hearing Immigrant Families
          </p>

          <hr />

          <p style={{ fontSize: "0.9rem" }}>
            <em>
              Household language data referenced above are derived from analyses
              of U.S. Census and American Community Survey data regarding Deaf
              and hard-of-hearing children and household language use.
            </em>
          </p>


        </footer>
      </article>
    </main>
  );
}
