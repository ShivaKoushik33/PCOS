import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import Results from './components/Results';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />

        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        
      </Routes>
    </Router>
  );
}

export default App;
