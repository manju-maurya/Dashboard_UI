// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import HomePage from './pages/HomePage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import Dash1 from './components/Dash1';


const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
	  <Dash1/>
      <div style={{ display: 'flex' }}>
      <Sidebar/>
	  <HomePage/>
        <main style={{ flexGrow: 1, padding: '16px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

