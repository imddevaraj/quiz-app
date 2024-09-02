// src/components/QuizCard.js
import React, { useEffect, useState } from 'react';
import AnswerOption from './AnswerOption';

const QuizCard = ({ question, handleAnswerSubmission }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const toggleAnswer = (option) => {
    setSelectedAnswers((prevSelected) => {
      let updatedSelected;
      if (question.hasMultipleAnswer) {
        if (prevSelected.includes(option)) {
          return prevSelected.filter((answer) => answer !== option);
        } else {
          return [...prevSelected, option];
        }
      } else {
       updatedSelected = [option];
      }
      handleAnswerSubmission(question.id, updatedSelected);
      return updatedSelected;
    });
  };
  useEffect(() => {
   handleAnswerSubmission(question.id, selectedAnswers);
  }, [question.id]);

  return (
    <div className="quiz-card">
      <h3>{question.text}</h3>
      {question.answers.map((answer) => (
        <AnswerOption
          key={answer.id}
          option={answer}
          isSelected={selectedAnswers.some((selected)=> selected.id==answer.id)}
          toggleAnswer={()=>toggleAnswer(answer)}
          hasMultipleAnswer={question.hasMultipleAnswer}
        />
      ))}
    </div>
  );
};

export default QuizCard;
