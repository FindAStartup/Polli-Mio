import React, { useEffect, useState } from 'react';

// Mock images for demonstration - replace with your actual image imports
const imageUrls = {
  pepper: './assets/carousel/3.png',
  kanthari: './assets/carousel/4.png',
  special: './assets/carousel/1.png',
  periPeri: './assets/carousel/2.png'
};

export default function Carousel() {


const [items, setItems] = useState([]);

 useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/products`)

        if (!res.ok) {
          console.error("Failed to load products")
          return
        }
        const data = await res.json()
        console.log(data.products)
        setItems(Array.isArray(data) ? data : data.products || [])
      } catch (e) {
        console.error("Failed to load products. Please try again.")
      } finally {
      }
    }
    load()
  }, [])


  useEffect(()=>{
    console.log(items)
  },[items])

  // Array of your special dishes
  const specials = items;


  // Create enough duplicates for seamless infinite scroll
  const extendedSpecials = [...specials, ...specials, ...specials];

  return (
<div className=" h-[600] md:h-[800] lg flex flex-col items-center justify-center font-sans">
      <style>{`
        @keyframes scroll-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${200 * specials.length}px); }
        }
        
        @keyframes scroll-tablet {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${250 * specials.length}px); }
        }
        
        @keyframes scroll-desktop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${320 * specials.length}px); }
        }
        
        @keyframes scroll-large {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${380 * specials.length}px); }
        }
        
        .animate-scroll-mobile {
          animation: scroll-mobile ${specials.length * 3}s linear infinite;
        }
        
        .animate-scroll-tablet {
          animation: scroll-tablet ${specials.length * 3.5}s linear infinite;
        }
        
        .animate-scroll-desktop {
          animation: scroll-desktop ${specials.length * 4}s linear infinite;
        }
        
        .animate-scroll-large {
          animation: scroll-large ${specials.length * 4.5}s linear infinite;
        }
        
        .animate-scroll-mobile:hover,
        .animate-scroll-tablet:hover,
        .animate-scroll-desktop:hover,
        .animate-scroll-large:hover {
          animation-play-state: paused;
        }
        
        /* Mobile */
        @media (max-width: 639px) {
          .carousel-container .animate-scroll {
            animation: scroll-mobile ${specials.length * 3}s linear infinite;
          }
        }
        
        /* Tablet */
        @media (min-width: 640px) and (max-width: 1023px) {
          .carousel-container .animate-scroll {
            animation: scroll-tablet ${specials.length * 3.5}s linear infinite;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .carousel-container .animate-scroll {
            animation: scroll-desktop ${specials.length * 4}s linear infinite;
          }
        }
        
        /* Large Desktop */
        @media (min-width: 1280px) {
          .carousel-container .animate-scroll {
            animation: scroll-large ${specials.length * 4.5}s linear infinite;
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="w-full h-150 lg:min-h-screen flex flex-col items-center ">
        {/* Title - Responsive */}
        <h1 className="text-black text-2xl xs:text-3xl font-[montserrat] text-4xl md:text-5xl lg:text-6xl font-[400] mb-5 sm:mb-2 lg:mb-12 text-center tracking-wide mt-20">
          Our Specials
        </h1>
        
        {/* Carousel Container */}
        <div className="w-full mt-10 overflow-hidden carousel-container">
          <ul className="flex items-center animate-scroll hover:animation-play-state-paused">
            {extendedSpecials.map((item, index) => (
              <li 
                key={`${item.id}-${index}`} 
                className="flex-shrink-0 mx-2 sm:mx-3 lg:mx-4"
              >
                <div className="group relative overflow-hidden border-1 border-red-600 shadow-lg shadow-red-600/20 transition-all duration-300 hover:scale-105 hover:shadow-red-600/40 rounded-lg
                  w-44 sm:w-56 lg:w-72 xl:w-80">
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image_url} 
                      alt={item.name} 
                      className="w-full h-32 xs:h-36 sm:h-40 md:h-44 lg:h-48 xl:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => { 
                        e.currentTarget.onerror = null; 
                      
                      }}
                    />
                    {/* Overlay effect on hover */}
                    <div className="absolute  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  
                  {/* Title Container */}
                  <div className="bg-orange-500 p-2 sm:p-3 lg:p-4 text-center">
                    <h3 className="text-black text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl tracking-wide leading-tight">
                      {item.name} -  <span> ₹ {item.price}</span>
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Bottom spacing */}
      <div className=" py-0 lg:py-10"></div>
    </div>
  );
}