// src/pages/QuizPage.js
import React, { useState, useEffect } from 'react';
import QuizCard from '../components/QuizCard';
import quizService from '../services/quizService';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  
  useEffect(() => {
    quizService.fetchQuiz().then((data) => setQuizData(data.questions));
  }, []);

  const handleAnswerSubmission = (answers) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, { questionId: quizData[currentQuestion].id, answers }]);
    
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions answered, submit answers and navigate to the results page
      quizService.submitQuiz({ answers: userAnswers }).then((result) => {
        // Navigate to results page with result data
      });
    }
  };

  return (
    <div className="quiz-page">
      {quizData.length > 0 && (
        <QuizCard
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          handleAnswerSubmission={handleAnswerSubmission}
        />
      )}
    </div>
  );
};

export default QuizPage;
