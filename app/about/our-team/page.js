import Image from "next/image";
import classes from "./page.module.css";

export default function Board() {
  return (
    <>
      <h2 className={classes.section}>Hands United Board</h2>
      <header className={classes.header}>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/cponce.jpeg"
            alt="Celena Ponce"
            width={400}
            height={303}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            {" "}
            Celena Ponce our president and the proud godmother of a Deaf Latina
            young adult whose journey inspired the creation of this nonprofit.
            Through her relationship with her goddaughter, Ms. Ponce was able to
            connect with both the Latino and Deaf communities and realize how
            few services were available in families’ native language, furthering
            the impact of language deprivation that starkly affected her
            goddaughter. She also has a history of working with immigrant
            communities, curriculum creation, technology skills and community
            organizing that has been key to getting the word out about our
            services, thereby increasing our impact.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/Janice.png"
            alt="Janice Stotts"
            width={300}
            height={300}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Janice Stotts, our secretary, is a Deaf educator with over 30 years
            of experience teaching English/Language Arts through ASL to students
            facing language challenges. She has taught middle and high school at
            the California School for the Deaf in Fremont and the Washington
            School for the Deaf in Vancouver. Ms. Stotts holds a master’s in
            special education from Lewis and Clark College and a bachelors in
            counseling from The Evergreen State College. Along with her
            teaching, she has helped establish several non-profit Deaf services
            programs, including Hands United.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/Dorinda.jpg"
            alt="Dorinda Davidson"
            width={300}
            height={313}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Our treasurer and right-hand woman is Dorinda Davidson. Dorinda, who
            is Deaf-blind, has had the opportunity to connect with many Latino
            and Latina young adults alongside Ms. Ponce. It has been an
            incredible journey watching these young adults grow. As a Deaf
            individual, Ms. Davidson has witnessed firsthand the lack of
            resources and support available for families who speak languages
            other than English. This realization sparked the idea and
            inspiration to collaborate with Ms. Ponce and create our nonprofit.
            Ms. Davidson is currently pursuing her Master of Science
            Rehabilitation Counseling from Western Oregon University.
          </p>
        </div>
      </header>
      <h2 className={classes.section}>Certifications Held</h2>

      <h1 className={classes.section}>Celena Ponce</h1>
      <p className={classes.section}>
        State of Washington Department of Social and Health Services (DSHS)
        Professional Language Certificate in Spanish
      </p>
      <p className={classes.section}>
        Bachelors of Arts in Liberal Arts with a focus on psychology,
        anthropology and sociology and a minor in Spanish
      </p>
      <p className={classes.section}>
        Bachelors of Science in Electrical Engineering with a focus in Digital
        Sign Processing and a minor in math
      </p>
      <p className={classes.section}>Certificate in Immigrant Accompaniment</p>
      <p className={classes.section}>
        Oregon State Drivers Ed Certified instructor
      </p>
      <p className={classes.section}>Oregon State Health Assister</p>
      <p className={classes.section}>Health Insurance Market Place Assister</p>
      <p className={classes.section}>Slingerland Multimodal Instructor</p>
      <p className={classes.section}>Red Cross First Aid/CPR/AED</p>
      <p className={classes.section}>
        Certificate of Professional Interpreter in Special Education
      </p>
      <p className={classes.section}>
        RIT Trilingual Interpreter Certification (in progress)
      </p>
      <p className={classes.section}>
        Certificate in Immigrant Advocacy (in progress)
      </p>
      <p className={classes.section}>
        Certificate in Immigration Trial Advocacy (in progress)
      </p>
      <p className={classes.section}>
        Washington State Drivers Ed Certified instructor (in progress)
      </p>
      <h1 className={classes.section}>Janice Stotts</h1>
      <p className={classes.section}>Master’s in Special Education</p>
      <p className={classes.section}>Bachelors in counseling</p>
      <h1 className={classes.section}>Dorinda Davidson</h1>
      <p className={classes.section}>
        Bachelors in ASL/English Interpretation and minor in health
      </p>
      <p className={classes.section}>
        Master’s in Rehabilitation Counseling (in progress)
      </p>
      <h2 className={classes.section}>Hands United Support Team</h2>
      <header className={classes.header}>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/Abisai.jpg"
            alt="Abisai Denson"
            width={300}
            height={300}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            {" "}
            Abisai Denson is a trilingual interpreter as well as one of our
            instructors. With her extensive background in advocating for
            Spanish-speaking families, her skills have been a great addition to
            our team. Abisai is also a mother of 3, including a daughter with
            CHARGE syndrome.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/Al.png"
            alt="Ál Jimenéz"
            width={400}
            height={300}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Ál Jimenéz is one of our Mexican Sign Language intepreters and
            instructors. He has his Masters degree from Gallaudet University in
            Spanish. His unique language skills and ability to adapt to the
            client has helped us grow in our ability to communicate with the
            larger immigrant community.
          </p>
        </div>
        <div className={classes.imageContainer}>
          {/* <Image
            src="/partners/Andres.png"
            alt="Andrés Ricardo Sánchez Morales"
            width={300}
            height={300}
          /> */}
        </div>
        <div className={classes.hero}>
          {/* <p className={classes.para}>
            Andrés Ricardo Sánchez Morales is our Colombian Sign Language
            instructors. He has his Masters degree in disability and social and
            labor integration. His interactive classes with beautiful visuals
            has become popular and love seeing more people gain basic
            communication in Colombian Sign Language.
          </p> */}
        </div>
        <div className={classes.imageContainer}>
          {/* <Image
            src="/partners/Janice.png"
            alt="Janice Stotts"
            width={300}
            height={300}
          /> */}
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            {/* Ann Cedeño is one of our ASL - Spanish instructors. She has over 30
            years experience in education, both working with the Deaf and hard
            of hearing community as well as with the hearing community. Her
            unique background in being a teacher of both Spanish and ASL make
            her a great asset to our team. */}
          </p>
        </div>
        <div className={classes.imageContainer}>
          {/* <Image
            src="/partners/Janice.png"
            alt="Janice Stotts"
            width={300}
            height={300}
          /> */}
        </div>
        <div className={classes.hero}>
          {/* <p className={classes.para}>
            Carmen Aguilar is our basic English/ASL and citizenship instructor.
            She brings to our team a wealth of knowledge and experience,
            including fluency in 4 languages! Her extensive background of
            working with Deaf immigrants is a valuable asset and allows us to
            better connect with the commmunity.
          </p> */}
        </div>
        <div className={classes.imageContainer}>
          {/* <Image
            src="/partners/Janice.png"
            alt="Janice Stotts"
            width={300}
            height={300}
          /> */}
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Dani is our tech support and professional workshops coordinator. She
            brings a pleathora of skills to the team, including experience with
            video editing, spotlighting, running Zoom meetings and tech in
            general. She has a bachelors degree, majoring in Deaf Studies with
            an emphasis in ASL interpreting, a minor in languages, and a
            Global/Intercultural distinction.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/Federico.jpeg"
            alt="Federico Quintana"
            width={300}
            height={300}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>Making ASL accessible to everyone. </p>
          <p>
            Born Deaf and raised in Miami, Florida, Federico Quintana brings
            over 15 years of classroom teaching experience across middle school,
            high school, and college levels. A graduate of the Model Secondary
            School for the Deaf, he earned a Bachelor’s degree in American Sign
            Language with a minor in Psychology from Gallaudet University and a
            Master’s degree in Education from Lamar University. He holds
            educator certifications in Deaf Education and ASL in two states and
            is the author of the ASL Yes! curriculum textbooks. Federico is a
            first-generation American of Nicaraguan and Cuban heritage. Outside
            the classroom, he enjoys art, cooking with his wife, and spending
            time with his two Deaf sons.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/Karen.png"
            alt="Karen Macías"
            width={350}
            height={300}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Karen Macías is one of our Mexican Sign Langauge instructors. She
            brings with her the lived experience of recently-arrived Deaf
            immigrant, and has created an amazing curriculum for US-based
            individuals to learn LSM. Her interactive and visually engaging
            class is always popular!
          </p>
        </div>
        <div className={classes.imageContainer}>
          {/* <Image
            src="/partners/Janice.png"
            alt="Janice Stotts"
            width={300}
            height={300}
          /> */}
        </div>
        {/* <div className={classes.hero}>
          <p className={classes.para}>
            Marissa Chappell is our fundraising coordinator for our family and
            community programs. Through her work as a trilingual Speech Language
            Pathologist, she has had the opportunity to see the barriers
            families face when attempting to get services and resources. This
            knowledge helps us better understand the landscape and how to knock
            down those barriers.
          </p>
        </div> */}
        <div className={classes.imageContainer}>
          {/* <Image
            src="/partners/Janice.png"
            alt="Janice Stotts"
            width={300}
            height={300}
          /> */}
        </div>
        {/* <div className={classes.hero}>
          <p className={classes.para}>
            Marlene Medina Nero is also a trilingual Speech Language
            Pathologist. Having recently moved to the East coast, Marlene's
            strong connection with families and ability to network is incredibly
            valuable to our team, especially as we try to grow our numbers out
            East. She is also a valuable member of our IEP team, allowing
            familes to fully understand such important documents.
          </p>
        </div> */}
        <div className={classes.imageContainer}>
          <Image
            src="/partners/Mayra.jpg"
            alt="Mayra Castro"
            width={350}
            height={400}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Mayra Castro is an ASL educator and Deaf community advocate who
            teaches Driver Education to immigrant Deaf students through Hands
            United’s 10-week Zoom program. Her instruction emphasizes visual
            learning, ASL, captioned media, and family collaboration to build
            confidence, safety, and understanding of road concepts. She has
            nearly three years of experience as an ASL instructor in the
            Families and Infants program at the New York School for the Deaf and
            previously taught ASL and Deaf Culture to high school students with
            disabilities at Barnstable Academy. Mayra studied Linguistics at
            Montclair State University, deepening her understanding of Deaf
            identity and language, and has served as Director of Camp Sol of the
            Deaf, Inc. since 2016, supporting Deaf and Hard of Hearing youth of
            color in developing self-esteem, identity, and leadership skills.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/Monica.png"
            alt="Mónica Gallego"
            width={300}
            height={400}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Mónica Gallego is our community liaison. She brings with her years of
            experience as a trilingual interpeter, mentor, and mental health
            professional. Her ability to bring people together and advocate not
            only for the needs of DHH but also the needs of interpreters is
            unparalleled. This gives us the ability to give trilingual
            intepreters a safe place to grow and practice their skill, therby
            better serving our families.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src="/partners/Razaq.jpg"
            alt="Razaq Fakir"
            width={300}
            height={400}
          />
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Razaq Fakir is our international sign langauge instructor. His
            unique background as a UN interpreter for international sign,
            academic teaching experience and over 15 years teaching and
            interpreting at high level events brings with it a mountain of
            experience. His classes have been very popular and we are honored to
            have him on our team.
          </p>
        </div>
        <div className={classes.imageContainer}>
          {/* <Image
            src="/partners/Dorinda.jpg"
            alt="Dorinda Davidson"
            width={300}
            height={313}
          /> */}
        </div>
        <div className={classes.hero}>
          <p className={classes.para}>
            Olivia McFadden is our volunteer coordinator. As our number of
            volunteers has grown, we needed someone with communication
            experience and flexibility. Olivia has done a great job of rounding
            up our volunteers and getting them plugged into one of the many
            opportunities we have. If you are interested in volunteering, feel
            free to fill out our volunteer form!
          </p>
        </div>
      </header>
    </>
  );
}
