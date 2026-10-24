import Link from "next/link";
import classes from "../page.module.css";
import games from "./games.module.css";

export const metadata = {
  title: "Haitian Creole ASL Games | Jwèt ASL Kreyòl Ayisyen",
};

// Add new games here. Each one gets its own folder next to this file.
const GAMES = [
  {
    href: "/learn-asl/haitian-creole/dictionary/games/food-flashcards",
    title: "Food Flashcards",
    titleHt: "Kat Manje",
    description: "Look at the picture, sign it, then flip the card to check.",
  },
];

export default function DictionaryGames() {
  return (
    <div className="theme-ht">
      <div className={classes.container}>
        <Link href="/learn-asl/haitian-creole/dictionary" className={classes.backLink}>
          ← Back to Dictionary
        </Link>

        <section className={classes.section}>
          <h1>Haitian Creole ASL Games</h1>
          <h1>Jwèt ASL Kreyòl Ayisyen</h1>

          <ul className={games.list}>
            {GAMES.map((game) => (
              <li key={game.href}>
                <Link href={game.href} className={games.card}>
                  <span className={games.title}>{game.title}</span>
                  <span className={games.title}>{game.titleHt}</span>
                  <span className={games.description}>{game.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}