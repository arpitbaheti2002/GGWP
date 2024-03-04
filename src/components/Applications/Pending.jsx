import React from 'react';
import { motion } from "framer-motion";


function Pending({onBtnClick}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5, type: "Inertia" }}
      className='applications'
    >
      <div className='pending-applications'>
        <div className='mutualexchange'>
          <p className='pending-head'>Mutual Exchnage</p>
          {/* No Pending Applications */}
          <table className='status-table'>
            <tr>
              <td style={{width: "10vw"}}>Sl No</td>
              <td style={{width: "30vw"}}>To Registration Number</td>
              <td style={{width: "10vw"}}>Status</td>
            </tr>
            <tr>
              <td >1</td>
              <td>21BAI10140</td>
              <td style={{color: 'maroon'}}>Pending</td>
            </tr>
          </table>
        </div>
        <div className='changeRequest'>
          <p className='pending-head'>Room Change Request</p>
          No Pending Applications
        </div>
      </div>
      <div className='button-container'>
        <button className="application-button" onClick={()=>{onBtnClick('Mutual')}}>
            Mutual Exchange
        </button>
        <button className="application-button" onClick={()=>{onBtnClick('ReqChange')}}>
            Request Room change
        </button>
      </div>
    </motion.div>
  )
}

export default Pending
