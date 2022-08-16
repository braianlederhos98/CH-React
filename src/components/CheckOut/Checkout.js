import { ArrowForwardIos, Delete } from '@mui/icons-material'
import { Box, Button, Card, CardMedia, Container, IconButton, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../CartContext/CartContext'

export const Checkout = () => {
  const {cart, removeItem, clear} = useContext(CartContext)
  const [total, setTotal] = useState([0])
  
  const totalCart = () =>{
    let subTotals = [0]
    
    cart.map((prod)=>{
      subTotals.push( prod.cantItems * prod.precio )
    })

    let newTotal = subTotals.reduce((acc,item)=>acc=acc+item)
    setTotal(newTotal)
  }

  useEffect(() => {
    totalCart()
  }, [cart])
  

  return (
    <>
        <Container sx={{marginTop: '6rem'}}>
            <Card>
                <Typography textAlign="center">Carrito</Typography>
                {
                  cart.map((product)=>{
                    return (
                      <Paper key={product.id} elevation={1} sx={{ display: 'flex', justifyContent:'space-around', alignItems:'center', marginBottom:'10px'}}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          src={`/assets/img/${product.id}.webp`}
                          sx={{maxWidth:'180px', maxHeight:'180px'}}
                        />
                        <Box>
                          <Typography component="div" variant="h5">
                            Nombre: {`${product.nombre}`}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Cantidad: {`${product.cantItems}`}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Precio por unidad: {`$${product.precio}`}
                          </Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
                          <Typography component="div" variant="h5" >
                            Subtotal: {`$${product.precio*product.cantItems}`}
                          </Typography>
                          <IconButton onClick={()=>removeItem(product.id)} sx={{marginTop:'10px', color:'black'}}>
                            <Delete/>
                          </IconButton>
                        </Box>
                      </Paper>
                    )
                  })
                }
                <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center', marginBottom:'10px'}}>
                  {
                    cart.length >= 1 ? (
                      <>
                        <Link to='/'>
                          <Button variant="outlained"  endIcon={<Delete />} sx={{fontWeight:'bold', fontSize:'1rem', color:'black'}} onClick={clear}>
                            Vaciar Carrito
                          </Button>
                        </Link>
                        <Typography textAlign="center" fontWeight='bold'>
                          TOTAL = ${ total }
                        </Typography>
                      </>
                    ) : (
                      <>
                      <Box display='flex' flexDirection='column' mt={2}>
                        <Typography textAlign="center" fontWeight='bold'>
                          Vacio
                        </Typography>
                        <Link to='/'>
                          <Button variant="outlained"  endIcon={<ArrowForwardIos />} sx={{fontWeight:'bold', fontSize:'1rem', color:'black'}} onClick={clear}>
                            Ir a inicio
                          </Button>
                        </Link>
                      </Box>
                      </>
                    )

                  }
                  

                  
                </Box>
            </Card>
        </Container>
    </>
  )
}
