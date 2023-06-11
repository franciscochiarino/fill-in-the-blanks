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

    const getStories = async () => {
      const data = await getDocs(collection(db, 'stories'));
      setStories(data.docs.map(doc => ({...doc.data()})))
    }

    getSentences();
    getStories();
  }, [])

  return (
    <>
      <section className="mb-6">
        <Text.SubHeading>Sentences</Text.SubHeading>
        {sentences && (
          sentences.map(sentence => (
            <Sentence key={sentence.id} sentence={sentence} />
          ))
        )}
      </section>

      <section className="mb-6">
        <Text.SubHeading>Stories</Text.SubHeading>
        {stories && (
          stories.map(story => (
            <Story key={story.id} story={story} />
          ))
        )}
      </section>
    </>
  )
}

export default Exercises;
