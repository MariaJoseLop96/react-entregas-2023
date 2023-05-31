import React, { useEffect } from 'react'
import productos from "./json/productos.json" // array de productos
const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const promesa = new Promise((resolve) =>{
            setTimeout (() => {
                    let producto = productos.find(item = item.id == 3);
                    setItem(producto);
            }, 2000)
        })
    })

  return (
    <>
      <ItemDetail producto={item} />
    </>
  )
}

export default ItemDetailContainer
