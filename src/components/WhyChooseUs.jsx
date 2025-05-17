import React from 'react';

export default function WhyChooseUs() {
  const points = [
    { icon: "fas fa-shield-alt", title: "Secure Transactions", text: "We prioritize your privacy and license safety." },
    { icon: "fas fa-clock", title: "Fast Processing", text: "Most valuations completed within 24 hours." },
    { icon: "fas fa-users", title: "Expert Support", text: "Dedicated support every step of the way." },
    { icon: "fas fa-thumbs-up", title: "Trusted by Companies", text: "Hundreds of clients trust our expertise." }
  ];

  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-3xl font-semibold mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {points.map((point, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded shadow text-center hover:bg-[#FFD700] hover:scale-110 ease-in-out duration-300">
            <i className={`${point.icon} text-3xl text-[#353839] mb-3`}></i>
            <h5 className="font-semibold mb-2">{point.title}</h5>
            <p className="text-sm">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}