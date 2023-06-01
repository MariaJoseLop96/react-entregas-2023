import React, { useEffect, useState } from 'react'
import productos from "./json/productos.json" // array de productos
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
     const [item, setItem] = useState({})

     useEffect(() => {
        const promesa = new Promise((resolve) =>{
            setTimeout (() => {
                    let producto = productos.find(item => item.id === 3);
                    resolve(producto);
            }, 2000)
        })
        promesa.then(data => {
          setItem(data);
        })

    }, [])

  return (
    <>
      <ItemDetail producto={item} />
    </>
  )
}

export default ItemDetailContainer
