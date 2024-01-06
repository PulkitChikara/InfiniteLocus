import React from 'react'
import ProductList from '../components/Products/ProductList'

const data = [
    {
        name: "name",
        price: "Rs 200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis?",
        units: "1000",
        sales: "800",
        category: "clothing",
    },
    {
        name: "name",
        price: "Rs 200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis?",
        units: "1000",
        sales: "800",
        category: "clothing",
    },
    {
        name: "name",
        price: "Rs 200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis?",
        units: "1000",
        sales: "800",
        category: "clothing",
    },
    {
        name: "name",
        price: "Rs 200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis?",
        units: "1000",
        sales: "800",
        category: "clothing",
    },
    {
        name: "name",
        price: "Rs 200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis?",
        units: "1000",
        sales: "800",
        category: "clothing",
    },
    {
        name: "name",
        price: "Rs 200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis?",
        units: "1000",
        sales: "800",
        category: "clothing",
    },
    {
        name: "name",
        price: "Rs 200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis?",
        units: "1000",
        sales: "800",
        category: "clothing",
    },
    {
        name: "name",
        price: "Rs 200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis?",
        units: "1000",
        sales: "800",
        category: "clothing",
    },
    {
        name: "name",
        price: "Rs 200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis?",
        units: "1000",
        sales: "800",
        category: "clothing",
    },
    {
        name: "name",
        price: "Rs 200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis?",
        units: "1000",
        sales: "800",
        category: "clothing",
    },
    {
        name: "name",
        price: "Rs 200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis?",
        units: "1000",
        sales: "800",
        category: "clothing",
    },
    {
        name: "name",
        price: "Rs 200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perferendis?",
        units: "1000",
        sales: "800",
        category: "clothing",
    },
]

const ProductsPage = () => {
    return (
        <div className='w-full h-full p-5 pl-0'>
            <div className='w-full h-full flex flex-col bg-[#191919] opacity-90 text-white text-xl rounded-xl'>
                <div className='text-6xl px-6 py-8 font-semibold'>
                    Products Page
                </div>
                <div className='p-4'>
                    <ProductList data={data} />
                </div>
            </div>
        </div>
    )
}

export default ProductsPage