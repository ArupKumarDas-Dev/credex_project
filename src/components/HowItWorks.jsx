// import React from 'react';


// export default function HowItWorks() {
//   const steps = [
//     { icon: "fas fa-upload", title: "Upload License", text: "Provide details of your software licenses securely." },
//     { icon: "fa-solid fa-calculator", title: "Get Valuation", text: "We assess and estimate the market value quickly." },
//     { icon: "fas fa-money-bill-wave", title: "Get Paid", text: "Receive payment directly once the license is verified." }
//   ];

//   return (
//     <section id="howitworks" className="py-16 text-center bg-gray-50">
//       <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//         {steps.map((step, idx) => (
//           <div key={idx} className="p-6 bg-white shadow rounded hover:bg-[#F5DEB3] hover:scale-110 ease-in-out duration-300">
//             <i className={`${step.icon} text-3xl text-[#36454F] mb-4`}></i>
//             <h4 className="font-bold text-lg mb-2">{step.title}</h4>  
//             <p>{step.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeatureCard from './FeatureCard'; // Make sure path matches

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps = [
    {
      icon: 'fas fa-upload',
      title: 'Upload License',
      text: 'Provide details of your software licenses securely.',
    },
    {
      icon: 'fas fa-calculator',
      title: 'Get Valuation',
      text: 'We assess and estimate the market value quickly.',
    },
    {
      icon: 'fas fa-money-bill-wave',
      title: 'Get Paid',
      text: 'Receive payment directly once the license is verified.',
    },
  ];

  return (
    <section
      id="howitworks"
      className="py-20 bg-gradient-to-br from-white via-gray-100 to-gray-50 text-center"
    >
      <h2 className="text-4xl font-bold text-[#1e293b] mb-4">How It Works</h2>
      <p className="text-gray-500 mb-12 text-lg max-w-xl mx-auto">
        Our 3-step process ensures you get maximum value for your unused software licenses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {steps.map((step, idx) => (
          <FeatureCard key={idx} {...step} delay={idx * 150} />
        ))}
      </div>
    </section>
  );
}
