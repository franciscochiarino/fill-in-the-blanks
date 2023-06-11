import React, { useState } from 'react';
import { db } from '../../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

import Text from '../../atoms/Text';
import SubmitButton from '../../atoms/SubmitButton';

const NewStory = () => {
  const [headline, setHeadline] = useState('');
  const [story, setStory] = useState('');
  const [answers, setAnswers] = useState('');
  const storiesRef = collection(db, 'stories');

  const createStory = async () => {
    const answersArray = answers.split(', ');
    const answersObject = {};

    for (const i in answersArray) {
      answersObject[`blank${i}`] = answersArray[i];
    }

    const storyObject = {
      headline,
      text: story.split('_blank_'),
      answers: answersObject
    };

    try {
      await addDoc(storiesRef, storyObject);
      alert('Story created!');
    } catch (error) {
      alert(`Error adding document: ${error.message}`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createStory();
  };

  return (
    <div className="mb-6">
      <Text.SubHeading>New Story</Text.SubHeading>
      <p className="mb-4">
        Use <i>_blank_</i> to indicate blank spaces. Stories can't have blank spaces at the beginning or end.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Headline</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Headline"
              onChange={(e) => setHeadline(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Story</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Story"
              onChange={(e) => setStory(e.target.value)}
              required
            ></textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">Answers</label>
          <p className="mb-4">
            Separate answers with commas.
          </p>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Answers"
              onChange={(e) => setAnswers(e.target.value)}
              required
            />
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  )
}

export default NewStory;
