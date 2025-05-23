import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className='flex  w-[30rem] m-auto mt-4 h-[4rem] rounded-full px-[1rem] items-center justify-between bg-[#3c7962]'>
      <input type="text" style={{outline: 'none'}} className='text-white  text-xl' placeholder='Search here'/>
      <FaSearch className='bg-white rounded-full px-2 w-10 h-10'/>
    </div>
  )
}

export default SearchBar;
