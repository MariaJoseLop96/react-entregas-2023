import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div>
        <img src="./images/logo.jpg" alt="logo"  width={100}/>
        <h1>Gamer zone</h1>


      <NavBar />
      <Footer />
    </div>
  )     
}

export default Header
