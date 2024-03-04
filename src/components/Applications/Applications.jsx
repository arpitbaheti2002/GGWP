import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import { motion } from "framer-motion";
import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';
import './applications.css';

import Pending from './Pending';
import Mutual from '../Mutual/Mutual';
import ReqChange from '../ReqChange/ReqChange';

function Applications() {
  const [isLoading, setLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState(''); 

  useEffect(()=> {
    Aos.init();

    setTimeout(()=> {
      setLoading(false);
    }, 1000);
  }, []);

  const renderActiveComponent = () => {
    switch(activeComponent) {
      case 'ReqChange':
        return <ReqChange onBtnClick={setActiveComponent}/>;
      case 'Mutual':
        return <Mutual onBtnClick={setActiveComponent}/>;
      default:
        return <Pending onBtnClick={setActiveComponent}/>;
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

      
      {renderActiveComponent()}
    </motion.div>
  )
}

export default Applications
