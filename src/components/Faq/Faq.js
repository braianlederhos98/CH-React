import { Box, Paper, Typography } from "@mui/material"


const Faq = () => {
  return (
    <>
        <Paper elevation={3} sx={{ fontFamily:'Roboto' ,backgroundColor:'', margin:'auto', marginTop:'5rem', width:'90%', minHeight:'67vh' }}>
            <Box textAlign='center' sx={{border:'1px solid #000', borderRadius: '2%'}}>
                <Typography variant='h4'>
                    Preguntas frecuentes
                </Typography>
            </Box>
            <Box>
                <Typography variant="h5">
                    ¿Medios de pago disponibles?
                </Typography>
            </Box>
        </Paper>
    </>
  )
}

export default Faq