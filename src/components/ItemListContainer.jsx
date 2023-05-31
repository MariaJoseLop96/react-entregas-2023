import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import productos from "./json/productos.json" // array de productos
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

    useEffect(() => {
      const promesa = new Promise ((resolve) => {

      setTimeout(() => {
        resolve (productos)
      },2000);
      });
        //variable que recibe la promesa 
      promesa.then(datos => {setItems(datos)})
    }, []);
  




  return (
    <div className='container my-5'>
      <div className='row'>
            <ItemList  items={items}/>
            <ItemCount stock={10} />
         </div>
      </div>

  
  )
}

export default ItemListContainer
