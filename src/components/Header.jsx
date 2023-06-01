import React from 'react'
import { NavLink } from 'react-router-dom'
//import Footer from './Footer'
//import NavBar from './NavBar'
//import CartWidget from './CartWidget'
//import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='container-fluid'>
         <div> 
             <NavLink to={"/"}> <img src="./images/Retro_logo.svg" alt="logo"  width={100}/></NavLink> 
              <h1 className='titulo'>Gamer zone</h1>
        
         </div>        
            {/* <NavBar /> */}
            
    </div>
  )     
}

export default Header