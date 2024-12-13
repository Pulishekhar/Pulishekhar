import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify'; // Ensure you've installed this package

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      user_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    console.log('Email Data:', emailData); // Log the data before sending

    emailjs.send('service_aueyqkf', 'template_o7if2zp', emailData, 'j95kafpsD6YgZ69aZ')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Email sent successfully!'); // Notification for success
      })
      .catch((err) => {
        console.error('FAILED...', err);
        toast.error(`Failed to send email: ${err.text || 'Unknown error'}`); // Notification for error
      });
  };

  return (
    <section className="flex justify-center items-center min-h-screen p-8">
      <div className="bg-opacity-70 text-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="bg-black bg-opacity-45 shadow-md rounded-lg px-6 pt-10 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">
              First Name (required)
            </label>
            <input 
              type="text" 
              name="firstName" 
              required 
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input 
              type="text" 
              name="lastName" 
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email Address (required)
            </label>
            <input 
              type="email" 
              name="email" 
              required 
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
              Subject (required)
            </label>
            <input 
              type="text" 
              name="subject" 
              required 
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Message (required)
            </label>
            <textarea 
              name="message" 
              required 
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
