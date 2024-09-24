"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

const HomeScreen = () => {
    const carouselItems = [
        { image: '/images/pngexam.png', name: '1' },
        { image: '/images/img2.png', name: '2' },
        { image: '/images/leaders.png', name: '3' },
    ];

    return (
        <>
            {/* Header */}
            <header className="header mb-2">
                <div className="header-content">
                    <div className='row'>
                        <div className='col-md-2 text-start px-0 ps-3'>
                            <Image src="/images/pngflag.jfif" alt="Logo" className="flaglogo" width={80} height={80} />
                        </div>
                        <div className='col-md-7 mt-2'>
                            <p className="title title-color mt-1 text-center fw-bold mb-0">National Examination Results - 2024</p>
                        </div>
                        <div className='col-md-3 mt-2'>
                            <div className="row mt-2 pl-2 align-self-center">
                                <div className='col-md-4 text-end px-0'>
                                    <Image className="logo" src="/images/img5.png" alt="Logo" width={50} height={50} />
                                </div>
                                <div className='col-md-8 text-start px-0'>
                                    <p className="ministry-text mb-0">Ministry of Education</p>
                                    <p className="country-text mt-0">Papua New Guinea</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Carousel */}
            <div className='row'>
                <div className="carousel-container w-100">
                    <Carousel interval={5000} controls={false} indicators={true}>
                        {carouselItems.map((item, index) => (
                            <Carousel.Item key={index}>
                                <Image className="d-block carousel-image" src={item.image} alt={`Slide ${index}`} width={1024} height={250} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>

            {/* Content Section */}
            <div className="row m-2">
                <p className="col-md-10 offset-md-1 mb-4">
                    Our government's vision is to modernize and provide quality education for all that is globally comparable through strategic reforms. The National Department of Education (NDoE) is glad to continue to provide <span className='fw-bold color-red'>Grade 10 and Grade 12 Student&apos;s National Examination Results for 2024.</span> Every student and parent can go online now to access their examination results in real time.
                </p>

                {/* Buttons Section */}
                <div className='col-md-12'>
                    <div className="row">
                        <div className='offset-md-2 col-md-3 text-center'>
                            <button className="btn bg-gradient mx-3 title-color">Grade 10 Results</button>
                            <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p>
                        </div>
                        <div className='col-md-3 text-center'>
                            <button className="btn bg-gradient mx-3 title-color">Grade 12 Results</button>
                            <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p>
                        </div>
                        <div className='col-md-3 text-center'>
                            <button className="btn bg-gradient mx-3 title-color">STEM Results</button>
                            <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS */}
            <style jsx>{`
                .declaration {
                    font-size: 0.675rem !important;
                }
                .color-red {
                    color: #00355b;
                }
                .header {
                    width: 100%;
                    height: 85px;
                    background: #00355b;
                }
                .bg-gradient {
                    background: #00355b;
                }
                .flaglogo {
                    width: 80px;
                    height: 80px;
                    margin-top: 1px;
                    object-fit: cover;
                    border-radius: 50px;
                    background-color: white;
                }
                .title {
                    font-size: 36px;
                }
                .title-color {
                    color: white;
                }
                .carousel-container {
                    height: 250px;
                    margin-bottom: 20px;
                }
                .carousel-image {
                    height: 250px;
                    width: 100%;
                }
                .btn {
                    padding: 10px 20px;
                    font-size: 14px;
                    font-weight: bold;
                }
                .ministry-text {
                    font-size: 16px;
                    font-weight: bold;
                    color: white;
                }
                .country-text {
                    font-size: 14px;
                    color: white;
                }
            `}</style>
        </>
    );
};

export default HomeScreen;
