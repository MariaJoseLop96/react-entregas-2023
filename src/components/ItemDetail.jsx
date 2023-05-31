import React from 'react'
// detalle 1 producto
const ItemDetail = ({producto}) => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-3 offset-md-3'>
                <img src={producto.imagen} alt={producto.titulo} className='img-fluid' />
            </div>
            <div className='col-md-3'>
                    <h1>{producto.titulo}</h1>
                    <p>{producto.precio}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
