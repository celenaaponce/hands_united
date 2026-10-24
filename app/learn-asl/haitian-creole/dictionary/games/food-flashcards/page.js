import Link from "next/link";
import classes from "../../page.module.css";

import Flashcards from "../../../../../../components/FlashcardsGame/Flashcards";

export const metadata = {
  title: "Food Flashcards | Kat Manje",
};

export default function FoodFlashcards() {
  return (
    <div className="theme-ht">
      <div className={classes.container}>
        <Link href="/learn-asl/haitian-creole/dictionary/games" className={classes.backLink}>
          ← Back to Games
        </Link>

        <section className={classes.section}>
          <h1>Food Flashcards</h1>
          <h1>Kat Manje</h1>

          <Flashcards imageBasePath="/games/haitian-food/" uiLanguage="ht" />
        </section>
      </div>
    </div>
  );
}