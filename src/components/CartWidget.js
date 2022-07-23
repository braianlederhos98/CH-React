import React from 'react';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Box, IconButton } from '@mui/material';

const CartWidget = () => {
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