"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="bg-white font-sans shadow-sm sticky  w-full z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       
        <nav className="flex items-center justify-between h-24 lg:relative">
          <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image 
                src="/logo.png" 
                alt="Pollo Mio Logo"
                width={120} 
                height={60}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-800 hover:text-red-600  transition-colors ${
                  pathname === link.href ? 'border-b-2 border-red-500 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Navigation (Right Side) */}
          <div className="hidden lg:flex items-center space-x-5">
            <div className="flex items-center space-x-3">
              <Link href="https://www.facebook.com/p/Pollo-Mio-100064269213512/" aria-label="Facebook" className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                <FaFacebookF className="text-gray-600 h-4 w-4" />
              </Link>
              <Link href="https://www.instagram.com/pollomio90?utm_source=ig_web_button_share_sheet&igsh=OWN2czM1azI1aGVr" aria-label="Instagram" className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                <FaInstagram className="text-gray-600 h-4 w-4" />
              </Link>
              <Link href="#" aria-label="Twitter" className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                <FaTwitter className="text-gray-600 h-4 w-4" />
              </Link>
            </div>
            <a href="tel:+919207777311" className="border border-gray-400 rounded-full px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors">
              Ph: +91 92077 77311
            </a>
          </div>

          {/* Hamburger Menu Button (visible on small screens) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay with higher z-index */}
      <div
        className={`fixed inset-0 bg-white transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
        style={{ zIndex: 9999 }}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-semibold text-gray-800 hover:text-red-600 transition-colors ${
                  pathname === link.href ? 'text-red-600' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 flex flex-col items-center space-y-6">
             <Link href="tel:+919207777311" className="border border-gray-400 rounded-full px-8 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 transition-colors">
              Ph: +91 92077 77311
            </Link>
            <div className="flex items-center space-x-5">
              <Link href="https://www.facebook.com/p/Pollo-Mio-100064269213512/" aria-label="Facebook" className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                <FaFacebookF className="text-gray-600 h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/pollomio90?utm_source=ig_web_button_share_sheet&igsh=OWN2czM1azI1aGVr" aria-label="Instagram" className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                <FaInstagram className="text-gray-600 h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                <FaTwitter className="text-gray-600 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Orange/Red Gradient Bar */}
    </header>
  );
};

export default Navbar;