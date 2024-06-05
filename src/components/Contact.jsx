import React from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate();
  const notifySuccess = () => toast("Your Message Sent Successfully!");
  const notifyError = () => toast("Failed to send your message!");

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name && !email && !message){
      toast.error("Enter your details to send the message")
      return;
    }
    if (!name) {
      // If any field is empty, show a toast notification
      toast.error("Error ,Please enter your name")
      return;
    }
    if (!email) {
      toast.error("Email is required");
      return;
    } else if (!validateEmail(email)) {
      toast.error("Invalid email address");
      return;
    }
    if(!message){
      toast.error("Error ,Please enter your message")
      return;
    }
  
    
    const serviceId = 'service_83x5gjv'
    const templateId = 'template_i87q4uf'
    const publicKey = '8fOclG6F6vhoUWBt0'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Wild Agriculture',
      message: message,

    };
    emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success("Your Message sent successfully ")
      setName('');
      setEmail('');
      setMessage('');

    }, (error) => {
      console.log('FAILED...', error);
      notifyError();
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
        <ToastContainer />
      </form>
    </>
  )

}

export default Contact