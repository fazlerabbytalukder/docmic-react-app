import React, { useEffect, useState } from 'react';
import featureIng from '../../images/Frame 22.png';
import OurFeature from '../OurFeature/OurFeature';

const OurFeatures = () => {
    const [feature, setFeature] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/fazlerabbytalukder/docmic-react-app/main/public/FeatureData.json')
            .then(res => res.json())
            .then(data => setFeature(data));
    }, []);
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
                    <div className="row">
                    {
                        feature.map(feature => <OurFeature key={feature.id} feature={feature} />)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default OurFeatures;