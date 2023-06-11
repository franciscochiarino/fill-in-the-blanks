import React, { useState } from 'react'
import Text from '../../atoms/Text'
import Input from '../../atoms/Input'
import SubmitButton from '../../atoms/SubmitButton'

const Sentence = ({ sentence }) => {
  const [answer, setAnswer] = useState('')

  const handleOnChange = (event) => {
    setAnswer(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer === sentence.answer) {
      alert('Correct!')
    } else {
      alert('Incorrect!')
    }
  }

  return (
    <>
      <div className="mb-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 is-flex is-align-items-center">
            <Text.Span>{ sentence.sentence[0] }</Text.Span>
              <Input onChange={handleOnChange} />
            <Text.Span>{ sentence.sentence[1] }</Text.Span>

            <div className="ml-4">
              <SubmitButton />
            </div>
          </div>

        </form>
      </div>
    </>
  )
}

export default Sentence
