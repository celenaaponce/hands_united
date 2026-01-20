import styles from "./page.module.css";

export default function NewsletterPage() {
  return (
    <main className={styles.letter}>
      <article>

        {/* ================= HEADER ================= */}
        <header>
          <h1>Updates for Supporters & Sponsors</h1>
        </header>

        {/* ================= INTRO ================= */}
        <section>
          <p>Dear Supporters and Sponsors,</p>

          <p>
            We are grateful for your continued support of Hands United and wanted
            to share an update on our upcoming events and programs serving Deaf
            and Hard of Hearing (DHH) families and the professionals who support
            them. We would greatly appreciate your help in sharing these
            opportunities with your networks.
          </p>
        </section>

        {/* ================= FAMILY PROGRAMS ================= */}
        <section>
          <h2>Programs for Families</h2>

          <p><strong>Spanish ASL Classes – Week 3</strong></p>
          <p>
            We are currently in Week 3 of our Spanish ASL classes, and there is
            still space available—especially in our Wednesday and Thursday
            sessions.
          </p>
          <p>
            👉{" "}
            <a
              href="https://manosunidas.aidaform.com/clases-de-asl-enero-2026"
              target="_blank"
              className={styles.link}
            >
              Families can register here
            </a>
          </p>

          <p><strong>Free Immigration Consultation for DHHDB Immigrants</strong></p>
          <p>
            📅 Tuesday, January 20
            <br />
            We are hosting our first free immigration consultation for Deaf, Hard
            of Hearing, DeafBlind, and DeafDisabled immigrants, with support from
            both Deaf and hearing interpreters.
          </p>
          <p>
            👉{" "}
            <a
              href="https://drive.google.com/file/d/1H1XbEJRJVdeRF8Vb8X7vthVHDtDLuwAN/view?usp=sharing"
              target="_blank"
              className={styles.link}
            >
              View flyer
            </a>{" "}
            ·{" "}
            <a
              href="https://youtu.be/MUBqku5lk0A"
              target="_blank"
              className={styles.link}
            >
              Watch ASL advertisement
            </a>
          </p>

          <p><strong>Monthly ASL Family Meeting (Amharic & Tigrinya)</strong></p>
          <p>
            📅 Saturday, January 24
            <br />
            Our monthly ASL family meeting with Amharic- and
            Tigrinya-speaking families continues.
          </p>
          <p>
            👉{" "}
            <a
              href="https://us06web.zoom.us/j/9429059707?pwd=brcSLCZ0xH0raVFPhIahPzCgP6MAMc.1"
              target="_blank"
              className={styles.link}
            >
              Zoom link
            </a>{" "}
            ·{" "}
            <a
              href="https://drive.google.com/file/d/1sUo40V0V9CNULS04BL7RvySVPoRKL5-9/view?usp=sharing"
              target="_blank"
              className={styles.link}
            >
              View flyers
            </a>
          </p>
        </section>

        {/* ================= PROFESSIONAL PROGRAMS ================= */}
        <section>
          <h2>Programs for Professionals & Community Partners</h2>

          <p><strong>Coffee Chat: Learn About Hands United</strong></p>
          <p>
            📅 Monday, January 19 | 6:00 PM PST
            <br />
            A casual space to learn more about our organization, explore
            resources, and discuss ways to support our work.
          </p>
          <p>
            👉{" "}
            <a
              href="https://us06web.zoom.us/j/89796114061?pwd=lGH9s7c4nWVbssrbftwpEbfDNGwbs6.1"
              target="_blank"
              className={styles.link}
            >
              Join the conversation
            </a>
          </p>

          <p><strong>Tech Workshop: Teaching & Communicating Through Video</strong></p>
          <p>
            📅 Wednesday, January 21
            <br />
            This hands-on workshop covers:
          </p>
          <ul>
            <li>Adding images to videos</li>
            <li>Hard-coded captions</li>
            <li>Embedding slides</li>
            <li>Accessible video communication strategies</li>
          </ul>
          <p>
            👉{" "}
            <a
              href="https://youtu.be/kl9VmuM1-J0"
              target="_blank"
              className={styles.link}
            >
              Watch short overview
            </a>{" "}
            ·{" "}
            <a
              href="https://www.zeffy.com/en-US/ticketing/interactive-tools-for-virtual-instruction"
              target="_blank"
              className={styles.link}
            >
              Register
            </a>
          </p>

          <p><strong>Sign Name Celebration</strong></p>
          <p>
            📅 Friday, January 23
            <br />
            Fifteen pre-invited families will meet with Deaf leaders to invent
            name signs, supported by trilingual interpreters.
          </p>
          <p>
            🔹 We are still seeking a few trilingual volunteers for this event.
          </p>
          <p>
            👉{" "}
            <a
              href="https://drive.google.com/file/d/1Xf7kn4CxNcHGNdajQGkVtlPeVkU1itQL/view?usp=sharing"
              target="_blank"
              className={styles.link}
            >
              View details
            </a>
          </p>
        </section>

        {/* ================= COMING SOON ================= */}
        <section>
          <h2>Coming Soon</h2>

          <p><strong>International Sign & Mexican Sign Language (LSM) Classes</strong></p>
          <p>
            📅 Starting the first week of February
            <br />
            • No Spanish required for LSM classes
            <br />
            • Recordings provided
            <br />
            • Live attendance required for CEUs
          </p>
          <p>
            👉{" "}
            <a
              href="https://www.zeffy.com/en-US/ticketing/5-week-international-sign-language-with-razaq"
              target="_blank"
              className={styles.link}
            >
              International Sign registration
            </a>{" "}
            ·{" "}
            <a
              href="https://www.zeffy.com/en-US/ticketing/10-week-lsm-classes-with-karen"
              target="_blank"
              className={styles.link}
            >
              LSM registration
            </a>
          </p>

          <p><strong>Book Club: <em>A Mother’s Voice</em></strong></p>
          <p>
            📅 Starts February 11
            <br />
            Written by a Deaf Israeli author.
          </p>
          <p>
            👉{" "}
            <a
              href="https://youtu.be/mcsyBIawp88"
              target="_blank"
              className={styles.link}
            >
              Watch author video
            </a>{" "}
            ·{" "}
            <a
              href="https://www.zeffy.com/en-US/ticketing/a-mothers-voice"
              target="_blank"
              className={styles.link}
            >
              Register
            </a>
          </p>

          <p><strong>Colombian Sign Language (LSC) Family Workshop</strong></p>
          <p>
            📅 February 15
            <br />
            Free for families · $15 for professionals
            <br />
            Learn LSC signs for concepts not found in ASL, including Colombian
            foods, cities, and holidays.
          </p>
          <p>
            👉{" "}
            <a
              href="https://www.zeffy.com/en-US/ticketing/lsc-family-workshop"
              target="_blank"
              className={styles.link}
            >
              Register here
            </a>
          </p>

          <p><strong>Guest Speaker: Professor Alejandro Oviedo</strong></p>
          <p>
            📅 February 21
            <br />
            Presentation on language deprivation, delivered in Spanish with
            interpretation into English and ASL.
            <br />
            Free for families · Fee for professionals
          </p>
          <p>
            👉{" "}
            <a
              href="https://www.zeffy.com/en-US/ticketing/language-cant-wait"
              target="_blank"
              className={styles.link}
            >
              Register here
            </a>
          </p>
        </section>

        {/* ================= OTHER NEWS ================= */}
        <section>
          <h2>Other News & Updates</h2>

          <p><strong>Support for Deaf Detainees</strong></p>
          <p>
            We are currently working with four Deaf detainees, providing advocacy
            and language access support during detention.
          </p>
          <p>
            👉{" "}
            <a
              href="https://youtu.be/ZnFMfUINSpI"
              target="_blank"
              className={styles.link}
            >
              Learn about their situation
            </a>{" "}
            ·{" "}
            <a
              href="https://youtu.be/Ko_iFXCwuv8"
              target="_blank"
              className={styles.link}
            >
              Read the latest update
            </a>
          </p>

          <p><strong>Paid Opportunity: Cultural Heritage ASL Dictionary Contributors</strong></p>
          <p>
            We are seeking Deaf and Hard of Hearing individuals with cultural
            heritage in Arabic, Burmese, Dari, French (Canadian, French, or West
            African), Hmong, Pashto, Persian, Rohingya, or Karen.
          </p>
          <p>
            Participants do not need to read or write the spoken language or know
            their country’s sign language. They do need to know ASL and be able
            to sign approximately 130 vocabulary words.
          </p>
          <p>
            This is a paid opportunity. If interested, please contact us at{" "}
            <strong>celena.a.ponce@gmail.com</strong> or{" "}
            <strong>360-521-2732 (text)</strong>.
          </p>

          <p><strong>Missed One of Our Recent Workshops?</strong></p>
          <p>
            All recent workshops are available in our asynchronous workshop
            store. Please note that asynchronous recordings do not include CEUs.
          </p>
          <p>
            👉{" "}
            <a
              href="https://www.zeffy.com/en-US/ticketing/hands-uniteds-async-workshop-store"
              target="_blank"
              className={styles.link}
            >
              Browse the workshop store
            </a>
          </p>
        </section>

        {/* ================= FOOTER ================= */}
        <footer>
          <p>
            Thank you for helping make these programs possible. Your continued
            support—through sharing, sponsoring, volunteering, or attending—
            directly expands access for multilingual DHH families across the
            United States.
          </p>

          <p>
            Please feel free to reach out with any questions or to discuss
            partnership opportunities.
          </p>

          <p>
            Warm regards,
            <br />
            <strong>Hands United</strong>
          </p>
        </footer>

      </article>
    </main>
  );
}
