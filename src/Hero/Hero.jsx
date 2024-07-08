import React from 'react'
import './Hero.css'
import hand_icon from '../Components/Assets/hand_icon.png'
import arrow_icon from '../Components/Assets/arrow.png'
import hero_image from '../Components/Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-content">
        <div className="hero-left">
          <h2>ADEEGYO CUSUB!</h2>
          <div className="hero-text">
            <div className='hero-hand-icon'>
              <p>hada dalbo</p>
              <img src={hand_icon} alt='hand_icon' />
            </div>
            <p>naqshadihii u danbeeye oo hada hel</p>
          </div>
          <div className="hero-latest-btn">
            <div>dalabkii u danbeye</div>
            <img src={arrow_icon} alt="arrow_icon" />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="hero_image" width="500px" />
        </div>
      </div>
    </div>
  )
}

export default Hero
