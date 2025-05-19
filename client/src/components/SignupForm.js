import React from "react";
import { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"; 
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
const SignupForm = ({setIsLoggedIn}) =>{

  const [formData,setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpassword:'',
    student:''
  });

  const[showpassword,setshowpassword] = useState(false);
  const[confpassword,setconfpassword] = useState(false);
  const [accountType,setAccountType] = useState('student');

  const navigate = useNavigate();

  function changeHandler(event){
    setFormData((prev)=>(
      {
        ...prev,
        [event.target.name]:event.target.value
      }
    ))
  }
  
  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.confirmpassword){
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");

    const accountData = {
      ...formData
    };
    const finalData = {
      ...accountData,
      accountType
    };
    console.log("Printing final data");
    console.log(finalData);
    navigate("/dashboard")
  }
  
  return (
    <div>
      <div className="flex bg-slate-800 p-1 my-4 gap-x-2 rounded-full max-w-max">
        <button className={`${accountType==="student"
        ? "bg-slate-900 text-slate-100"
        : "bg-slate-800 text-slate-400"
        } py-2 px-5 rounded-full transition-all duration-200`}
         onClick={()=>{
          setAccountType('student')
        }}>
          Student
        </button>
        <button className={`${accountType === "instructor"
        ? "bg-slate-900 text-slate-100"
        : "bg-slate-800 text-slate-400 "
        } py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>{
          setAccountType('instructor')
        }}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-2 mt-3 ">
        <div className="flex gap-x-4">
          <label className="w-11/12 ">
            <p className="text-sm text-slate-100 leading-5">First Name<sup className="text-pink-400">*</sup></p>
            <input 
            required
            name='firstname'
            type='text'
            value={formData.firstname}
            onChange={changeHandler}
            placeholder="Enter First Name"
            className="bg-slate-700 rounded text-slate-300 w-full p-2 text-sm"
            />
          </label>

          <label className="w-11/12 ">
            <p className="text-sm text-slate-100 leading-5">Last Name<sup className="text-pink-400">*</sup></p>
            <input 
            required
            name="lastname"
            type="text"
            value={formData.lastname}
            onChange={changeHandler}
            placeholder="Enter Last Name"
            className="bg-slate-700 rounded text-slate-300 w-full p-2 text-sm"
            />
          </label>
        </div>

        <label >
          <p className="text-sm text-slate-100 leading-5">Email Address<sup className="text-pink-400">*</sup></p>
          <input 
          required
          name="email"
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Address"
          className=" w-full bg-slate-700 rounded text-slate-300 p-2 text-sm"
          />
        </label>

        <div className="flex gap-x-4">
          <label className="w-11/12 relative">
            <p className="text-sm text-slate-100 leading-5">Create Password <sup className="text-pink-400">*</sup> </p>
            <input 
              required
              name="password"
              value={formData.password}
              type={showpassword?('text'):('password')}
              onChange={changeHandler}
              placeholder="Enter password"
              className="bg-slate-700 rounded text-slate-300 w-full p-2 text-sm"
            />

            <span 
            className="absolute right-3 top-7 cursor-pointer"
            onClick={()=>
              setshowpassword((prev)=>!prev)} > 
              {showpassword ?<AiOutlineEye className="text-xl" fill='#AFB2BF'/>: (<AiOutlineEyeInvisible className="text-xl" fill='#AFB2BF'/>) }
            </span>
          </label>

          <label className="w-11/12 relative">
            <p className="text-sm text-slate-100 leading-5">Confirm Password  <sup className="text-pink-400">*</sup> </p>
            <input 
              required
              name="confirmpassword"
              value={formData.confirmpassword}
              type={confpassword?('text'):('password')}
              onChange={changeHandler}
              placeholder="Confirm password"
              className="bg-slate-700 rounded text-slate-300 w-full p-2 text-sm"
            />

            <span
              className="absolute right-3 top-7 cursor-pointer"
             onClick={()=>setconfpassword((prev)=>!prev)} > {confpassword ? (<AiOutlineEye className="text-xl" fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible className="text-xl" fill='#AFB2BF'/>)} </span>

          </label>
        </div>

        <button  className="w-full bg-yellow-300 text-md p-1 text-slate-800 rounded mt-4">
          Create Account
        </button>

      </form>

    </div>
  )
}
export default SignupForm

