import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  return (
    <QuizContext.Provider value={{ selectedAnswers, setSelectedAnswers }}>
      {children}
    </QuizContext.Provider>
  );
};