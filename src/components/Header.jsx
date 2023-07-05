import React from 'react'
import { NavLink } from 'react-router-dom'



const Header = () => {
  return (
    <div className='container-fluid'>
         <div> 
             <NavLink to={"/"}> <img src="./images/Retro_logo.svg" alt="logo"  width={100}/></NavLink> 
              <h1 className='titulo'>Gamer zone</h1>
        
         </div>        
      
            
    </div>
  )     
}

export default Header