import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sucessregister() {
  const Navigate=useNavigate()
  const handleback=(e)=>{
    e.preventDefault()
    Navigate('/login')
  }
  return (
    <>
    <div className='Sucessregister'>
      <h1>You Are Sucessfully Register !!!!</h1>
      
     </div>
     <div className='btn_div'>
      <button onClick={handleback} className='btn'>Go back and Login</button>
      </div>
    </>
     
  )
}

export default Sucessregister