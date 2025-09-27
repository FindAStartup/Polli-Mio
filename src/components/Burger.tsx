import React from 'react';
import Image from 'next/image';
import burger from "../../public/assets/burger.png"

const Burger: React.FC = () => {
  return (
    <div className="relative  bg-black min-h-screen w-full p-0 m-0">
      <Image 
        src={burger}
        alt="Where Fire Meets Flavor" 
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark overlay for better text readability */}
      <div className=" p-0 m-0 absolute inset-0 bg-opacity-40"></div>
      
      {/* Text overlay */}
      <div className="absolute inset-0 flex  justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl pt-10 mt-10 sm:text-4xl lg:text-5xl font-[montserrat] ">
            Where Fire Meets Flavor
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Burger;