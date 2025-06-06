import Image from 'next/image';
import React from 'react'
import ghana from '../../public/image/categories/ghana.png'
import cali from '../../public/image/categories/califonia.png'
import cana from '../../public/image/categories/canada.png'
import Scottish from '../../public/image/categories/scottish.png'




// Example categoriesData2
// const categoriesData2 = [
//     { id: 1, name: "Technology", icon: "💻" },
//     { id: 2, name: "Health", icon: "🩺" },
//     { id: 3, name: "Finance", icon: "💰" },
//     { id: 4, name: "Education", icon: "📚" },
// ];


const Categories = () => {
  return (
    <div className="flex mt-6  gap-3 justify-between m-auto w-[25rem]">
        <div className="hover:scale-125 bg-[#3c7962] hover:bg-red-900 p-4 text-white rounded-full ">
          <Image src={cali} alt="" />
          <h1>Cali</h1></div>
            <div className="hover:scale-125 bg-[#b1c907] p-4 hover:bg-red-900 hover:text-white rounded-full ">
              <Image src={ghana} className='w-10 h-10 pl-1' alt="" />
              <h1>Ghana</h1>
              </div>
            <div className="hover:scale-125 bg-[#b1c907] p-4 hover:bg-red-900 hover:text-white rounded-full ">
              <Image src={cana} alt="" />
              <h1>Cana</h1></div>
            <div className="hover:scale-125 bg-[#b1c907] p-4 hover:bg-red-900 hover:text-white rounded-full ">
              <Image src={Scottish} alt="" /> 
            <h1>Scottish</h1></div>

    </div>
  )
}

export default Categories;