import React from 'react'

import GraphFirst from '../components/visuals/GraphFirst'

const Dashboard = () => {
  return (
    <div className='w-full h-full p-5 pl-0'>
      <div className='w-full h-full flex flex-col opacity-90 text-white text-xl rounded-xl'>
          <div className='text-black text-6xl px-6 py-8 font-semibold mb-6'>
              Dashboard
          </div>
          <div className='w-full flex flex-wrap px-2 text-black'>
            <div className='w-full md:w-1/2 xl:w-1/4 flex flex-col gap-2 p-2'>
              <div className="w-full rounded-lg bg-white p-4">
                <div className=' flex items-center justify-between pb-2'>
                  <div className='w-1/4'>
                    <div className='relative bottom-8 p-2 rounded-md w-[70px] h-[70px] shadow-2xl bg-red-300'>

                    </div>
                  </div>
                  <div className='w-3/4 flex flex-col gap-2 items-end'>
                    <div>Bookings</div>
                    <div>281</div>
                  </div>
                </div>
                <div className='border-t pt-2'>
                  +55% tahn Week
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 xl:w-1/4 flex flex-col gap-2 p-2'>
              <div className="w-full rounded-lg bg-white p-4">
                <div className=' flex items-center justify-between pb-2'>
                  <div className='w-1/4'>
                    <div className='relative bottom-8 p-2 rounded-md w-[70px] h-[70px] shadow-2xl bg-yellow-300'>

                    </div>
                  </div>
                  <div className='w-3/4 flex flex-col gap-2 items-end'>
                    <div>Revenue</div>
                    <div>34K</div>
                  </div>
                </div>
                <div className='border-t pt-2'>
                  +1% tahn Yesterday
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 xl:w-1/4 flex flex-col gap-2 p-2'>
              <div className="w-full rounded-lg bg-white p-4">
                <div className=' flex items-center justify-between pb-2'>
                  <div className='w-1/4'>
                    <div className='relative bottom-8 p-2 rounded-md w-[70px] h-[70px] shadow-2xl bg-green-300'>

                    </div>
                  </div>
                  <div className='w-3/4 flex flex-col gap-2 items-end'>
                    <div>Revenue</div>
                    <div>34K</div>
                  </div>
                </div>
                <div className='border-t pt-2'>
                  +1% tahn Yesterday
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 xl:w-1/4 flex flex-col gap-2 p-2'>
              <div className="w-full rounded-lg bg-white p-4">
                <div className=' flex items-center justify-between pb-2'>
                  <div className='w-1/4'>
                    <div className='relative bottom-8 p-2 rounded-md w-[70px] h-[70px] shadow-2xl bg-blue-300'>

                    </div>
                  </div>
                  <div className='w-3/4 flex flex-col gap-2 items-end'>
                    <div>Revenue</div>
                    <div>34K</div>
                  </div>
                </div>
                <div className='border-t pt-2'>
                  +1% tahn Yesterday
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <GraphFirst />
            </div>
            <div></div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard