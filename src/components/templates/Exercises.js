import React from 'react';
import { sentences, stories } from '../../db';
import Sentence from '../molecules/Sentence';
import Story from '../molecules/Story';

const Exercises = () => {
  return (
    <>
      <Sentence sentence={sentences[0]} />
      <Story story={stories[0]} />
    </>
  )
}

export default Exercises;
