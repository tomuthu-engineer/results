"use client";
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const HomeScreen = () => {
    const carouselItems = [
        {
            image: '/images/5.png',
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
            <header className="header mb-3 pb-10">
                {/* <h1>Header Section</h1> */}
                <div className="header">
                    <div className="header-content">
                        <div className='row'>
                            <div className='col-md-2 text-start px-0 ps-3'>
                                <img src="/images/pngflag.jfif" alt="Logo" className="flaglogo" />
                            </div>
                            <div className='col-md-7 mt-2'>
                                <p className="title title-color mt-1 text-center fw-bold mb-0">National Examination Results - 2024</p>
                                {/* <p className="subtitle fw-bold text-center">Department of Education</p> */}
                            </div>
                            <div className='col-md-3 mt-2'>
                                <div className="row mt-2 pl-2 align-self-center">
                                    <div className='col-md-4 text-end px-0'>
                                        <img className="logo" src="/images/img5.png" alt="Logo" />
                                    </div>
                                    <div className='col-md-8 text-start px-0'>
                                        <p className="ministry-text mb-0 title-color">Ministry of Education</p>
                                        <p className="country-text mt-0 title-color">Papua New Guinea</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <img src="/images/flag.png" alt="Logo" className="flaglogo" />
                        <div className="text-container text-center">
                            <p className="title mt-5">Department of Education</p>
                            <p className="subtitle">National Examination Results - 2024</p>
                        </div> */}
                    </div>
                </div>
            </header>

            {/* Carousel */}
            <div className='row'>
                {/* <div className='col-md-8 offset-md-2'> */}

                <div className="carousel-container w-100">
                    <Carousel interval={5000} controls={false} indicators={true}>
                        {carouselItems.map((item, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block carousel-image" src={item.image} alt={`Slide ${index}`} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                {/* </div> */}
            </div>

            {/* Content Section */}
            <div className="row m-2">
                <p className="col-md-10 offset-md-1 mb-4">
                    Our government's vision is to modernize and provide quality education for all that is globally comparable through strategic reforms. The National Department of Education (NDoE) is glad to continue to provide <span className='fw-bold color-red'>Grade 10 and Grade 12 Student's National Examination Results for 2024.</span> Every student and parent can go online now to access their examination results in real time.
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

                {/* Bottom Section with Logo and Text */}
                {/* <div className="row mt-5 pl-2">
                    <div className='col-md-6 text-end px-0'>
                        <img className="logo" src="/images/img5.png" alt="Logo" />
                    </div>
                    <div className='col-md-6 text-start px-0'>
                        <p className="ministry-text mb-0">Ministry of Education</p>
                        <p className="country-text mt-0">Papua New Guinea</p>
                    </div>
                </div> */}
            </div>

            {/* CSS */}
            <style jsx>{`
            
            .declaration{
                font-size: 0.675rem !important;
                
            }
                .color-red {
                    color: #00355b;
                }
      .header {
          width: 100%;
          height: 60px;
          align-items:center;
          justify-content:center;
          background:#00355b;
        //    linear-gradient(#fee05c, #febc5b);
        }

        .bg-gradient {
          background: #00355b;
        //   linear-gradient(#fee05c, #febc5b) !important;
        }

        .header-content {
         
        }

        .flaglogo {
          width: 50px;
          height: 50px;
          margin-top: 1px;
          object-fit: cover;
          border-radius: 50px;
          background-color:white;
        }

        .text-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-size: 36px;
        }

        .title-color {
          color: white;
        }

        .subtitle {
          font-size: 16px;
          color: #000;
          text-align: center;
          margin-top: 5px;
          font-weight: 300;
        }
        .carousel-container {
        max-width:1200px;
          margin: 0 auto;
          margin-bottom: 20px;
          object-fit: cover;
        }
        .carousel-image {
                width: 100%;
          height: 400px;

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
        .bottom-section {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
        }
        .logo {
          width: 50px;
          height: 50px;
          margin-right: 10px;
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
