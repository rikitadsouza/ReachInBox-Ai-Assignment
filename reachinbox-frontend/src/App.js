import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Onebox from './pages/Onebox'; // Implement Onebox later
import React, { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/google-login" element={<Onebox />} />
    </Routes>
    </div>
  );
}

export default App;
