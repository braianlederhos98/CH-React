import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, IconButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CartContext } from '../CartContext/CartContext'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const ItemCount = ({data, setQuantity, size, stock}) => {
    const { id } = data
    const [ cantItems, setItem] = useState(1)
    const { addToCart, cart } = useContext(CartContext)

    const successAlert = ()=> {
        Toastify({
          text: "¡Agregado al carrito con éxito!",
          duration: 3000,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            marginTop: '4rem'
          }
        }).showToast();
      
    }

    const addButton = () => {
        if (cantItems < stock) {
            setItem(cantItems + 1)
        }
    }

    const removeButton = () => {
        if (cantItems <= stock && cantItems > 1) {
            setItem(cantItems - 1)
        }
    }
 
    const handleButton = () => {
        const searchItem = cart.find((item)=> item.id === id && item.size === size)
        if (searchItem) {
            if ((searchItem.cantItems+cantItems) < stock) {
                setQuantity(cantItems)
                addToCart(data, cantItems, size)
                successAlert()
            } else {
                console.warn('STOCK INSUFICIENTE')
            }
        } else {
            setQuantity(cantItems)
            addToCart(data, cantItems, size)
            successAlert()
        }
        
    }

    useEffect(() => {
      setItem(1)
    }, [stock])
    
    return (
        <>
                <Box sx={{color:'white',backgroundColor:'#9c27b0', fontSize: '30px', borderRadius:'3px', display:'flex', justifyContent:'center', alignItems:'center'}} mb={1}>
                    <IconButton onClick={removeButton}>
                        <RemoveIcon sx={{backgroundColor:'white', borderRadius:'3px'}}/>
                    </IconButton>

                    {cantItems}

                    <IconButton onClick={addButton}>
                        <AddIcon sx={{backgroundColor:'white', borderRadius:'3px'}}/>
                    </IconButton>
                </Box>
                <Button size="small" variant='contained' onClick={handleButton} sx={{fontSize: '20px', backgroundColor:'#9c27b0'}}>COMPRAR</Button>
        </>
    ) 
}

export default ItemCount