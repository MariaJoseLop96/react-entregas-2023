import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='container my-5'>
      <div className='row'>
         <div className='col'>
    
            <p className='text-center'>  {greeting}  </p>
         </div>
      </div>
      
    </div>
  )
}

export default ItemListContainer
