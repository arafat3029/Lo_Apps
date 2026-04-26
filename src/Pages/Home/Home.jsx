import React from 'react';
import Baner from '../Baner/Baner';
import Trusted from '../Trusted/Trusted';
import Trending from '../Trending/Trending';

const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <Trusted></Trusted>
            <Trending></Trending>
        </div>
    );
};

export default Home;