import React from 'react';
import img from '../../../image/service_car.png';
import './Services.css';
import icon_break1 from '../../../image/icon_break1.png';
import icon_profile from '../../../image/icon_profile.png';
import icon_engine from '../../../image/icon_engine.png';
import icon_dealership from '../../../image/icon_dealership.png';
const Services = () => {
    return (
        <div className='me-2'>
            <h2 className='service-title'>After sell Services</h2>
            <div className="row">
                <div className='col-md-6 service-img'>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className='col-md-6 container'>
                    <div>
                        {/* <h3 className='ms-5'>Available Service</h3> */}
                    </div>
                    <div >
                        <div className='row service-item '>
                            <div className='col-md-6'>
                                <div className='brake-icon '>

                                    <img className='mb-3' src={icon_break1} alt="" />
                                    <h5>Break Checkup</h5>
                                    <p>We have the right caring, experience and dedicated professional for you.</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='brake-icon '>

                                    <img className='mb-3' src={icon_profile} alt="" />
                                    <h5>Security Inspections</h5>
                                    <p>We have the right caring, experience and dedicated professional for you.</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='brake-icon '>

                                    <img className='mb-3' src={icon_engine} alt="" />
                                    <h5>Engine Upgrades </h5>
                                    <p>We have the right caring, experience and dedicated professional for you.</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='brake-icon '>

                                    <img className='mb-3' src={icon_dealership} alt="" />
                                    <h5>Dealership</h5>
                                    <p>We have the right caring, experience and dedicated professional for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;