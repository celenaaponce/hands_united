import DictionaryFlashcards from "../../../components/dictionaryFlashcards/DictionaryFlashcards";
import dictionary from "../../data/hands-united-dictionary.json";

export default function Page() {
  return (
    <main className="theme-default">

      <h1 style={{ textAlign: "center" }}>
        Search All Dictionaries
      </h1>

      <DictionaryFlashcards
        dictionary={dictionary}
      />

    </main>
  );
}