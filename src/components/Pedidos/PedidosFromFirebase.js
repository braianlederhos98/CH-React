import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserContext/UserContext'
import Pedidos from './Pedidos'
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import db from '../../firebase/config';



const PedidosFromFirebase = () => {

    
    const { user } = useContext(UserContext)
    const [ items, setItems] = useState([])

    
    const getPedidos = async () => {
        if (user) {
            const q = query(collection(db, "ordenes"), where("buyer.email", "==", user.email));
            const querySnapshot = await getDocs(q);
            let resultadoPedidos = []
            querySnapshot.forEach((doc) => {
                let pedidos = doc.data()
                pedidos.id = doc.id
                return resultadoPedidos.push(pedidos)
            });
            return resultadoPedidos
        }
    }

    useEffect(()=>{
        getPedidos().then(res=>setItems(res))
    },[user])

    return (
        <>
            <Pedidos pedidos={items}/>
        </>
    )
}

export default PedidosFromFirebase