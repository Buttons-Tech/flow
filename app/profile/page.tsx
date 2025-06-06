import React from 'react'
import Image from 'next/image'
import love from '../../public/image/love.png'
// import back from '../../public/image/back.png'
import pen from '../../public/image/pencil.png'
import add from '../../public/image/add.png'
import home from '../../public/image/home.png'
import settings from '../../public/image/setty.png'
import lol from '../../public/image/add.png'
import profile from '../../public/image/user.png'
import name from '../../public/image/name.png'
import comedy from '../../public/image/comedy.png'
import phone from '../../public/image/phone.png'
import email from '../../public/image/envelope.png'

const Profile = () => {
  return (
          <div className="w-[30rem] m-auto justify-center items-center bg-amber-700 ">
              <div className='flex m-auto justify-end-safe space-x-37 pb-6'>
                <h1 className='text-3xl font-bold'>Profile</h1>
                <Image src={pen} className='w-10 h-10 mb-2' alt="" />
              </div>
              <div className='m-auto justify-center  border rounded-full w-[10rem] items-center mb-10 h-[10rem] '>
                <Image src={love} className='flex m-auto justify-center h-[10rem] w-[10rem] ' alt="" />
              </div>
              <div className='pl-7 flex-col justify-center mb-20 m-auto flex'>
                <div className='flex mb-10 space-x-15'>
                  <Image src={name} className='w-15 h-15' alt="" />
                  <div className='flex flex-col '>
                <label className='font-bold text-2xl'>Name</label>
                <span>JAMES WILLIAMS</span>
                  </div>
                </div>
                <div className='flex mb-10 space-x-15'>
                  <Image src={comedy} className='w-15 h-15' alt="" />
                  <div className='flex flex-col '>
                <label className='font-bold text-2xl'>Role</label>
                <span>MARKETTER</span>
                  </div>
                </div>
                <div className='flex mb-10 space-x-15'>
                  <Image src={phone} className='w-15 h-15' alt="" />
                  <div className='flex flex-col '>
                <label className='font-bold text-2xl'>Phone No.</label>
                  <span>+1234567890</span>
                  </div>
                </div>
                <div className='flex mb-10 space-x-15'>
                  <Image src={email} className='w-15 h-15' alt="" />
                  <div className='flex flex-col '>
                <label className='font-bold text-2xl'>E-mail</label>
                    <span>james.williams@example.com</span>
                  </div>
              </div>
            </div>
              <div className='flex justify-between'>
                <Image src={home} className='h-15 w-15 mx-6'  alt="" />
                <Image src={settings} className='h-15 w-15 mx-6' alt="" />
                <Image src={lol} className='h-15 w-15 mx-6' alt="" />
                <Image src={profile} className='h-15 w-15 mx-6' alt="" />
              </div>
          </div>
        
  )
}

export default Profile