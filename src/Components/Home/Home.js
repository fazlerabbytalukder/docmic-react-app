import React from 'react';
import homeImg from '../../images/pose_2.png';
import doctor1 from '../../images/Ellipse 6.png';
import doctor2 from '../../images/Ellipse 7.png';
import doctor3 from '../../images/Ellipse 8.png';
import doctor4 from '../../images/Ellipse 9.png';

const Home = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="left">
                        <h1 className='heading'>Your <span className='health-color'>Health</span> Is Our Top <span className='priority-color'>Priority</span></h1>
                        <p className='description mb-4'>There are many variations of passages of Ipsum <br /> avaliavle, but the majority hea suffered.</p>
                        <button className='common-button'>Meet Our Specialist</button>
                        <div className="rate d-flex justify-content-between align-items-center mt-5">
                            <div className="recover-rate">
                                <h1>262k+</h1>
                                <p>Recovered Patients</p>
                            </div>
                            <div className="satisfaction-rate">
                                <h1>96%</h1>
                                <p>Satisfaction Rate</p>
                            </div>
                            <div className="expert-rate">
                                <h1>86+</h1>
                                <p>Expert Doctors</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center position-relative">
                    <div className='circle'></div>
                    <div className="right">
                        <div className="full-image">
                            <img className='img-fluid' src={homeImg} alt="" />
                            {/* <div className='circle'></div> */}
                        </div>
                        <div className="meet-our-doctor position-absolute bottom-0 end-0">
                            <div className="meet-doctor-container">
                                <p>Meet Our Doctors</p>
                                <div className="images mb-2">
                                    <img src={doctor1} alt="" />
                                    <img src={doctor2} alt="" />
                                    <img src={doctor3} alt="" />
                                    <img src={doctor4} alt="" />
                                    <i class="fa-solid fa-plus plus-icon"></i>
                                </div>
                                <div className='rectangle my-1'></div>
                                <div className='rectangle'></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;