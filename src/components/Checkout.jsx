import React from 'react'
import { CartContext } from './context/CartContext';
import { useState } from 'react';
import { useContext } from 'react';
import { collection, getFirestore, addDoc,} from 'firebase/firestore';
import { Link } from 'react-router-dom';


const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, clear,  sumTotal} = useContext(CartContext)
    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }
        const buyer = {nombre:nombre, telefono:telefono, email:email }
        const items = cart.map(item => ({id:item.id, titulo:item.titulo, precio:item.precio})) 
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumTotal();
        const order = {buyer:buyer, items:items, date:date, tota:total}
        console.log(order)

        //Insertar una orden en Firestore 
        const db = getFirestore();
        const OrdersCollection = collection(db, "orders");
        addDoc(OrdersCollection, order).then(resultado =>{
           
          setOrderId(resultado.id)  
          clear();
        })
        .catch(resultado => {
            console.log("no se puede generar la compra")
        })   

        //editar un documen de firestore
      /*
        const orderDoc = doc(db, "orders", orderId);
        updateDoc(orderDoc, {total:10000})*/

    }


  return (
        <div  className='container'>
            <div className='row'>
               <div className= "col-md-3 offset-md-1 ">
                    <form>
                        <div className='mb-3'>
                            <label className="form-label">Nombre</label>
                            <input type="text" className='form-control' onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className='mb-3'>
                            <label className="form-label">Email</label>
                            <input type="text" className='form-control' onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className='mb-3'>
                            <label className="form-label">Telefono</label>
                            <input type="text" className='form-control'  onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type='button' className='btn btn-primary' onClick={generarOrden}> Generar compra</button>
                    </form>
               </div>
               <div className='col-md-6 offset-md-1'>
               <table className='table'>
             <tbody>
              
              {
                cart.map(item => (
                  <tr key={item.id}>
                      <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                      <td>{item.titulo}</td>
                      <td>{item.cantidad} x ${item.precio}</td>
                      <td>${item.cantidad * item.precio}</td>
                     

                  </tr>
                ))
              }
              <tr>
                <td colSpan={3} className='text-end'>Total a pagar</td>
                <td className='text-center'>${sumTotal()}</td>
              </tr>
                </tbody>
             </table>
               </div>
            </div>
            <div className="row mt-3" >
                <div className="col text-center">
                {orderId ? <div className="alert alert-warning" role="alert">
                        <h1 className="fs-1 text">Gracias por tu Compra!</h1>
                        <p>Tu Orden de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                    <Link to={"/"} className='btn btn-light'>ir a Home</Link>
                </div>
            </div>
        </div>   
     
  )
}

export default Checkout
