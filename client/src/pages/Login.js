import React from 'react';
import  Loginimg from '../assets/student.jpeg'
import Template from '../components/Template';
import Navbar from '../components/Navbar';

const Login = ({setIsLoggedIn}) => {
  return (
    <div className=''>
      <Navbar/>
      <div>
        <Template
        title="Welcome Back"
        desc1="Build skills for today ,tomorrow and beyond"
        desc2="Education to future-proof your career"
        image={Loginimg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        />
        <div>
        <img src='logi'></img>
        </div>
      </div>

    </div>
  )
}
export default Login