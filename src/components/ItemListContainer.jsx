import React, { useEffect, useState } from 'react'
//import productos from "./json/productos.json" // array de productos
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
//import {getFirestore, doc, getDoc} from "firebase/firestore"; // trae una solo producto
//import {getFirestore, collection, getDocs} from "firebase/firestore"   // acceder a uuna coleccion de doc desde firestore
//import {getFirestore, collection, getDocs, where, query, addDoc} from "firebase/firestore"
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore"

const ItemListContainer = () => {
 
  const [items, setItems] = useState([]);
  const {id} = useParams()
   /* entrega 2
    useEffect(() => {
      const promesa = new Promise ((resolve) => {

      setTimeout(() => {
        //categorias para filtrar productos en base a categoria
        resolve (id ? productos.filter(item => item.categoria === id) : productos);
      },2000);
      });
        //variable que recibe la data- promesa 
      promesa.then(datos => {setItems(datos)})
    }, [id]);  */
        // esto muestra un solo producto desde el firebase
     /*useEffect(() => {
      const db = getFirestore();
       const producto = doc(db, "items", "1VmDo1PcaCkLreRahsZ2")
       getDoc(producto).then(resultado => {
        if (resultado.exists()){
          setItems({id:resultado.id, ...resultado.data()})
        }else{
          console.error("error no se encuentra el producto ")
        }
      })
    }, []);    */
        // acceder a uuna coleccion de doc desde firestore
       /* useEffect(() => {
          const db = getFirestore();
          const itemsCollection = collection(db, "items");
          getDocs(itemsCollection).then(resultado => {
            if (resultado.size > 0){
              setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})))
            }
            
          })
        }, []);   */

      //  

      //acceder a una coleccion de elementos
       useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
          if (resultado.size > 0){
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})))
          }else{
            console.error("erro no se encuentra producto")
          }
          
        })
      }, [id]);    

       //clase after 3  - proceso de importancion 
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
            <ItemList  items={items}/> 
           
                        {/* <div className='col-md-4'>
                          <img src={items.imagen} alt={items.nombre} className='img-fluid' />
                       </div>
                       <div className='col-md-4'>
                          <h1>{items.nombre}</h1>
                         <p>${items.precio}</p>
                       </div>  */}







      </div>
    </div>

  
  )
}

export default ItemListContainer
