import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';
import Copyright from './components/Copyright';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ScrollToTop />
      <Contact />
      <ChatWidget />
      <Copyright />
    </div>
  );
}

export default App;
