import Image from 'next/image'
import prod_1 from '../../public/image/prod_1.jpg'
import Button from './Button'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#b1c907] p-4 w-[30rem] m-auto h-[10rem] mt-3 flex  items-center justify-between'>
        <div className='flex flex-col '>
        <span className='font-bold text-xl '>Today's Special Offer</span>
        <span className='text-sm w-[15rem] '>Today's special offer is none other than our very own roll coming straight outta Mushin. You snooze... you loose </span>
     </div>
     <div>
        <Image src={prod_1} className='w-[8rem]' alt="" />
        <Button />
     </div>
    </div>
  )
}

export default Hero;