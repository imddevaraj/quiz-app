// src/pages/QuizPage.js
import React, { useState, useEffect, useContext } from 'react';
import QuizCard from '../components/QuizCard';
import quizService from '../services/QuizService';
import { AuthContext } from '../context/AuthContext';
import { QuizContext } from '../context/QuizContext';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [submittedAnswers, setSubmittedAnswers] = useState({});
  const {email} = useContext(AuthContext);
  const [timer, setTimer] = useState(0);
  const {selectedAnswers, setSelectedAnswers} = useContext(QuizContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = 'You have unsaved changes, do you really want to leave?';
      handleSubmitQuiz();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const data = await quizService.fetchQuiz();
        setQuizData(data);
      } catch (error) {
        console.error('Failed to fetch quiz data:', error);
      }
    };

    fetchQuizData();
  }, []);

  const handleAnswerSubmission = (questionId, answers) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answers,
    }));
  };

  const handleNext = () => {
    console.log("Next - ", selectedAnswers);
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  }

  const handleBack = () => {
    console.log("Back - ",selectedAnswers);
    setCurrentQuestionIndex(prevIndex => prevIndex - 1);
  
  }
  const handleSubmitQuiz = async () => {

    const transformedAnswers = Object.entries(submittedAnswers).map(([questionId, answers]) => {
      return {
        question:{
          id: parseInt(questionId,10)
        },
        selectedAnswers: answers.map((answer) => ({
         
            id: answer.id,
          }))

        };
    });
    
    const payload = {
       user:{
        id: email,
       },
       quiz:{
        id: quizData.id,
       },
        responses :transformedAnswers
    };
    try {
      console.log('Submitting quiz:', payload);
      const result = await quizService.submitQuiz(payload);
      console.log('Quiz submitted successfully:', result);
    } catch (error) {
      console.error('Failed to submit quiz:', error);
    }
  };

  if (!quizData || !quizData.questions) {
    return <div>Loading...</div>;
  }
  
  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div>
      <h1>{quizData.title}</h1>
  
        <QuizCard
          key={currentQuestion.id}
          question={currentQuestion}
          handleAnswerSubmission={handleAnswerSubmission}
          selectedAnswers={selectedAnswers[currentQuestion.id]}
        />
        <div>
          {currentQuestionIndex > 0 && (
            <button onClick={handleBack}>Back</button>
          )}
          {currentQuestionIndex < quizData.questions.length - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
          {currentQuestionIndex === quizData.questions.length - 1 && (
            <button onClick={handleSubmitQuiz}>Submit Quiz</button>
          )}
        </div>
        <div>
        <p>Time elapsed: {Math.floor(timer / 60)}:{timer % 60}</p>
      </div>
      </div>
   
  );
};

export default QuizPage;
