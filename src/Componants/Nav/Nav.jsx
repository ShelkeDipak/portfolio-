import React, { useRef } from 'react';
import './Nav.css';
import { Link } from 'react-scroll';

function Nav() {
  let menu = useRef()
  let mobile = useRef()

  return (
    <>
      <nav>
        <img src="Hacker.png" alt="Logo" />


        <div className="title">
          <h3>Dipak</h3>
          <h2>Web Developer</h2>
        </div>

        <ul className='desktopmenu'>
          <Link to="home" activeClass="active" smooth={true} duration={500} spy={true}> <li>Home</li></Link>
          <Link to="about" activeClass="active" smooth={true} duration={600} spy={true}><li>About</li> </Link>
          <Link to="project" activeClass="active" smooth={true} duration={700} spy={true}><li>Projects</li></Link>
          <Link to="contact" activeClass="active" smooth={true} duration={800} spy={true}><li>Contact</li></Link>
        </ul>
        <div className="hamburger" ref={menu} onClick={() => {
          mobile.current.classList.toggle("activemobile");
          menu.current.classList.toggle("activeham");
        }} >
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>
        <ul className='mobailmenu' ref={mobile}>
          <Link to="home" activeClass="active" smooth={true} duration={500} spy={true}> <li>Home</li></Link>
          <Link to="about" activeClass="active" smooth={true} duration={600} spy={true}><li>About</li> </Link>
          <Link to="project" activeClass="active" smooth={true} duration={700} spy={true}><li>Projects</li></Link>
           <Link to="contact" activeClass="active" smooth={true} duration={800} spy={true}><li>Contact</li></Link>
        </ul>

      </nav>
    </>
  );
}

export default Nav;
