import React from 'react';
import './App.css';
import BottomBar from './bottomBar';
import QrMain from './qrMain';
import ProductCard from './productCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './cartpage';
import Main from './Main';
import Ordered from './Ordered';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/Ordered" element={<Ordered />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
