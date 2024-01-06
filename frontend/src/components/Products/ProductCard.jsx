import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='w-full flex items-center rounded-lg px-3 py-2 hover:bg-blue-200 text-sm xl:text-xl text-black'>
        <div className='w-1/12 flex items-center justify-center'>
            {item.name}
        </div>
        <div className='w-1/12 flex items-center justify-center'>
            {item.price}
        </div>
        <div className='w-7/12 flex items-center justify-center'>
            {item.description}
        </div>
        <div className='w-1/12 flex items-center justify-center'>
            {item.units}
        </div>
        <div className='w-1/12 flex items-center justify-center'>
            {item.sales}
        </div>
        <div className='w-1/12 flex items-center justify-center'>
            {item.category}
        </div>
    </div>
  )
}

export default ProductCard