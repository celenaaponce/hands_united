import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

export default function ProfessionalServices() {
  return (
    <>
      {/* Page Title */}
      <h2 className={classes.section}>Professional Services</h2>

      <header className={classes.header}>
        {/* Intro */}
        <div className={classes.hero}>
          <p>
            Hands United partners with agencies, educators, interpreters, and
            institutions to strengthen language access and improve outcomes for
            Deaf immigrants and multilingual Deaf communities.
          </p>
          <p>
            Our professional services combine lived experience, technical
            expertise, and culturally responsive practice to support systems
            that serve Deaf and hard of hearing individuals.
          </p>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-professional.png"
            alt="Professional services and collaboration"
            width={300}
            height={300}
          />
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-school.png"
            alt="Partner organizations and agencies"
            width={300}
            height={300}
          />
        </div>

        {/* Who This Is For */}
        <div className={classes.hero}>
          <h3>Who These Services Are For</h3>
          <ul>
            <li>Schools and educational programs</li>
            <li>Nonprofits and community organizations</li>
            <li>Interpreter agencies and individual interpreters</li>
            <li>Healthcare, legal, and social service providers</li>
            <li>Government agencies and public institutions</li>
          </ul>
        </div>

        {/* Interpretation & Translation */}
        <div className={classes.hero}>
          <h3>Interpretation & Translation Services</h3>
          <p>
            We provide professional interpretation and translation services
            centered on Deaf immigrants and multilingual families, with
            attention to cultural context and accessibility.
          </p>
          <ul>
            <li>ASL interpretation</li>
            <li>Spoken language interpretation</li>
            <li>Trilingual interpretation (ASL / English / Spanish)</li>
            <li>Translation of written and visual materials</li>
            <li>Consultation on accessible communication strategies</li>
          </ul>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-interpret.png"
            alt="Interpretation and translation services"
            width={300}
            height={300}
          />
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-workshop.png"
            alt="Professional Development & Training"
            width={300}
            height={300}
          />
        </div>

        {/* Professional Development */}
        <div className={classes.hero}>
          <h3>Professional Development & Training</h3>
          <p>
            We design and deliver professional development workshops for
            interpreters, educators, and service providers working with Deaf
            immigrants and families.
          </p>
          <ul>
            <li>Workshops on Deaf immigrant experiences</li>
            <li>Language deprivation and accessibility training</li>
            <li>Best practices for working with multilingual Deaf clients</li>
            <li>Panel discussions and community-informed learning</li>
            <li>Custom trainings for organizations</li>
          </ul>
        </div>

        {/* Media & Resource Development */}
        <div className={classes.hero}>
          <h3>Media & Resource Development</h3>
          <p>
            We collaborate with organizations to develop accessible educational
            materials that reach Deaf and low-literacy audiences effectively.
          </p>
          <ul>
            <li>ASL and multilingual video content</li>
            <li>Visual learning materials</li>
            <li>Accessible curriculum development</li>
            <li>Consultation on inclusive design</li>
          </ul>
        </div>

        <div className={classes.imageContainer}>
          <Image
            src="/images/impact-quiz.png"
            alt="Accessible media and resource development"
            width={300}
            height={300}
          />
        </div>

        <div className={classes.columnSpacer} />

        {/* Why This Matters */}
        <div className={classes.hero}>
          <h3>Why Professional Services Matter</h3>
          <p>
            Systems designed without Deaf and immigrant perspectives often
            unintentionally exclude the people they aim to serve. Professional
            services grounded in lived experience help close these gaps.
          </p>
          <p>
            Revenue from professional services also helps sustain Hands United’s
            family and community programs.
          </p>
        </div>

        <div className={classes.columnSpacer} />
        <div className={classes.columnSpacer} />

        {/* How to Engage */}
        <div className={classes.hero}>
          <h3>How to Engage With Us</h3>
          <p>
            Professional services are available by request and may be provided
            on a contract or project basis. We work collaboratively to scope
            services that meet your organization’s needs.
          </p>
          <p>
            <Link href="mailto:info@handsunitedor.org?subject=Professional%20Services%20Inquiry">
              Email us about professional services →
            </Link>
          </p>
        </div>

        <div className={classes.columnSpacer} />
        <div className={classes.columnSpacer} />

        {/* Support CTA */}
        <div className={classes.hero}>
          <h3>Support This Work</h3>
          <p>
            Supporting Hands United helps sustain both professional services and
            community-centered programs for Deaf immigrants and families.
          </p>
          <p>
            <Link href="/donate?program=professional-services">
              Support Professional Services →
            </Link>
          </p>
        </div>

        <div className={classes.columnSpacer} />
      </header>
    </>
  );
}
