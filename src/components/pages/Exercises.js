import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'

import { db } from '../../firebaseConfig'
import Sentence from '../molecules/Sentence/Sentence';
import Story from '../molecules/Story/Story';
import Text from '../atoms/Text';

const Exercises = () => {
  const [sentences, setSentences] = useState([]);
  const [stories, setStories] = useState([]);
  const sentencesRef = collection(db, 'sentences');

  useEffect(() => {
    const getSentences = async () => {
      const data = await getDocs(sentencesRef);
      setSentences(data.docs.map(doc => ({...doc.data()})))
    }

    getSentences();
  }, [])

  return (
    <>
      <Text.SubHeading>Sentences</Text.SubHeading>
      {sentences && (
        sentences.map(sentence => (
          <Sentence sentence={sentence} />
        ))
      )}
      {/* <Sentence sentence={sentences[0]} /> */}
      {/* <Story story={stories[0]} /> */}
    </>
  )
}

export default Exercises;
