import { useEffect, useState } from "react";
import classes from "./displaySub.module.css";
import FlashcardList from "../flashcards/flashcardList";
import Link from "next/link";
import LoadingIndicator from '../loadingInfo/LoadingIndicator'

export default function DisplaySub({ letterData, link }) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (letterData.length > 0) {
      const processedItems = letterData.map((row) => ({
        id: row.id,
        word: row.properties.Word.title.map((item) => item.plain_text),
        themes: row.properties.Themes.multi_select.map((theme) => theme.name),
        image: row.properties.Picture.files.map((item) => item.file.url),
        link: row.properties.YoutubeLink.url,
        synonyms: row.properties.Synonyms.rich_text.map(
          (item) => item.plain_text
        ),
      }));
      setItems(processedItems);
      setIsLoading(false);
    }
  }, [letterData]);

  return (
    <div>
      {isLoading ? (
        <div> <LoadingIndicator/></div>
      ) : (
        <div>
          <FlashcardList flashcards={items} />
          <div className={classes.ctaBack}>
            <Link
              className={classes.ctaBack}
              href={link}
              onClick={() => handleBackClick()}
            >
              <span className={classes.large}>☜</span> Empezar de Nuevo
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
