// src/services/quizService.js
const API_BASE_URL = 'http://localhost:8080/api';

const fetchQuiz = async () => {
  const response = await fetch(`${API_BASE_URL}/quizzes/1`); // Assuming quiz ID is 1
  const data = await response.json();
  return data;
};

const submitQuiz = async (quizResults) => {
  const response = await fetch(`${API_BASE_URL}/quizAttempts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quizResults),
  });
  const data = await response.json();
  return data;
};

export default { fetchQuiz, submitQuiz };
