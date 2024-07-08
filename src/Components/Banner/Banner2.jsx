
import React from 'react';
import './Banner.css';
import women_banner from '../Assets/banner_women.png'
import kid_banner from '../Assets/banner_kids.png'
export const Banner2 = () => {
    return (
        <>
            <div className="promo-banner">
                <div className="promo-text">
                    <h2 className="promo-title">QIIMO DHIMIS 35% </h2>
                    <p className="promo-time"><span>12</span> Hours <span>20</span> Mins</p>
                    <button className="promo-button">Hada dalbo</button>
                </div>
                <div className="promo-image">
                    <img src={women_banner} alt="Hoodie" width="250px" height="350px" />
                </div>
            </div>
        </>

    );
};

export default Banner2

