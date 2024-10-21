"use client"
import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <div className="contact-me-section p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Me</h2>
      <p className="text-lg text-gray-700 mb-2">Feel free to reach out for any inquiries or collaborations.</p>
      <p className="text-lg text-gray-700 mb-2">You can contact me via:</p>
      <ul className="list-none text-lg text-gray-700">
        <li className="mb-2">
          <strong>Email:</strong> <a href="mailto:sk3316@srmist.edu.in" className="text-blue-600 hover:text-blue-800 transition duration-300">sk3316@srmist.edu.in</a>
        </li>
        <li className="mb-2">
          <strong>Phone:</strong> <a href="tel:+917888060628" className="text-blue-600 hover:text-blue-800 transition duration-300">+91 78880 60628</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
