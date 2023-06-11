import React, { useState } from 'react';
import Text from '../../atoms/Text';
import SubmitButton from '../../atoms/SubmitButton';

const NewStory = () => {
  const [headline, setHeadline] = useState('');
  const [story, setStory] = useState('');
  const [answers, setAnswers] = useState('');

  const handleSubmit = (event) => {};

  return (
    <div className="mb-6">
      <Text.SubHeading>New Story</Text.SubHeading>
      <p className="mb-4">
        Use <i>_blank_</i> to indicate blank spaces.
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
            ></textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">Answers</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Answers"
              onChange={(e) => setAnswers(e.target.value)}
            />
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  )
}

export default NewStory;
