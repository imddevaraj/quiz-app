// src/components/QuizCard.js
import React, { useState } from 'react';
import AnswerOption from './AnswerOption';

const QuizCard = ({ question, options, handleAnswerSubmission }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const toggleAnswer = (option) => {
    setSelectedAnswers((prevSelected) => {
      if (prevSelected.includes(option)) {
        return prevSelected.filter((answer) => answer !== option);
      } else {
        return [...prevSelected, option];
      }
    });
  };

  const submitAnswers = () => {
    handleAnswerSubmission(selectedAnswers);
    setSelectedAnswers([]); // Reset for the next question
  };

  return (
    <div className="quiz-card">
      <h3>{question}</h3>
      {options.map((option, index) => (
        <AnswerOption
          key={index}
          option={option}
          isSelected={selectedAnswers.includes(option)}
          toggleAnswer={toggleAnswer}
        />
      ))}
      <button onClick={submitAnswers} className="btn">Submit</button>
    </div>
  );
};

export default QuizCard;
