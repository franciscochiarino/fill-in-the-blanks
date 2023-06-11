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

    if (answer === sentence.word) {
      alert('Correct!')
    } else {
      alert('Incorrect!')
    }
  }

  return (
    <>
      { sentence && (
        <section className="mb-6">
          <Text.SubHeading>Sentence</Text.SubHeading>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Text.Span>{ sentence.sentence[0] }</Text.Span>
              <Input onChange={handleOnChange} />
              <Text.Span>{ sentence.sentence[1] }</Text.Span>
            </div>

            <SubmitButton />
          </form>
        </section>
      )}
    </>
  )
}

export default Sentence
