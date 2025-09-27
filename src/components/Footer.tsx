import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          
          {/* Logo and Tagline Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image 
                src="/logo.png" 
                alt="Pollo Mio Logo"
                width={140}
                height={80}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-700 text-sm text-center md:text-left max-w-xs leading-relaxed">
              Freshness Isn't an Option, <br />
              Freshness is the Standard
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-gray-900 font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="text-center md:text-left">
            <h3 className="text-gray-900 font-semibold text-lg mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Thazhava Jn,Kattanam
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="text-red-500 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:pollomio@gmail.com" 
                  className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                >
                  pollomio@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaPhone className="text-red-500 mr-3 flex-shrink-0" />
                <a 
                  href="tel:+919207777311" 
                  className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                >
                  +91 92077 77311
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            Copyright © 2025 Pollo Mio CHICKEN & SIDES, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;