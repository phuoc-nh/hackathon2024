import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../../img/fruits_box.png'


export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <div>
                    <div className="hero-hand-icon">
                        <p>Our story</p>
                        {/* <img src={hand_icon} alt="" /> */}
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Start here </div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>

            <div className="hero-right">
                <img className='w-[400px]' src={hero_image} alt="" />
            </div>
        </div>
    )
}
