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
        <label className="w-full">
          <p className="text-slate-900 leading-5 text-xl">Email Address <sup className="text-pink-400 text-sm">*</sup></p>
          <input required  type='email' placeholder="Enter email address" onChange={changeHandler} value={formData.email} name="email" className="bg-slate-100  rounded placeholder-slate-400 text-sm placeholder:text-base w-full p-4 mt-2"/>
        </label>
       
       
        <label className="w-full relative">
          <p className="text-slate-900 leading-5 text-xl">Password <sup className="text-pink-400 text-sm">*</sup></p>
          <input 
           required
           type={showpassword?('text'):('password')}
           placeholder="Enter password" 
           onChange={changeHandler} 
           value={formData.password} 
           name="password" className="bg-slate-100  rounded placeholder-slate-400 text-sm placeholder:text-base w-full p-4 mt-2"/>
       
          <span 
          className="absolute right-3 top-12 cursor-pointer"
          onClick={()=>setshowpassword((prev)=>!prev)}>
            {showpassword ?  <AiOutlineEye className="text-xl" fill='#8C94A3'/> :
            <AiOutlineEyeInvisible className="text-xl" fill='#AFB2BF' />
            }
          </span>
        
        </label>

          <button className="w-full bg-violetCustom text-md p-1 text-slate-100 rounded mt-4">
            Sign In
          </button>     
      </form>
    )
}
export default LoginForm