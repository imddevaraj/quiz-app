import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import QuizInstructions from './pages/QuizInstructions';
import Leaderboard from './pages/Leaderboard';
import Layout from './components/Layout';
import QuizPage from './pages/QuizPage';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz-instructions" element={<Layout><QuizInstructions /></Layout>} />
          <Route path="/leaderboard" element={<Layout><Leaderboard /></Layout>} />
          <Route path="/quiz" element={<Layout><QuizPage /></Layout>} />
        </Routes>
      </div>
    </Router>
      </AuthProvider>
  );
}

export default App;
