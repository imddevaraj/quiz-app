// src/services/quizService.js
const API_BASE_URL = 'http://localhost:8080/quiz';

const fetchQuiz = async () => {
  try{
  const response = await fetch(`${API_BASE_URL}`); // Assuming quiz ID is 1
  if(!response.ok){
    throw new Error("HTTP Error! Status: " + response.status);
  }
  const data = await response.json();
  return data;
  } catch(error){
    console.error("Unable to Fetch Error:" ,error);
    throw error
  }
};

const submitQuiz = async (quizResults) => {
  try{
    const response = await fetch(`${API_BASE_URL}/response`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quizResults),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}catch(error){
  console.error("Unable to Submit Error:" ,error);
  throw error
}
};

export default { fetchQuiz, submitQuiz };
