import React from 'react';
import Text from '../../atoms/Text';
import SubmitButton from '../../atoms/SubmitButton';

const NewSentence = () => {
  const handleSubmit = (event) => {};

  return (
    <div className="mb-6">
      <Text.SubHeading>New Sentence</Text.SubHeading>
      <p className="mb-4">
        Use <i>_blank_</i> to indicate the blank space. Example: I <i>_blank_</i> to the store.
      </p>

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
