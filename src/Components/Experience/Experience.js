import React from 'react';
import experienceImg from '../../images/experience.png';

const Experience = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-8">
                    <div className="header-text">
                        <p>16+ Years Experiences</p>
                        <h1>We Are Always ensure Best Medical Treatment For Your Health</h1>
                        <p className='experience-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero exercitationem iusto ipsa hic tempore sit sequi id ipsam officia nam at, blanditiis expedita quos esse itaque in magni modi nulla? Ab fugit officia ex minus illum cumque, expedita eaque suscipit incidunt doloribus eum dicta illo dolor qui hic voluptatum soluta sed libero error inventore tempora? Voluptate, rem quidem ex eaque modi, sunt quae eveniet dolores sit, quaerat architecto corporis dolor ducimus dolorem minus. Ad ipsam corrupti voluptatibus numquam eos sequi, expedita dicta! Optio architecto neque id ratione facere, natus doloremque esse numquam excepturi debitis fugiat, corrupti laborum et quisquam dicta!</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <img className='img-fluid' src={experienceImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Experience;