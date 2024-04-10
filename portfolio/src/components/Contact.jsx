import React from 'react'
import '../css/Contact.css'

const Contact = () => {
  return (
    <div>
      <h2 style={{textAlign:'center',color:'white', margin:'10px', fontSize:"2rem"}}>Contact Me</h2>
    <div className='contact-main'>
      <div className='item-container'>
        <div className='items'>
          <input type="text" className='item' placeholder='Full Name'  />
        </div>

        <div className='items'>
          <input type="text" className='item' placeholder='Mobile Number'  />
        </div>

        <div className='items'>
          <input type="text" className='item' placeholder='Email Address'  />
        </div>

        <div className='items'>
          <input type="text" className='item' placeholder='Email Subject'  />
        </div>
      </div>
    </div>
    
      <div className='text-area'>
        <textarea name="" id="" placeholder='Input Message...'></textarea>
      </div>
    </div>
  )
}

export default Contact
