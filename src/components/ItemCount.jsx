import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'

const ItemCount = ({stock}) => {

    const[items, setItems] = useState(1)
    //mas de esto no puedo seleccionar
    const [itemStock, setItemStock] = useState(stock) //10
  //  const [itemAdded, setItemAdded] = useState(false);

    //FUNCION PARA INCREMENTAR CARRITO   //incrementarStock uso el profe
    const incrementarCarrito = () => {
        if (items < itemStock){
            setItems(items + 1);

        }

    }
        // decrementarStock puso profe
    const decrementarCarrito = () =>{
        if (items > 1){
            setItems(items - 1);
        }
    }
        /// funcion que descuenta del stock
    const onAdd = () =>{
        if (items <= itemStock){
            setItemStock(itemStock - items);
            setItems(1);
          //  setItemAdded(true);

        }

    }
    //efecto para modificar la cantidad de stockprofe puso ITEMSTOCK
    useEffect(() =>{
        setItemStock(stock);
    }, [stock] )

  return (

     <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={decrementarCarrito} >-</button>
                        <button type="button" className="btn btn-light">{items}</button>
                        <button type="button" className="btn btn-light" onClick={incrementarCarrito} >+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* <div className="col">
                   {itemAdded ? <Link to={"/cart"} className="btn btn-light" >Finalizar compra</Link> : <button type="button" className="btn btn-light" onClick={onAdd}>Agregar al Carrito</button>}
                </div> */}
                 <div className="col">
                    <button type="button" className="btn btn-light" onClick={onAdd}>Agregar al Carrito</button>
                </div>

            </div>
        </div>      
    

  )
}

export default ItemCount
