import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore"
import Loading from './Loading';

const ItemListContainer = () => {
 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams()

      //acceder a una coleccion de elementos
       useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
          if (resultado.size > 0){
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})))
            setLoading(false);
          }else{
            console.error("erro no se encuentra producto")
          }
          
        })
      }, [id]);    

       //clase after 3  - proceso de importancion -solo se hace una sola vez!!
        /*
       useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        productos.forEach(producto => {
          addDoc(itemsCollection, producto);
        });
        console.log("productos cargados")
        }, []);  */
       


  return (
    <div className='container my-5'>
      <div className='row'>
      {loading ? <Loading /> :  <ItemList  items={items}/>}
      </div>
    </div>

  
  )
}

export default ItemListContainer
