import Image from 'next/image'
import React from 'react'
import Weed from '../../public/image/prod_2.png'
import Loud from '../../public/image/prod_banner.jpg'
import Love from '../../public/image/love.png'
import arrow from '../../public/image/forward-arrow.png'
import prond from '../../public/image/prod_3.webp'
import bag from '../../public/image/bag_1.jpg'

const Card = () => {
  return (
    <div>
    <div className='  bg-[#eef7aa] p-4 w-[30rem] m-auto h-15 mt-3 flex relative items-center justify-between'>
        <span className='font-bold text-lg absolute top-3 left-20'>Hot Deals</span>
        <span className='font-bold text-red-600 text-lg absolute top-3 right-15'>See all</span>
    </div>
        <div className='bg-[#eef7aa] w-120 h-80 absolute left-109'>
        <div className='hover:scale-125 bg-[#eef7aa] w-55 h-80 absolute top-0 left-0 rounded-2xl'> 
          <Image src={Weed} className='w-70 h-50 rounded-2xl' alt="" />
          <span className='text-red-600 font-extrabold absolute left-2'>N10,000</span><br />
          <span className='font-extrabold text-[#3c7962] absolute left-2'>Benson & Hedges</span><br />
          <Image src={arrow} className= "w-5 h-5 rounded-full bg-[#b1c907] absolute top-51 right-2"  alt="" />
          <Image src={Love} className="w-5 h-5 rounded-full bg-[#b1c907] absolute top-51 right-8" alt="" /> 
          <span className='text-sm text-[#3c7962] font-semibold absolute left-2'>By Rliabod</span><br />
          <span className='text-sm text-[#3c7962] font-semibold absolute left-2'>Special Mushin strain <br /> that will choice you</span>
          <span className='text-sm text-[#3c7962] absolute right-0 top-73 font-bold '>BlueCoat</span>
        </div>
        <div className='hover:scale-125 bg-[#eef7aa] h-80 w-55 absolute top-0 left-60 rounded-2xl'> 
          <Image src={bag} className='w-70 h-50 rounded-2xl' alt="" />
          <span className='text-red-600 font-extrabold absolute left-2'>N10,000</span><br />
          <span className='font-extrabold text-[#3c7962] absolute left-2'>Benson & Hedges</span><br />
          <Image src={arrow} className= "w-5 h-5 rounded-full bg-[#b1c907] absolute top-51 right-2"  alt="" />
          <Image src={Love} className="w-5 h-5 rounded-full bg-[#b1c907] absolute top-51 right-8" alt="" /> 
          <span className='text-sm text-[#3c7962] font-semibold absolute left-2'>By Rliabod</span><br />
          <span className='text-sm text-[#3c7962] font-semibold absolute left-2'>Special Mushin strain <br /> that will choice you</span>
          <span className='text-sm text-[#3c7962] absolute right-0 top-73 font-bold '>BlueCoat</span>
        </div>
        </div>
        <div className='w-120 h-80 absolute left-109 top-225'>
        <div className='hover:scale-125 h-80 w-55 absolute top-0 left-0 rounded-2xl'> 
          <Image src={Loud} className='w-70 h-50 rounded-2xl' alt="" />
          <span className='text-red-600 font-extrabold absolute left-2'>N10,000</span><br />
          <span className='font-extrabold text-[#3c7962] absolute left-2'>Benson & Hedges</span><br />
          <Image src={arrow} className= "w-5 h-5 rounded-full bg-[#b1c907] absolute top-51 right-2"  alt="" />
          <Image src={Love} className="w-5 h-5 rounded-full bg-[#b1c907] absolute top-51 right-8" alt="" /> 
          <span className='text-sm text-[#3c7962] font-semibold absolute left-2'>By Rliabod</span><br />
          <span className='text-sm text-[#3c7962] font-semibold absolute left-2'>Special Mushin strain <br /> that will choice you</span>
          <span className='text-sm text-[#3c7962] absolute right-0 top-73 font-bold '>BlueCoat</span>
        </div>
        <div className='hover:scale-125 h-80 w-55 absolute top-0 left-60 rounded-2xl'> 
          <Image src={prond} className='w-70 h-50 rounded-2xl' alt="" />
          <span className='text-red-600 font-extrabold absolute left-2'>N10,000</span><br />
          <span className='font-extrabold text-[#3c7962] absolute left-2'>Benson & Hedges</span><br />
          <Image src={arrow} className= "w-5 h-5 rounded-full bg-[#b1c907] absolute top-51 right-2"  alt="" />
          <Image src={Love} className="w-5 h-5 rounded-full bg-[#b1c907] absolute top-51 right-8" alt="" /> 
          <span className='text-sm text-[#3c7962] font-semibold absolute left-2'>By Rliabod</span><br />
          <span className='text-sm text-[#3c7962] font-semibold absolute left-2'>Special Mushin strain <br /> that will choice you</span>
          <span className='text-sm text-[#3c7962] absolute right-0 top-73 font-bold '>BlueCoat</span>
        </div>
        </div>
    </div>
  )
}

export default Card