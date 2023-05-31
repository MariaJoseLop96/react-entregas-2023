import React from 'react'
import Item from './Item'
// agrupador de Item
const ItemList = () => {
  return (  
     <div>
        {Item.map(item => <div key={item.id} className='col-md-4'>
           <Item item={item} />
           </div>)}
    </div>
    

  )
}

export default ItemList
