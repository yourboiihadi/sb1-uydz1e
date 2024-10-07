import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Store from './components/Store'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-background text-text">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App