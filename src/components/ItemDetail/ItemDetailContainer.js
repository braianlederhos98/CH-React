import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({data}) => {
    const [item, setItem] = useState([])
    const {idProduct} = useParams()
    
    useEffect(()=>{
        searchItem()
    }, [])
    
    const searchItem = () =>{
        if (data.id == idProduct) {
            setItem([data])
        }
    }


    return (
        <>
            {
                item.map((i)=>{
                    
                    if (i) {
                        return (
                            <ItemDetail data={i} key={i.id}></ItemDetail>
                        )
                    }
                })
            }
        </>
    )
}

export default ItemDetailContainer