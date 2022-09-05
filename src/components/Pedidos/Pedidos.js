import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../../firebase/config';
import { Box, Card, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';

const Pedidos = ({pedidos}) => {

    const [ loading, setLoading ] = useState(false)

    const seteoLoading = () => {
        if (pedidos) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }

    useEffect(()=>{
        seteoLoading()
    }, [])

    return (
        <>
            <Container maxWidth='lg' sx={{ minHeight:'67vh'}}>
            <Paper elevation={8} sx={{margin:'auto', width:'80%', marginTop:'5rem'}}>
                <Box>
                    <Typography variant='h3' textAlign='center'>
                        Pedidos
                    </Typography>
                    {
                        (loading && pedidos) ? (
                            <Box mt={4} p={2}>
                            {
                                pedidos.map((pedido)=> {
                                    return (
                                        <>
                                            <Box>
                                                <Typography>
                                                    Fecha: {pedido.date}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography>
                                                    Nombre y Apellido: {pedido.buyer.name}
                                                </Typography>
                                            </Box>
                                            <Box mb={3}>
                                                <Typography>
                                                    Total = ${pedido.total}
                                                </Typography>
                                            </Box>
                                        </>
                                    )
                                })
                            }
                            </Box>
                        ) : (
                        <Box sx={{position:'absolute', top:'30%', left:'45%'}}>
                            <Typography variant='h4'>
                            Cargando...
                            </Typography>
                        </Box>
                        )
                    }
                </Box>
            </Paper>
            </Container>
        </>
    )
}

export default Pedidos