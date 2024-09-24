"use client";
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const Home = () => {
    return (
        <div>
            {/* Header and Buttons */}
            <section className="hero-section position-relative text-white mb-0">
                <Image src="/images/blur.png" alt="Background" className="hero-image" layout="fill" objectFit="cover" />

                {/*  Header and Results Buttons */}
                <div className="overlay position-absolute top-0 start-0 w-100 h-100">

                    {/* Header Section */}
                    <header className="container-fluid mt-0">
                        <div className='row d-flex justify-content-between'>
                            <div className='col-md-2 ps-0 text-center pt-0 mt-0 logo-div'>
                                <Image src="/images/flag.png" alt="PNG Logo" className="logo w-100 h-100" layout="responsive" width={270} height={100} />
                            </div>
                            <div className='col-md-4'>
                                <div className="row ps-5 ms-2 pt-2">
                                    <div className="col-md-6 ms-0 mb-0 mt-5 ps-1">
                                        <h1 className="display-5 fw-bold text-dark mb-0 font-poppins">NATIONAL EXAMINATION</h1>
                                        <div className='row mt-0 pt-3'>
                                            <div className="col-md-12 h1 text-danger mb-0 ms-5 ps-5 fs-1 results-font px-1"><i>Results</i></div>
                                        </div>
                                        <div className='row mt-0 year-div ps-5 ms-5 pt-3'>
                                            <div className='col-md-12 h1 text-dark fw-bold mb-5 font-poppins ms-0 ps-5 ms-2'>2024</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 pe-5 pt-4'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <nav className='navbar float-end me-5'>
                                            <a href="#" className="me-5 fontpoppins">HOME</a>
                                            <a href="#" className="me-5 fontpoppins">ABOUT US</a>
                                            <a href="#" className="me-5 fontpoppins">RESULT</a>
                                            <a href="#" className="fontpoppins">CONTACT</a>
                                        </nav>
                                    </div>
                                </div>
                                <div className='row pt-5 ms-5 ps-5'>
                                    <div className="col-md-4 mb-3 grade-div-width me-0 justify-content-between mt-5">
                                        <div className="roundedtopleft result-button pt-3 ps-0 pe-2 pb-0 text-white bg-danger justify-content-center">

                                            <p className="text-white text-uppercase mb-0 fs-7">Grade</p>
                                            <div className='row text-white my-0 py-0 fs-1'>
                                                <div className='col-md-6 ps-5 lh-1'>10</div>
                                                <div className='col-md-6 lh-1 arrow-button-div ps-1'>
                                                    <button className='bg-white rounded-circle border border-white fs-9 p-1 text-start arrow-button'>
                                                        <FaArrowRight />
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-white text-uppercase mb-1 fs-8">Results</p>

                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3 grade-div-width me-0 justify-content-between mt-5">
                                        <div className="roundedtopleft result-button pt-3 ps-0 pe-2 pb-0 text-white bg-danger justify-content-center">

                                            <p className="text-white text-uppercase mb-0 fs-7">Grade</p>
                                            <div className='row text-white my-0 py-0 fs-1'>
                                                <div className='col-md-6 ps-5 lh-1'>12</div>
                                                <div className='col-md-6 lh-1 arrow-button-div ps-1'>
                                                    <button className='bg-white rounded-circle border border-white fs-9 p-1 text-start arrow-button'>
                                                        <FaArrowRight />
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-white text-uppercase mb-1 fs-8">Results</p>

                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3 grade-div-width me-0 justify-content-between mt-5">
                                        <div className="roundedtopleft result-button pt-3 ps-0 pe-2 pb-0 text-white bg-danger justify-content-center">

                                            <div className='row text-white my-0 py-0 fs-3'>
                                                <div className='col-md-6 ps-4 lh-1'>STEM</div>
                                                <div className='col-md-6 lh-1 arrow-button-div ps-1'>
                                                    <button className='bg-white rounded-circle border border-white fs-9 p-1 text-start arrow-button'>
                                                        <FaArrowRight />
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-white text-uppercase mb-1 fs-8">Results</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Title and Results Buttons */}
                </div>
            </section>

            {/* Leadership Section */}
            <section className="leader text-white mt-0 py-4">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-6">
                            <Image src="/images/leaders.png" alt="Minister for Education" className="img-fluid mb-3" layout="responsive" width={500} height={300} />
                        </div>

                        <div className="col-md-6 text-start gap-1 fw-light py-5 p-3 text-justify">
                            <p>
                                Our government&apos;s vision is to modernise and provide quality education for all that is globally comparable
                                through strategic reforms. The National Department of Education (NDoE) is glad to continue to provide Grade 10,
                                Grade 12 Students&apos; National Examinations Results for 2023. Every student and parent can go online now to access
                                their examination results in real time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Styles */}
            <style jsx>{`
                .fontpoppins {
                    font-size: 0.8rem;
                } 

                .results-font {
                    font-family: 'MyHoliday';
                    line-height: 0.1 !important;
                    transform: translateX(-5%) rotate(-10deg);
                }

                .arrow-button-div {
                    padding-top: 0.75rem !important;
                }
                
                .arrow-button {
                    position: absolute;
                }
                
                .fs-1 {
                    font-size: 3rem !important;
                }
                
                .fs-7 {
                    font-size: 0.75rem;
                }
                
                .fs-8 {
                    font-size: 0.5875rem;
                }
                
                .fs-9 {
                    font-size: 0.575rem;
                }
                
                .results-font {
                    font-family: 'Holiday';
                }
                
                .logo {
                    width: 270px !important;
                }
                
                .logo-div {
                    margin-top: -30px !important;
                }
                
                .hero-section {
                    position: relative;
                    height: 330px;
                    object-fit: cover;
                }
                
                .hero-image {
                    width: 100%;
                    height: 330px;
                }
                
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(255, 255, 255, 0.75); /* White overlay with 75% opacity */
                    pointer-events: none; /* Ensure the overlay doesn't block interactions */
                }
                
                .result-button {
                    cursor: pointer;
                    font-weight: bold;
                }
                
                .result-button:hover {
                    background-color: #ff4c4c;
                }
                
                .leader {
                    background-color: #2e2d2d;
                    width: auto;
                    border: none;
                }
                
                .roundedtopleft {
                    background-color: #ff3131; /* Red background */
                    color: white;
                    padding: 20px;
                    width: 130px;
                    height: 100px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3); /* Right and bottom shadow */
                    border-top-left-radius: 40px; 
                    border-bottom-right-radius: 40px;
                }
                
                .navbar a {
                    color: black;
                    font-size: 15px;
                    font-weight: bold;
                    text-decoration: none; /* Remove underline */
                    transition: color 0.3s ease; /* Smooth color transition */
                }
                
                .grade-div-width {
                    /* width: 14%; */
                }
            `}</style>
        </div>
    );
};

export default Home;
