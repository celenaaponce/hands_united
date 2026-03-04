export const immigrationBoardData = [
  {
    id: "rights",
    label: "Rights",
    emoji: "✋",
    sections: [
      {
        title: "",
        items: [
          { textKey: "amIBeingDetained", image: "/commboard/detained.png" },
          { textKey: "chooseRemainSilent", image: "/commboard/silent.png" },
          { textKey: "noQuestionWithoutLawyer", image: "/commboard/waitlawyer.png" },
          { textKey: "requireInterpreter", image: "/commboard/terp.png" },
          { textKey: "noConsentSignWithoutInterpreter", image: "/commboard/noterpnosign.png" },
          { textKey: "noConsentWritingCommunication", image: "/commboard/nowrite.png" },
          { textKey: "noLipReadingCommunication", image: "/commboard/nolips.png" },

          // ✅ NEW
          { textKey: "noFamilyAsInterpreter", image: "/commboard/familynotterp.png" },
        ],
      },
    ],
  },

  {
    id: "officer",
    label: "Officer",
    emoji: "🪪",
    sections: [
      {
        title: "Officer Identification",
        items: [
          { textKey: "showBadge", image: "/commboard/showid.png" },
          { textKey: "whatAgency", image: "/commboard/youwho.png" },
          { textKey: "localPolice", image: "/commboard/localpolice.png" },
          { textKey: "immigrationICE", image: "/commboard/youice.png" },
          { textKey: "judicialWarrant", image: "/commboard/warrant.png" },
        ],
      },
    ],
  },

  {
    id: "communication",
    label: "Communication",
    emoji: "🗣",
    sections: [
      {
        title: "",
        items: [
          { textKey: "doNotUnderstand", image: "/commboard/nounderstand.png" },
          { textKey: "noQuestionWithoutInterpreter", image: "/commboard/waitinterpreter.png" },
          { textKey: "noQuestionWithoutLawyer", image: "/commboard/waitlawyer.png" },
 

          // ✅ NEW
          { textKey: "callFamily", image: "/commboard/callfam.png" },
        ],
      },
    ],
  },
];