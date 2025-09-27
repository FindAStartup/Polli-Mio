import React from 'react';

// Mock images for demonstration - replace with your actual image imports
const imageUrls = {
  pepper: './assets/carousel/3.png',
  kanthari: './assets/carousel/4.png',
  special: './assets/carousel/1.png',
  periPeri: './assets/carousel/2.png'
};

export default function Carousel() {
  // Array of your special dishes
  const specials = [
    {
      id: 1,
      name: 'PEPPER AL-FAHAM',
      imageSrc: imageUrls.pepper,
    },
    {
      id: 2,
      name: 'KANTHARI AL-FAHAM',
      imageSrc: imageUrls.kanthari,
    },
    {
      id: 3,
      name: 'SPECIAL AL-FAHAM',
      imageSrc: imageUrls.special,
    },
    {
      id: 4,
      name: 'PERI PERI AL-FAHAM',
      imageSrc: imageUrls.periPeri,
    },
  ];

  // Create enough duplicates for seamless infinite scroll
  const extendedSpecials = [...specials, ...specials, ...specials];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center font-sans py-8 sm:py-12 lg:py-16">
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
      
      <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Title - Responsive */}
        <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center tracking-wide">
          Our Specials
        </h1>
        
        {/* Carousel Container */}
        <div className="w-full overflow-hidden carousel-container">
          <ul className="flex items-center animate-scroll hover:animation-play-state-paused">
            {extendedSpecials.map((item, index) => (
              <li 
                key={`${item.id}-${index}`} 
                className="flex-shrink-0 mx-2 sm:mx-3 lg:mx-4"
              >
                <div className="group relative overflow-hidden border-2 border-red-600 shadow-lg shadow-red-600/20 transition-all duration-300 hover:scale-105 hover:shadow-red-600/40 rounded-lg
                  w-44 sm:w-56 lg:w-72 xl:w-80">
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.imageSrc} 
                      alt={item.name} 
                      className="w-full h-32 xs:h-36 sm:h-40 md:h-44 lg:h-48 xl:h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => { 
                        e.currentTarget.onerror = null; 
                      
                      }}
                    />
                    {/* Overlay effect on hover */}
                    <div className="absolute  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  
                  {/* Title Container */}
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 sm:p-3 lg:p-4 text-center">
                    <h3 className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide leading-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Bottom spacing */}
      <div className="py-4 sm:py-6 lg:py-8"></div>
    </div>
  );
}