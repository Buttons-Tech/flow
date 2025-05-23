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
        <div className="bg-[#3c7962] p-4 text-white rounded-full ">Cali</div>
            <div className="bg-[#b1c907] p-4 rounded-full ">Ghana</div>
            <div className="bg-[#b1c907] p-4  rounded-full ">Cana</div>
            <div className="bg-[#b1c907] p-4  rounded-full ">Scottish</div>
           
    </div>
  )
}

export default Categories;