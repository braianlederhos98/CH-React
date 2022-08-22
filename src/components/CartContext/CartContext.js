import React, { useState } from 'react'
import {createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    
    const addToCart = ({id, price, name, image}, cantItems) => {
        const productIndex = cart.findIndex(productInCart => productInCart.id === id);
        if (productIndex === -1) {
            setCart([...cart, {id, price, name, cantItems, image}])
        } else {
            const cartCopy = [...cart]
            cartCopy[productIndex].cantItems = cartCopy[productIndex].cantItems + cantItems 
            setCart(cartCopy)
        }
    }

    //Clear
    const clear = () => setCart([])

    //Remove
    const removeItem = (id) => {            
        const newCart = cart.filter((product)=>{
            return product.id !== id
        })
        setCart(newCart)
    }

    return (

        <CartContext.Provider value={{cart, addToCart, removeItem, clear}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider