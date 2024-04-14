import React from "react";
import images from '../assets/images.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc";

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className="flex h-full py-9 justify-between mx-auto w-8/12 max-w-6xl h-6 gap-y-0">

      <div className="w-8/12 max-w-md mx-0">
        <h1 className="text-slate-100 font-semibold text-3xl leading-8">{title}</h1>
        <p className="leading-6 text-sm mt-4">
          <span className="text-slate-100">{desc1}</span><br/>
          <span className="text-blue-300">{desc2}</span>
        </p>

        {formtype === 'signup' ? <SignupForm setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}

        <div className="flex gap-x-5 items-center mt-1 mb-1">
          <div className="bg-slate-600 h-px w-44"></div>
          <p className="text-slate-600 font-md leading-7">OR</p>
          <div className="bg-slate-600 h-px w-44"></div>
        </div>
       
        <button className="flex justify-center items-center rounded text-xs text-slate-100 bg-slate-800 px-2 py-1 gap-x-2 mx-auto">
          <FcGoogle/>
         <p>Sign in with Google</p>
        </button>

      </div>

      <div className="relative w-4/12 max-w-xs max-h-80">
        <img src={images} alt='frame' loading="lazy"  className="h-56 w-10/12 absolute -top-4 right-5"/>

        <img src={image} alt='student' loading="lazy" className="w-10/12 absolute -top-7 h-56 right-9"/>
      </div>

    </div>
  )
}
export default Template