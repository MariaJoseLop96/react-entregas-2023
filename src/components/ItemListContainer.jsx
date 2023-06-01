import React, { useEffect, useState } from 'react'
import productos from "./json/productos.json" // array de productos
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {id} = useParams()
    useEffect(() => {
      const promesa = new Promise ((resolve) => {

      setTimeout(() => {
        //categorias para filtrar productos en base a categoria
        resolve (id ? productos.filter(item => item.categoria === id) : productos);
      },2000);
      });
        //variable que recibe la data- promesa 
      promesa.then(datos => {setItems(datos)})
    }, [id]);
  




  return (
    <div className='container my-5'>
      <div className='row'>
            <ItemList  items={items}/>
           
         </div>
      </div>

  
  )
}

export default ItemListContainer
