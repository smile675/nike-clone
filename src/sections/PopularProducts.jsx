import React from 'react'

import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
   <section id='products' className='max-container max-sm:mt-12'>
    <div className='flex flex-col justify-start gap-5'>
      <div className='flex'>
      <h2 className='text-4xl font-palanquin font-bold'>Our </h2>
      <span className='text-4xl font-palanquin font-bold text-coral-red'> Popular </span>
      <h2 className='text-4xl font-palanquin font-bold'> Products</h2>
      </div>
      <p
      className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit consequatur eligendi sed minus quam.</p>
    </div>
    <div
    className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
    sm:gap-4 gap-14
    '
    >
        {products.map((product)=>(
          <PopularProductCard 
          key={product.name}
          {...product}
          />
        ))}


    </div>

   </section>
  )
}

export default PopularProducts
