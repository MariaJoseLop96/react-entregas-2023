import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import CartWidget from './CartWidget'


const Header = () => {
  return (
    <div className='container-fluid'>
      <div> 
               <img src="./images/logo.jpg" alt="logo"  width={100}/>
              <h1>Gamer zone</h1>
        
        </div> 
               
              <CartWidget />
            <NavBar />
            
    </div>
  )     
}

export default Header