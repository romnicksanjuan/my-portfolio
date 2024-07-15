import React, { useState, useSyncExternalStore } from 'react'
import '../css/Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_o3jlica'
    const templateId = 'template_2a9i2tr'
    const publicKey = 'qF0SPfgPtEeerxnOs'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'nick.dev',
      message: message,
      reply_to: email
    }
    
    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        (response) => {
          console.log('SUCCESS!',response.status, response.text);
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <div>
      <form  onSubmit={sendEmail}>
        <h2 style={{
          textAlign: 'center', color: 'white',
          margin: '10px', fontSize: "2rem", marginBottom: '15px'
        }}>Contact Me</h2>
        <div className='contact-main'>

          <div className='item-container'>
            <div className='items'>
              <input type="text" className='item' value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' />
            </div>

            <div className='items'>
              <input type="email" className='item' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
            </div>

          </div>
        </div>

        <div className='text-area'>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Input Message...'></textarea>
        </div>
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
        <button style={{alignItems:'center',display:'flex',justifyContent:'center',height:'40px',
           width:'30%',backgroundColor:'orange',color:'white',borderRadius:'5px'}} type='submit'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
