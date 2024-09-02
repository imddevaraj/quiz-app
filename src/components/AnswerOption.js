// src/components/AnswerOption.js
import React from 'react';

const AnswerOption = ({ option, isSelected, toggleAnswer }) => {
  return (
    <div
      className={`answer-option ${isSelected ? 'selected' : ''}`}
      onClick={() => toggleAnswer(option)}
    >
      {option.text}
    </div>
  );
};

export default AnswerOption;
