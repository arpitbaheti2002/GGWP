import React, { useState } from 'react';
import './signup.css'

function Signup() {
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
    <div className='signup'>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Registration Number:
          <input
            type='text'
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Current Block:
          <input
            type='text'
            value={currentBlock}
            onChange={(e) => setCurrentBlock(e.target.value)}
          />
        </label>
        <label>
          Room Type:
          <input
            type='text'
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          />
        </label>
        <label>
          Room Number:
          <input
            type='text'
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
