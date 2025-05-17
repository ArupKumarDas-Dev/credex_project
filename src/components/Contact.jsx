import React, { useState } from 'react';
import {
  FiUser,
  FiMail,
  FiBriefcase,
  FiMessageCircle,
  FiCheckCircle
} from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
    message: ''
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // hide toast after 3s
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-cyan-50 to-blue-100 py-16 relative">
      {/* Toast */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2 z-50 animate-slide-in">
          <FiCheckCircle className="text-xl" />
          <span>Message sent successfully!</span>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 shadow-lg bg-white rounded-xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-cyan-700 mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-10">We’d love to hear from you! Fill out the form below and we’ll get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          {/* Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-3.5 text-gray-400" />
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 border-b-2 border-cyan-400 focus:outline-none focus:border-blue-600 transition rounded-md bg-cyan-50"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 border-b-2 border-cyan-400 focus:outline-none focus:border-blue-600 transition rounded-md bg-cyan-50"
            />
          </div>

          {/* Company */}
          <div className="relative">
            <FiBriefcase className="absolute left-3 top-3.5 text-gray-400" />
            <input
              name="company"
              placeholder="Company"
              onChange={handleChange}
              className="w-full pl-10 p-3 border-b-2 border-cyan-400 focus:outline-none focus:border-blue-600 transition rounded-md bg-cyan-50"
            />
          </div>

          {/* License Type */}
          <div className="relative">
            <select
              name="type"
              required
              onChange={handleChange}
              className="w-full p-3 border-b-2 border-cyan-400 focus:outline-none focus:border-blue-600 transition rounded-md bg-cyan-50"
            >
              <option value="">Select License Type</option>
              <option>Software Suite</option>
              <option>Cloud License</option>
              <option>Enterprise License</option>
            </select>
          </div>

          {/* Message */}
          <div className="relative">
            <FiMessageCircle className="absolute left-3 top-3.5 text-gray-400" />
            <textarea
              name="message"
              placeholder="Message"
              onChange={handleChange}
              required
              rows="4"
              className="w-full pl-10 p-3 border-b-2 border-cyan-400 focus:outline-none focus:border-blue-600 transition rounded-md bg-cyan-50"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-3 rounded-md shadow-md hover:from-blue-600 hover:to-cyan-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
