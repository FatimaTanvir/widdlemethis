import React from "react";
import { useState } from "react";
import FlashcardList from "./FlashCardList";
import './FlashCard.css'

function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">{card.question}</div>
        <div className="card-back">{card.answer}</div>
      </div>
    </div>
  );
}

export default Flashcard;