import React, {useState} from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'



const Hero = () => {

  const [bigShoeImage, setBigShoeImg] = useState(bigShoe1)
  return (
    <section
     id='home'
     className='w-full flex  flex-col xl:flex-row justify-center min-h-screen gap-10 max-container'
     >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28'>

        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[70px] font-bold max-sm:leading-[82px]'>
          <span
          className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'
          >The New Arival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span>
          <span> Shoes</span>
        </h1>
        <p
        className='text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-20'
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam deleniti veritatis at velit laborum suscipit ad beatae odio doloribus.</p>

        <Button label = "Shop now" iconUrl={arrowRight}/>

        <div
        className='flex justify-starts items-start flex-wrap w-full mt-20 gap-16'
        >
         {statistics.map((state)=>(
          <div key={state.label}>
            <p className='text-4xl font-bold font-palanquin'>{state.value}</p>
            <p className='leading-7 font-palanquin text-slate-gray'>{state.label}</p>
          </div>
         ))}

        </div>

      </div>

      <div className='relative flex-1 flex justify-center items-center
      xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center
      '>
        <img  src={bigShoeImage} alt="Shoe collection" 
        width={610}
        height={500}
        className='object-contain relative z-10'
        />
        <div className='flex sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map((image) => (
            <div key={image.id}>
              <ShoeCard
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>

     </section>
  )
}

export default Hero
