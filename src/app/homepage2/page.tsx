"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image'; // Import the next/image component

const HomeScreen = () => {
    const carouselItems = [
        {
            image: '/images/pngexam.png',
            name: '1',
        },
        {
            image: '/images/img2.png',
            name: '2',
        },
        {
            image: '/images/leaders.png',
            name: '3',
        },
    ];

    return (
        <>
            {/* Header */}
            <header className="header mb-2">
                <div className="header">
                    <div className="header-content">
                        <div className='row'>
                            <div className='col-md-4 text-start px-0'>
                                <Image 
                                    src="/images/flag.png" 
                                    alt="Logo" 
                                    className="flaglogo" 
                                    width={150} 
                                    height={150} 
                                />
                            </div>
                            <div className='col-md-8 pe-3'>
                                <p className="title mt-1 text-end fw-bold mb-0">National Examination Results - 2024</p>
                                <p className="subtitle fw-bold text-end">Department of Education</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Carousel */}
            <div className='row'>
                <div className="carousel-container w-100">
                    <Carousel interval={7000} controls={false} indicators={true}>
                        {carouselItems.map((item, index) => (
                            <Carousel.Item key={index}>
                                <Image 
                                    className="d-block carousel-image" 
                                    src={item.image} 
                                    alt={`Slide ${index}`} 
                                    width={800} // Set appropriate width
                                    height={300} // Set appropriate height
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>

            {/* Content Section */}
            <div className="row m-2">
                <p className="col-md-10 offset-md-1">
                    Our government&apos;s vision is to modernize and provide quality education for all that is globally comparable through strategic reforms. The National Department of Education (NDoE) is glad to continue to provide Grade 10 and Grade 12 Student&apos;s National Examination Results for 2024. Every student and parent can go online now to access their examination results in real time.
                </p>

                {/* Buttons Section */}
                <div className='col-md-12'>
                    <div className="row">
                        <div className='col-md-4 text-center'>
                            <button className="btn btn-warning mx-3">Grade 10 Results</button>
                        </div>
                        <div className='col-md-4 text-center'>
                            <button className="btn btn-warning mx-3">Grade 12 Results</button>
                        </div>
                        <div className='col-md-4 text-center'>
                            <button className="btn btn-warning mx-3">STEM Results</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS */}
            <style jsx>{`
                .header {
                    width: 100%;
                    height: 100px;
                    background: linear-gradient(#fee05c, #febc5b);
                }

                .bg-gradient {
                    background: linear-gradient(#fee05c, #febc5b);
                }

                .flaglogo {
                    width: 150px;
                    height: 150px;
                    margin-top: -20px;
                    object-fit: cover;
                }

                .title {
                    font-size: 36px;
                    color: #992202;
                }

                .subtitle {
                    font-size: 16px;
                    color: #000;
                    text-align: center;
                    margin-top: 5px;
                    font-weight: 300;
                }

                .carousel-container {
                    height: 300px;
                    margin-bottom: 20px;
                }

                .carousel-image {
                    height: 300px;
                    width: 100%;
                }

                .paragraph {
                    font-size: 14px;
                    color: #3c3c3c;
                    text-align: justify;
                    line-height: 1.5;
                }

                .btn {
                    padding: 10px 20px;
                    font-size: 14px;
                    font-weight: bold;
                }
            `}</style>
        </>
    );
};

export default HomeScreen;
