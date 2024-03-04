import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {

  const navigate = useNavigate();
  const handleClick = (link) => {
      navigate(link);
  };

  return (
    <div className='navbar'>
      {/* <img className='logo' src='' /> */}

    </div>
  )
}

export default Navbar
