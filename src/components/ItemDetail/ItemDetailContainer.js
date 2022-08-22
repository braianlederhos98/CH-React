import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore/lite';
import db from '../../firebase/config';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
  
  const [ item, setItem  ] = useState([])
  const { idProduct } = useParams()

  const getProduct = async () => {
    const docRef = doc(db, 'productos', idProduct)
    const docSnapshot = await getDoc(docRef)
    let product = docSnapshot.data()
    product.id = docSnapshot.id
    return product
  }
  
  useEffect(()=>{
    
    getProduct()
    .then(res => setItem(res))
    .catch(console.log)
    
  }, [idProduct])

  return (
       <ItemDetail data={item}></ItemDetail>
  )
  
}

export default ItemDetailContainer