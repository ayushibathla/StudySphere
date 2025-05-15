import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {

  const [isLoggedIn,setIsLoggedIn]= useState(false);

  return (
    <div className='h-screen w-screen bg-sky-600 flex flex-col '>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes className='bg-slate-900'>
        <Route path='/' element={<Home  isLoggedIn={isLoggedIn}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
      
      <feedback/>
    </div>
  );
}

export default App;
