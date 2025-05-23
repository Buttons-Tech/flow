import React from 'react'
import { MdMenuOpen } from "react-icons/md";
import flowLogo from '../../public/image/flow-logo-png.png'
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className=' border-[3px] border-gray-500 w-[30rem] m-auto'>
        <div className='flex justify-between items-center px-4'>
        <div className='flex items-center '>
            <div className=' w-[4rem] h-[3rem] bg-[#b1c907]'></div>
        <Image src={flowLogo} className='w-[8rem]' alt="" />
        </div>
            <MdMenuOpen size={50} />
      </div>
    </div>
  )
}

export default NavBar;