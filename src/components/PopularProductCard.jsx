import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({
    imgURL, name, price
}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>

        <img className='w-[280px] h-[280px]' src={imgURL} alt={name}/>
        <div className='mt-8 flex justify-start gap-2.5 items-center'>
            <img src={star} alt="rating" width={24} height={24}/>
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
        </div>
        <h3 className='text-2xl text-slate-gray font-palanquin mt-2'>{name}</h3>
        <p className='mt-2 font-montserrat text-coral-red text-3xl font-semibold'>{price}</p>
    </div>
  )
}

export default PopularProductCard
