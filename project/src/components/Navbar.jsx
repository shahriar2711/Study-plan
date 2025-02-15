import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar({  }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-gradient-to-r from-teal-700 to-teal-800 fixed w-full z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}                                                        
          >
            <h1 className="text-2xl font-bold text-white">CUET Study Plan</h1>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a href="#home" className="text-gray-200 hover:text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Home</motion.a>
            <motion.a href="#features" className="text-gray-200 hover:text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Features</motion.a>
            <motion.a href="#subjects" className="text-gray-200 hover:text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Subjects</motion.a>
            <motion.a href="#contact" className="text-gray-200 hover:text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Contact</motion.a>
            <Link className="bg-white text-[#004453] px-4 py-2 rounded-md hover:bg-gray-100 transition-colors" to= "/login">Login</Link>
            <Link className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} to= "/signup">Sign Up</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1E3A8A]">
            <a href="#home" className="block px-3 py-2 text-gray-200 hover:text-white">Home</a>
            <a href="#features" className="block px-3 py-2 text-gray-200 hover:text-white">Features</a>
            <a href="#subjects" className="block px-3 py-2 text-gray-200 hover:text-white">Subjects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-200 hover:text-white">Contact</a>
            <button onClick={onLogin} className="w-full text-left px-3 py-2 text-gray-200 hover:text-white">Log In</button>
            <button className="w-full text-left px-3 py-2 text-gray-200 hover:text-white">Sign Up</button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
