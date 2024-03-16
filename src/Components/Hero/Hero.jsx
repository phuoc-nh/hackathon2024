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
                        <h1>Our story</h1>
                        {/* <img src={hand_icon} alt="" /> */}
                    </div>
                    <p>A platform connecting Illawara farmers directly with customers to sell produce and exchange agriculture machinery.
                        Empowering farmers, fostering community engagement, and promoting sustainable practices for a vibrant local economy.</p>
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
