import { Card, Container, CardMedia, Typography, CardContent, Box } from '@mui/material'
import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({data}) => {
    const { id, nombre, precio, stock} = data 
    
    return (

    <Container sx={{
        marginTop: 6,
        height: '80vh', 
        width: '100vw',
        display: 'grid',
        justifyContent:'center',
        alignContent: 'center'
    }}>
        <Card sx={{
             width: '80vw', 
             textAlign: 'center', 
             height: '80vh', 
             display: 'grid', 
             gridTemplateColumns: '1fr 1fr',
             alignItems: 'center'
                 
        }}>    
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        src={`/assets/img/${id}.webp`}
                        sx={{height:'100%', width:'100%'}}
                    />
                    
                    <CardContent sx={{display: 'flex', flexDirection:'column', alignItems:'center'  }}>
                        <Box>
                            <Typography gutterBottom variant="h5" component="span" color='secondary' sx={{
                                fontSize: '80px',
                            }}>
                                {nombre}
                            </Typography>
                        </Box>
                        
                        <Box mt={6}>
                            <Typography variant="h2">
                                {`$${precio}`}
                            </Typography>
                        </Box>
                        <Box mt={6}>
                            <Typography variant="h4">
                                {`Disponibles: ${stock}`}
                            </Typography>
                        </Box>
                        <Box mt={1}>
                            <ItemCount stock={stock}/>
                        </Box>
                    </CardContent>
        </Card>
    </Container>
  )
}

export default ItemDetail