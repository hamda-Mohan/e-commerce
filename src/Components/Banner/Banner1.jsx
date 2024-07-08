
import React from 'react';
import './Banner.css';
import men_banner from '../Assets/banner_mens.png'

export const Banner1 = () => {
    return (
        <>
        <div className="promo-banner">
            <div className="promo-text">
                    <h2 className="promo-title">QIIMO DHIMIS 35% </h2>
                    <p className="promo-time"><span>12</span> Hours <span>20</span> Mins</p>
                    <button className="promo-button">Hada dalbo</button>
            </div>
            <div className="promo-image">
                <img src={men_banner} alt="Hoodie" />
            </div>
        </div>
        </>
        
    );
};

export default Banner1

