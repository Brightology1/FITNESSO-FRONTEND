import React from 'react'
import './Thankyou.css'
import Footer from "../Main/Footer/Footer";
import Navbar from "../Main/Navbar/Navbar";
import { Link } from 'react-router-dom'

function ThankYouPage() {
  return (
      
    <div>
    
      <div className='thanks'>
        <div>
        <h1 className='thanks-heading'>Thank You For Your Patronage</h1> 
        <button className='thank-btn'><Link to={"/"}>Go back Home</Link></button>
        </div>
    
      </div>
       
        <Footer></Footer>
    </div>
    
  )
}

export default ThankYouPage