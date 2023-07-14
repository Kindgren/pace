import React, { useState } from 'react';
import './HomePage.css';

const RunningCalculator = () => {
    const [distance, setDistance] = useState(10);
    const [pace, setPace] = useState(5 * 60); // pace is in seconds per kilometer
    const [time, setTime] = useState(distance * pace); 

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
        const seconds = timeInSeconds % 60;
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    

    const handleDistanceChange = (event) => {
        const newDistance = parseInt(event.target.value);
        setDistance(newDistance);
        setTime(newDistance * pace);
    };
    
    const handlePaceChange = (event) => {
        const newPace = parseInt(event.target.value);
        setPace(newPace);
        setTime(distance * newPace);
    };
    
    const handleTimeChange = (event) => {
        const newTime = parseInt(event.target.value);
        setTime(newTime);
        setPace(Math.round(newTime / distance));
    };
    

    return (
        <div className="container">
            <div className="slider-container">
                <label>
                    Distance:
                    <input type="range" min="1" max="50" value={distance} onChange={handleDistanceChange} onMouseUp={handleDistanceChange} />
                </label>
                <div className="slider-value">{distance} km</div> 
            </div>

            <div className="slider-container">
                <label>
                    Pace:
                    <input type="range" min="60" max="600" value={pace} onChange={handlePaceChange} onMouseUp={handlePaceChange} />
                </label>
                <div className="slider-value">{formatTime(pace)} min / km</div> 
            </div>

            <div className="slider-container">
                <label>
                    Time:
                    <input type="range" min="1" max="18000" value={time} onChange={handleTimeChange} onMouseUp={handleTimeChange} />
                </label>
                <div className="slider-value">{formatTime(time)}</div>
            </div>
        </div>
    );
};

export default RunningCalculator;
