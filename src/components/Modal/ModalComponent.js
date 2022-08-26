import {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import {CartContext} from '../CartContext/CartContext'
import db from '../../firebase/config.js'
import { collection, addDoc } from 'firebase/firestore/lite';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalComponent = () => {

  const {cart, totalPrice} = useContext(CartContext)
  console.log(totalPrice)

  const [open, setOpen] = useState(false);
  const [ order, setOrder ] = useState({
    items: cart.map((product)=>{
      return {
        id: product.id,
        price: product.price,
        title: product.name
      }
    }),
    date: new Date().toLocaleDateString(),
    buyer: {},
    total: totalPrice
  })
  console.log(order)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }

  const sendForm = (e) => {
    e.preventDefault()
    sendData({...order, buyer: formData})
  }

  const sendData = async (orden) => {
    const collectionOrder = collection(db,'ordenes')
    const orderDoc = await addDoc(collectionOrder, orden)
  }


  return (
    <div>
      <Button variant="outlained" sx={{ fontWeight:'bold', fontSize:'1rem', color:'black', backgroundColor:'white'}} onClick={handleOpen}>COMPRAR</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={sendForm}>
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
              <Button type='submit'>Enviar</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalComponent