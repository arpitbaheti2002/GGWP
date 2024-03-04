import React from 'react';
import { motion } from "framer-motion";

function DashboardMenu({onBtnClick}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.5
      }} 
      className='dashboard-menu'
    >
      <motion.span 
        className='heading'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5
        }}
      >
        Welcome to Hostel Buddy
      </motion.span>
      <div className='button-container'>
        <motion.button 
          onClick={()=>onBtnClick('Signup')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1
          }}
          className="homepage-button button-signup">
            Signup
        </motion.button>
        <motion.button 
          onClick={()=>onBtnClick('Signin')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1
          }}
          className="homepage-button button-signup">
            Login
        </motion.button>
      </div>

    </motion.div>
  )
}

export default DashboardMenu;
