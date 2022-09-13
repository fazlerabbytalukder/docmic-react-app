import React, { useEffect, useState } from 'react';
import commingSoonImg from '../../images/coming-soon-img.png';

const Department = () => {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinute, setTimerMinute] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("nov 10,2022").getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hour = Math.floor(distance % (24 * 60 * 60 * 1000)/(1000*60*60));
            const minute = Math.floor(distance % (60 * 60 * 1000)/(1000*60));
            const second = Math.floor(distance % (60 * 1000) / (1000));
            
            if (distance < 0) {
                //stop timer
                clearInterval(interval.current);
            } else {
                //update the timer
                setTimerDays(days);
                setTimerHours(hour);
                setTimerMinute(minute);
                setTimerSeconds(second);
            }

        })
    }

    useEffect(() => {
        startTimer();
    })
    return (
        <div className='container'>
            <div className="comming-soon-img">
                <img src={commingSoonImg} alt="" />
            </div>
            <div className="timing-container d-flex justify-content-around align-items-center shadow">
                <div className="days d-flex flex-column justify-content-around align-items-center">
                    <h1>{timerDays}</h1>
                    <p>Days</p>
                </div>
                <div className="colon">
                    <h1>:</h1>
                </div>
                <div className="hours d-flex flex-column justify-content-around align-items-center">
                    <h1>{timerHours}</h1>
                    <p>Hours</p>
                </div>
                <div className="colon">
                    <h1>:</h1>
                </div>
                <div className="minutes d-flex flex-column justify-content-around align-items-center">
                    <h1>{timerMinute}</h1>
                    <p>Minutes</p>
                </div>
                <div className="colon">
                    <h1>:</h1>
                </div>
                <div className="seconds d-flex flex-column justify-content-around align-items-center">
                    <h1>{timerSeconds}</h1>
                    <p>seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Department;