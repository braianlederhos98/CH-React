import React, { useState } from 'react'
import {createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    
    const addToCart = ({id, price, name, image, stock}, cantItems, size) => {
        
        const productIndex = cart.findIndex(productInCart => productInCart.id === id);
        const sizeIndex = cart.findIndex(sizeInCart => {
            return (sizeInCart.size === size && sizeInCart.id === id)
        })

        if (productIndex === -1) {
            setCart([...cart, {id, price, name, cantItems, stock, image, size}])
            setTotalPrice(totalPrice + (price * cantItems))
        } else {

            const cartCopy = [...cart]

            if ( sizeIndex === -1 ) {
                setCart([...cart, {id, price, name, cantItems, stock, image, size}])
                setTotalPrice(totalPrice + (price * cantItems))
            } else {
                cartCopy[sizeIndex].cantItems = cartCopy[sizeIndex].cantItems + cantItems 
                setCart(cartCopy)   
                setTotalPrice(totalPrice + (cartCopy[sizeIndex].price * cartCopy[sizeIndex].cantItems))
            }   
        }
    }

    //Clear
    const clear = () => {
        setCart([])
        setTotalPrice(0)
    }

    //Remove
    const removeItem = (id, size, price, cantItems) => {     
        
        const newCart = cart.filter( product => {
            if ( product.id === id && product.size !== size ) {
                return product
            } else {
                return product.id !== id
            }
        })
        setTotalPrice(totalPrice - (price*cantItems))
        setCart(newCart)
    }

    //RemoveQuantity
    const removeItemQuantity = ( stockSelected, size, idItem, price ) => {
        const cartCopy = [...cart]
        const productIndex = cartCopy.findIndex(productInCart => productInCart.id === idItem && productInCart.size === size);
        if ( cartCopy[productIndex].cantItems > 1 ) {
            cartCopy[productIndex].cantItems = cartCopy[productIndex].cantItems - 1
            setCart(cartCopy)
            setTotalPrice(totalPrice - cartCopy[productIndex].price)
        }
    }
    
    //AddItem
    const addItem = ( stockSelected, size, idItem, price ) => {
        const cartCopy = [...cart]
        const productIndex = cartCopy.findIndex(productInCart => productInCart.id === idItem && productInCart.size === size);
        if ( cartCopy[productIndex].cantItems < stockSelected[size] ) {
            cartCopy[productIndex].cantItems = cartCopy[productIndex].cantItems + 1
            setCart(cartCopy)
            setTotalPrice(totalPrice + cartCopy[productIndex].price)
        }
    }

    return (

        <CartContext.Provider value={{cart, addToCart, removeItem, clear, addItem, removeItemQuantity, totalPrice, setTotalPrice}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider