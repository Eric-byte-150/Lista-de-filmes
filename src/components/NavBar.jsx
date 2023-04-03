import React from 'react'
import { useState} from 'react'
import {Link,useNavigate } from "react-router-dom"
import {BiCameraMovie, BiSearchAlt} from 'react-icons/bi'
import"../pages/MovieGrid.css"

const NavBar = () => {
 
  return (
     <nav id="navbar">
    <h2>
      <Link to="/"><BiCameraMovie/>  MoviesLib</Link>  
    </h2>
   </nav>
   
  )
}

export default NavBar