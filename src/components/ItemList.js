import { useEffect, useState} from 'react'
import Item from './Item'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemList = ({producto}) => {
  let categorias = [...producto]
  const { idProduct, categoryId} = useParams() 
  const [ categoria, setCat ] = useState([])

  const searchCat = () =>{
    categorias = []
    producto.map((c) => {
      if (c.category === categoryId) {
        categorias.push(c)
        setCat(categorias)
      }
    })
  }

  const searchItem = () =>{
    categorias = []
    producto.map((c) => {
      if (c.id === parseInt(idProduct)) {
        categorias.push(c)
        setCat(categorias)
      }
    })
  }

  useEffect(()=>{
    if (categoryId === 'remeras') {
      searchCat()
    } else if (categoryId === 'buzos') {
      searchCat()
    } else if(idProduct) {
      searchItem()
    } else { 
      setCat(categorias)
    }
  }, [categoryId, producto, idProduct])

  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      alignContent="center"
      justifyContent="center"
    >
      {categoria.map( (prod) => {
            if (categoria.length <= 1) {
              return <ItemDetail data={prod} ></ItemDetail>
            } else {
              return <Item data={prod} key={`${prod.id}`} />    
            }
          }
        )
      } 
    </Grid>
  )
}

export default ItemList