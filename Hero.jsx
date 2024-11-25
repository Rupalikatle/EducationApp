import React from 'react'
import './Hero.css'
// import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculm is designed to empower students
                    with the knowldege,skills,and experiences needed to excel in
                    the dynamic field of education</p>
                <button className='btn'>Explore more</button>
            </div>
        </div>
    )
}

export default Hero