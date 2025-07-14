import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import KoreanPage from './pages/KoreanPage';

function App() {
  const [userName, setUsername] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/korean" element={<KoreanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
