import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import ItemList from './ItemList';
import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../../firebase/config';


const ItemListContainer = () => {
  
  const [ listItems, setItem  ] = useState([])

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
      .then(res => setItem(res))
      .catch(console.log)


  }, [])

  return (
    <Container sx={{marginTop: '5rem', marginBottom: '2rem'}}>
       <ItemList producto={listItems} ></ItemList>
    </Container>
  )
  
}

export default ItemListContainer