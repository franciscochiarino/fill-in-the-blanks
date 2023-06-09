import React, { useState } from 'react'

const Exercise = ({ exercise }) => {
  const [answer, setAnswer] = useState('')

  const handleOnChange = (event) => {
    setAnswer(event.target.value)
  }

  const handleOnClick = () => {
    if (answer === exercise.word) {
      alert('Correct!')
    } else {
      alert('Incorrect!')
    }
  }

  return (
    <>
      <h1>Exercise</h1>
      <span>{ exercise.sentence[0] }</span>
      <input type="text" onChange={handleOnChange} />
      <span>{ exercise.sentence[1] }</span>
      <button onClick={handleOnClick}>Submit</button>
    </>
  )
}

export default Exercise
