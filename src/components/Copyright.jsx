import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Copyright() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand + year */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-cyan-400">SoftSell</span>. All rights reserved.
        </p>

        {/* Optional message */}
        <p className="text-sm text-center flex items-center gap-1">
          Made with <FaHeart className="text-red-500 animate-pulse" /> by Arup_Kumar_Das
        </p>
      </div>
    </footer>
  );
}
