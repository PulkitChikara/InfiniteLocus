import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
    <div className='flex flex-col bg-blue-400 rounded-lg p-2'>
        <div className='flex items-center bg-white text-blue-500 font-semibold xl:font-bold rounded-lg px-3 py-2 mb-2 text-sm xl:text-xl'>
            <div className='w-1/12 flex items-center justify-center border-x'>
                Name
            </div>
            <div className='w-1/12 flex items-center justify-center border-x'>
                Price
            </div>
            <div className='w-7/12 flex items-center justify-center border-x'>
                Description
            </div>
            <div className='w-1/12 flex items-center justify-center border-x'>
                Units
            </div>
            <div className='w-1/12 flex items-center justify-center border-x'>
                Sales
            </div>
            <div className='w-1/12 flex items-center justify-center border-x'>
                Category
            </div>
        </div>
        <div className='w-full max-h-[600px] overflow-y-scroll'>
            {data.map((item)=>(
                <ProductCard item={item}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList