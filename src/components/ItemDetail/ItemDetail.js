import { Typography, CardContent, Box, Button, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { SwiperSlider } from './SwiperSlider'


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

 
const ItemDetail = ({data}) => {
    const { name, price, stock} = data 
    const [ quantity, setQuantity ] = useState(0)
    const [ talleSeleccionado, setTalleSeleccionado] = useState('')
    const [ sizeButton, setSizeButton] = useState([])

    const buttonSet =  () => {
        if (stock !== undefined) {
            setSizeButton(Object.keys(stock))
        }
    }
    useEffect(() => {
        buttonSet()
    }, [stock])
    

    return (
        <Box sx={{ margin:'auto', minHeight:'67vh' }}>
            <Paper 
                elevation={5}
                sx={{
                    width:'70%',
                    margin:'auto',
                    marginTop:'6rem',
                    textAlign: 'center',
                    maxHeight:'1000px'
                }}
            >           
                    <Grid 
                        container 
                        spacing={2}
                        justifyContent='center'
                        alignItems='center'
                    >
                    <Grid item xs={12} md={6} lg={6}>
                        <Box sx={{padding:1, boxSizing:'content-box', width:'70%', margin:'auto'}}>
                            <SwiperSlider data={data} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                            <CardContent sx={{display: 'flex', flexDirection:'column', alignItems:'center', justifyItems:'center'}}>
                                <Box>
                                    <Typography gutterBottom variant="h5" component="span" color='secondary' sx={{
                                        fontSize: '40px',
                                    }}>
                                        {name}
                                    </Typography>
                                </Box>
                                
                                <Box mt={3}>
                                    <Typography variant="h2" sx={{fontSize: '50px'}}>
                                        {`$${price}`}
                                    </Typography>
                                </Box>
                                <Box mt={3}>
                                    <Typography variant="h4" sx={{fontSize: '25px'}}>
                                        Disponibles:
                                    </Typography>
                                    <Typography variant="h6" >
                                            
                                        Talle L: { stock !== undefined && stock.L }
                                    </Typography>
                                    <Typography variant="h6" >
                                        Talle XL: { stock !== undefined && stock.XL }
                                    </Typography>     
                                </Box>
                                <Box sx={{display:'flex'}}>
                                    {
                                        sizeButton.map((size, i)=>{
                                            return (
                                                <Button key={i} onClick={()=>setTalleSeleccionado(size)} color='secondary' size="small" variant='contained' sx={{backgroundColor:'#9c27b0', marginRight:'5px'}}>{size}</Button>
                                                )
                                            })
                                        } 
                                </Box>
                                
                                {
                                    
                                }

                                {
                                    talleSeleccionado !== '' && (
                                        <Box mt={1}>
                                            {
                                                quantity >= 1 
                                                ?
                                                <Link to='/cart'>
                                                        <Button variant='contained' sx={{backgroundColor:'#9c27b0'}} >FINALIZAR COMPRA</Button>
                                                </Link>
                                                : <ItemCount data={data} size={talleSeleccionado} stock={stock[talleSeleccionado]} setQuantity={setQuantity}/>
                                            }
                                        </Box>
                                    )
                                }
                                
                            </CardContent>
                    </Grid>
                    </Grid>     
            </Paper>
        </Box>
  )
}

export default ItemDetail