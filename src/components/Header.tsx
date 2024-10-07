import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Scissors, Menu, X, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useScrollToSection } from '../hooks/useScrollToSection'

const Header = () => {
  // ... (existing state and hooks)

  const navigate = useNavigate()

  // ... (existing useEffect and functions)

  const handleStoreClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/store')
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background bg-opacity-90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Scissors className="w-10 h-10 mr-2 text-primary" />
            <span className="text-3xl font-bold font-playfair text-primary">HusseinBlendz</span>
          </Link>
          <div className="flex items-center">
            <nav className={`hidden md:flex space-x-1 mr-4`}>
              {navItems.map((item) => (
                item === 'Store' ? (
                  <a
                    key={item}
                    href="/store"
                    onClick={handleStoreClick}
                    className="px-3 py-2 rounded-full text-text hover:text-primary hover:bg-secondary transition duration-300"
                  >
                    {item}
                  </a>
                ) : (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="px-3 py-2 rounded-full text-text hover:text-primary hover:bg-secondary transition duration-300"
                  >
                    {item}
                  </button>
                )
              ))}
            </nav>
            {/* ... (rest of the component remains unchanged) */}
          </div>
        </div>
      </div>
      {/* ... (mobile menu remains unchanged) */}
    </header>
  )
}

export default Header