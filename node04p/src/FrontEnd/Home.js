import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/loginregister.png';
function Home() {
  return (
   <>
   <div className='home'>
    <div className='logo'> <img src={Logo} alt="React Logo" className='img'/></div>
    <div className='login_Register'>
        <Link to="/login" className='path'>Login</Link>
        <Link to="/register" className='path'>Register</Link>
    </div>
   </div>
   </>
  )
}

export default Home