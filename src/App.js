import React from 'react';
import exercises from './db';
import Sentence from './Sentence';

const App = () => {
  return (
    <div>
      <h1>Fill in the blanks</h1>

      <Sentence exercise={exercises[0]} />
    </div>
  )
}

export default App;
