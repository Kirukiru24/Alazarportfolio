// src/components/Contact.tsx

import React, { useState } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { PaperAirplaneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

// 1. SECURELY ACCESS ENVIRONMENT VARIABLES
// These variables are available via the global import.meta.env object in Vite projects.
// We use the '!' to tell TypeScript we are sure these variables exist.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

// Set Alazar's email here (UPDATE THIS TO THE REAL EMAIL)
const ALAZAR_EMAIL = "alazar.g.hiwot@example.com"; 

// 2. Define Form Data Type for TypeScript
interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Function to handle changes in the form inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to send the message using EmailJS
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Safety check to ensure required IDs are loaded from .env
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        setStatus('error');
        console.error("EmailJS credentials missing! Check your .env file and variable prefixes.");
        return;
    }

    setStatus('sending');

    // The templateParams object keys MUST match the variables you set up in your EmailJS template.
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: ALAZAR_EMAIL, 
        message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error');
      });
  };

  // Function to determine the button content based on the submission status
  const renderButtonContent = () => {
    switch (status) {
      case 'sending':
        return 'Sending...';
      case 'success':
        return 'Message Sent! 🎉';
      case 'error':
        return 'Failed (Try Again)';
      default:
        return (
          <>
            Send Message <PaperAirplaneIcon className="w-5 h-5 ml-2 inline-block" />
          </>
        );
    }
  };


  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 border-b-4 border-indigo-600 inline-block pb-1">
            Get In Touch
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
            Have a project in mind or want to collaborate? Let’s connect!
          </p>
          
          <div className="mb-8 max-w-md mx-auto md:mx-0">
            <a 
              href={`mailto:${ALAZAR_EMAIL}`}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300 font-medium"
            >
              <EnvelopeIcon className="w-6 h-6 mr-2" />
              {ALAZAR_EMAIL}
            </a>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md space-y-4 mx-auto md:mx-0">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'sending' || status === 'success'}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition duration-150"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'sending' || status === 'success'}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition duration-150"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'sending' || status === 'success'}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition duration-150"
            ></textarea>
            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className={`w-full text-white font-medium py-3 rounded-lg flex items-center justify-center transition duration-300 
                ${status === 'sending' || status === 'success'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
            >
              {renderButtonContent()}
            </button>
            
            {status === 'success' && <p className="text-green-600 font-medium text-center mt-2">I've received your message!</p>}
            {status === 'error' && <p className="text-red-600 font-medium text-center mt-2">Oops! Something went wrong. Please check your console.</p>}

          </form>
        </motion.div>
      </div>
    </section>
  );
}