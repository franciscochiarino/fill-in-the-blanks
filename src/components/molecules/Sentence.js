import React, { useState } from 'react'
import Text from '../atoms/Text'
import Input from '../atoms/Input'

const Sentence = ({ sentence }) => {
  const [answer, setAnswer] = useState('')

  const handleOnChange = (event) => {
    setAnswer(event.target.value)
  }

  const handleOnClick = () => {
    if (answer === sentence.word) {
      alert('Correct!')
    } else {
      alert('Incorrect!')
    }
  }

  return (
    <>
      <section className="mb-6">
        <Text.SubHeading text="Sentence" />

        <div className="mb-4">
          <Text.Span>{ sentence.sentence[0] }</Text.Span>
          <Input onChange={handleOnChange} />
          <Text.Span>{ sentence.sentence[1] }</Text.Span>
        </div>

        <button className="button is-primary" onClick={handleOnClick}>Submit</button>
      </section>
    </>
  )
}

export default Sentence
