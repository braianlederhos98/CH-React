import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore/lite';
import db from '../../firebase/config';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { Box, Typography } from '@mui/material';


const ItemDetailContainer = () => {
  
  const [ item, setItem  ] = useState([])
  const { idProduct } = useParams()
  const [ loading, setLoading ] = useState(false)

  const getProduct = async () => {
    const docRef = doc(db, 'productos', idProduct)
    const docSnapshot = await getDoc(docRef)
    let product = docSnapshot.data()
    product.id = docSnapshot.id
    return product
  }
  
  useEffect(()=>{
    
    getProduct()
    .then(res => {
      setItem(res)
      setLoading(true)
    })
    .catch(console.log)
    
  }, [idProduct])

  return (
    <>
      {
        loading ? <ItemDetail data={item}></ItemDetail> : (
          <Box sx={{position:'absolute', top:'30%', left:'40%'}}>
            <Typography variant='h4'>
              Cargando...
            </Typography>
          </Box>
        )
      }
    </>
       
  )
  
}

export default ItemDetailContainer