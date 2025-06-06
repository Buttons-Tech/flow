import Image from 'next/image'
import React from 'react'
import love from '../../public/image/love.png'
import back from '../../public/image/back.png'
import pen from '../../public/image/pencil.png'
import add from '../../public/image/add.png'

const page = () => {
  return (
    <div className="w-[30rem] m-auto justify-center items-center bg-amber-700 ">
      <div className='flex m-auto justify-center space-x-60 pb-6'>
        <Image src={back} className='w-10 h-10' alt="" />
        <h1 className=' flex '><Image src={pen} className='w-10 h-10 mb-2' alt="" />Edit profile</h1>
      </div>
      <div className='m-auto justify-center  border rounded-full w-[10rem] items-center mb-10 h-[10rem] '>
        <Image src={love} className='flex m-auto justify-center h-[10rem] w-[10rem] ' alt="" />
        <div>
        <Image src={add} className='h-10 w-10 flex ml-25 z-10 mb-60' alt="" />
        </div>
      </div>
      <div className='pl-20 flex-col justify-center m-auto flex'>
        <label className='font-bold text-xl'>Name</label>
        <input type="text" className='w-55 rounded-lg h-10 border mb-10 pl-2' />
        <label className='font-bold text-xl'>Role</label>
        <input type='text' required="role" className='w-55 rounded-lg h-10 border mb-10 pl-2' />
        <label className='font-bold text-xl'>Phone No.</label>
        <input type='phone no.' className='w-55 rounded-lg h-10 border mb-10 pl-2'  />
        <label className='font-bold text-xl'>E-mail</label>
        <input type="email" className='w-55 rounded-lg h-10 border mb-10 pl-2'  />

      </div>
    </div>
  )
}

export default page


















// "use client";
// import LoginForm from "../components/LoginForm";
// import React from "react";


// const ProfilePage = () => {
//   return (
//     <div className="flex flex-col justify-center items-center  m-4">
//        <h1 className="text-3xl my-3">Hey,time to Sign In</h1>
//        <LoginForm />
//     </div>
//   )
// }

// export default ProfilePage