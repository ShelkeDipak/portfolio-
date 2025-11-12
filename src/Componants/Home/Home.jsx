import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { CiLinkedin } from "react-icons/ci";
import { TiSocialGithubCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { PiYoutubeLogoThin } from "react-icons/pi";
import "./Home.css";

function Home() {
  return (
    <section id="home">
      <div className="home-left">
        <div className="image-wrapper">
          <img src="img photo copy.png" alt="Dipak Shelke" className="profile-img" />
        </div>
      </div>

      <div className="home-right">
        <h1>
          Hi 👋 <br /> I'm <span className="highlight">Dipak Shelke</span>
        </h1>

        <h2 className="typewriter">
          <Typewriter
            words={["Web Developer", "Software Developer", "Pro Video Editor"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="about-text">
          Welcome to my portfolio! I'm a final-year ENTC Student and a passionate Full-Stack Developer
          with hands-on experience in both frontend and backend technologies. I enjoy transforming
          ideas into user-centric web applications through clean, efficient code and thoughtful design.
        </p>

        <div className="cta-section">
          <a href="/filename.pdf" download className="download-btn">
            Download CV
          </a>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://github.com/settings/profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <TiSocialGithubCircular />
            </a>
            <a
              href="https://www.instagram.com/accounts/onetap/?next=%2Fdipak_gaju_bhai_jaan_m%2Ffollowing%2F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <SlSocialInstagram />
            </a>
            <a
              href="https://www.youtube.com/@Dipak.2003-i7i"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <PiYoutubeLogoThin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
