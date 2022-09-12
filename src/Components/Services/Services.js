import React from 'react';
import heart from '../../images/medical cardiology.png'
import checkBook from '../../images/tik-board.png'
import dentel from '../../images/medical-dental.png'
import brifecase from '../../images/briefcase-medical.png'

const Services = () => {
    return (
        <div className='container mt-5'>
            <div className="header-text text-center">
                <p>Our Services</p>
                <h1>Services For Your Health</h1>
            </div>
            <div className="service-content">
                <div className="row">
                    <div className="col-md-3 mt-4">
                        <div className="card shadow-sm">
                            <div className="card-body service-card-body">
                                <div className="icon">
                                    <img src={heart} alt="" />
                                </div>
                                <div className="text">
                                    <p>Cardiology</p>
                                    <p>Seduahag perspiciant under omnised atused error</p>
                                    <button className='explore-button'>Explore Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                    <div className="card shadow-sm">
                            <div className="card-body service-card-body">
                                <div className="icon">
                                    <img src={checkBook} alt="" />
                                </div>
                                <div className="text">
                                    <p>Monthly Check Up</p>
                                    <p>Seduahag perspiciant under omnised atused error</p>
                                    <button className='explore-button'>Explore Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                    <div className="card shadow-sm">
                            <div className="card-body service-card-body">
                                <div className="icon">
                                    <img src={dentel} alt="" />
                                </div>
                                <div className="text">
                                    <p>Dental Care</p>
                                    <p>Seduahag perspiciant under omnised atused error</p>
                                    <button className='explore-button'>Explore Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                    <div className="card shadow-sm">
                            <div className="card-body service-card-body">
                                <div className="icon">
                                    <img src={brifecase} alt="" />
                                </div>
                                <div className="text">
                                    <p>Opthalmology</p>
                                    <p>Seduahag perspiciant under omnised atused error</p>
                                    <button className='explore-button'>Explore Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;