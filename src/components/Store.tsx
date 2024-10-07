import React, { useState, useEffect } from 'react'
import { ShoppingCart, Star, ChevronDown, Check } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  // ... (product data remains unchanged)
]

const Store = () => {
  const [filterCategory, setFilterCategory] = useState('All')
  const { addToCart, cart } = useCart()
  const [addedToCart, setAddedToCart] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    // Scroll to the top of the Store component when it mounts
    window.scrollTo(0, 0)
  }, [])

  // ... (rest of the component code remains unchanged)

  return (
    <section id="store" className="py-16 bg-background">
      {/* ... (rest of the JSX remains unchanged) */}
    </section>
  )
}

export default Store