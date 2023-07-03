import React, { createContext, useState } from 'react'
export const CartContext = createContext();

const CartContextProvider = ({children})  => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(product => product.id === item.id);
            cart[pos].cantidad += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, cantidad:quantity}]);
        }
    };

    //eliminar un producto del carrito     //46:00
    const removeItem = (id) => {
        const items = cart.filter(product => product.id !== id);
        setCart([...items]);
    };
    //vaciar todo el carrito
    const clear = () => {
        setCart([]);
    };
    //
    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    };
     // profe usa cartTotal
    const carritoTotal = () => {
        return cart.reduce((acum, item) => acum += item.cantidad, 0);
    }

    const sumTotal = () => {
        return cart.reduce((acum, item) => acum += item.cantidad * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, carritoTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
