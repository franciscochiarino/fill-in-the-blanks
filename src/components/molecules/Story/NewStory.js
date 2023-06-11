import React from 'react';
import Text from '../../atoms/Text';
import SubmitButton from '../../atoms/SubmitButton';

const NewStory = () => {
  const handleSubmit = (event) => {};

  return (
    <div className="mb-6">
      <Text.SubHeading>New Story</Text.SubHeading>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Headline</label>
          <div className="control">
            <input className="input" type="text" placeholder="Headline" />
          </div>
        </div>

        <div className="field">
          <label className="label">Story</label>
          <div className="control">
            <textarea className="textarea" placeholder="Story"></textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">Answers</label>
          <div className="control">
            <input className="input" type="text" placeholder="Answers" />
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  )
}

export default NewStory;
