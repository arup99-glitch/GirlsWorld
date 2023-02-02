import React from 'react';
import FirstNevigation from '../../Shared/FirstNevigation/FirstNevigation';
import Footer from '../../Shared/Footer/Footer';
import BestSeller from '../BestSeller/BestSeller';
import Trending from '../Trending/Trending';

const Shop = () => {
    return (
        <div>
            <FirstNevigation></FirstNevigation>
            <BestSeller></BestSeller>
            <hr></hr>
            <Trending></Trending>
            <Footer></Footer>
        </div>
    );
};

export default Shop;