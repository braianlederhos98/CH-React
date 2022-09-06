import React, { useEffect, useState } from 'react'
import { Box, Paper, Typography } from '@mui/material';

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
        <Box sx={{ paddingTop:'5rem', backgroundColor:'#232323', minHeight:'72vh'}}>
            <Paper elevation={8} sx={{margin:'auto', width:'60%', backgroundColor:'black'}}>
                <Box>
                    <Typography variant='h3' textAlign='center' color='secondary'>
                        Pedidos
                    </Typography>
                    {
                        (loading && pedidos) ? (
                            <Box mt={4} px={6} py={2}>
                            {
                                pedidos.map((pedido)=> {
                                    return (
                                                <Box sx={{color:"white"}} textAlign='center' key={pedido.id}>
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
                                                    <Box mb={8}>
                                                        <Typography>
                                                            Total = ${pedido.total}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                    )
                                })
                            }
                            </Box>
                        ) : (
                            <Box sx={{position:'absolute', top:'30%', left:'45%'}}>
                            <Typography variant='h4' sx={{color:'white'}}>
                                Cargando...
                            </Typography>
                        </Box>
                        )
                    }
                </Box>
            </Paper>
        </Box>
        </>
    )
}

export default Pedidos