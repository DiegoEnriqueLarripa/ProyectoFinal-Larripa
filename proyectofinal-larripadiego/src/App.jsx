import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'; 
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Footer from './components/Footer.jsx';
import { CartProvider } from './context/CartContext.jsx';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
          
          <div className="content-wrap">
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1 className="text-center my-5">404 NOT FOUND</h1>} />
            </Routes>
          </div>
          
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;