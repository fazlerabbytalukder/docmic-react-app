import React from 'react';
import facebook from '../../images/facebook.png';
import insta from '../../images/insta.png';
import google from '../../images/google.png';
import twitter from '../../images/twitter.png';
import youtube from '../../images/youtube.png';

const Footer = () => {
    return (
        <div className='footer-bg mt-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-3 mt-5 d-flex justify-content-center">
                        <div className="footer-des">
                            <p className='logo fw-bold'>Doc<span className='logo-span'>mic.</span></p>
                            <p className='footer-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda maxime ullam voluptas porro adipisci placeat.</p>
                            <div className="footer-icon d-flex align-items-center">
                                <img src={facebook} alt="" />
                                <img src={insta} alt="" />
                                <img src={google} alt="" />
                                <img src={twitter} alt="" />
                                <img src={youtube} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-5 d-flex justify-content-center justify-sm-content-start">
                        <div className="quick-link">
                            <p className='footer-heading text-center'>Quick Link</p>
                            <ul className='footer-links'>
                                <li>About Us</li>
                                <li>Our Procing</li>
                                <li>Our Gallery</li>
                                <li>Appointment</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 mt-5 d-flex justify-content-center">
                        <ul className='footer-links pt-4'>
                            <li>Services</li>
                            <li>Our Doctors</li>
                            <li>Our Latest News</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-5">
                        <p className='footer-heading'>Opening Hours</p>
                        <div className="timing">
                            <div className="time-1 d-flex justify-content-between align-items-center">
                                <p>Mon-Tue</p>
                                <p>08:00 AM-05:00 PM</p>
                            </div>
                            <div className="time-2 d-flex justify-content-between align-items-center">
                                <p>Wed-Tue</p>
                                <p>09:00 AM-06:00PM</p>
                            </div>
                            <div className="time-3 d-flex justify-content-between align-items-center">
                                <p>Fri-Sat</p>
                                <p>10:00 AM-07:00 PM</p>
                            </div>
                            <div className="time-4 d-flex justify-content-between align-items-center">
                                <p>Saturday</p>
                                <p className='text-start'>Emergency Only</p>
                            </div>
                            <div className="time-5 d-flex justify-content-between align-items-center">
                                <p>Personal</p>
                                <p>Mon-05:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;