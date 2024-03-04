import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import { motion } from "framer-motion";
import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';
import './admin.css';


function Admin() {
  const [isLoading, setLoading] = useState(true);

  useEffect(()=> {
    Aos.init();

    setTimeout(()=> {
      setLoading(false);
    }, 1000);
  }, []);


  return (
    isLoading ? <Loader /> :
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5, type: "Inertia" }}
      className='homepage'
    >
      <Navbar />   

      
      <div className='admin-pending-requests'>
        <div className='requests'>
          <p className='admin-pending-head'>Requests</p>
          No Pending Applications
          {/* <table className='status-table'>
            <tr>
              <td style={{width: "10vw"}}>Sl No</td>
              <td style={{width: "30vw"}}>To Registration Number</td>
              <td style={{width: "10vw"}}>Status</td>
            </tr>
            <tr>
              <td >1</td>
              <td>21BAI10172</td>
              <td style={{color: 'maroon'}}>Pending</td>
            </tr>
          </table> */}
        </div>
      </div>
    </motion.div>
  )
}

export default Admin
