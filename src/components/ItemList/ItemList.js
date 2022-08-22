import { useEffect, useState} from 'react'
import Item from './Item'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'

const ItemList = ({producto}) => {
  let categorias = [...producto]
  const {categoryId} = useParams() 
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
      searchCat()
    } else if (categoryId === 'buzos') {
      searchCat()
    } else if(params.lenght === undefined) { 
      setCat(categorias)
    }
  }, [categoryId, producto])


  return (
    <>
        <Grid
          container
          spacing={4}
          alignContent="center"
          alignItems='center'
          justifyContent="center"
        >
          {categoria.map( (prod) => {
            if (categoryId || params.lenght === undefined) {
              return (
                  <Item data={prod} key={`${prod.id}`} />
              )    
            }
          })
          } 
        </Grid>
    </>
  )
}

export default ItemList