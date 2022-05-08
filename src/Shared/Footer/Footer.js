import React from 'react';
import './Footer.css';
import playStore from '../../image/app.png';
import appStore from '../../image/app2.png';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer class=" py-3 mt-3 ">
                <section class="container d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <small>Copyright &copy; {year} Captured moments</small>
                    </div>
                    <div class="border-2 d-flex flex-column justify-content-center ">
                        <small>Get The App </small>

                        <a href="https://play.google.com/store/apps/details?id=com.julegdeveloper.africanweedingdress"
                            target="_blank"><img width="125px" src={playStore} class="my-3 border border-1 rounded-2"
                                alt="" /></a>
                        <a href="https://apps.apple.com/us/app/weeding/id1604580511" target="_blank"><img width="125px"
                            src={appStore} class="border border-1 rounded-2" alt="" /></a>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer;