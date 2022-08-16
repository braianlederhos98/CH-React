import React, { useContext } from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function CartWidget() {
    
    const { cart } = useContext(CartContext)
    let totalProducts = 0
    cart.map((cart)=> totalProducts = totalProducts + cart.cantItems )
    
    return (
        <>
            {
                totalProducts >= 1 && (
                    <Link to="/cart">
                        <Box sx={{marginRight: '20px'}}>
                            <IconButton aria-label="cart" color='secondary'>
                                <StyledBadge badgeContent={totalProducts} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Box>
                    </Link>
                )
            }
        </>
    );
}