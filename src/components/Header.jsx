import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header" className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between font-[Inter,ui-sans-serif]">
        {/* Logo / Brand */}
        <div className="text-2xl md:text-3xl font-extrabold tracking-wide text-cyan-400">SoftSell</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-base font-light">
          {[
            { name: 'Home', href: '#header' },
            { name: 'About', href: '#howitworks' },
            { name: 'Customer Testimonials', href: '#testimonials' },
            { name: 'Contact', href: '#contact' },
          ].map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative inline-block text-gray-300 hover:text-white transition duration-300"
              >
                <span className="pb-1 border-b-2 border-transparent hover:border-cyan-400 transition-all duration-300">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl text-cyan-300">
          <FaBars onClick={() => setIsOpen(true)} className="cursor-pointer" />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 h-full w-[220px] bg-[#0f172a] text-white p-6 z-50 shadow-lg transition-all duration-300 ${
            isOpen ? 'right-0' : '-right-[220px]'
          }`}
        >
          <FaTimes
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-[140px] text-xl cursor-pointer"
          />

          <ul className="flex flex-col gap-6 mt-12 text-lg">
            {[
              { name: 'Home', href: '#header' },
              { name: 'About', href: '#howitworks' },
              { name: 'Customer Testimonials', href: '#testimonials' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-cyan-400 transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
