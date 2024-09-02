import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/LoginPage.css';
import LoginService from '../services/LoginService';

function LoginPage() {
  const [email, setEmailInput] = useState('devaraj.durairaj@hidglobal.com');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };


  const handleLogin =  async (e) => {
    console.log('Logging in with',email);
    e.preventDefault();
    setErrorMessage('');
    
    try{
      const user = await LoginService.authenticate(email);
      setUser({ 
        email: user.email ,
        name: user.name,
        id: user.id,
      });

      navigate('/quiz-instructions');
      console.log('Logging in with',user);
    }catch(error){
      console.error('Error during authentication:', error);
      setErrorMessage('Authentication failed');
    }
  };

  return (
    <div className="login-page">
  
      <form onSubmit={handleLogin} className='login-form'>
      {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
        <div className="form-group">
        <label htmlFor='email'>Email:</label>
          <input
            type="email"
            id="email "
            value={email}
            placeholder="Enter your HID email id"
            onChange={handleEmailChange}
            required
          />
        </div>
      
        <button type="submit" className="btn" >Sign up/Login</button>
      </form>
     
    </div>
  );
}

export default LoginPage;
