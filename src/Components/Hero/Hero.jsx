import React from 'react'
import './Hero.css'
import profile_img from "../../assets/home image.png";

import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Sabik,</span> Web developer and Graphics Designer</h1>
      <p>"I am a web developer from Kochi, specializing in creating dynamic websites and stunning 
       graphic designs."</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"> <a href="src\Components\cv.pdf" target='blank' style={{textDecoration:'none',color:'white'}} >My resume</a> </div>
      </div>
    </div>
  )
}

export default Hero
