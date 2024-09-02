// src/services/LoginService.js

const API_BASE_URL = 'http://localhost:8080/users';

const authenticate = async (email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        throw new Error('Authentication failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during authentication:', error);
      throw error;
    }
  };
  
  export default {
    authenticate,
  };