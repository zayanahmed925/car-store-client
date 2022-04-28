import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import './Home.css';
import img from '../../../image/cars.png';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <div className='text-center'>
                <img className='img-fluid' src={img} alt="" />
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;