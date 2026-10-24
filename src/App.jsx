import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  const [cart,setCart]=useState([]);
  const [favs,setFavs]=useState([]);
  const addToCart=(c)=>setCart([...cart,c]);
  const addToFav=(c)=>{ if(!favs.find(f=>f.id===c.id)) setFavs([...favs,c]); };
  return(
    <BrowserRouter>
      <Navbar cartCount={cart.length}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products onAdd={addToCart} onFav={addToFav}/>}/>
        <Route path="/product/:id" element={<ProductDetails onAdd={addToCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/favorites" element={<Favorites favs={favs} onAdd={addToCart} onFav={addToFav}/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App;