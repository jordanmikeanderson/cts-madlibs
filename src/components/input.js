import React from 'react';

const Input = (description) => {
  return (
    <div className="input">
      <input type='text' placeholder= {description} />
      <label>{description}</label>
    </div>
  )
}

export default Input;
