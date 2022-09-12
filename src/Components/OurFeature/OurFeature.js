import React from 'react';

const OurFeature = ({ feature }) => {
    const { title, description, icon } = feature;
    return (
        <div className="col-md-6 mt-4">
            <div className="card shadow-sm">
                <div className="card-body service-card-body">
                    <div className="icon">
                        <img className='icon-images' src={icon} alt="" />
                    </div>
                    <div className="text">
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFeature;