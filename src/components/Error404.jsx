import { Box, Typography } from '@mui/material'
import React from 'react'

const Error404 = () => {
  return (
    <>
        <Box mt={20}>
            <Typography sx={{fontSize: '200px', textAlign: 'center'}}>
                ERROR 404 - Page Not Found
            </Typography>
        </Box>
    </>
  )
}

export default Error404