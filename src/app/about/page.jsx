'use client'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useEffect, useRef, useState } from 'react'

const about = {
  falledChicken: '/assets/falledChicken.png',
  fire: '/assets/fire.png',
  grilled: '/assets/grilled.png',
  burgers: '/assets/burgers.png',
  juices: '/assets/juices.png'
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px 0px' // Add some margin for better timing
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-red-500 min-h-[400px] flex items-center">
                        <div className="container mx-auto pr-5 flex items-center justify-between">
                          <div className="flex-2">
                            <Image
                              src={about.falledChicken}
                              alt="Fried Chicken"
                              width={500}
                              height={400}
                              className="object-contain w-600 md:w-150 "
                            />
                          </div>
                          <div className="flex-1 text-right">
                            <h1 className="text-white justify-center text-4xl md:text-6xl md:text: font-bold">
                              ABOUT US
                            </h1>
                          </div>
                        </div>
                      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 tracking-wide">
            About Pollo Mio
          </h2>
          <p className="text-gray-600 text-justify leading-relaxed text-lg mb-6">
            Welcome to Pollo Mio – the home of fresh flavors and good vibes. We're passionate about serving 
            up the most perfect flame-licked, juicy burgers and fall-off-the-bone chicken. Seasoned to perfection, every 
            dish is crafted with care to bring you the best balance of taste and quality. Whether you're craving a 
            sizzling meal of fresh flame-grilled chicken or a cheesy melted burger, Pollo Mio is your spot to enjoy food that's 
            simple, fresh, and unforgettable.
          </p>
        </div>
      </div>

      {/* What We Serve Section */}
      <h2 className="text-3xl px-10 font-[500] text-left mb-12 bg-gradient-to-tr from-[#d42027] to-[#f15a24] bg-clip-text text-transparent">
        What We Serve
      </h2>

      <div className="min-h-screen bg-black text-white pt-16 overflow-hidden">
        <div className="container mx-auto px-4">
          
          <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Grilled - Slide in from left */}
            <div className={`text-center transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-full opacity-0'
            }`}>
              <h3 className="text-2xl font-[400] font-[montserrat] mb-4">Grilled</h3>
              <div className="h-100  rounded-lg"> 
                <Image 
                  src={about.grilled} 
                  alt="Grilled" 
                  width={400} 
                  height={400} 
                  className="object-contain mx-auto mt-2"
                />
              </div>
            </div>

            {/* Burgers - Slide in from bottom */}
            <div className={`text-center transition-all duration-1000 ease-out delay-200 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-full opacity-0'
            }`}>
              <h3 className="text-2xl font-[400] font-[montserrat] mb-4">Burgers</h3>
              <div className="h-100  rounded-lg">
                <Image 
                  src={about.burgers} 
                  alt="Burgers" 
                  width={500} 
                  height={500} 
                  className="object-contain mx-auto mt-2"
                />
              </div>
            </div>

            {/* Juices - Slide in from right */}
            <div className={`text-center transition-all duration-1000 ease-out delay-400 ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-full opacity-0'
            }`}>
              <h3 className="text-2xl font-[400] font-[montserrat] mb-4">Juices</h3>
              <div className="h-100 rounded-lg">
                <Image 
                  src={about.juices} 
                  alt="Juices" 
                  width={300} 
                  height={300} 
                  className="object-contain mx-auto mt-2"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-8">
            <button className="bg-gradient-to-tr from-[#d42027] to-[#f15a24] text-white font-[400] py-4 px-8  text-xl md:text-3xl  transition-colors duration-300">
              Come taste the difference at Pollo Mio
            </button>
          </div>

          {/* Fire Animation */}
          <div className="relative h-30  md:h-70 overflow-hidden">
            <div className="absolute bottom-0 w-full flex justify-center items-end">
              <div className="relative mx-1">
                <Image
                  src={about.fire}
                  alt="Fire"
                  width={2200}
                  height={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}