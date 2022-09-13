import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='container mt-5'>
            <div className="header-text text-center">
                <p>Testimonial</p>
                <h1>What they say?</h1>
            </div>
            <div className="testimonial-part px-5">
                <Slider {...settings}>
                {
                            data.map((item) => (
                                <div className='testimonial-card d-flex justify-content-between align-items-center'>
                                    <div className="left">
                                        <p>{item.Name}</p>
                                        <p>{item.occupation}</p>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="right">
                                        <img src={item.img1} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                </Slider>
            </div>
        </div>
    );
};

const data = [
    {
        Name: 'David jamaes',
        occupation:'Patient',
        description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content',
        img1: 'https://i.ibb.co/wS3KnRR/Ikbal-1.png',
        img2: 'https://i.ibb.co/2Z83W7y/Ornament-24.jpg',
        img3: 'https://i.ibb.co/HtcFJFJ/Ornament-57.jpg'
    },
    {
        Name: 'Fazle Rabby',
        occupation:'Doctor',
        description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content',
        img1: 'https://i.ibb.co/wS3KnRR/Ikbal-1.png',
        img2: 'https://i.ibb.co/2Z83W7y/Ornament-24.jpg',
        img3: 'https://i.ibb.co/HtcFJFJ/Ornament-57.jpg'
    },
    {
        Name: 'Ratul Talukder',
        occupation:'Patient',
        description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content',
        img1: 'https://i.ibb.co/wS3KnRR/Ikbal-1.png',
        img2: 'https://i.ibb.co/2Z83W7y/Ornament-24.jpg',
        img3: 'https://i.ibb.co/HtcFJFJ/Ornament-57.jpg'
    },
    {
        Name: 'Mikel jamaes',
        occupation:'Doctor',
        description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content',
        img1: 'https://i.ibb.co/wS3KnRR/Ikbal-1.png',
        img2: 'https://i.ibb.co/2Z83W7y/Ornament-24.jpg',
        img3: 'https://i.ibb.co/HtcFJFJ/Ornament-57.jpg'
    },
    {
        Name: 'Jemi jamaes',
        occupation:'Patient',
        description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content',
        img1: 'https://i.ibb.co/wS3KnRR/Ikbal-1.png',
        img2: 'https://i.ibb.co/2Z83W7y/Ornament-24.jpg',
        img3: 'https://i.ibb.co/HtcFJFJ/Ornament-57.jpg'
    }
]





export default Testimonial;