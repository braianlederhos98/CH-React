import { ArrowForwardIos, Delete } from '@mui/icons-material'
import { Box, Button, Card, CardMedia, Container, IconButton, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../CartContext/CartContext'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ModalComponent from '../Modal/ModalComponent'



export const Checkout = () => {
  const {cart, removeItem, clear, removeItemQuantity, addItem} = useContext(CartContext)
  const [total, setTotal] = useState([0])

  const totalCart = () =>{
    let subTotals = [0]
    
    cart.map((prod)=>{
      subTotals.push( prod.cantItems * prod.price )
    })

    let newTotal = subTotals.reduce((acc,item)=>acc=acc+item)
    setTotal(newTotal)
  }


  useEffect(() => {
    totalCart()
  }, [cart])

  

  return (
    <>
        <Container sx={{marginTop: '6rem', minHeight:'67vh'}}>
            <Card>
                <Typography textAlign="center">Carrito</Typography>
                {
                  cart.map((product, i)=>{
                    return (
                      <Paper key={product.id + i} elevation={1} sx={{ display: 'flex', justifyContent:'space-around', alignItems:'center', marginBottom:'10px'}}>
                        <CardMedia
                          component="img"
                          alt={`${product.name}`}
                          src={`/assets/img/${product.image}`}
                          sx={{maxWidth:'180px', height:'100%'}}
                        />
                        <Box>
                          <Typography component="div" variant="h5">
                            Nombre: {`${product.name}`}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Talle: {`${product.size}`}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Cantidad: {`${product.cantItems}`}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Precio por unidad: {`$${product.price}`}
                          </Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
                          <Typography component="div" variant="h5" >
                            Subtotal: {`$${product.price*product.cantItems}`}
                          </Typography>
                          <Box sx={{display:'flex', marginTop:'10px', color:'black'}} >
                            <IconButton onClick={()=>removeItemQuantity(product.size, product.id)}>
                              <RemoveIcon/>
                            </IconButton>
                            <IconButton onClick={()=>addItem(product.stock, product.size, product.id)}>
                              <AddIcon/>
                            </IconButton>
                            <IconButton onClick={()=>removeItem(product.id, product.size, product.price, product.cantItems)} >
                              <Delete/>
                            </IconButton>
                          </Box>
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
                        <ModalComponent total={total}/>
                      </>
                    ) : (
                      <>
                        <Box display='flex' flexDirection='column' mt={2}>
                          <Typography textAlign="center" fontWeight='bold'>
                            Vacio
                          </Typography>
                          <Link to='/'>
                            <Button variant="outlained"  endIcon={<ArrowForwardIos />} sx={{fontWeight:'bold', fontSize:'1rem', color:'black'}}>
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
