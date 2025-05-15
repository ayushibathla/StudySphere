import React from 'react';
import Cards from '../components/Cards';
import Feedback from '../components/Feedback';
const Home = ({isLoggedIn}) => {
  return (
    <div >
      
      <div className="flex justify-center items-center text-slate-100 text-4xl min-h-screen ">
        
      <Cards/>
      
      </div>
      <Feedback/>
    </div>
  )
}
export default Home
