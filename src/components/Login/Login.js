import { Button, Card, Paper, TextField, Typography } from '@mui/material'
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
        <Box sx={{paddingTop:'5rem',  minHeight:'73vh', backgroundColor:'#232323'}}>
            {
                !user ? (
                    <Paper elevation={5} sx={{width: '80%', margin: 'auto'}}>
                        <Box>
                            <Typography variant='h3' textAlign='center'>
                                {
                                    registro ? 'Registrate' : 'Iniciar sesión'
                                }
                            </Typography>
                        </Box>
                        <Box px={6} sx={{marginTop:'2rem', paddingBottom:'3rem'}}>
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
                                    <Button type='submit' color='secondary' variant='outlined'>Enviar</Button>
                            </form>
                            <Box mt={1}>
                                <Button color='secondary' variant='outlined' onClick={()=> setRegistro(!registro)}>
                                        {registro ? 'Ya tengo una cuenta' : 'Quiero registrarme'}
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                ) : <ItemListContainer/>
            }
        </Box>
        </>
    )
}

export default Login