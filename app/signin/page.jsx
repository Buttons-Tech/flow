import Image from "next/image"
import LoginForm from "../appLoginForm.tsx";


const page = () => {
  return (
    <div className="flex flex-col justify-center items-center  m-4">
       <h1 className="text-3xl my-3">Hey,time to Sign In</h1>
       <LoginForm />
    </div>
  )
}

export default page