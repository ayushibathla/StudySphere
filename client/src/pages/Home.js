import React from 'react';
// import Cards from '../components/Cards';
import Testimonial from './Testimonial';
import download from '../assets/download.png';
import Navbar from '../components/Navbar';

const Home = ({isLoggedIn}) => {
  return (
    <div >
      <Navbar/>
      {/* <div className="flex justify-center items-center text-slate-100 text-4xl min-h-screen ">
        
      <Cards/>
      
      </div> */}
      <div  className='h-screen w-screen overflow-hidden flex justify-center items-center text-slate-900 min-h-screen bg-white px-12 '>
        <div className='flex flex-col gap-6'>
          <div className='text-8xl '>Empower Your Professional Growth with Elite Training</div>
          <div className='text-4xl'>Step into a transformative space where visionary learning meets cutting-edge expertise, paving the way for unmatched professional success</div>
        </div>
        <div>
          <img className='w-full ' src={download} alt="Professional training" />
        </div>
      </div>
      <Testimonial/>
    </div>
  )
}
export default Home
