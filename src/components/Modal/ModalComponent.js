import {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';
import {CartContext} from '../CartContext/CartContext'
import db from '../../firebase/config.js'
import { collection, addDoc } from 'firebase/firestore/lite';
import ContactInfo from './ContactInfo';
import { Link } from 'react-router-dom';

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

  const {cart, totalPrice, clear} = useContext(CartContext)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [success, setSuccess] = useState(false)

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
  
  const sendForm = ( e, formData ) => {
    e.preventDefault()
    sendData({...order, buyer: formData})
  }

  const sendData = async (orden) => {
    const collectionOrder = collection(db,'ordenes')
    const orderDoc = await addDoc(collectionOrder, orden)
    setSuccess(orderDoc.id)
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
          {
            success ? (<>
              <Typography variant='h5' textAlign='center' sx={{color:'green'}}>
                ¡Compra realizada con Éxito!
              </Typography>
              <Typography variant='h6' mt={2}>
                Su código de compra es: {success}
              </Typography>
              <Link to='/'>
                <Button onClick={()=>clear()}>Aceptar</Button>
              </Link>
            </>) : (<ContactInfo sendForm={sendForm}/>)
          }
        </Box>
      </Modal>
    </div>
  );
}
export default ModalComponent