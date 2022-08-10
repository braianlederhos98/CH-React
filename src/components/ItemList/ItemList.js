import { useEffect, useState} from 'react'
import Item from './Item'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer'

const ItemList = ({producto}) => {
  let categorias = [...producto]
  const { idProduct, categoryId} = useParams() 
  const params = useParams() 
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

  useEffect(()=>{
    if (categoryId === 'remeras') {
      //console.log(params)
      searchCat()
    } else if (categoryId === 'buzos') {
      searchCat()
    } else if(params.lenght === undefined) { 
      setCat(categorias)
    }
  }, [categoryId, producto])

  return (
    <Grid
      container
      spacing={4}
      alignContent="center"
      alignItems='center'
      justifyContent="center"
    >
      {categoria.map( (prod) => {
            if (idProduct) {
              return (
                <ItemDetailContainer data={prod} key={`${prod.id}`}></ItemDetailContainer>
              )
            } else if (categoryId || params.lenght === undefined) {
              return <Item data={prod} key={`${prod.id}`} />    
            }
          }
        )
      } 
    </Grid>
  )
}

export default ItemList