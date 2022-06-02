import React from 'react'
import { useNavigate } from 'react-router-dom';
function Details() {
  const navigate = useNavigate();
  function home(){
    navigate('/')
  }
  return (
    <div className='container text-center'>
      <div className='row mt-5'>
        <p className='display-3'>Thank you For Shopping With Us</p>
        <p className='lead'>Your Transection details have been sent to the registerd Email</p>
      </div>
      <hr/>
      <div className='row mt-4'>
        <p><em>Having Trouble </em><a href='' style={{ textDecoration: 'none' }}>Contact Us</a></p> 
      </div>
      <div className='row mt-2'>
      <a  className='display-6' onClick={()=>home()} style={{ textDecoration: 'none' }}>Continue Shopping</a>
      </div>
    </div>
  )
}

export default Details