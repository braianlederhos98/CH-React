import React from 'react';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Error404 from './components/404/Error404';
import { Checkout } from './components/CheckOut/Checkout';
import { CartProvider } from './components/CartContext/CartContext';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import UserContext from './components/UserContext/UserContext';
import Login from './components/Login/Login';
import Cuenta from './components/Cuenta/Cuenta';
import PedidosFromFirebase from './components/Pedidos/PedidosFromFirebase';
import Footer from './components/Footer/Footer';

function App() {
  return (
    //JSX
    <div>
      <CartProvider>
      <UserContext>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer />}></Route>
              <Route path='/cart' element={<Checkout/>}></Route>
              <Route path='/product/:idProduct' element={<ItemDetailContainer />}></Route>
              <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
              <Route path='/about' element={<ItemListContainer />}></Route>
              <Route path='/faq' element={<ItemListContainer/>}></Route>
              <Route path='*' element={<Error404/>}></Route>
              <Route path='/login' element={<Login/>}/>
              <Route path='/cuenta' element={<Cuenta/>}/>
              <Route path='/pedidos' element={<PedidosFromFirebase/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
      </UserContext>
      </CartProvider>
    </div>
    
  );
}

export default App;
