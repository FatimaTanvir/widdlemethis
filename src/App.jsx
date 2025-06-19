import { useState } from 'react'
import './App.css'
import Flashcard from './Components/Flashcard'
import FlashcardList from './Components/FlashCardList'

function App() {
  return (
    <div>
      <h1 className="mainHeading">
        Can You Crack the Emoji Code?
      </h1>
      <h2 className="h2">
        Not all messages are written in words.
      </h2>
      <p>
        Tap to flip the card and uncover the hidden message.
      </p>
      <FlashcardList />
    </div>
  )
}

export default App;
