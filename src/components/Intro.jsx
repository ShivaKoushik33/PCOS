import React from 'react';
import { Link } from 'react-router-dom';
import steth from '../assets/steth.jpg';
import { motion } from 'framer-motion';
import { 
  Waves, 
  Sparkles, 
  HeartPulse, 
  Activity, 
  Flower2, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

import bg from '../assets/bg.jpg';


const Intro = () => {
  return (
    <div 
      className="min-h-screen  bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: `url(${bg})`,
        // backgroundBlendMode: 'overlay',
      }}
    >
      {/* Add an overlay for better text readability */}
      <div className="absolute inset-0 bg-violet-100/90 backdrop-blur-sm">
        {/* Header Section */}
        <header className="relative bg-white/80 backdrop-blur-md shadow-lg border-b border-violet-100">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Left side - Logo and Title */}
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-violet-100 p-2 rounded-lg"
              >
                <Flower2 className="w-10 h-10 text-violet-600" />
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col"
              >
                <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
                  Matrusparsh
                </h1>
                <p className="text-sm text-gray-600">PCOS Self-Assessment</p>
              </motion.div>
            </div>

            {/* Right side - Navigation Links and CTA */}
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-6">
                <motion.a
                  href="https://my.clevelandclinic.org/health/diseases/8316-polycystic-ovary-syndrome-pcos"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                   target='_blank'
                >
                  About
                </motion.a>
                <motion.a
                  href="https://www.mayoclinic.org/diseases-conditions/pcos/symptoms-causes/syc-20353439"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 hover:text-violet-600 transition-colors"
                  target='_blank'
                >
                  Symptoms
                </motion.a>
              </nav>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                
              </motion.div>
            </div>
          </div>
        </header>

        {/* Main Content Section */}
        <div className="relative container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Image */}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={steth}
                alt="PCOS Awareness"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </motion.div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-800">
                  Understanding PCOS
                </h2>
                
                {/* Animated Info Points */}
                {[
                  { icon: HeartPulse, text: "Affects hormonal balance" },
                  { icon: Activity, text: "Can cause irregular periods" },
                  { icon: Sparkles, text: "May affect fertility" },
                  { icon: Flower2, text: "Manageable with proper care" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="flex items-center gap-4 text-gray-700"
                  >
                    <item.icon className="w-6 h-6 text-indigo-500" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}

                {/* Call to Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="pt-6"
                >
                  <Link to="/quiz">
                    <button className="group bg-indigo-500 text-white py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 flex items-center gap-2">
                    Start Your PCOS Risk Assessment
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="relative text-center py-6 bg-indigo-100/80 backdrop-blur-sm mt-auto">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Important:</strong> This assessment is for informational purposes only. 
            Please consult a healthcare professional for a full diagnosis.
          </p>
          <p className="text-sm text-gray-700">
            <a 
              href="https://en.wikipedia.org/wiki/Polycystic_ovary_syndromechro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline text-indigo-600 hover:text-indigo-800"
            >
              Learn more about PCOS
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Intro;
