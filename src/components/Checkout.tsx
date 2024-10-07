import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { CreditCard, Lock, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })
  const [errors, setErrors] = useState({})
  const [currentStep, setCurrentStep] = useState(1)

  const validateField = (name, value) => {
    let error = ''
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required'
        break
      case 'email':
        if (!value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) 
          error = 'Invalid email address'
        break
      case 'address':
        if (!value.trim()) error = 'Address is required'
        break
      case 'city':
        if (!value.trim()) error = 'City is required'
        break
      case 'zipCode':
        if (!value.match(/^\d{5}(-\d{4})?$/)) error = 'Invalid ZIP code'
        break
      case 'cardNumber':
        if (!value.match(/^\d{16}$/)) error = 'Invalid card number'
        break
      case 'expiryDate':
        if (!value.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) error = 'Invalid expiry date (MM/YY)'
        break
      case 'cvv':
        if (!value.match(/^\d{3,4}$/)) error = 'Invalid CVV'
        break
      default:
        break
    }
    return error
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validateField(key, formData[key])
      if (error) acc[key] = error
      return acc
    }, {})

    if (Object.keys(formErrors).length === 0) {
      console.log('Order submitted:', { ...formData, cart, total: getCartTotal() })
      alert('Thank you for your order! This is a demo, so no actual payment has been processed.')
      clearCart()
    } else {
      setErrors(formErrors)
    }
  }

  const steps = ['Shipping', 'Payment', 'Review']

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary font-playfair">Checkout</h2>
        
        {/* Breadcrumbs */}
        <div className="flex justify-center mb-8">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index + 1 <= currentStep ? 'bg-primary text-background' : 'bg-gray-600 text-text'
              }`}>
                {index + 1 <= currentStep ? <CheckCircle size={16} /> : index + 1}
              </div>
              <span className={`mx-2 ${index + 1 <= currentStep ? 'text-primary' : 'text-text'}`}>{step}</span>
              {index < steps.length - 1 && (
                <div className={`w-12 h-1 ${index + 1 < currentStep ? 'bg-primary' : 'bg-gray-600'}`}></div>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-lg shadow-xl">
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-6 pb-2 border-b border-gray-700">Shipping Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby="name-error"
                    className={`w-full p-3 rounded bg-background text-text border ${errors.name ? 'border-red-500' : 'border-gray-700'} focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition duration-300`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p id="name-error" className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                    className={`w-full p-3 rounded bg-background text-text border ${errors.email ? 'border-red-500' : 'border-gray-700'} focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition duration-300`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p id="email-error" className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-text mb-1">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.address}
                    aria-describedby="address-error"
                    className={`w-full p-3 rounded bg-background text-text border ${errors.address ? 'border-red-500' : 'border-gray-700'} focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition duration-300`}
                    placeholder="123 Main St"
                  />
                  {errors.address && <p id="address-error" className="mt-1 text-red-500 text-sm">{errors.address}</p>}
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-text mb-1">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.city}
                    aria-describedby="city-error"
                    className={`w-full p-3 rounded bg-background text-text border ${errors.city ? 'border-red-500' : 'border-gray-700'} focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition duration-300`}
                    placeholder="New York"
                  />
                  {errors.city && <p id="city-error" className="mt-1 text-red-500 text-sm">{errors.city}</p>}
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-text mb-1">Zip Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.zipCode}
                    aria-describedby="zipCode-error"
                    className={`w-full p-3 rounded bg-background text-text border ${errors.zipCode ? 'border-red-500' : 'border-gray-700'} focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition duration-300`}
                    placeholder="10001"
                  />
                  {errors.zipCode && <p id="zipCode-error" className="mt-1 text-red-500 text-sm">{errors.zipCode}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-6 pb-2 border-b border-gray-700">Payment Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-text mb-1">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.cardNumber}
                      aria-describedby="cardNumber-error"
                      className={`w-full p-3 rounded bg-background text-text border ${errors.cardNumber ? 'border-red-500' : 'border-gray-700'} focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition duration-300 pl-10`}
                      placeholder="1234 5678 9012 3456"
                    />
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  </div>
                  {errors.cardNumber && <p id="cardNumber-error" className="mt-1 text-red-500 text-sm">{errors.cardNumber}</p>}
                </div>
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-text mb-1">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.expiryDate}
                    aria-describedby="expiryDate-error"
                    className={`w-full p-3 rounded bg-background text-text border ${errors.expiryDate ? 'border-red-500' : 'border-gray-700'} focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition duration-300`}
                    placeholder="MM/YY"
                  />
                  {errors.expiryDate && <p id="expiryDate-error" className="mt-1 text-red-500 text-sm">{errors.expiryDate}</p>}
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-text mb-1">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.cvv}
                    aria-describedby="cvv-error"
                    className={`w-full p-3 rounded bg-background text-text border ${errors.cvv ? 'border-red-500' : 'border-gray-700'} focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition duration-300`}
                    placeholder="123"
                  />
                  {errors.cvv && <p id="cvv-error" className="mt-1 text-red-500 text-sm">{errors.cvv}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-6 pb-2 border-b border-gray-700">Order Summary</h3>
              <div className="bg-background rounded-lg p-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center mb-4 pb-4 border-b border-gray-700 last:border-b-0 last:mb-0 last:pb-0">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                      <div>
                        <p className="text-text font-medium">{item.name}</p>
                        <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-text font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <div className="flex justify-between items-center text-lg font-semibold mt-4 pt-4 border-t border-gray-700">
                  <span className="text-primary">Total</span>
                  <span className="text-primary">${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </motion.div>
          )}

          <div className="mt-8 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="bg-gray-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-700 transition duration-300"
              >
                Previous
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-primary text-background px-8 py-3 rounded-full font-semibold text-lg hover:bg-accent transition duration-300 ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-primary text-background px-8 py-3 rounded-full font-semibold text-lg hover:bg-accent transition duration-300 flex items-center justify-center ml-auto"
              >
                <Lock className="mr-2" size={20} />
                Place Order Securely
              </button>
            )}
          </div>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Your payment information is encrypted and secure.
        </p>
      </div>
    </div>
  )
}

export default Checkout