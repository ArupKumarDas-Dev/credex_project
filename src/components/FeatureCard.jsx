import React from 'react';

export default function FeatureCard({ icon, title, text, delay = 0 }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group p-8 bg-white rounded-lg shadow-md hover:bg-[#F5DEB3] hover:scale-110 ease-in-out duration-300"
    >
      <div className="text-4xl text-cyan-600 mb-4">
        <i className={icon}></i>
      </div>
      <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-cyan-700 transition">
        {title}
      </h4>
      <p className="text-gray-600 group-hover:text-gray-800 transition">{text}</p>
    </div>
  );
}
