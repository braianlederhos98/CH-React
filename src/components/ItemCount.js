import React, { useState } from 'react'
import { Box, Button, Card, IconButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const ItemCount = ({stock}) => {
    const [ cantItems, setItem] = useState(1)

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
                <Button size="small" variant='outlined' sx={{fontSize: '1.7vw', backgroundColor:'white', color:'black'}}>COMPRAR</Button>
        </>
    ) 
}

export default ItemCount