import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(()=>{
        const CarritoFromLocal = localStorage.getItem('carrito')
        if (CarritoFromLocal) {
            return JSON.parse(CarritoFromLocal)
        }else {
            return []
        }
    })
    const [totalPrice, setTotalPrice] = useState(0)

    const successAlert = (text)=> {
        Toastify({
          text,
          duration: 3000,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            marginTop: '4rem'
          }
        }).showToast();
    }
    
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
        localStorage.removeItem('carrito')
        successAlert('¡Limpieza de carrito realizada con éxito!')
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
        successAlert('¡Producto eliminado!')
    }

    //RemoveQuantity
    const removeItemQuantity = ( size, idItem ) => {
        const cartCopy = [...cart]
        const productIndex = cartCopy.findIndex(productInCart => productInCart.id === idItem && productInCart.size === size);
        if ( cartCopy[productIndex].cantItems > 1 ) {
            cartCopy[productIndex].cantItems = cartCopy[productIndex].cantItems - 1
            setCart(cartCopy)
            setTotalPrice(totalPrice - cartCopy[productIndex].price)
        }
    }
    
    //AddItem
    const addItem = ( stockSelected, size, idItem ) => {
        const cartCopy = [...cart]
        const productIndex = cartCopy.findIndex(productInCart => productInCart.id === idItem && productInCart.size === size);
        if ( cartCopy[productIndex].cantItems < stockSelected[size] ) {
            cartCopy[productIndex].cantItems = cartCopy[productIndex].cantItems + 1
            setCart(cartCopy)
            setTotalPrice(totalPrice + cartCopy[productIndex].price)
        }
    }

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])

    return (

        <CartContext.Provider value={{cart, addToCart, removeItem, clear, addItem, removeItemQuantity, totalPrice, setTotalPrice}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider