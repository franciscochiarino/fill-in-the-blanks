import React from 'react';
import { sentences, stories } from './db';
import Sentence from './Sentence';
import Story from './Story';

const App = () => {
  return (
    <div>
      <h1>Fill in the blanks</h1>

      <h2>Sentence</h2>
      <Sentence sentence={sentences[0]} />

      <h2>Story</h2>
      <Story story={stories[0]} />
    </div>
  )
}

export default App;
