import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import ImportantPage from './pages/Important';
import CompletedPage from './pages/Completed';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/important" element={<ImportantPage />} />
            <Route path="/completed" element={<CompletedPage />} />
        </Routes>
    );
};

export default App;
