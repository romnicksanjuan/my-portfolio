import React, { useState, useSyncExternalStore } from 'react'
import '../css/Contact.css'
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone,setPhone] = useState('')
  const [subject, setSubject] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '' || phone === '' || subject === '') {
      alert('Please fill all fields')
      return;
    }

    const serviceId = 'service_o3jlica'
    const templateId = 'template_2a9i2tr'
    const publicKey = 'qF0SPfgPtEeerxnOs'
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'nick.dev',
      message: message,
      reply_to: email,
      subject: subject,
      phone_number: phone
    }

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setName('')
          setEmail('')
          setMessage('')
          setPhone('')
          setSubject('')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <div style={{ width: '100%' }}>
      <form onSubmit={sendEmail}>
        <h2 style={{
          textAlign: 'center', color: '#9BEC00',
          margin: '10px', fontSize: "2rem", marginBottom: '15px'
        }}>Contact Me</h2>

        <div className='contact-main'>
          <div className='contact-form'>
            <p style={{ color: '#9BEC00', fontSize: '27px', marginLeft: '10px' }}>Let's work together</p>
            <div className='item-container'>


              <div className='contact-item'>
                <div className='items'>
                  <input type="text" className='item' value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' />
                </div>

                <div className='items'>
                  <input type="email" className='item' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
                </div>

                <div className='items'>
                  <input type="number" className='item' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number' />
                </div>

                <div className='items'>
                  <input type="text" className='item' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' />
                </div>
              </div>
            </div>
            <div className='text-area'>
              <textarea className='item' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Input Message...'></textarea>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <button style={{
                alignItems: 'center', display: 'flex', justifyContent: 'center', height: '40px',
                width: '30%', backgroundColor: '#9BEC00', color: 'white', borderRadius: '5px', marginTop: '20px',border:'none'
              }} type='submit'>Send</button>
            </div>
          </div>

          <div className='contact'>
            <div>
              <div style={{display:'flex', flexDirection:'row',marginBottom:'5px'}}>
                <div style={{
                  backgroundColor: '#2c2929', height: '40px', width: '40px', display: 'flex',
                  justifyContent: 'center', alignItems: 'center', borderRadius: '5px',
                }}>
                  < FaEnvelope size={25} style={{ color: '#9BEC00' }} />
                </div>

                <div style={{marginLeft:'10px'}}>
                  <p style={{ color: '#B5C0D0',margin:'0px', padding:'0px' }}>Phone</p>
                  <p>+639624513047</p>
                </div>

              </div>

              <div style={{display:'flex', flexDirection:'row',marginBottom:'5px'}}>
                <div style={{
                  backgroundColor: '#2c2929', height: '40px', width: '40px', display: 'flex',
                  justifyContent: 'center', alignItems: 'center', borderRadius: '5px'
                }}>
                  < FaPhone size={25} style={{ color: '#9BEC00' }} />
                </div>

                <div style={{marginLeft:'10px'}}>
                  <p style={{ color: '#B5C0D0',margin:'0px', padding:'0px' }}>Email</p>
                  <p>romnicksanjuan22@gmail.com</p>
                </div>

              </div>

              <div style={{display:'flex', flexDirection:'row',marginBottom:'5px'}}>
                <div style={{
                  backgroundColor: '#2c2929', height: '40px', width: '40px', display: 'flex',
                  justifyContent: 'center', alignItems: 'center', borderRadius: '5px'
                }}>
                  <FaMapMarkerAlt size={25} style={{ color: '#9BEC00' }} />
                </div>

                <div style={{marginLeft:'10px'}}>
                  <p style={{ color: '#B5C0D0',margin:'0px', padding:'0px' }}>Address</p>
                  <p>San Roque, Iriga Ciity, Camarines Sur</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* <div className='items'>
              <input type="text" className='item' value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' />
            </div>

            <div className='items'>
              <input type="email" className='item' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
            </div>

            <div className='items'>
              <input type="number" className='item' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Phone Number' />
            </div>

            <div className='items'>
              <input type="text" className='item' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Subject' />
            </div> */}

        {/* <div className='text-area'>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Input Message...'></textarea>
        </div>
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
        <button style={{alignItems:'center',display:'flex',justifyContent:'center',height:'40px',
           width:'30%',backgroundColor:'#9BEC00',color:'white',borderRadius:'5px'}} type='submit'>Send</button>
        </div> */}
      </form>
    </div>
  )
}

export default Contact
