import React, { useState } from 'react';
import '../css/App.css';

import Map from '../components/editableMap';
import RatingBox from './RatingBox';
import Filter from './filter';

const Home = () => {

    return (
        <div className="container">
            <div>
                <div className="map-container">
                    {/* <Map /> */}
                    {/* <Overlay type={type} /> */}
                </div>
                <Filter />
                <RatingBox />
            </div>
        </div>
    )
};

export default Home;
