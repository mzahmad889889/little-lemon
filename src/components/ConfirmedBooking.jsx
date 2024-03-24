import React from 'react'
import { Link } from 'react-router-dom';
function ConfirmedBooking() {
  return (
    <div className='ConfirmHead'>
      <div className='Confirmation'>
        <h1>Form submitted successfully</h1>
      </div>
      <div>
        <Link  to='/'><button className='backtohome'>Back To Home</button></Link>
      </div>
    </div>
   
  )
}

export default ConfirmedBooking