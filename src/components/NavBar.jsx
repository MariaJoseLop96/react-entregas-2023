import React from 'react'
import ItemListContainer from './ItemListContainer'

const NavBar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active text-dark" aria-current="page" href="#">Consolas</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Juegos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Joystick</a>
            </li>

        </ul>
    )
}

export default NavBar
