 import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { CiLinkedin } from "react-icons/ci";
import { TiSocialGithubCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { PiYoutubeLogoThin } from "react-icons/pi";

import './Home.css'

function Home() {
  return (
    <div id="home">
      <div className="righthome">
        <h1>Hii 👋 <br /> I'm Dipak Shelke</h1>
        <br />
        <div className="typewriter-text">
          <Typewriter
            words={['Web Developer', 'Software Developer', 'Pro-Video Editor']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <br />
        <p>Welcome to my portfolio!
          <br />
          <br />
          I'm a final-year ENTC Student and a passionate Full-Stack Developer with hands-on experience in both frontend and backend technologies. I enjoy transforming ideas into user-centric web applications through clean, efficient code and thoughtful design.</p>
          
          <div className="cv-icons-wrapper">
  <a href="/filename.pdf" download className="download-button">
    Download CV
  </a>
  <div className="icon-box">
    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
      <CiLinkedin />
    </a>
    <a href="https://github.com/settings/profile" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
      <TiSocialGithubCircular />
    </a>
    <a href="https://www.instagram.com/accounts/onetap/?next=%2Fdipak_gaju_bhai_jaan_m%2Ffollowing%2F" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
      <SlSocialInstagram />
    </a>
    <a href="https://www.youtube.com/@Dipak.2003-i7i" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
      <PiYoutubeLogoThin />
    </a>
  </div>
</div>


      </div>
      <div className="lefthome">
        <div className="img-box">
          <div className="line-box">
            <img src="img photo copy.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home