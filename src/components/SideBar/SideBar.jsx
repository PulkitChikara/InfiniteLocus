import React from 'react'

import { IoInfiniteSharp } from "react-icons/io5";

import { BiSolidDashboard } from "react-icons/bi";
import { AiFillDatabase } from "react-icons/ai";
import { MdOutlineSettingsSuggest } from "react-icons/md";

import { TbLogout } from "react-icons/tb";



const SideBar = () => {
  return (
    <div className='w-full h-full p-5'>
      <div className='w-full h-full flex flex-col bg-[#191919] opacity-90 text-white text-xl rounded-xl p-3'>
        <div className='flex items-center gap-2 px-4 pt-4 pb-5 border-b border-gray-500 mb-2'>
          <div className='text-3xl'>
            <IoInfiniteSharp />
          </div>
          <div className='font-semibold'>
            LOCUS
          </div>
        </div>
        <div className='flex items-center gap-2 px-4 py-3 rounded-md hover:bg-gray-500'>
          <BiSolidDashboard />
          <div className='text-[16px]'>
            Dashboard
          </div>
        </div>
        <div className='flex items-center gap-2 px-4 py-3 rounded-md hover:bg-gray-500'>
          <AiFillDatabase />
          <div className='text-[16px]'>
            Products
          </div>
        </div>
        <div className='flex items-center gap-2 px-4 py-3 rounded-md hover:bg-gray-500'>
          <MdOutlineSettingsSuggest />
          <div className='text-[16px]'>
            Suggestions
          </div>
        </div>
        <div className='flex items-center gap-2 px-4 py-3 rounded-md hover:bg-gray-500'>
          <TbLogout />
          <div className='text-[16px]'>
            Log Out
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar