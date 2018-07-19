import React from 'react';

const Input = (title, state, onChange, name) => {
  return (
    <div className="input">
      <input placeholder= {title} name={title} value={state} onChange={onChange} />
      <label>{title}</label>
    </div>
  )
}

export default Input;
