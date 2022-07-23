import React from 'react'
import Item from './Item'
import { Grid } from '@mui/material'

const ItemList = ({producto}) => {
  return (
    <Grid container spacing={3}>
        {producto.map( (prod) => {
            return <Item data={prod}/>    
        })} 
    </Grid>
  )
}

export default ItemList