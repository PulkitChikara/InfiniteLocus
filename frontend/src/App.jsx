import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Slider from './components/SideBar/SideBar.jsx'
import Dashboard from './pages/Dashboard'
import ProductsPage from './pages/ProductsPage.jsx'
import SuggestionsPage from './pages/SuggestionsPage.jsx';

const App = () => {
    return (
        <div className='w-full min-h-screen flex bg-slate-200'>
            <Router>

                <div className='w-fit lg:max-w-[300px] lg:w-full h-full'>
                    <Slider />
                </div>

                <Routes>
                    
                    <Route exact path="/" element={<ProductsPage />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/products" element={<ProductsPage />} />
                    <Route exact path="/suggestions" element={<SuggestionsPage />} />

                </Routes>

            </Router>
        </div>
    )
}

export default App