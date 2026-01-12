// data/newsletter.js

export const newsletter = {
  title: "This Week & Upcoming at Hands United",

  intro: `Hello friends, supporters, and professionals,

We have a full and exciting slate of programming, community events, and advocacy efforts happening at Hands United. Below is a snapshot of what’s happening this week, what’s coming up, and how you can get involved.`,

  aslSummaryTop: "https://youtu.be/TJBYzJLGGMc",

  eventsThisWeek: {
    families: [
      {
        title: "Spanish–ASL Classes (Week 2)",
        description: [
          "Our Spanish–ASL family classes have entered their second week.",
          "111 families registered so far — and we still have space, especially Tuesday–Thursday sessions."
        ],
        registerUrl:
          "https://manosunidas.aidaform.com/clases-de-asl-enero-2026"
      },
      {
        title: "January 16 – Special Hmong Family Event",
        description: [
          "Presentation by Tina Ly in spoken Hmong on autism and deafness.",
          "Interpretation provided in English, ASL, and Spanish.",
          "Free for families."
        ],
        registerUrl:
          "https://handsunited.aidaform.com/supporting-hmong-children-with-autism-and-deafness"
      },
      {
        title: "January 19 – Tigrinya & Amharic Family Social",
        description: [
          "Community social focused on winter ASL vocabulary and open Q&A.",
          "Families should join the WhatsApp group for real-time updates."
        ],
        whatsappUrl:
          "https://chat.whatsapp.com/GPg93qZytR16Q00RdtZLDR"
      }
    ],

    professionals: [
      {
        title: "Coffee Chat",
        datetime: "Monday, Jan 12 | 6:00 PM PST",
        description:
          "An informal space to meet with Celena, discuss current projects, resources, and receive general support.",
        zoom: "Zoom link"
      },
      {
        title: "Voiceover Volunteer Meetings",
        datetime: "Tuesday, Jan 13 | 1:00 PM & 4:00 PM PST",
        description:
          "Open to anyone interested in learning more about Spanish voiceover work, including DHH professionals.",
        zoom: "Zoom link"
      },
      {
        title: "Hmong Workshop",
        datetime: "Friday, Jan 16",
        description:
          "Presentation by Tina Ly in spoken Hmong with interpretation in English, ASL, and Spanish.",
        pricing: {
          noCEUs: 20,
          withCEUs: 30
        },
        registerUrl: "Register here"
      },
      {
        title: "Free Legal Consultation",
        datetime: "Jan 20 | 5:00 PM PST",
        description:
          "Virtual consultation for Deaf, Hard of Hearing, and DeafBlind immigrants. Hearing and Deaf interpreters provided.",
        zoom: "Zoom link"
      },
      {
        title: "Name Sign Celebration",
        datetime: "January 23",
        description: [
          "Invite-only event for Spanish-speaking families.",
          "Breakout rooms with Deaf leads and trilingual interpreters.",
          "Limited to 15 families.",
          "Still seeking volunteer trilingual interpreters."
        ]
      }
    ]
  },

  upcomingWorkshops: [
    {
      title: "Interactive Tools for Teaching & Tutoring",
      date: "January 21",
      description:
        "Learn how to use embedded images, hard-coded captions, and accessibility-first tools for online instruction.",
      language: "ASL",
      pricing: {
        withCEUs: 50,
        noCEUs: 30
      },
      registerUrl: "Register here"
    },
    {
      title: "Spanish Classes – Destinos (Episodes 6–8)",
      dates: ["January 26", "January 28", "January 30"],
      description:
        "Taught using SimCom ASL with spoken Spanish.",
      registerUrl: "Register here",
      asyncNote:
        "Missed Episodes 1–5? Available async in our store for $50."
    }
  ],

  februaryEvents: [
    {
      title: "LSM & International Sign Language Classes",
      start: "First week of February",
      pricing: {
        cost: 150,
        ceus: "2.0"
      },
      notes: [
        "No Spanish required for LSM",
        "Recordings included"
      ],
      registerUrls: {
        LSM: "Register here: LSM",
        IS: "Register here: IS"
      }
    },
    {
      title: "LSC Family Workshop",
      date: "February 15 | 5:00 PM PST",
      description:
        "Learn basic Colombian Sign Language (LSC) for food, cities, celebrations, and culturally specific concepts not present in ASL.",
      interpretation: ["Spanish", "ASL"],
      pricing: {
        professionals: 15,
        ceus: false
      },
      registerUrl: "Register here"
    },
    {
      title: "Book Club – A Mother’s Voice",
      start: "February 11",
      description: [
        "Fiction by a Deaf Israeli author.",
        "Meets every 2 weeks.",
        "Culminates in a live discussion with the author in April."
      ],
      language: "ASL",
      pricing: {
        withCEUs: 125,
        noCEUs: 100
      },
      registerUrl: "Register here"
    },
    {
      title: "Language Can’t Wait",
      date: "February 21",
      presenter: "Dr. Alejandro Oviedo",
      description:
        "Spoken Spanish presentation with interpretation in English and ASL.",
      pricing: {
        families: "Free",
        withCEUs: 50,
        noCEUs: 30
      },
      registerUrl: "Register here"
    }
  ],

  servicesAndResources: {
    mathConsultations: {
      description:
        "2 hours per month of math support at any level in ASL, English, or Spanish.",
      note:
        "Provided by a trilingual interpreter with a Master’s in Electrical Engineering and Computer Science. Discounts available for December workshop participants.",
      registerUrl: "Register here"
    },

    store: {
      items: [
        "ASL ↔ Spanish family dictionary with coloring pages and slide set",
        "Spanish voiceover/audio included for accessibility regardless of literacy level",
        "20-hour FREE async ASL ↔ Spanish class using Bravo curriculum"
      ],
      shopUrl: "Shop here"
    },

    aslSummaryBottom: "https://youtu.be/TVJjH7cuEuc",

    youtubeChannel: "@handsunitedor",

    videoEditingExample:
      "https://youtu.be/MUBqku5lk0A?si=ro-4M446dJIFdKMg",

    virtualTours:
      "Hands United encourages Schools for the Deaf to offer accessible virtual tours for immigrant families. Full tech support and English–Spanish–ASL interpretation provided, with additional languages available upon request."
  },

  advocacy: {
    openLetterVRS: {
      readUrl:
        "https://handsunitedor.org/advocacy/open-letter-vrs-access",
      aslSummary:
        "https://youtu.be/WH_JJ7cSZTs"
    },
    callsToAction: [
      "ASL-fluent individuals interested in becoming Driver’s Ed instructors",
      "DHH individuals passionate about law and immigrant rights for a multi-month advocacy cohort",
      "LA-based immigration attorney needed for Deaf Ukrainian asylum seeker with USCIS appointment on January 29"
    ]
  },

  eventsInDevelopment: [
    "El Salvadoran Sign Language (LESSA) classes",
    "Russian Sign Language classes",
    "Spanish Sign Language (LSE) courses with partners in Spain",
    "NHLAD panels: What I Wish My Educational Interpreter Had Known",
    "NHLAD panels: Autonomy & Identity – Deaf Adults and Cochlear Implant Decisions",
    "Carnival Signs (IHSL – Haitian Sign Language)",
    "Catholic Signs (IHSL & Deaf Ministry)",
    "Know Your Rights (ASL, International Sign, Tagalog)"
  ],

  closing:
    "Thank you for being part of this growing, multilingual, and Deaf-centered community. Your participation, advocacy, and support make this work possible.",

  signature:
    "Warmly,\nCelena Ponce\nFounder & Director\nHands United / Manos Unidas"
};

