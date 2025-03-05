import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from './questions';


function Quiz() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState(new Array(22).fill(null));
  const questionsPerPage = 5;

  const handleAnswer = (questionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    try {
      console.log(answers);
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers }),
      });
      const result = await response.json();
      console.log(result);

      navigate('/results', { state: { result } });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const progressPercentage=(((answers.filter(answer=>answer!=null).length)/questions.length) * 100).toFixed(2);
  console.log(progressPercentage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-pink-200 py-10">
      <div className="max-w-3xl mx-auto px-6">
        {/* Progress Bar */}
        <div className="w-full mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="text-center text-xs text-gray-600">
            {`${progressPercentage}% Completed`}
          </div>
        </div>

        {/* Interactive Engagement (For Break) */}
        {currentPage === Math.floor(questions.length / 2) && (
          <div className="bg-white p-6 rounded-lg shadow-xl text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Fun Fact!</h3>
            <p className="text-sm text-gray-600">
              Did you know? The average menstrual cycle lasts around 28 days, but it can vary from person to person!
            </p>
          </div>
        )}

        {/* Questions */}
        <div className="space-y-8">
          {currentQuestions.map((q, idx) => {
            const questionIndex = currentPage * questionsPerPage + idx;
            return (
              <div key={q.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-lg font-medium mb-4 text-indigo-600">{q.question}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {q.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(questionIndex, option.value)}
                      className={`p-4 rounded-lg border transition-all duration-200
                        ${answers[questionIndex] === option.value 
                          ? 'bg-indigo-100 text-indigo-700 border-indigo-500' 
                          : 'border-gray-300 hover:border-indigo-500'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-between">
          <button
            onClick={() => setCurrentPage(p => p - 1)}
            disabled={currentPage === 0}
            className="px-6 py-3 rounded-lg bg-indigo-200 text-indigo-700 
                       disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-300 transition duration-200"
          >
            Previous
          </button>

          {currentPage === Math.ceil(questions.length / questionsPerPage) - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={answers.some(a => a === null)}
              className="px-6 py-3 rounded-lg bg-indigo-500 text-white
                       hover:bg-indigo-600 disabled:opacity-50 transition duration-200"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={() => setCurrentPage(p => p + 1)}
              className="px-6 py-3 rounded-lg bg-indigo-500 text-white
                       hover:bg-indigo-600 transition duration-200"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;