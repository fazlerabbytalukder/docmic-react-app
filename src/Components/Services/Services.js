import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [servics, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/fazlerabbytalukder/docmic-react-app/main/public/ServiceData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    
    return (
        <div className='container mt-5'>
            <div className="header-text text-center">
                <p>Our Services</p>
                <h1>Services For Your Health</h1>
            </div>
            <div className="service-content">
                <div className="row">
                    {
                        servics.map(service => <Service key={service.id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;