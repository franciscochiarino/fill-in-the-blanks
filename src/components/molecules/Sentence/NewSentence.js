import React from 'react';
import Text from '../../atoms/Text';
import SubmitButton from '../../atoms/SubmitButton';

const NewSentence = () => {
  const handleSubmit = (event) => {};

  return (
    <div className="mb-6">
      <Text.SubHeading>New Sentence</Text.SubHeading>

      <form onSubmit={handleSubmit}>
        <div className="columns">
          <div className="column is-8">
            <div className="field">
              <label className="label">Sentence</label>
              <div className="control">
                <input className="input" type="text" placeholder="Sentence" />
              </div>
            </div>
          </div>

          <div className="column is-4">
            <div className="field">
              <label className="label">Answer</label>
              <div className="control">
                <input className="input" type="text" placeholder="Answer" />
              </div>
            </div>
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  )
}

export default NewSentence;
