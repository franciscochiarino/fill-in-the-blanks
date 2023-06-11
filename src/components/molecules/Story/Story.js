import React, { useState } from 'react';
import Text from '../../atoms/Text';
import Input from '../../atoms/Input';
import SubmitButton from '../../atoms/SubmitButton';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAnswer();
  };

  return (
    <>
      <Text.SubHeading>Story</Text.SubHeading>

      <h3 className="is-size-4">{story.headline}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          { story.story.map((sentence, index) => {
            return (
              <>
                <Text.Span key={index}>{sentence}</Text.Span>
                {index !== story.story.length - 1 &&
                  <Input onChange={handleOnChange} name={`blank${index}`} />
                }
              </>
            )
          })}
        </div>

        <SubmitButton />
      </form>
    </>
  )
}

export default Story;
