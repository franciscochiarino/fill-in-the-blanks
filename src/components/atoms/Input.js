import React from 'react';

const Input = ({ onChange, name }) => {
  return (
    <input
      className="input is-primary is-small is-rounded mx-2 has-text-centered"
      type="text"
      onChange={onChange}
      name={name || 'answer'}
      style={{ width: '100px', verticalAlign: 'middle' }}
    />
  )
}

export default Input;
