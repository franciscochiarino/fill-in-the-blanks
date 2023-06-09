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
      <section className="mb-6">
        <h2 className="is-size-3 mb-4">Sentence</h2>

        <div className="mb-4">
          <span>{ sentence.sentence[0] }</span>
          <input
            className="input is-primary is-small is-rounded ml-2 mr-2 has-text-centered"
            type="text"
            onChange={handleOnChange}
            style={{ width: '100px' }}
          />
          <span>{ sentence.sentence[1] }</span>
        </div>

        <button className="button is-primary" onClick={handleOnClick}>Submit</button>
      </section>
    </>
  )
}

export default Sentence
