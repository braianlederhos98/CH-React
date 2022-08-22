import React from 'react';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Error404 from './components/404/Error404';
import { Checkout } from './components/CheckOut/Checkout';
import { CartProvider } from './components/CartContext/CartContext';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    //JSX
    <div>
      <CartProvider>
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
              <Route path='/' element={<ItemListContainer />}></Route>
              <Route path='/cart' element={<Checkout/>}></Route>
              <Route path='/product/:idProduct' element={<ItemDetailContainer />}></Route>
              <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
              <Route path='/about' element={<ItemListContainer />}></Route>
              <Route path='/faq' element={<div>Preguntas frecuentes</div>}></Route>
              <Route path='*' element={<Error404/>}></Route>
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
