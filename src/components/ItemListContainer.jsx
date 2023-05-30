import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='container my-5'>
      <div className='row'>
         <div className='col'>
    
            <p className='text-center'>  {greeting}  </p>
            <ItemCount />
         </div>
      </div>
      
    </div>
  )
}

export default ItemListContainer
