import React, { useState } from 'react'

const ItemCount = () => {

    const[items, SetItems] = useState(1)

    //FUNCION PARA INCREMENTAR CARRITO
    const incrementarCarrito = () => {

    }

    const decrementarCarrito = () =>{

    }
  return (

     <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={decrementarCarrito} >-</button>
                        <button type="button" className="btn btn-light">{items}</button>
                        <button type="button" className="btn btn-light" onClick={incrementarCarrito} >+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-light">Agregar al Carrito</button>
                </div>
            </div>
        </div>      
    

  )
}

export default ItemCount
