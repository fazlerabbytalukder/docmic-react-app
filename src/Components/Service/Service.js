import React from 'react';

const Service = ({ service }) => {
    const { name, description, icon } = service;
    return (
        <div className="col-md-3 mt-4">
            <div className="card shadow-sm">
                <div className="card-body service-card-body">
                    <div className="icon">
                        <img className='icon-images' src={icon} alt="" />
                    </div>
                    <div className="text">
                        <p>{name}</p>
                        <p>{description}</p>
                        <button className='explore-button'>Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;