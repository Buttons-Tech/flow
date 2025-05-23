import React from 'react'
import { doLogOut } from '../actions'



const Logout = () => {
  return (
    <form action={doLogOut}>
<button className='bg-blue-400 my-2 text-white p-1 rounded-md' type='submit'>
    Logout
</button>
    </form>
  )
}

export default Logout