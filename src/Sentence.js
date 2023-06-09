import React, { useState } from 'react'

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
      <span>{ sentence.sentence[0] }</span>
      <input type="text" onChange={handleOnChange} />
      <span>{ sentence.sentence[1] }</span>
      <button onClick={handleOnClick}>Submit</button>
    </>
  )
}

export default Sentence
