import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({}) => {
    const navigate=useNavigate()
  return (
    <div className='nav'>
      <h1>LOGO</h1>
      <ul>
        <li onClick={()=>navigate("/")} >About</li>
        <li onClick={()=>navigate("/mohamed")} >Contact</li>
        <li onClick={()=>navigate("/services")} >Services</li>
      </ul>
    </div>
  )
}

export default Navbar
