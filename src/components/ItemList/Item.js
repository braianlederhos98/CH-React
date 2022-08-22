import React from 'react';
import { Grid, Typography, CardMedia, CardContent, Card, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({data}) => {
    
    const { id, name, price, image} = data

    return (
        <Grid item md='auto'>
                <Card sx={{ width: 250, textAlign: 'center', height: 420 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        src={`/assets/img/${image}`}
                        sx={{height:280}}
                    /> 
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='secondary'>
                            {name}
                        </Typography>
                        <Typography variant="h5">
                            {`$${price}`}
                        </Typography>
                    </CardContent>
                    <Link to={`/product/${ id }`}>
                        <Button size="small" variant='contained' color='secondary'>Ver más</Button>
                    </Link>
                </Card>
        </Grid>
  )
}

export default Item