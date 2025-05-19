import React from "react";
import about from '../assets/about.png';
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div >
      <Navbar/>
      <div  className='flex justify-center items-center text-slate-900 min-h-screen bg-white'>
            <div>
              <img className='w-96 h-full' src={about} alt="Professional training" />
            </div>
            <div className='flex flex-col gap-6'>
              <div className='text-8xl '>Shaping Tomorrow’s Leaders: The Tutorra Approach to Lifelong Learning
            </div>
              <div className='text-4xl'>At Tutorra, we go beyond courses—we craft transformative learning journeys. Each masterclass opens doors to innovation, deep expertise, and a thriving professional community.</div>
            </div>
           
          </div>


          
          <div className="flex flex-col justify-center items-center mx-12 text-slate-900 min-h-screen bg-white gap-4">
            <div className="flex flex-col gap-4 ">
            <div className="bg-violetCustom h-2 w-60 rounded full"></div>
            <div className="text-6xl">
              About Us 
            </div>
          </div>
          <div className="mx-32 text-xl text-center text-slate-500 mt-6">
              Welcome to Tutorra—where transformative learning meets professional ambition.
              We craft masterclasses that go beyond traditional education, designed to elevate your expertise across key industries such as Banking, Healthcare, Energy, and Human Resources. Our hybrid learning experiences—delivered both in-person and virtually—combine interactive engagement with real-world insights from seasoned industry leaders.
              At Tutorra, we don’t just provide courses; we design immersive journeys that refine your skills, expand your network, and reshape your career trajectory. Join us in redefining the future of learning and professional growth.
              Join a thriving community of forward-thinking professionals who are reshaping the narrative of learning. At Tutorra, we’re not just redefining professional development—we're elevating it into an experience that transforms careers, enriches lives, and prepares you for what’s next.


            </div>
          </div>
    </div>
  )
}
export default About


