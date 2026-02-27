import classes from './flashcardList.module.css'
import React from "react"; 
import { lazy, Suspense } from "react";

const Flashcard = lazy(()=>import('./flashcard'));


export default function FlashcardList({ flashcards, onWatch }) {
  return (
    <div className={classes.meals}>
      {flashcards.map((flashcard) => (
        <Suspense fallback={<p>Loading...</p>} key={flashcard.id}>
          <Flashcard flashcard={flashcard} onWatch={onWatch} />
        </Suspense>
      ))}
    </div>
  );
}