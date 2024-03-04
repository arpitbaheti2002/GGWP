import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';

import Loader from '../Loader/Loader';

import './dashboard.css';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";


function Dashboard() {
  const [isLoading, setLoading] = useState(true)

  useEffect(()=> {
    Aos.init();

    setTimeout(()=> {
      setLoading(false)
    }, 1000)
  }, [])

  const navigate = useNavigate();
  const handleClick = (link) => {
      navigate(link);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i + 1.5 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };


  return (
    isLoading ? <Loader /> :
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5, type: "Inertia" }}
      className='homepage'
    >   
  
      <motion.span className='blue-text'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5
          }}>
          Testing animations
      </motion.span>
  
    </motion.div>

  )
  
}


export default Dashboard
