import React from 'react';
import featureIng from '../../images/Frame 22.png';

const OurFeatures = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-5">
                    <img src={featureIng} alt="" />
                </div>
                <div className="col-md-7">
                    <div className="header-text">
                        <p>Our Hospital Feature</p>
                        <h1>Make An Appointment Easy And Fast Servies</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFeatures;