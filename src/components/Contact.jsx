import React from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function Contact() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit =(e)=>{
      e.preventDefault();
      const serviceId ='service_dn7ke8a'
      const templateId = 'template_ga7v3st'
      const publicKey ='OoKiCanTPfQOkiCm-'

      const templateParams ={
          from_name: name,
          from_email: email,
         to_name :'Wild Agriculture',
          message: message,
      
      };
      emailjs.send(serviceId,templateId,templateParams,publicKey).then((response)=>{
          console.log('SUCCESS!',response.status,response.text);
          setName =('');
          setEmail=('');
          setMessage=('');
      },(error)=>{
          console.log('FAILED...',error);
      });
  }
  return (
    <>
     <form onSubmit={handleSubmit} className='w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Contact Us</h2>
      <div className='mb-4'>
        <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
          Your Name
        </label>
        <input
          type="text"
          id='name'
          placeholder='Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
          Your Email
        </label>
        <input
          type="email"
          id='email'
          placeholder='Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
          Your Message
        </label>
        <textarea
          id='message'
          rows='4'
          placeholder='Your Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        ></textarea>
      </div>
      <button
        type='submit'
        className='w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
      >
        Send Email
      </button>
    </form>
    </>
  )

}

export default Contact