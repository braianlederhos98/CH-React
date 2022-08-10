import React from 'react';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Box, IconButton } from '@mui/material';

const CartWidget = () => {

    fetch('https://pokeapi.co/api/v2/pokemon/4')
    .then(res=>res.json())

    return (
        <>
            <Box sx={{marginRight: '20px'}}>
                <IconButton>
                    <LocalGroceryStoreIcon sx={{color: '#555555'}} />
                </IconButton>
            </Box>
        </>
    )
}

export default CartWidget