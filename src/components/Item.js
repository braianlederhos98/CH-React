import React from 'react';
import { Grid, Typography, CardMedia, CardContent, Card, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({data}) => {
    
    const { id, nombre, precio, stock} = data

    return (
        <Grid item md='auto'>
                <Card sx={{ width: 250, textAlign: 'center', height: 420 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        src={`/assets/img/${id}.webp`}
                        sx={{height:280}}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='secondary'>
                            {nombre}
                        </Typography>
                        <Typography variant="h5">
                            {`$${precio}`}
                        </Typography>
                    </CardContent>
                    <Link to={`/product/${ data.id }`}>
                        <Button size="small" variant='contained' color='secondary'>Ver más</Button>
                    </Link>
                </Card>
        </Grid>
  )
}

export default Item