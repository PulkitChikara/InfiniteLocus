import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
    <div className='flex flex-col'>
        <div className='flex items-center bg-blue-500 font-bold rounded-lg px-3 py-2 mb-2'>
            <div className='w-1/12 flex items-center justify-center'>
                Name
            </div>
            <div className='w-1/12 flex items-center justify-center'>
                Price
            </div>
            <div className='w-7/12 flex items-center justify-center'>
                Description
            </div>
            <div className='w-1/12 flex items-center justify-center'>
                Units
            </div>
            <div className='w-1/12 flex items-center justify-center'>
                Sales
            </div>
            <div className='w-1/12 flex items-center justify-center'>
                Category
            </div>
        </div>
        {data.map((item)=>(
            <ProductCard item={item}/>
        ))}
    </div>
  )
}

export default ProductList