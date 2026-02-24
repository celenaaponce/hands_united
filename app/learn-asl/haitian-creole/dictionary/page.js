import Image from "next/image";
import classes from "./page.module.css";
import Link from "next/link";

import DictionaryFlashcards from "../../../../components/dictionaryFlashcards/DictionaryFlashcards";
import dictionary from "../../../data/hands-united-dictionary.json";

export default function Ayudar() {
  return (
    <div className="theme-ht">

      {/* NEW SECTION */}
      <section className={classes.section}>
        <h1>Haitian Creole ASL Dictionary</h1>

        <DictionaryFlashcards
          dictionary={dictionary}
          languageFilter="ht"
          uiLanguage="ht"
        />
      </section>
    </div>
  );
}
