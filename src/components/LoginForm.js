import React from "react";
import { useState} from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"; 
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = ({setIsLoggedIn}) =>{

    const [formData,setFormData] = useState({
      email:'',
      password:''
    });

    const [showpassword,setshowpassword]=useState(false);

    const navigate = useNavigate();

    function submitHandler (event){
      event.preventDefault();
      setIsLoggedIn(true);
      toast.success('Logged In')
      navigate("/dashboard");
    }

    function changeHandler(event){
      setFormData((prev)=> (
        {
          ...prev,
          [event.target.name]:event.target.value
        }
      ))
    }
    const accountData ={
      ...formData
    }
    console.log(accountData)
    return(
      
      <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-2 mt-3" >
        <label className="w-11/12">
          <p className="text-sm text-slate-100 leading-5">Email Address <sup className="text-pink-400">*</sup></p>
          <input required  type='email' placeholder="Enter email address" onChange={changeHandler} value={formData.email} name="email" className="bg-slate-700  rounded text-slate-300 text-sm w-full p-2"/>
        </label>
       
       
        <label className="w-11/12 relative">
          <p className="text-sm text-slate-100 leading-5">Password <sup className="text-pink-400">*</sup></p>
          <input 
           required
           type={showpassword?('text'):('password')}
           placeholder="Enter password" 
           onChange={changeHandler} 
           value={formData.password} 
           name="password" className="bg-slate-700 rounded text-slate-300 w-full p-2 text-sm"/>
       
          <span 
          className="absolute right-3 top-7 cursor-pointer"
          onClick={()=>setshowpassword((prev)=>!prev)}>
            {showpassword ?  <AiOutlineEyeInvisible className="text-xl" fill='#AFB2BF' /> :
            <AiOutlineEye className="text-xl" fill='#AFB2BF'/>}
          </span>
         
          <Link to='#'>
            <p className="text-blue-200 text-xs mt-1 max-w-max ml-auto">
              Forgot password
            </p>
          </Link>
        </label>

          <button className="w-11/12 bg-yellow-300 text-md p-1 text-slate-800 rounded mt-4">
            Sign In
          </button>     
      </form>
    )
}
export default LoginForm