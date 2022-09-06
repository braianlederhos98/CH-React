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
    <Box sx={{ backgroundColor:'#232323', paddingTop: '5rem'}}>
    <Container sx={{paddingBottom:'2rem', minHeight:'72vh', backgroundColor:'#232323'}}>
      {
        loading ? <ItemList producto={listItems} ></ItemList> : (
          <Box sx={{position:'absolute', top:'30%', left:'40%'}}>
            <Typography variant='h4' sx={{color:'white'}}>
              Cargando...
            </Typography>
          </Box>
        )
      }
      
    </Container>
      </Box>
  )
  
}

export default ItemListContainer