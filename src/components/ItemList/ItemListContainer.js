import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ItemList from './ItemList';
import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../../firebase/config';


const ItemListContainer = () => {
  
  const [ listItems, setItem  ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const getProducts = async () => {
    const productCollection = collection(db, 'productos')
    const productsSnapshot = await getDocs(productCollection)
    const productsList = productsSnapshot.docs.map((doc)=> {
      let product = doc.data()
      product.id = doc.id
      return product
    })
    return productsList
  }

  useEffect(()=>{
    getProducts()
      .then(res => {
        setItem(res)
        setLoading(true)
      })
      .catch(console.log)
  }, [])

  return (
    <Container sx={{marginTop: '5rem', marginBottom: '2rem'}}>
      {
        loading ? <ItemList producto={listItems} ></ItemList> : (
          <Box sx={{position:'absolute', top:'50%', left:'40%'}}>
            <Typography variant='h4'>
              Cargando...
            </Typography>
          </Box>
        )
      }
      
    </Container>
  )
  
}

export default ItemListContainer