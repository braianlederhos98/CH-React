import React, { useState } from 'react'
import { createContext } from 'react'
import "toastify-js/src/toastify.css"
import db, { auth } from '../../firebase/config'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore/lite';


export const UserContext = createContext()

const UserProvider = ({children}) => {
    
    const [ user, setUser ] = useState(null)
    
    const registrarUsuario = async ({ email, password, rol }) => {
        const infoUsuario = await createUserWithEmailAndPassword(auth, email, password, rol).then((usuarioFirebase)=> {
            return usuarioFirebase
        })

        const docRef = doc(db, `usuarios/${infoUsuario.user.uid}`)
        setDoc(docRef, {correo: email, rol: rol})
    }
    
    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            setUser(usuarioFirebase)
        } else {
            setUser(null)
        }
    })

    const iniciarSesion = ( {email, password, rol} ) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    return (
        <UserContext.Provider value={{user, setUser, registrarUsuario, iniciarSesion}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider