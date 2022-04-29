import React from 'react';
import img from '../../../image/service_car.png';
import './Services.css';
import icon_break1 from '../../../image/icon_break1.png';
import icon_profile from '../../../image/icon_profile.png';
import icon_engine from '../../../image/icon_engine.png';
import icon_dealership from '../../../image/icon_dealership.png';
const Services = () => {
    return (
        <div className='w-100'>
            <h3>Services</h3>
            <div className="row">
                <div className='col-md-6'>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className='col-md-6'>
                    <div>
                        <h3>Service</h3>
                    </div>
                    <div >
                        <ul className='row'>
                            <li className='col-md-6'>
                                <div className='brake-icon '>

                                    <img src={icon_break1} alt="" />
                                    <h5>Break Checkup</h5>
                                    <p>We have the right caring, experience and dedicated professional for you.</p>
                                </div>
                            </li>
                            <li className='col-md-6'>
                                <div className='brake-icon '>

                                    <img src={icon_profile} alt="" />
                                    <h5>Security Inspections</h5>
                                    <p>We have the right caring, experience and dedicated professional for you.</p>
                                </div>
                            </li>
                            <li className='col-md-6'>
                                <div className='brake-icon '>

                                    <img src={icon_engine} alt="" />
                                    <h5>Engine Upgrades </h5>
                                    <p>We have the right caring, experience and dedicated professional for you.</p>
                                </div>
                            </li>
                            <li className='col-md-6'>
                                <div className='brake-icon '>

                                    <img src={icon_dealership} alt="" />
                                    <h5>Dealership</h5>
                                    <p>We have the right caring, experience and dedicated professional for you.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;