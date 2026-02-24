import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

import DictionaryFlashcards from "../../../../components/dictionaryFlashcards/DictionaryFlashcards";
import dictionary from "../../../data/hands-united-dictionary.json";

export default function Ayudar() {
  return (
    <div className="theme-chk">

      {/* NEW SECTION */}
      <section className={classes.section}>
        <h1>Chuukese ASL Dictionary</h1>

        <DictionaryFlashcards
          dictionary={dictionary}
          languageFilter="chk"
          uiLanguage="chk"
        />
      </section>
    </div>
  );
}
