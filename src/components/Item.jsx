import React from 'react'
import { Link } from 'react-router-dom'

// componente a desarrollar -mostrar info producto
const Item = ({item}) => {
  return (
    <>
          <div class="card">
            <Link to={"/item/" + item.id} className='text-dark text-decoration-none'>
               <img src={item.imagen} class="card-img-top" alt={item.titulo}/>
               <div class="card-body">
                <h3>{item.titulo}</h3>
               <p class="card-text">${item.precio}</p>
              </div>
            </Link>
         </div>



    </>
  )
}

export default Item
