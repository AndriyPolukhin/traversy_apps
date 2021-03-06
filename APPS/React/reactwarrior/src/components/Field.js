import React, { Component } from 'react';


const Field = (props) => {
  const {
    id,
    labelText,
    type,
    placeholder,
    name,
    value,
    onChange,
    error
  } = props;
  return (
    <div className="form-group flex-wrap">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error ? (
        <div className="  text-danger w-100">
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default Field;