import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-blue-900 shadow-md py-1"> {/* Reduced vertical padding */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-2 md:space-y-0"> {/* Reduced space-y */}
                
                {/* Left Section */}
                <div className="flex items-center space-x-3"> {/* Reduced space-x */}
                    <div className="relative w-12 h-12 md:w-16 md:h-16"> {/* Reduced size */}
                        <Image src="/assets/images/pnglogo.png" alt='Logo' fill className="object-contain" />
                    </div>
                    <h1 className="text-base md:text-xl font-bold text-white text-center md:text-left"> {/* Reduced font size */}
                        National Examination Results - 2024
                    </h1>
                </div>
                
                {/* Right Section, only visible on XL devices */}
                <div className="hidden xl:flex items-center space-x-3"> {/* Only show on XL devices */}
                    <div className="relative w-12 h-12 md:w-16 md:h-16"> {/* Reduced size */}
                        <Image src="/assets/images/pngem.png" alt='Department Logo' fill className="object-contain" />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-base md:text-lg font-semibold text-white"> {/* Reduced font size */}
                            Department of Education
                        </h1>
                        <h3 className="text-xs md:text-sm font-medium text-gray-300"> {/* Reduced font size */}
                            Papua New Guinea
                        </h3>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
