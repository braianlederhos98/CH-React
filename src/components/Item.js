import React from 'react';
import { Grid, Typography, CardMedia, CardContent, Card } from '@mui/material';
import ItemCount from './ItemCount';

const Item = ({data}) => {
    const { id, nombre, precio, stock} = data

    return (
        <Grid item md='auto'>
            <Card sx={{ width: 250, textAlign: 'center', height: 450 }}>
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

                    <ItemCount stock={stock}/>
                </CardContent>
            </Card>
        </Grid>
  )
}

export default Item