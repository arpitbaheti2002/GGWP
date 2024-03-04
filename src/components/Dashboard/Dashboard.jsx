import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';

import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';

import './dashboard.css';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import Signup from '../Signup/Signup';
import DashboardMenu from './DashboardMenu';
import Signin from '../Signin/Signin'; 

function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState('DashboardMenu'); // State to manage the active component

  useEffect(()=> {
    Aos.init();

    setTimeout(()=> {
      setLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link);
  };

  const renderActiveComponent = () => {
    switch(activeComponent) {
      case 'Signup':
        return <Signup />;
      case 'Signin':
        return <Signin />;
      default:
        return <DashboardMenu onBtnClick={setActiveComponent}/>;
    }
  };

  return (
    isLoading ? <Loader /> :
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5, type: "Inertia" }}
      className='homepage'
    >
      <Navbar />   

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, type: "Inertia" }}
        className='homepage-menu'
      >
        {renderActiveComponent()}
       
      </motion.div>

    </motion.div>
  );
}

export default Dashboard;
