import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../styles/QuizInstructions.css';

function QuizInstructions() {
  const location = useLocation();
  const navigate = useNavigate();
 
  const startQuiz = () => {
    navigate('/quiz'); // Navigate to the quiz page when the button is clicked
  };

  return (
    <div className="quiz-instructions">
   
      <div className="instructions-content">
        <h2>Quiz Instructions</h2>
        <p>Please read the following instructions carefully before starting the quiz:</p>
        <ul>
          <li>The quiz consists of multiple-choice questions.</li>
          <li>You will have a limited amount of time to answer each question.</li>
          <li>Once you submit your answer, you cannot go back to previous questions.</li>
          <li>Ensure you have a stable internet connection throughout the quiz.</li>
          <li>Your score will be displayed at the end of the quiz.</li>
          <li>If you leave the quiz mid-way, your progress will be lost.</li>
        </ul>
        <button onClick={startQuiz} className="btn start-btn">Start Quiz</button>
      </div>
    </div>
  );
}

export default QuizInstructions;
