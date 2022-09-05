import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
            <Box sx={{backgroundColor:'black', color:'white', height:'400px', width:'100%'}}>
                <Grid container spacing={3} alignItems='center' height='100%' justifyContent='space-evenly'>
                        <Grid item xs='auto'>
                            <Box>
                                <Typography>Redes</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs='auto'>
                            <Box>
                                <Typography>Preguntas</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs='auto'>
                            <Box>
                                <Typography>AFIP Logo</Typography>
                            </Box>
                        </Grid>
                </Grid>
            </Box>
    )
}

export default Footer