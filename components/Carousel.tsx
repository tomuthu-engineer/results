'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  "/assets/images/p1.png",
  "/assets/images/p2.png",
  "/assets/images/p3.png",

];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const handleDotClick = (index:number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[200px] md:h-[500px] lg:h-[400px] overflow-hidden">
      <Image
        src={images[currentIndex]}  // Use currentIndex to select image
        alt="Banner Image"
        fill
        priority // Optional: load the image faster
      />
      <div className="absolute inset-0 flex items-center justify-center ">
        {/* You can add content here, like text or buttons */}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
