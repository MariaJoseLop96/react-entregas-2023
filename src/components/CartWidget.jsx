import React, { useContext } from 'react'
import bag from "./images/bag.svg"
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'

const CartWidget = () => {

  const {carritoTotal} = useContext(CartContext)

  return (
    (carritoTotal() > 0) ?
      <Link type="button" class="btn btn-Secondary position-relative"   to={"/cart"}>
        <img src={bag} alt="Carrito"  width={24} />
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{carritoTotal()}</span>
    </Link> : ""
  )
}

export default CartWidget
