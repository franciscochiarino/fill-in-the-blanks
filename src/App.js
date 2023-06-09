import React from 'react';
import { sentences, stories } from './db';
import Sentence from './Sentence';
import Story from './Story';

const App = () => {
  return (
    <div className="has-background-white mb-6">
      <div className="has-background-primary pt-4 pb-4 mb-4">
        <h1 className="is-size-1 has-text-centered has-text-black has-text-weight-bold">Fill in the blanks</h1>
      </div>
      <div className="container">
        <Sentence sentence={sentences[0]} />
        <Story story={stories[0]} />
      </div>
    </div>
  )
}

export default App;
