import styles from "./page.module.css";

export default function NewsletterPage() {
  return (
    <main className={styles.letter}>
      <article>

        {/* ================= HEADER ================= */}
        <header>
          <h1>This Week & Upcoming at Hands United</h1>
        </header>

        {/* ================= INTRO ================= */}
        <section>
          <p>
            Hello friends, supporters, and professionals,
          </p>

          <p>
            We have a full and exciting slate of programming, community events,
            and advocacy efforts happening at Hands United. Below is a snapshot
            of what’s happening this week, what’s coming up, and how you can get
            involved.
          </p>
        </section>

        {/* ================= EVENTS THIS WEEK ================= */}
        <section>
          <h2>Events This Week</h2>

          <p>
            <strong>ASL summary:</strong>{" "}
            <a
              href="https://youtu.be/TJBYzJLGGMc"
              target="_blank"
              rel="noopener noreferrer"
              className = {styles.link}
            >
              Watch here
            </a>
          </p>

          <p><strong>For Families</strong></p>

          <p><strong>Spanish–ASL Classes (Week 2)</strong></p>
          <p>
            Our Spanish–ASL family classes have entered their second week.
            <br />
            📊 <strong>111 families registered</strong> so far — and we still
            have space, especially Tuesday–Thursday sessions.
          </p>
          <p>
            👉{" "}
            <a
              href="https://manosunidas.aidaform.com/clases-de-asl-enero-2026"
              target="_blank"
               className = {styles.link}
            >
              Families can register here
            </a>
          </p>

          <p><strong>January 16 – Special Hmong Family Event</strong></p>
          <p>
            A presentation by Tina Ly in spoken Hmong on autism and deafness, with
            interpretation in English, ASL, and Spanish.
            <br />
            ✔️ Free for families
          </p>
          <p>
            👉{" "}
            <a
              href="https://handsunited.aidaform.com/supporting-hmong-children-with-autism-and-deafness"
              target="_blank"
               className = {styles.link}
            >
              Register here
            </a>
          </p>

          <p><strong>January 19 – Tigrinya & Amharic Family Social</strong></p>
          <p>
            A community social focused on winter ASL vocabulary and open Q&amp;A
            for families.
          </p>
          <p>
            📱 Families should join our{" "}
            <a
              href="https://chat.whatsapp.com/GPg93qZytR16Q00RdtZLDR"
              target="_blank"
               className = {styles.link}
            >
              Tigrinya/Amharic WhatsApp group
            </a>{" "}
            for real-time updates.
          </p>

          <p><strong>For Professionals</strong></p>

          <p><strong>☕ Coffee Chat – Monday, Jan 12 | 6:00 PM PST</strong></p>
          <p>
            An informal space to meet with Celena, discuss current projects,
            resources, and receive general support.
          </p>

          <p><strong>🎙️ Voiceover Volunteer Meetings – Tuesday, Jan 13</strong></p>
          <p>
            Two sessions: 1:00 PM PST and 4:00 PM PST.
            <br />
            Open to anyone interested in Spanish voiceover work, including DHH
            professionals.
          </p>

          <p><strong>📘 Hmong Workshop – Friday, Jan 16</strong></p>
          <p>
            Presentation by Tina Ly in spoken Hmong with interpretation in
            English, ASL, and Spanish.
            <br />
            • $20 (no CEUs)
            <br />
            • $30 (with CEUs)
          </p>

          <p><strong>⚖️ Free Legal Consultation – Jan 20 | 5:00 PM PST</strong></p>
          <p>
            Virtual consultation for Deaf, Hard of Hearing, and DeafBlind
            immigrants.
            <br />
            ✔️ Hearing and Deaf interpreters provided.
          </p>

          <p><strong>✋ Name Sign Celebration – January 23</strong></p>
          <p>
            Invite-only event for Spanish-speaking families exploring name sign
            culture, followed by breakout rooms with Deaf leads and trilingual
            interpreters.
            <br />
            🔢 Limited to 15 families
            <br />
            🙋 Still seeking volunteer trilingual interpreters
          </p>
        </section>

        {/* ================= UPCOMING WORKSHOPS ================= */}
        <section>
          <h2>Upcoming Workshops & Classes</h2>

          <p><strong>January 21 – Interactive Tools for Teaching & Tutoring</strong></p>
          <p>
            Learn how to use embedded images, hard-coded captions, and
            accessibility-first tools for online instruction.
            <br />
            • Presented in ASL
            <br />
            • $50 with CEUs | $30 without
          </p>

          <p><strong>January 26, 28, 30 – Spanish Classes (Destinos Episodes 6–8)</strong></p>
          <p>
            Taught using SimCom ASL with spoken Spanish.
            <br />
            🎥 Missed Episodes 1–5? Available async in our store for $50.
          </p>
        </section>

        {/* ================= FEBRUARY ================= */}
        <section>
          <h2>February Events & Collaborations</h2>

          <p><strong>LSM & International Sign Language Classes</strong></p>
          <p>
            Start first week of February.
            <br />
            • $150 for 2.0 CEUs
            <br />
            • No Spanish required for LSM
            <br />
            • Recordings included
          </p>

          <p><strong>LSC Family Workshop – February 15 | 5:00 PM PST</strong></p>
          <p>
            Learn basic Colombian Sign Language (LSC) for food, cities,
            celebrations, and culturally specific concepts not present in ASL.
            <br />
            • Led in LSC with Spanish & ASL interpretation
            <br />
            • $15 for professionals (no CEUs)
          </p>

          <p><strong>📖 Book Club – Starting February 11</strong></p>
          <p>
            <em>A Mother’s Voice</em> — fiction by a Deaf Israeli author.
            <br />
            • Meets every 2 weeks
            <br />
            • Culminates in a live author discussion in April
            <br />
            • Led in ASL
            <br />
            • $125 with CEUs | $100 without
          </p>

          <p><strong>🧠 Language Can’t Wait – February 21</strong></p>
          <p>
            Presentation by Professor Alejandro Oviedo.
            <br />
            Spoken Spanish with English & ASL interpretation.
            <br />
            • Free for families
            <br />
            • $50 with CEUs | $30 without
          </p>
        </section>

        {/* ================= SERVICES ================= */}
        <section>
          <h2>New Services & Resources</h2>

          <p><strong>Math Consultations</strong></p>
          <p>
            2 hours per month of math support at any level in ASL, English, or
            Spanish with a trilingual interpreter holding a Master’s in EECS.
            <br />
            ✔️ Discounts for December workshop participants.
          </p>

          <p><strong>Hands United Store</strong></p>
          <ul>
            <li>ASL ↔ Spanish family dictionary with coloring pages & slides</li>
            <li>Spanish voiceover/audio included</li>
            <li>20-hour FREE async ASL ↔ Spanish class using Bravo curriculum</li>
          </ul>

          <p>
            <strong>ASL summary:</strong>{" "}
            <a href="https://youtu.be/TVJjH7cuEuc" target="_blank"  className = {styles.link}>
              Watch here
            </a>
          </p>

          <p><strong>New English/ASL YouTube Channel</strong></p>
          <p>
            📺 @handsunitedor — hosting workshop recordings, immigration
            resources, advocacy videos, and announcements.
          </p>

          <p><strong>Video Editing & Accessibility Services</strong></p>
          <p>
            Includes image embedding, hard-coded captions, and voiceover.
            <br />
            👉{" "}
            <a
              href="https://youtu.be/MUBqku5lk0A?si=ro-4M446dJIFdKMg"
              target="_blank"
               className = {styles.link}
            >
              Example here
            </a>
          </p>

          <p><strong>Virtual Tours for Schools for the Deaf</strong></p>
          <p>
            Hands United provides tech support and English–Spanish–ASL
            interpretation, with additional languages upon request.
          </p>
        </section>

        {/* ================= ADVOCACY ================= */}
        <section>
          <h2>Advocacy & Campaigns</h2>

          <p><strong>Open Letter: Access to VRS</strong></p>
          <p>
            <a
              href="https://handsunitedor.org/advocacy/open-letter-vrs-access"
              target="_blank"
               className = {styles.link}
            >
              Read the letter
            </a>{" "}
            ·{" "}
            <a href="https://youtu.be/WH_JJ7cSZTs" target="_blank"  className = {styles.link}>
              Watch ASL summary
            </a>
          </p>

          <ul>
            <li>ASL-fluent Driver’s Ed instructor recruitment</li>
            <li>DHH immigration advocacy cohort</li>
            <li>
              Urgent: LA-based immigration attorney for Deaf Ukrainian asylum
              seeker (USCIS appointment Jan 29)
            </li>
          </ul>
        </section>

        {/* ================= FOOTER ================= */}
        <footer>
          <p>
            Thank you for being part of this growing, multilingual, and
            Deaf-centered community. Your participation, advocacy, and support
            make this work possible.
          </p>

          <p>
            Warmly,
            <br />
            <strong>Celena Ponce</strong>
            <br />
            Hands United
          </p>
        </footer>

      </article>
    </main>
  );
}
