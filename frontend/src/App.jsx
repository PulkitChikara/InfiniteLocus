import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Slider from './components/SideBar/SideBar.jsx';
import Dashboard from './pages/Dashboard';
import ProductsPage from './pages/ProductsPage.jsx';
import SuggestionsPage from './pages/SuggestionsPage.jsx';
import LoginPage from './pages/login.jsx'; // Corrected filename assuming it's "Login.jsx"

const App = () => {
  return (
    <div className='w-full min-h-screen flex bg-slate-200'>
      <Router>
        <div className='w-fit lg:max-w-[300px] lg:w-full h-full'>
          <Slider />
        </div>

        <Routes>
            <Route index element={<ProductsPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/suggestions" element={<SuggestionsPage />} />
            <Route path="/login" element={<LoginPage />} />    
        </Routes>
      </Router>
    </div>
  );
};

export default App;
