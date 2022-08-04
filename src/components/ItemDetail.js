import { Card, Container, CardMedia, Typography, CardContent, Box } from '@mui/material'
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({data}) => {
    const { id, nombre, precio, stock} = data 
    
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
                            <ItemCount stock={stock}/>
                        </Box>
                    </CardContent>
        </Card>
  )
}

export default ItemDetail