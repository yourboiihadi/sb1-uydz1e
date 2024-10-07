import React from 'react'
import { Instagram, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-2 text-primary font-playfair">HusseinBlendz</h3>
            <p className="text-text mb-4">CEO of Barbering | Barbfluencer</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/husseinblendz/" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@husseinblendz_" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4 text-primary">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-end">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span className="text-text">Hamilton, Ontario</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <a href="tel:289-689-3879" className="text-text hover:text-primary transition duration-300">289-689-3879</a>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <a href="mailto:husseinmk314@gmail.com" className="text-text hover:text-primary transition duration-300">husseinmk314@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-text">
          <p>© {new Date().getFullYear()} HusseinBlendz. All rights reserved.</p>
          <p className="mt-2">Designed with passion for exceptional grooming experiences.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer