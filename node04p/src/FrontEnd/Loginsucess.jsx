import React from 'react'
import { useNavigate } from 'react-router-dom'

function Loginsucess() {
  const Navigate=useNavigate()
  const handlelogout=()=>{
    localStorage.removeItem("token")
   Navigate('/login')
  }
  return (
    <>

    <div className='Loginsucess'>
        <h1>Welcome To My Home Page</h1>
    </div>
    <div className='logout_div'>
    <button onClick={handlelogout} className='logout'>Logout</button>
    </div>
    </>
    
  )
}

export default Loginsucess