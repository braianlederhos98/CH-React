import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, IconButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CartContext } from '../CartContext/CartContext'

const ItemCount = ({data, setQuantity, size, stock}) => {
    const { id } = data
    const [ cantItems, setItem] = useState(1)
    const { addToCart, cart } = useContext(CartContext)

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
            } else {
                console.warn('STOCK INSUFICIENTE')
            }
        } else {
            setQuantity(cantItems)
            addToCart(data, cantItems, size)
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