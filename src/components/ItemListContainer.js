import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import ItemList from './ItemList';
import productos from '../productos.mock'


const ItemListContainer = () => {
  
  const [ listItems, setItem  ] = useState([])

  const mockItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 1000);
  })

  useEffect(()=>{

    mockItems
    .then(res => setItem(res))
    .catch(console.log)

  })

  return (
    <Container sx={{marginTop: '5rem', marginBottom: '2rem'}}>
       <ItemList producto={listItems} ></ItemList>
    </Container>
  )
}

export default ItemListContainer