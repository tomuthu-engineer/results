import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header className=' py-3 xl:py-2 text-white bg-main'>
            <div className='container px-6 md:px-6 xl:px-6 flex justify-between items-center'>
                <div className='w-20 h-20 bg-white flex items-center justify-center rounded-full' >
                    <Image src='/assets/Header/pnglogo.png' alt='' height={60} width={60}></Image>
                </div>

                <div className='xl:hidden'>
                    <h1 className=' text-[16px]  md:text-3xl '>Department of Education</h1>
                    <h3 className='text-[10px] ph:text-3xl md:text-[16px]'>National Examination Results - 2024</h3>
                </div>

                <div className='hidden xl:block'>
                    <h1 className='xl:text-4xl ml-20'>National Examination Results - 2024</h1>
                </div>
                <div className='hidden xl:flex items-center'>
                <div className='w-20 h-20 bg-white flex items-center justify-center rounded-full' >
                    <Image src='/assets/Header/pngem.png' alt='' height={60} width={60}></Image>
                </div>
                    <div>
                        <h2>Department Of Education</h2>
                        <h3>papua new guinea</h3>
                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header