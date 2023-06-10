import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/molecules/Navbar';
import Exercises from './components/templates/Exercises';
import Admin from './components/templates/Admin';

const App = () => {
  return (
    <div className="has-background-white mb-6">
      <Navbar />

      <div className="columns">
        <div className="column is-10 is-offset-1">
          <Routes>
            <Route path="/" element={<Exercises />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
