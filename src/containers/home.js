import React, { useState } from 'react';

import Map from '../components/map';
import RatingBox from './RatingBox';

const Home = () => {
    const { type, setType } = useState("coords");

    return (
        <div className="container">
            <div>
                <div className="map-container">
                    {/* <Map /> */}
                    {/* <Overlay type={type} /> */}
                </div>
                <RatingBox type={type} />
            </div>
        </div>
    )
};

export default Home;
