import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/LoginPage.css';

function LoginPage() {
  const [email, setEmailInput] = useState('devaraj.durairaj@hidglobal.com');
  const [errorMessage, setErrorMessage] = useState('');
  const { setEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if(email){
        setEmail(email);
        navigate('/quiz-instructions');
    }else{
        setErrorMessage("Enter HID email address");
    }
    // Perform login logic here (e.g., call an API, authenticate user)
    // If login is successful, redirect to the home page or dashboard
    console.log('Logging in with', { email });
   // navigate('/'); // Redirect to the home page after login
  };

  return (
    <div className="login-page">
  
      <form onSubmit={handleLogin} className='login-form'>
      {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
        <div className="form-group">
        <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your HID email id"
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
        </div>
      
        <button type="submit" className="btn" >Sign up/Login</button>
      </form>
     
    </div>
  );
}

export default LoginPage;
