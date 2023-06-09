import React from 'react';
import exercises from './db';
import Exercise from './Exercise';

const App = () => {
  return (
    <div>
      <h1>Fill in the blanks</h1>

      <Exercise exercise={exercises[0]} />
    </div>
  )
}

export default App;
