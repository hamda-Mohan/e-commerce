import React from 'react'
import './Hero.css'
import hand_icon from '../Components/Assets/hand_icon.png'
//import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Components/Assets/arrow.png'
import hero_image from '../Components/Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>

        <div>
          <div className='hero-hand-icon'>
            <p>new</p>
            <img src={hand_icon} alt='hand_icon' />
          </div>
          <p>collections</p>
          <p>for everyone </p>
        </div>
        <div className="hero-latest-btn">
          <div>latest collections</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero