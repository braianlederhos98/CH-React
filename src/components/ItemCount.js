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
            <Card sx={{display:'flex', flexDirection:'column', width:'10vw'}}>
                <Box sx={{backgroundColor:'#9c27b0', fontSize: '1.7rem'}}>
                    <IconButton onClick={removeButton}>
                        <RemoveIcon/>
                    </IconButton>

                    {cantItems}

                    <IconButton onClick={addButton}>
                        <AddIcon/>
                    </IconButton>
                </Box>
                <Button size="small" variant='outlined' sx={{fontSize: '1rem', backgroundColor:'white', color:'black'}}>COMPRAR</Button>
            </Card>
        </>
    ) 
}

export default ItemCount