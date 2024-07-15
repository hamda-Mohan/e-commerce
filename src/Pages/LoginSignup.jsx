import React, { useState, useContext } from 'react';
import './CSS/LoginSignup.css'; // Styles for LoginSignup component
import { AuthContext } from '../Context/AuthContext'; // Importing AuthContext for authentication
import { useNavigate } from 'react-router-dom'; // Hook for navigation

const LoginSignup = () => {
  const { login } = useContext(AuthContext); // Accessing login function from AuthContext
  const [isLogin, setIsLogin] = useState(false); // State for managing login/signup mode
  const [name, setName] = useState(''); // State for user's name
  const [email, setEmail] = useState(''); // State for user's email
  const [password, setPassword] = useState(''); // State for user's password
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle user signup
  const signup = () => {
    const user = { name, email, password }; // Creating user object
    localStorage.setItem('user', JSON.stringify(user)); // Storing user data in localStorage
    alert('User registered successfully!'); // Alerting user registration success
    setIsLogin(true); // Switching to login mode after signup
  };

  // Function to handle user login
  const logIn = () => {
    const storedUser = JSON.parse(localStorage.getItem('user')); // Fetching stored user data
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      login(storedUser.name, email); // Calling login function with user details
      alert('Login successful!'); // Alerting login success
      navigate('/'); // Navigating to homepage after login
    } else {
      alert('Invalid email or password'); // Alerting invalid credentials
    }
  };

  return (
    <div className='loginsignup'> {/* Login/signup container */}
      <div className="loginsignup-container"> {/* Container for form */}
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1> {/* Dynamic heading based on login/signup mode */}
        <div className="loginsignup-fields"> {/* Form fields */}
          {!isLogin && <input type="text" placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} />} {/* Name input field (visible only in signup mode) */}
          <input type="email" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} /> {/* Email input field */}
          <input type="password" placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)} /> {/* Password input field */}
        </div>
        <button onClick={isLogin ? logIn : signup}>{isLogin ? 'Login' : 'Continue'}</button> {/* Button text changes based on login/signup mode */}
        <p className='loginsignup-login'>
          {isLogin ? "Don't have an account?" : 'Already have an account?'} {/* Dynamic text based on login/signup mode */}
          <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? ' Sign up here' : ' Login here'}</span> {/* Toggle between login/signup mode */}
        </p>
        {!isLogin && (
          <div className="loginsignup-agree"> {/* Agreement section (visible only in signup mode) */}
            <input type="checkbox" name='' id='' /> {/* Checkbox */}
            <p>By continuing, I agree to the terms of use & privacy policy</p> {/* Agreement text */}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
