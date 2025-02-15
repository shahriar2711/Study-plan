import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, BarChart3, CheckCircle, Star, Users, PlayCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

// Variants for animations
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
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function StudyPlanLanding() {
  return (
    <>
    <Navbar></Navbar>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-r from-blue-600 to-teal-600 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="block">Ace CUET with</span>
              <span className="block text-yellow-300 mt-2">Your Personal Study Planner</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-5 max-w-2xl mx-auto text-lg sm:text-xl">
              Plan, track, and achieve your goals with a structured study schedule designed for CUET aspirants.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-md hover:bg-yellow-500 transition-all"
              >
                Get Started for Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-md hover:bg-white hover:text-blue-900 transition-all"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Structured Plans", description: "Daily and weekly study plans tailored for CUET." },
              { icon: Calendar, title: "Goal Tracking", description: "Set and achieve your study goals with ease." },
              { icon: BarChart3, title: "Progress Insights", description: "Track your performance and improve faster." },
              { icon: CheckCircle, title: "Practice Tests", description: "Access mock tests and quizzes for better preparation." },
              { icon: Star, title: "Gamified Learning", description: "Earn badges and rewards as you progress." },
              { icon: Users, title: "Community Support", description: "Connect with fellow CUET aspirants." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 rounded-lg text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-full">
                  {React.createElement(feature.icon, { className: "h-6 w-6 text-white" })}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-blue-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">See It in Action</h2>
            <p className="text-lg text-gray-600 mb-8">
              Watch a quick demo to see how our study planner can help you stay organized and focused.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all flex items-center gap-2">
              <PlayCircle className="h-5 w-5" /> Watch Demo
            </button>
          </div>
          <div className="flex-1 bg-gray-200 h-96 rounded-lg shadow-lg">
            {/* Placeholder for video or screenshot */}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">What Students Are Saying</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rahul", feedback: "This planner helped me stay consistent and score well in CUET!", avatar: "https://via.placeholder.com/150" },
              { name: "Priya", feedback: "The progress tracking feature is a game-changer!", avatar: "https://via.placeholder.com/150" },
              { name: "Ankit", feedback: "I loved the daily goals and mock tests. Highly recommended!", avatar: "https://via.placeholder.com/150" },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-gray-50 rounded-lg text-center shadow-sm hover:shadow-md transition-all"
              >
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <p className="text-lg text-gray-600">"{testimonial.feedback}"</p>
                <p className="mt-4 font-semibold text-blue-900">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Start Your CUET Journey Today</h2>
        <p className="text-lg mb-8">Join thousands of students who are acing CUET with our study planner.</p>
        <button className="px-8 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-md hover:bg-yellow-500 transition-all">
          Get Started for Free
        </button>
      </div>

      {/* Footer Section */}
      <div className="py-10 bg-gray-800 text-white text-center">
        <p className="text-lg">© 2023 CUET Study Planner. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-yellow-400">Terms of Service</a>
          <a href="/contact" className="hover:text-yellow-400">Contact Us</a>
        </div>
      </div>
    </>
  );
}