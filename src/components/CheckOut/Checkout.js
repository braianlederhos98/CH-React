import { Card, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import {CartContext} from '../CartContext/CartContext'

export const Checkout = () => {
  const {cart, removeItem, clear} = useContext(CartContext)
  
  console.log(
    {cart: cart},
    {clear: clear},
    {remove: removeItem}
  )

  return (
    <>
        <Container sx={{marginTop: '6rem'}}>
            <Card>
                <Typography>CHECKOUT</Typography>
            </Card>
        </Container>
    </>
  )
}
