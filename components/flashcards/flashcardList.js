import React from "react";
import { lazy, Suspense } from "react";
// import Flashcard from "./flashcard";
import classes from './flashcardList.module.css'

const Flashcard = lazy(()=>import('./flashcard'))
export default function FlashcardList( {flashcards} ) {

  return (
    <div className={classes.meals}>
      {flashcards.map((flashcard) => {
        return <Suspense fallback={<p>Cargando...</p>} key={flashcard.id}><Flashcard flashcard={flashcard} key={flashcard.id}/></Suspense>;
      })}
    </div>
  );
}