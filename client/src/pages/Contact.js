import React from "react";
import { useState } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar";
const Contact = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  
  const submitHandler = async(e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:5000/contact",
      {
        name,
        email,
        message,
      },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res)=>{
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch((err)=>{
      console.log("Error!");
    });
  };

  return (
    <div className="flex flex-col gap-12 text-slate-900 text-4xl bg-white ">

      <Navbar/>
      <div className="flex flex-col gap-12 text-slate-900 text-4xl bg-white px-8 min-h-screen ">
      
      <div className="text-5xl">Contact Us</div>
      <div className="text-5xl">Reach Out to Tutorra</div>
      <div className="text-3xl">Got questions? Looking for more information? Our team is here to assist you. Contact us to start your learning journey with Tutorra.</div>

      <div className="flex gap-6 ">
        <div><img width="70" height="50" src="https://img.icons8.com/ios-filled/50/7950F2/phone.png" alt="phone"/></div>
        <div className="flex flex-col">
          <div>Phone Support</div>
          <div>+91 8077602273</div>
        </div>
      </div>

      <div className="flex gap-7 ">
        <div><img width="60" height="50" src="https://img.icons8.com/ios-filled/50/7950F2/new-post.png" alt="new-post"/></div>
        <div className="flex flex-col">
          <div>Email</div>
          <div>bookings@Tutorra.io</div>
        </div>
      </div>

      <div className="flex gap-6 ">
        <div><img width="70" height="50" src="https://img.icons8.com/ios-filled/50/7950F2/marker.png" alt="marker"/></div>
        <div className="flex flex-col">
          <div>Our location</div>
          <div>Dehradun,India</div>
        </div>
      </div>

      </div>




    <div className="flex bg-violetCustom w-screen  p-40 text-white gap-8 min-h-screen justify-center items-center ">
      <div className="flex flex-col gap-8">
       <div className="text-5xl">
         Whether you're curious about our masterclasses, seeking details about upcoming events, or exploring professional development opportunities, the Tutorra team is here to support you.
       </div>

        <div className="text-3xl text-slate-300">
          Get in touch with us to begin your learning journey—we're ready to guide you toward achieving your career goals. Simply fill out the form below or contact us through the details provided. We're dedicated to responding promptly and assisting you at every stage of your professional growth.
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-4">
          <div>
          <input 
          placeholder="Your Name" className="rounded-md p-4 placeholder:text-2xl text-slate-900" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          ></input>
          </div>
          <div>
            <input
             placeholder="Your Email" className="rounded-md p-4 placeholder:text-2xl text-slate-900"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             ></input>
          </div>
          <div>
          <textarea 
          placeholder="Message" className="w-full h-48 p-4 border rounded-md placeholder:text-2xl text-slate-900"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-slate-900 rounded-lg w-36 p-4 text-2xl text-slate-900 text-white"
            type="submit">Submit</button>
          </div>
        </div>
      </form>
      <div>

      </div>
    </div>
    </div>
  )
}
export default Contact