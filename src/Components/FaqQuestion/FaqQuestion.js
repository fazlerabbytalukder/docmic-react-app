import React, { useState } from 'react';
import faqImg from '../../images/Frame 21.png'

const FaqQuestion = () => {
    const [selected, setSelected] = useState(null);

    const toggle = i => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i)
    }
    return (
        <div className='container mt-5'>
            <div className="header-text">
                <p>FAQ Questions</p>
                <h1>Get Your General Answer</h1>
            </div>
            <div className="row">
                <div className="col-md-8 mt-5">
                    <div className="accordian">
                        {
                            data.map((item,i) => (
                                <div className='item'>
                                    <div className="title" onClick={()=>toggle(i)}>
                                        <p>{item.question}</p>
                                        <p className='select-ison'>{selected === i ? '-':'+'}</p>
                                    </div>
                                    <div className={selected === i ? 'content show':'content'}>
                                        {item.answer}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <img className='img-fluid' src={faqImg} alt="" />
                </div>
            </div>
        </div>
    );
};

const data = [
    {
        question: 'Get Your General Answer?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda maxime ullam voluptas porro adipisci placeat.'
    },
    {
        question: 'Will I always see my own doctor?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda maxime ullam voluptas porro adipisci placeat.'
    },
    {
        question: 'What is one Medicals care?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda maxime ullam voluptas porro adipisci placeat.'
    },
    {
        question: 'what is evidence based medicine?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda maxime ullam voluptas porro adipisci placeat.'
    },
    {
        question: 'What is an academic medical care?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda maxime ullam voluptas porro adipisci placeat.'
    }
]

export default FaqQuestion;