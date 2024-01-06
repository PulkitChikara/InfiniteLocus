import React from 'react'

import Slider from './components/SideBar/SideBar.jsx'
import Dashboard from './pages/Dashboard'
import ProductsPage from './pages/ProductsPage.jsx'

const App = () => {
  return (
    <div className='w-full min-h-screen flex bg-slate-200'>
      <div className='w-[300px] h-full'>
        <Slider />
      </div>
      <div className='flex-1 w-full items-center justify-center'>
        <ProductsPage />
      </div>
    </div>
  )
}

export default App