import React from "react";
import Logo from '../assets/Logo.png';
import {Link} from 'react-router-dom';
import {toast} from 'react-hot-toast'
const Navbar = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div className="sticky top-0 bg-violetCustom z-50 shadow-md flex justify-between items-center w-screen px-12 py-4  mx-auto ">
      <Link to="/">
        <div className="flex">
          <img className='w-10 h-10' src={Logo} alt='Logo' loading="lazy"/>
          <p className="mt-2  text-slate-100  text-lg font-semibold">Tutorra</p>
        </div>
      </Link>
      <nav >
        <ul className="flex mt-2 gap-6 ml-3 text-slate-100 text-lg font-semibold">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4">
        { !isLoggedIn &&
          <Link to="/login">
            <button className="bg-state-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700  text-lg font-semibold">
              Login
            </button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to='/signup'>
            <button className="bg-state-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700   text-lg font-semibold">
              Sign up
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to='/'>
            <button onClick={()=>{
              setIsLoggedIn(false);
              toast.success("Logged out");
            }} className="bg-state-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700 ">
               Logout
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to='/dashboard'>
            <button className="bg-state-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
              Dashboard
            </button>
          </Link>
        }
      </div>
    </div>
  )
}
export default Navbar