import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const Cuenta = () => {
  return (
    <Box sx={{width:'100%', minHeight:'73vh', paddingTop:'5rem', backgroundColor:'#232323'}}>
      <Paper sx={{width:'75%', margin:'auto'}}>
        <Typography textAlign='center' variant='h5'>Cuenta</Typography> 
      </Paper>
    </Box>
  )
}

export default Cuenta