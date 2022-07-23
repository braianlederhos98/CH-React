import React, { useState } from 'react'
import { Box, Button, IconButton } from '@mui/material'
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
            <Box>
                <IconButton onClick={removeButton}>
                    <RemoveIcon/>
                </IconButton>

                {cantItems}

                <IconButton onClick={addButton}>
                    <AddIcon/>
                </IconButton>
            </Box>
            <Button size="small" variant='contained' color='secondary'>COMPRAR</Button>
        </>
    ) 
}

export default ItemCount