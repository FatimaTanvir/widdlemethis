// src/components/FlashcardList.jsx
import { useState } from "react";
import Flashcard from "./Flashcard";
import { emojiCards } from "../data/emojiCards";

function FlashcardList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
  const newIndex = (currentIndex - 1 + emojiCards.length) % emojiCards.length;
  setCurrentIndex(newIndex);
};
  const nextCard = () => {
  const newIndex = (currentIndex + 1) % emojiCards.length;
  setCurrentIndex(newIndex);
};

  return (
    <div>
      <h4>Number of Cards: {emojiCards.length}</h4>
      <Flashcard card={emojiCards[currentIndex]} />
      <div className="arrow-buttons">
        <button onClick={prevCard}>&#8592;</button>
        <button onClick={nextCard}>&#8594;</button>
      </div>
    </div>
  );
}

export default FlashcardList;
