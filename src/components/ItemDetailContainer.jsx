import React, { useEffect, useState } from 'react'
//import productos from "./json/productos.json" // array de productos
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';



const ItemDetailContainer = () => {
     const [item, setItem] = useState({})
     const {id} = useParams()

   /*  useEffect(() => {
        const promesa = new Promise((resolve) =>{
            setTimeout (() => {       //al cargar por item se pierde el logo- ¿no veo el motivo?  //cargar esto afecto el logo
                    let producto = productos.find(item => item.id === parseInt((id)));
                    resolve(producto);
            }, 2000)
        })
        promesa.then(data => {
          setItem(data);
        })

    }, [id])  */

    useEffect(() => {
      const db =getFirestore();
      const producto = doc(db, "items", id)
      getDoc(producto).then(resultado => {
        setItem({id:resultado.id, ...resultado.data()})
      });
    }, [id])


        

  return (
    <>
      <ItemDetail producto={item} />
    </>
  )
}

export default ItemDetailContainer
