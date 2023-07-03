import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import trash from "./images/trash3.svg"

const Cart = () => {

  const {cart, removeItem, clear, carritoTotal, sumTotal} = useContext(CartContext);

    if (carritoTotal() === 0){
      return ( 
        <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el Carrito!</div>
                    </div>
                </div>
            </div>
        

      )
    }


  return (
    <div  className='container'>
      <div className='row'>
          <div className='col'>
            <h1>Productos seleccionados</h1>
          </div>
      </div>
      <div className='row'>
          <div className='col'>
             <table className='table'>
             <tbody>
                <tr>
                  <td colSpan={4}>&nbsp;</td>
                  <td className="text-end"><button className="btn btn-light" onClick={() => {clear()}} title="Vaciar Carrito">Vaciar Carrito</button></td>
                </tr>
              {
                cart.map(item => (
                  <tr key={item.id}>
                      <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                      <td>{item.titulo}</td>
                      <td>{item.cantidad} x ${item.precio}</td>
                      <td>${item.cantidad * item.precio}</td>
                      {/* <td><button className='btn btn-light' onClick={() => {removeItem(item.id)}} title='Eliminar producto'><img src={trash} alt="eliminar producto" width={35} /></button></td> */}
                      <td className="text-end"><button className="btn btn-light" onClick={() => {removeItem(item.id)}} title="Eliminar Producto"><img src={trash} alt="Eliminar Producto" width={32} /></button></td> 

                  </tr>
                ))
              }
              <tr>
                <td colSpan={3} className='text-end'>Total a pagar </td>
                <td className='text-center'>${sumTotal()}</td>
              </tr>
                </tbody>
             </table>
          </div>
      </div>

              {/* <h1>Cart</h1>
              <p>Total producto: {carritoTotal()}</p>
                <ul>
                    {cart.map(item => <li>{item.titulo + "(" + item.cantidad + ")"}</li>)}

                </ul> */}
            </div>
  )
}

export default Cart
