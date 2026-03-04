// components/communicationBoard/boardData.js

export const supportedLanguages = {
  es: "Spanish",
  ru: "Russian",
  my: "Burmese",
  ht: "Haitian Creole",
  ti: "Tigrinya",
  am: "Amharic",
  chk: "Chuukese",
};

export const driverBoardData = [
  {
    id: "police",
    label: "Police",
    emoji: "🚔",
    sections: [
      // =========================
      // TRAFFIC STOP – WHY STOPPED
      // =========================
      {
        title: "Why Was I Stopped?",
        items: [
          {
            textKey: "whyStop",
            image: "/commboard/whystop.png",
          },
          {
            textKey: "speeding",
            image: "/commboard/speed.png",
          },
          {
            textKey: "tagsExpired",
            image: "/commboard/expired.png",
          },
          {
            textKey: "brokenLight",
            image: "/commboard/brokenlight.png",
          },
          {
            textKey: "noSeatbelt",
            image: "/commboard/seatbelt.png",
          },
          {
            textKey: "recklessDriving",
            image: "/commboard/reckless.png",
          },
        ],
      },

      // =========================
      // DOCUMENTS
      // =========================
      {
        title: "Documents",
        items: [
          {
            textKey: "hereLicense",
            image: "/commboard/herelicense.png",
          },
          {
            textKey: "licenseWallet",
            image: "/commboard/wallet.png",
          },
          {
            textKey: "registrationVehicle",
            image: "/commboard/reg.png",
          },
          {
            textKey: "insuranceHere",
            image: "/commboard/insurance.png",
          },
          {
            textKey: "reachingWallet",
            image: "/commboard/reachwallet.png",
          },
          {
            textKey: "reachingGloveBox",
            image: "/commboard/glovecompartment.png",
          },
        ],
      },

      // =========================
      // OFFICER IDENTIFICATION
      // =========================
      {
        title: "Officer Identification",
        items: [
          {
            textKey: "showBadge",
            image: "/commboard/showid.png",
          },
          {
            textKey: "whatAgency",
            image: "/commboard/youwho.png",
          },
          {
            textKey: "localPolice",
            image: "/commboard/localpolice.png",
          },
          {
            textKey: "immigrationICE",
            image: "/commboard/youice.png",
          },
          {
            textKey: "judicialWarrant",
            image: "/commboard/warrant.png",
          },
        ],
      },

      // =========================
      // INSTRUCTIONS / SAFETY
      // =========================
      {
        title: "Instructions",
        items: [
          {
            textKey: "turnOffCar",
            image: "/commboard/off.png",
          },
          {
            textKey: "stayInsideVehicle",
            image: "/commboard/staycar.png",
          },
          {
            textKey: "stepOutVehicle",
            image: "/commboard/outcar.png",
          },
          {
            textKey: "handsVisible",
            image: "/commboard/hands.png",
          },
        ],
      },

      // =========================
      // CITATION / COURT
      // =========================
      {
        title: "Citation / Court",
        items: [
          {
            textKey: "warning",
            image: "/commboard/warn.png",
          },
          {
            textKey: "ticket",
            image: "/commboard/ticket.png",
          },
          {
            textKey: "goToCourt",
            image: "/commboard/court.png",
          },
          {
            textKey: "wherePay",
            image: "/commboard/pay.png",
          },
          {
            textKey: "writeDown",
            image: "/commboard/write.png",
          },
        ],
      },

      // =========================
      // INTERPRETER REQUIRED
      // =========================
      {
        title: "Interpreter Required",
        items: [
          {
            textKey: "requireInterpreter",
            image: "/commboard/terp.png",
          },
          {
            textKey: "doNotUnderstand",
            image: "/commboard/nounderstand.png",
          },
          {
            textKey: "noQuestionWithoutInterpreter",
            image: "/commboard/waitinterpreter.png",
          },
          {
            textKey: "noSignWithoutInterpreter",
            image: "/commboard/noterpnosign.png",
          },
          {
            textKey: "noQuestionWithoutLawyer",
            image: "/commboard/waitlawyer.png",
          },
        ],
      },
    ],
  },

  // =========================
  // MEDICAL
  // =========================
  {
    id: "medical",
    label: "Medical",
    emoji: "🏥",
    sections: [
      {
        title: "",
        items: [
          {
            textKey: "needMedicalHelp",
            image: "/commboard/medicalhelp.png",
          },
          {
            textKey: "amHurt",
            image: "/commboard/hurt.png",
          },
          {
            textKey: "takeMedication",
            image: "/commboard/meds.png",
          },
          {
            textKey: "needInterpreterForMedical",
            image: "/commboard/medterp.png",
          },
          {
            textKey: "haveCochlearImplant",
            image: "/commboard/ci.png",
          },
        ],
      },
    ],
  },

  // =========================
  // RIGHTS
  // =========================
  {
    id: "rights",
    label: "Rights",
    emoji: "⚖️",
    sections: [
      {
        title: "",
        items: [
          {
            textKey: "adaEffectiveCommunication",
            image: "/commboard/adarights.png",
          },
          {
            textKey: "qualifiedInterpreterRequired",
            image: "/commboard/terp.png",
          },
          {
            textKey: "noFamilyAsInterpreter",
            image: "/commboard/familynotterp.png",
          },
          {
            textKey: "noConsentSignWithoutInterpreter",
            image: "/commboard/noterpnosign.png",
          },
        ],
      },
    ],
  },

  // =========================
  // ID
  // =========================
  {
    id: "id",
    label: "ID",
    emoji: "🪪",
    sections: [
      {
        title: "",
        items: [
          {
            textKey: "idInWallet",
            image: "/commboard/wallet.png",
          },
          {
            textKey: "registrationInVehicle",
            image: "/commboard/reg.png",
          },
          {
            textKey: "waitForInterpreter",
            image: "/commboard/waitinterpreter.png",
          },
        ],
      },
    ],
  },

  // =========================
  // HELP
  // =========================
  {
    id: "help",
    label: "Help",
    emoji: "🆘",
    sections: [
      {
        title: "",
        items: [
          {
            textKey: "feelUnsafe",
            image: "/commboard/unsafe.png",
          },
          {
            textKey: "callFamily",
            image: "/commboard/callfam.png",
          },
          {
            textKey: "amAlone",
            image: "/commboard/alone.png",
          },
        ],
      },
    ],
  },
];
