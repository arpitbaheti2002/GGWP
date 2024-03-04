import React, { useState } from 'react';
import { motion } from "framer-motion";
import './signup.css'

function Signup({onBtnClick}) {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [currentBlock, setCurrentBlock] = useState('');
  const [roomType, setRoomType] = useState('');
  const [roomNumber, setRoomNumber] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <motion.div
      initial={{ bottom: '-75vh' }}
      animate={{ bottom: '-5vh'  }} 
      transition={{ duration: 0.5, type: "Inertia" }}
      className='signup'
    >

      <h2 className='sub-heading'>Signup</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label>Name:</label></td>
              <td><input type='text' value={name} onChange={(e) => setName(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label>Registration Number:</label></td>
              <td><input type='text' value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label>Password:</label></td>
              <td><input type='password' value={password} onChange={(e) => setPassword(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label>Email:</label></td>
              <td><input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label>Current Block:</label></td>
              <td><input type='text' value={currentBlock} onChange={(e) => setCurrentBlock(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label>Room Type:</label></td>
              <td><input type='text' value={roomType} onChange={(e) => setRoomType(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label>Room Number:</label></td>
              <td><input type='text' value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} /></td>
            </tr>
          </tbody>
        </table>
        <div style={{padding: 0}} className='button-container'>
          <button className='homepage-button sign-up-btn' onClick={() => { onBtnClick('/') }}>Return</button>
          <button type='submit' className='homepage-button sign-up-btn'>Submit</button>
        </div>
      </form>
    </motion.div>
  );
}

export default Signup;
