import React from 'react'
import "../style/Navbar.css"
import { Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
     <>
    <div id="navbarcont">
    <div> 
    <img id="navbarlogo" src="https://static.vecteezy.com/system/resources/previews/007/719/700/original/truck-logistic-silhouette-logo-template-perfect-for-delivery-or-transportation-industry-logo-simple-with-red-color-vector.jpg" alt="logo" />
    </div> 
              <div id="navbaricons">
                  
     <Link to="/Home"><h1>Home</h1></Link> 
    <Link to="/Feature"><h1>Feature</h1></Link>   
    <Link to="/Industry"><h1>Industry</h1></Link>        
    <Link to="/"><h1>About Us</h1></Link>
    <Link to="/Contactus"><h1>Contact Us</h1></Link>
    </div>       
   
            
              <div id='getdemoo'>
                   <Link to="/Demo" id="getd">GetDemo</Link>
              </div>    
   
              
    

   </div>
    </>
  )
}
