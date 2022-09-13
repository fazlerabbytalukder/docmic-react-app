import React from 'react';
import aboutImg from '../../images/Frame 21.png';

const About = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit provident velit doloremque numquam voluptatum. Earum nam pariatur similique, corrupti, voluptatibus eius, sit porro harum vitae voluptatum recusandae obcaecati optio provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit provident velit doloremque numquam voluptatum. Earum nam pariatur similique, corrupti, voluptatibus eius, sit porro harum vitae voluptatum recusandae obcaecati optio provident.</p>
                    <button className='common-button mt-2'>Learn More</button>
                </div>
                <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">
                    <img className='img-fluid' src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;