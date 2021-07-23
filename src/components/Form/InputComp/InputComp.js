import React, { useState } from "react";

const InputComp = ({ type, handleChange, value }) => {
  const [inputValue, setInputValue] = useState(value);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <input
      type={type}
      value={inputValue}
      onChange={(e) => handleInputChange(e)}
    />
  );
};

export default InputComp;
