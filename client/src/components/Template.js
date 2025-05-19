import React from "react";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm'
import logi from '../assets/5890876.jpg';
const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className="flex h-full p-20 justify-center mx-auto w-screen text-slate-900 h-screen gap-4 bg-white">

      <div className="w-8/12 max-w-md mx-0">
        <h1 className="font-semibold text-5xl leading-8">{title}</h1>
        <p className="leading-6  mt-4">
          <span className="text-slate-600 text-xl">{desc1}</span><br/>
          <span className="text-blue-600 text-xl">{desc2}</span>
        </p>

        {formtype === 'signup' ? <SignupForm setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}

        <div className="flex gap-x-5 items-center mt-1 mb-1">
          <div className="bg-slate-600 h-px w-48"></div>
          <p className="text-slate-600 font-md leading-7">OR</p>
          <div className="bg-slate-600 h-px w-48"></div>
        </div>
       
        <button className="flex justify-center items-center rounded text-s font-medium text-violetCustom bg-white px-2 py-1 gap-x-2 mx-auto">
          
         Sign Up
        </button>

      </div>

      <div className="relative w-4/12 max-h-100">
        <img src={logi} alt='frame' loading="lazy"  className="h-96 w-7xl "/>

       
      </div>

    </div>
  )
}
export default Template