import React from 'react';
import Navication from '../../Shared/Navigation/Navication';
import BestSeller from '../BestSeller/BestSeller';
import SeasonSale from '../SeasonSale/SeasonSale';
import Trending from '../Trending/Trending';
import Blog from '../Blog/Bolg';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../../Shared/Footer/Footer';
import FirstNevigation from '../../Shared/FirstNevigation/FirstNevigation';

const Home = () => {
    return (
        <div>
            <FirstNevigation></FirstNevigation>
            <Navication></Navication>
            <BestSeller></BestSeller>
            <SeasonSale></SeasonSale>
            <Trending></Trending>
            <Blog></Blog>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;