import React from 'react';
import Experience from '../Experience/Experience';
import FaqQuestion from '../FaqQuestion/FaqQuestion';
import Home from '../Home/Home';
import OurFeatures from '../OurFeatures/OurFeatures';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const HomePage = () => {
    return (
        <div>
            <Home/>
            <Services />
            <Experience />
            <OurFeatures />
            <FaqQuestion />
            <Testimonial />
        </div>
    );
};

export default HomePage;