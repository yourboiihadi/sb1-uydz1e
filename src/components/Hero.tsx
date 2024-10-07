import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Barber Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 text-center px-4 animate-fadeIn">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-shadow font-playfair text-primary">Elevate Your Style</h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow max-w-2xl mx-auto">Experience the art of precision grooming at HusseinBlendz, where every cut is a masterpiece.</p>
        <a 
          href="#booking" 
          className="bg-primary text-background px-8 py-3 rounded-full font-semibold hover:bg-accent transition duration-300 transform hover:scale-105 inline-block btn-hover"
        >
          Book Your Experience
        </a>
      </div>
    </section>
  )
}

export default Hero