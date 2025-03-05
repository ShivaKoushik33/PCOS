import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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
            <p className="text-xl text-gray-700">{pcosData.prediction}</p>
          </div>

          {/* Progress Bars for the Probability of PCOS */}
          <div className="bg-white rounded-xl p-6 shadow-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Probability of PCOS Outcome
            </h2>

            {/* Not Having PCOS */}
            <div className="text-gray-700 mb-4">
              <p>Not Having PCOS: <span className="font-semibold">{pcosData.noPcosProbability}%</span></p>
              <motion.div
                className="h-3 bg-green-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${pcosData.noPcosProbability}%` }}
                transition={{ duration: 2 }}
              />
            </div>

            {/* Having PCOS */}
            <div className="text-gray-700">
              <p>Having PCOS: <span className="font-semibold">{pcosData.pcosProbability}%</span></p>
              <motion.div
                className="h-3 bg-red-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${pcosData.pcosProbability}%` }}
                transition={{ duration: 2 }}
              />
            </div>
          </div>

          {/* Text-based Explanation */}
          <div className="bg-white rounded-xl p-6 shadow-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Explanation</h2>
            <p className="text-xl text-gray-700 text-center">
              Based on your answers, the likelihood of you having PCOS is calculated based on various factors. You have a <strong>{pcosData.prediction}</strong> with a <strong>{pcosData.pcosProbability}%</strong> chance of having PCOS and a <strong>{pcosData.noPcosProbability}%</strong> chance of not having PCOS.
            </p>
          </div>
        </div>

        {/* Call to Action Button - Navigate to Home */}
        <motion.button
          className="bg-red-500 text-black py-3 px-6 rounded-full hover:bg-red-700 transition duration-300"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.1 }}
        >
          Go Home
        </motion.button>

        {/* Call to Action Button - Learn More */}
        <motion.button
          className="bg-indigo-500 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300 mt-4"
          onClick={() => alert('Consult a doctor for more advice.')}
          whileHover={{ scale: 1.1 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Results;
