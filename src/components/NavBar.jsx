import React from 'react'
//import ItemListContainer from './ItemListContainer'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active text-dark"  aria-current="page" to={"/categoria/Consolas"}>Consolas</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark"  to={"/categoria/Juegos"}>Juegos</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark"  to={"/categoria/Joystick"}>Joystick</NavLink>
            </li>
            <CartWidget />
        </ul>
        
        
    )

    
}

export default NavBar
