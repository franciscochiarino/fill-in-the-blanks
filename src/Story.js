import React, { useState } from 'react';

const Story = ({ story }) => {
  const [inputs, setInputs] = useState({});

  useState(() => {
    const inputsObject = {};

    for (const key in story.answers) {
      inputsObject[key] = '';
    }

    setInputs(inputsObject);
  }, []);

  const handleAnswer = () => {
    const answersKeys = Object.keys(story.answers);

    let isCorrect = true;
    for (let key of answersKeys) {
      if (story.answers[key] !== inputs[key]) {
        isCorrect = false;
        break;
      }
    }

    alert(isCorrect ? 'Correct answer' : 'Incorrect answer / Fill in all the blanks');
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAnswer();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        { story.story.map((sentence, index) => {
          return (
            <>
              <span key={index}>{sentence}</span>
              {index !== story.story.length - 1 &&
                <input type="text" name={`blank${index}`} onChange={handleOnChange}/>
              }
            </>
          )
        })}
        <button type="submit" value="Submit">Submit</button>
      </form>
    </>
  )
}

export default Story;
