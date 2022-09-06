import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';


const ContactInfo = ({sendForm}) => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChange = (e) =>{
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }


    return (
    <>
        <form onSubmit={(e)=>sendForm(e,formData)}>
                <TextField
                    label="Nombre y Apellido"
                    type="text"
                    name="name"
                    value={formData.name}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Campo obligatorio"
                    onChange={handleChange}
                    required
                    />
                <TextField
                    label="Email"
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
                    label="Phone"
                    type="number"
                    name="phone"
                    value={formData.phone}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Campo obligatorio"
                    onChange={handleChange}
                    required
                    />
                <Box textAlign='center' mt={2}>
                    <Button color='secondary' variant='outlined' size='medium' type='submit'>Enviar</Button>
                </Box>
        </form>
    </>
  )
}

export default ContactInfo
