import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='w-full flex items-center rounded-lg px-3 py-2 hover:bg-blue-200 text-sm xl:text-lg text-black'>
        <div className='w-1/12 flex items-center justify-center'>
            {item.name}
        </div>
        <div className='w-1/12 flex items-center justify-center'>
            {item.Qty_Sold_01}
        </div>
        <div className='w-7/12 flex items-center justify-center'>
            {item.Description}
        </div>
        <div className='w-1/12 flex items-center justify-center'>
            {item.Qty_Sold_01 + item.Qty_Sold_02+ item.Qty_Sold_03+ item.Qty_Sold_04+ item.Qty_Sold_05+ item.Qty_Sold_06+ item.Qty_Sold_07+ item.Qty_Sold_08+ item.Qty_Sold_09+ item.Qty_Sold_10+ item.Qty_Sold_11+ item.Qty_Sold_12}
        </div>
        <div className='w-1/12 flex items-center justify-center'>
        {(item.Qty_Sold_01 + item.Qty_Sold_02+ item.Qty_Sold_03+ item.Qty_Sold_04+ item.Qty_Sold_05+ item.Qty_Sold_06+ item.Qty_Sold_07+ item.Qty_Sold_08+ item.Qty_Sold_09+ item.Qty_Sold_10+ item.Qty_Sold_11+ item.Qty_Sold_12)*item.price}
        </div>
        <div className='w-1/12 flex items-center justify-center'>
            {item.Category}
        </div>
    </div>
  )
}

export default ProductCard