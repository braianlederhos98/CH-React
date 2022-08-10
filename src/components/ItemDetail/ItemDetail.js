import { Card, CardMedia, Typography, CardContent, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({data}) => {
    const { id, nombre, precio, stock} = data 
    const [ quantity, setQuantity ] = useState(0)

    return (
        <Card sx={{
            width:'90%',
            margin:'auto',
            marginTop:'4.5rem',
            textAlign: 'center',
            minHeight:'200px',
            display: 'grid', 
            alignItems: 'center',
            gridTemplateColumns: '1fr 1fr'
        }}>    
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        src={`/assets/img/${id}.webp`}
                    />
                    
                    <CardContent sx={{display: 'flex', flexDirection:'column', alignItems:'center'  }}>
                        <Box>
                            <Typography gutterBottom variant="h5" component="span" color='secondary' sx={{
                                fontSize: '3vw',
                            }}>
                                {nombre}
                            </Typography>
                        </Box>
                        
                        <Box mt={3}>
                            <Typography variant="h2" sx={{fontSize: '2.7vw'}}>
                                {`$${precio}`}
                            </Typography>
                        </Box>
                        <Box mt={3}>
                            <Typography variant="h4" sx={{fontSize: '2vw'}}>
                                {`Disponibles: ${stock}`}
                            </Typography>
                        </Box>
                        <Box mt={1}>

                            {
                                quantity >= 1 
                                ?
                                    <Link to='/cart'>
                                        <Button variant='contained' sx={{backgroundColor:'#9c27b0'}}>FINALIZAR COMPRA</Button>
                                    </Link>
                                : <ItemCount data={data} setQuantity={setQuantity}/>
                            }
                        </Box>
                    </CardContent>
        </Card>
  )
}

export default ItemDetail