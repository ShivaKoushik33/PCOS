import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { Home, Book, ExternalLink } from 'lucide-react';

const Results = () => {
  const location = useLocation();
  const { result } = location.state || {};
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [pcosData, setPcosData] = useState({});

  useEffect(() => {
    if (result) {
      setPcosData({
        prediction: result.prediction,
        noPcosProbability: result.probabilities[0] * 100,
        pcosProbability: result.probabilities[1] * 100,
        
      });
      setLoading(false);
    }
  }, [result]);

  // If the data is still loading, display a loading message or spinner.
  if (loading) {
    return <div className="text-black text-2xl">Loading your results...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-violet-100 to-violet-200 min-h-screen flex flex-col justify-center items-center px-6 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl w-full"
      >
        {/* Header Section */}
        <h1 className="text-4xl font-semibold text-black mb-8 text-center">
          Your PCOS Risk Assessment Results
        </h1>

        {/* Result Information with Animated Progress Bars */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prediction</h2>
            <p className="text-xl text-gray-700">{pcosData.prediction?"You have PCOS":"You do not have PCOS"}</p>
          </div>

          {/* Progress Bars for the Probability of PCOS */}
          <div className="bg-white rounded-xl p-6 shadow-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Probability of PCOS Outcome
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              {/* No PCOS Probability */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-green-600">No PCOS Probability</h3>
                <div style={{ width: 200, height: 200 }}>
                  <CircularProgressbar
                    value={pcosData.noPcosProbability}
                    text={`${Math.round(pcosData.noPcosProbability)}%`}
                    styles={{
                      path: {
                        stroke: '#28a745', // green-600
                        strokeLinecap: 'round',
                        transition: 'stroke-dashoffset 0.5s ease 0s'
                      },
                      trail: {
                        stroke: '#e5e7eb' // gray-200
                      },
                      text: {
                        fill: '#22c55e',
                        fontSize: '16px',
                        fontWeight: 'bold'
                      }
                    }}
                  />
                </div>
              </div>

              {/* PCOS Probability */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-red-600">PCOS Probability</h3>
                <div style={{ width: 200, height: 200 }}>
                  <CircularProgressbar
                    value={pcosData.pcosProbability}
                    text={`${Math.round(pcosData.pcosProbability)}%`}
                    styles={{
                      path: {
                        stroke: '#FF2A2A', // red-600
                        strokeLinecap: 'round',
                        transition: 'stroke-dashoffset 0.5s ease 0s'
                      },
                      trail: {
                        stroke: '#e5e7eb' // gray-200
                      },
                      text: {
                        fill: '#ef4444',
                        fontSize: '16px',
                        fontWeight: 'bold'
                      }
                    }}
                  />
                </div>
              </div>
            </div>

           
          </div>

          {/* Text-based Explanation */}
          <div className="bg-white rounded-xl p-6 shadow-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Explanation & Recommendations</h2>
            <div className="space-y-4">
              <p className="text-xl text-gray-700 text-center mb-6">
                Based on your answers, there is a <strong>{Math.round(pcosData.pcosProbability)}%</strong> chance that you may have PCOS.
              </p>

              {pcosData.pcosProbability > 50 ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-600">Important Steps to Take:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Schedule an appointment with a gynecologist for a proper diagnosis</li>
                    <li>Consider getting hormonal blood tests</li>
                    <li>Request an ultrasound examination</li>
                    <li>Track your menstrual cycles regularly</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-indigo-600 mt-4">Lifestyle Recommendations:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Maintain a balanced, low-glycemic diet</li>
                    <li>Exercise regularly (at least 30 minutes, 5 times a week)</li>
                    <li>Manage stress through yoga or meditation</li>
                    <li>Get adequate sleep (7-8 hours per night)</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-600">Preventive Health Tips:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Continue maintaining a healthy lifestyle</li>
                    <li>Regular exercise and balanced nutrition</li>
                    <li>Track your menstrual cycles</li>
                    <li>Have regular health check-ups</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-indigo-600 mt-4">Remember:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Monitor any changes in your menstrual cycle</li>
                    <li>Stay aware of your body's signals</li>
                    <li>Consult a healthcare provider if new symptoms develop</li>
                    <li>Annual gynecological check-ups are recommended</li>
                  </ul>
                </div>
              )}

              <p className="text-sm text-gray-500 mt-6 italic text-center">
                Note: This assessment is for informational purposes only and should not be considered as a medical diagnosis.
                Always consult with healthcare professionals for proper medical advice.
              </p>
            </div>
          </div>
        </div>

        {/* Updated Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <motion.button
            className="bg-gradient-to-r from-violet-500 to-violet-600 text-white py-3 px-6 rounded-full 
                      hover:from-violet-600 hover:to-violet-700 transition duration-300 
                      flex items-center gap-2 shadow-lg"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>

          <motion.button
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 px-6 rounded-full 
                      hover:from-indigo-600 hover:to-indigo-700 transition duration-300 
                      flex items-center gap-2 shadow-lg"
            onClick={() => window.open('https://en.wikipedia.org/wiki/Polycystic_ovary_syndromechro', '_blank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Book className="w-5 h-5" />
            <span>Learn More</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Results;