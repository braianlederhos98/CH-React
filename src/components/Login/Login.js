import { Button, Card, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import ItemListContainer from '../ItemList/ItemListContainer';
import { UserContext } from '../UserContext/UserContext';


const Login = () => {

    const [registro, setRegistro] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rol: 'usuario'
    })
    const {registrarUsuario, iniciarSesion, user} = useContext(UserContext)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const sendForm = (e) => {
        e.preventDefault()
        if (registro) {
            registrarUsuario(formData)
        } else {
            iniciarSesion(formData) 
        }
    }

    return (
        <>
            {
                !user ? (
                    <Card sx={{width: '80%', margin: 'auto', marginTop:'5rem', minHeight:'67vh'}}>
                        <Box>
                            <Typography variant='h3' textAlign='center'>
                                {
                                    registro ? 'Registrate' : 'Iniciar sesión'
                                }
                            </Typography>
                        </Box>
                        <form onSubmit={(e)=>sendForm(e,formData)}>
                            <TextField
                                label="Correo electrónico"
                                type="email"
                                name="email"
                                value={formData.email}
                                margin="dense"
                                fullWidth
                                variant="outlined"
                                helperText="Campo obligatorio"
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                label="Contraseña"
                                type="password"
                                name="password"
                                value={formData.password}
                                margin="dense"
                                fullWidth
                                variant="outlined"
                                helperText="Campo obligatorio"
                                onChange={handleChange}
                                required
                            />  
                                <Button type='submit'>Enviar</Button>
                        </form>
                        
                        <Button onClick={()=> setRegistro(!registro)}>
                                {registro ? 'Ya tengo una cuenta' : 'Quiero registrarme'}
                        </Button>
                    </Card>
                ) : <ItemListContainer/>
            }
        </>
    )
}

export default Login