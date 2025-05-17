import React from 'react';
import dummy1 from './assets/Dummy1.jpg';  // Adjust path based on actual location
import dummy2 from './assets/Dummy2.jpg';

export default function Testimonials() {
  const reviews = [
    {
      icon: 'ri-double-quotes-l',
      title: "Love the simplicity",
      quote: "They understood our brand and created a stunning website design.",
      name: "Allan Collins",
      role: "Managing Director",
      image: dummy1,
    },
    {
      icon: 'ri-double-quotes-l',
      title: "Excellent Designs",
      quote: "Efficient, reliable, and results-oriented. Highly recommended!",
      name: "Tanya Grant",
      role: "Ceo & Founder",
      image: dummy2,
    }
  ];

  return (
  <section
  id="testimonials"
  className="max-w-6xl mx-auto px-4 py-10 text-center"
>
  <h2 className="text-xl font-semibold text-cyan-600">Testimonials</h2>
  <h1 className="relative text-4xl font-semibold text-gray-800 mb-8 inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-20 after:bg-cyan-600">
    What our customers say
  </h1>

  <div className="grid md:grid-cols-2 gap-8">
    {reviews.map((r, i) => (
      <div
        key={i}
        className="relative isolate overflow-hidden px-8 pt-20 pb-8 bg-[#E5E4E2] rounded-md shadow-md transition-all duration-300 hover:shadow-lg group before:absolute before:top-0 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[75%] before:aspect-square before:rounded-full before:bg-[#4B0082] before:-z-10 before:transition-all before:duration-500 hover:before:w-[400%]"
      >
        <span className="absolute top-0 left-0 p-4 text-white text-5xl">
          <i className="ri-double-quotes-l"></i>
        </span>

        <h4 className="mt-16 mb-4 text-xl font-semibold text-cyan-600 group-hover:text-white">
          {r.title}
        </h4>

        <p className="text-gray-600 mb-4 group-hover:text-teal-100">
          {r.quote}
        </p>

        <img
          src={r.image}
          alt={r.name}
          className="w-24 h-24 object-cover object-center rounded-full border-2 border-cyan-600 mx-auto mb-3 transition group-hover:border-white"
        />

        <h5 className="text-lg font-semibold text-cyan-600 group-hover:text-white">
          {r.name}
        </h5>

        <h6 className="text-sm text-gray-500 group-hover:text-teal-100">
          {r.role}
        </h6>
      </div>
    ))}
  </div>
</section>
  );
}
