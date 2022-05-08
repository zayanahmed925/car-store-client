import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import './Home.css';
import img from '../../../image/cars.png';
import Services from '../Services/Services';
import Footer from '../../../Shared/Footer/Footer';
import useItems from '../../Hooks/useItems';
import Loading from '../../../Shared/Loading/Loading';
const Home = () => {
    const [items] = useItems()
    console.log(items);
    return (
        <div>
            {
                items.length === 0 ? <Loading></Loading> : <div>
                    <Banner></Banner>
                    <Items></Items>
                    <div className='text-center car my-5'>
                        <img className='img-fluid ' src={img} alt="" />
                    </div>
                    <Services></Services>
                    <Footer></Footer>
                </div>
            }

        </div>
    );
};

export default Home;