import React from 'react'




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
        <div className="hover:scale-125 bg-[#3c7962] hover:bg-red-900 p-4 text-white rounded-full ">Cali</div>
            <div className="hover:scale-125 bg-[#b1c907] p-4 hover:bg-red-900 hover:text-white rounded-full ">Ghana</div>
            <div className="hover:scale-125 bg-[#b1c907] p-4 hover:bg-red-900 hover:text-white rounded-full ">Cana</div>
            <div className="hover:scale-125 bg-[#b1c907] p-4 hover:bg-red-900 hover:text-white rounded-full ">Scottish</div>

    </div>
  )
}

export default Categories;