import React from 'react';
import { Grid, Typography, CardMedia, CardContent, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({data}) => {
    
    const { id, name, price, image} = data

    return (
        <Grid item md='auto'>
                <Paper elevation={6} sx={{ width: 250, textAlign: 'center', height: 430, backgroundColor:'black' }}>
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
                        <Typography variant="h5" color='white'>
                            {`$${price}`}
                        </Typography>
                    </CardContent>

                    <Button component={Link} to={`/product/${ id }`} variant='outlined' color='secondary'>Ver más</Button>
                        
                </Paper>
        </Grid>
  )
}

export default Item