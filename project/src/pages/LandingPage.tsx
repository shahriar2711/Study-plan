import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, BarChart3} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5 },
  },
};

export default function StudyPlanHero() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Video Background */}


        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 variants={itemVariants} className="text-4xl font-bold sm:text-5xl md:text-6xl text-white">
              <motion.span variants={itemVariants} className="block text-blue-300">
                Smart Learning, Better Results
              </motion.span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="mt-3 max-w-3xl mx-auto text-lg text-gray-200">
              Plan, track, and improve your CUET preparation with our smart study planner.
            </motion.p>
            
            <motion.div variants={itemVariants} className="mt-5 flex justify-center gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#002B5B] font-medium rounded-md shadow-md hover:bg-gray-100">
                Get Started
              </motion.button>
              
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[{ icon: BookOpen, title: "Structured Plan", description: "Organized study schedule to maximize efficiency." },
            { icon: Calendar, title: "Daily Goals", description: "Stay on track with personalized daily tasks." },
            { icon: BarChart3, title: "Progress Tracking", description: "Analyze your performance and improve." }].map((feature, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="inline-flex items-center justify-center p-3 bg-[#002B5B] rounded-md shadow-lg">
                {React.createElement(feature.icon, { className: "h-6 w-6 text-white" })}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
