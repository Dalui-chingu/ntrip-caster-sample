// App.js

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './Login';
import Dash from './dash';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        
        <Route path="/dash" element={<Dash/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
