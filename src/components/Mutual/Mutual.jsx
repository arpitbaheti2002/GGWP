import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import './mutual.css'

function Mutual({ onBtnClick }) {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [reason, setReason] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onBtnClick('/')
  };

  return (
    <motion.div
      initial={{ bottom: '-75vh' }}
      animate={{ bottom: '-5vh'  }} 
      transition={{ duration: 0.5, type: "Inertia" }}
      className='signup'
    >
      <h2 className='sub-heading'>Mutual Exchange</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label>From Registration Number:</label></td>
              <td style={{textAlign:'left'}}>21BAI10018</td>
            </tr>
            <tr>
              <td><label>Registration Number:</label></td>
              <td><input type='text' value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label>Reason:</label></td>
              <td>
                <textarea 
                  className='reason'
                  rows="3" 
                  value={reason} 
                  onChange={(e) => setReason(e.target.value)} 
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className='button-container'>
          <button className='homepage-button sign-up-btn' onClick={() => { onBtnClick('/') }}>Return</button>
          <button type='submit' className='homepage-button sign-up-btn'>Submit</button>
        </div>
      </form>
    </motion.div>
  );
}

export default Mutual;
