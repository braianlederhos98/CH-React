import React, { useContext, useState } from 'react'
import { Box, Button, IconButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CartContext } from '../CartContext/CartContext'

const ItemCount = ({data, setQuantity}) => {
    const [ cantItems, setItem] = useState(1)
    const { stock } = data
    const { addToCart } = useContext(CartContext)

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
        setQuantity(cantItems)
        addToCart(data, cantItems)
    }



    return (
        <>
                <Box sx={{backgroundColor:'#9c27b0', fontSize: '3vw', borderRadius:'3px', display:'flex', justifyContent:'center', alignItems:'center'}} mb={1}>
                    <IconButton onClick={removeButton}>
                        <RemoveIcon sx={{backgroundColor:'white', borderRadius:'3px'}}/>
                    </IconButton>

                    {cantItems}

                    <IconButton onClick={addButton}>
                        <AddIcon sx={{backgroundColor:'white', borderRadius:'3px'}}/>
                    </IconButton>
                </Box>
                <Button size="small" variant='contained' onClick={handleButton} sx={{fontSize: '1.7vw', backgroundColor:'#9c27b0', color:'black', fontWeight:'bold' }}>COMPRAR</Button>
        </>
    ) 
}

export default ItemCount