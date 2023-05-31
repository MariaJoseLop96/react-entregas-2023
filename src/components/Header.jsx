import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import CartWidget from './CartWidget'


const Header = () => {
  return (
    <div className='container-fluid'>
         <div> 
               <img src="./images/Retro_logo.svg" alt="logo"  width={100}/>
              <h1 className='titulo'>Gamer zone</h1>
        
         </div>        
            {/* <NavBar /> */}
            
    </div>
  )     
}

export default Header