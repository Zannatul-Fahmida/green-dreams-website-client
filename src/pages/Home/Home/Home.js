import React from 'react';
import Offer from '../Offer/Offer';
import Plants from '../Plants/Plants';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <Plants />
            <Offer />
        </div>
    );
};

export default Home;