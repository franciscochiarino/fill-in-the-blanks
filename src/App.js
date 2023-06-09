import React from 'react';
import { sentences, stories } from './db';
import Text from './components/atoms/Text';
import Sentence from './components/molecules/Sentence';
import Story from './components/molecules/Story';

const App = () => {
  return (
    <div className="has-background-white mb-6">
      <Text.Heading text="Fill in the blanks" />
      <hr/>
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <Sentence sentence={sentences[0]} />
          <Story story={stories[0]} />
        </div>
      </div>
    </div>
  )
}

export default App;
