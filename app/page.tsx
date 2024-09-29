import React from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Carousel';
import Image from 'next/image';

const Home = () => {
  return (
    <section className='bg-white h-screen'> {/* Flex column layout */}
      <Header />
      <div className='mt-1'>
        <Banner />
      </div>

      {/* Paragraph Section */}
      <div className='max-w-7xl mx-auto px-6 py-8'>
        <p className='text-justify text-sm md:text-base lg:text-lg font-medium text-gray-700 mb-6'>
          Our government's vision is to modernize and provide quality education for all that is globally comparable through strategic reforms. 
          The National Department of Education (NDoE) is glad to continue to provide 
          <span className='font-bold text-blue-600'> Grade 10 and Grade 12 Student&apos;s National Examination Results for 2024</span>. 
          Every student and parent can go online now to access their examination results in real time.
        </p>
      </div>

      {/* Button Section */}
      <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10'>
        <button className='bg-blue-600 text-white py-3 w-44 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105'>
          Grade 10 Results
        </button>
        <button className='bg-blue-600 text-white py-3 w-44 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105'>
          Grade 12 Results
        </button>
        <button className='bg-blue-600 text-white py-3 w-44 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105'>
          STEM Results
        </button>
      </div>

      {/* Department Logo Section */}
      <div className="block xl:hidden flex items-center space-x-3 mx-auto text-left justify-center bg-white"> {/* Flex for logo and text */}
        <div className="relative w-12 h-12 md:w-16 md:h-16">
          <Image src="/assets/images/pngem.png" alt='Department Logo' fill className="object-contain" />
        </div>
        <div>
          <h1 className="text-base md:text-lg font-semibold text-gray-800">Department of Education</h1>
          <h3 className="text-xs md:text-sm font-medium text-gray-500">Papua New Guinea</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
