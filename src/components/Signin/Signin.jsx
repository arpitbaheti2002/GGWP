import React, { useState } from 'react';
import { motion } from "framer-motion";
import './signin.css'

function Signin({ onBtnClick }) {
  // Define state variables for form fields
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5, type: "Inertia" }}
      className='signin'
    >
      
        <div className="back-button" onClick={() => { onBtnClick('/') }}>
          <p className='back'>Back</p>
        </div>
        <h2 className='sub-heading'>SignIn</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td><label>Registration Number:</label></td>
                <td><input type='text' value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} /></td>
              </tr>
              <tr>
                <td><label>Password:</label></td>
                <td><input type='password' value={password} onChange={(e) => setPassword(e.target.value)} /></td>
              </tr>
            </tbody>
          </table>
          <button type='submit' className='homepage-button sign-up-btn'>Submit</button>
        </form>
    </motion.div>
  );
}

export default Signin;
