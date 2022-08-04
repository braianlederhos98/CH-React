import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Error404 from './components/Error404';

function App() {
  return (
    //JSX
    <div>
      <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/product/:idProduct' element={<ItemListContainer />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/about' element={<ItemListContainer />}></Route>
            <Route path='/faq' element={<div>Preguntas frecuentes</div>}></Route>
            <Route path='*' element={<Error404/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
