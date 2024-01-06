import React from 'react'
import {useState,useEffect} from 'react'

import { IoInfiniteSharp } from "react-icons/io5";

import { BiSolidDashboard } from "react-icons/bi";
import { AiFillDatabase } from "react-icons/ai";
import { MdOutlineSettingsSuggest } from "react-icons/md";

import { TbLogout } from "react-icons/tb";



const SideBar = () => {
  const [active,setActive] = useState(localStorage.getItem('active') || 'dashboard');

//   useEffect(() => {
//     localStorage.setItem('active', active);
//     localStorage.setItem('active', active);
// }, [active]);

  function handleButtonClick(st) {
    setActive(st);
  };


  return (
    <div className='w-full h-full p-5'>
      <div className='w-full min-h-[95vh] h-full flex flex-col gap-1 bg-[#191919] opacity-90 text-white text-xl rounded-xl p-3'>
        <a href="/dashboard">
          <div onClick={()=>setActive("dashboard")} className='flex items-center gap-2 px-4 pt-4 pb-5 border-b border-gray-500 mb-2'>
            <div className='text-3xl'>
              <IoInfiniteSharp />
            </div>
            <div className='hidden lg:block font-semibold'>
              LOCUS
            </div>
          </div>
        </a>

        <a href="/dashboard">
          <div onClick={()=>setActive("dashboard")} className={`flex items-center justify-center lg:justify-start gap-2 px-4 py-3 rounded-md ${active === 'dashboard' ? 'bg-blue-500 hover:bg-blue-500' : 'bg-transparent hover:bg-gray-500'} `}>
            <BiSolidDashboard />
            <div className='hidden lg:block text-[16px]'>
              Dashboard
            </div>
          </div>
        </a>
        <a href="/products">
        <div onClick={()=>setActive("products")} className={`flex items-center justify-center lg:justify-start gap-2 px-4 py-3 rounded-md ${active === 'products' ? 'bg-blue-500 hover:bg-blue-500' : 'bg-transparent hover:bg-gray-500'}`}>
            <AiFillDatabase />
            <div className='hidden lg:block text-[16px]'>
              Products
            </div>
          </div>
        </a>
        <a href="/suggestions">
          <div onClick={()=>setActive("suggestions")} className={`flex items-center justify-center lg:justify-start gap-2 px-4 py-3 rounded-md ${active === 'suggestions' ? 'bg-blue-500 hover:bg-blue-500' : 'bg-transparent hover:bg-gray-500'}`}>
            <MdOutlineSettingsSuggest />
            <div className='hidden lg:block text-[16px]'>
              Suggestions
            </div>
          </div>
        </a>
        <a href="/">
          <div className='flex items-center justify-center lg:justify-start gap-2 px-4 py-3 rounded-md hover:bg-gray-500 mt-16'>
            <TbLogout />
            <div className='hidden lg:block text-[16px]'>
              Log Out
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default SideBar