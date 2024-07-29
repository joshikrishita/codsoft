import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import {Link}  from 'react-scroll';
import menu from '../../assets/mobMenu.png'



const Navbar = () => {

  const [showMenu,setShowMenu]= useState(false)
  return (

    <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktopMenu"> 
        <Link  activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">HOME</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-10} duration={500}className="desktopMenuListItem">ABOUT</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-10} duration={500}className="desktopMenuListItem">PROJECTS</Link>
        <Link activeClass="active" to="achivements" spy={true} smooth={true} offset={-10} duration={500}className="desktopMenuListItem">ACHIEMENTS</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
           document.getElementById('contact').scrollIntoView({behaviour:'smooth'});
        }}>
          Contact Me
        </button>

        <img src={menu} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
        <div className="navMenu" style= { {display:showMenu ? 'flex':'none'}}> 
        <Link  activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}  className="listItem"onClick={()=>setShowMenu(false)}>HOME</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-10} duration={500}className="listItem"onClick={()=>setShowMenu(false)}>ABOUT</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-10} duration={500}className="listItem"onClick={()=>setShowMenu(false)}>PROJECTS</Link>
        <Link activeClass="active" to="achivements" spy={true} smooth={true} offset={-10} duration={500}className="listItem"onClick={()=>setShowMenu(false)}>ACHIEMENTS</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-10} duration={500}className="listItem"onClick={()=>setShowMenu(false)}>CONTACT</Link>
        </div>

      </nav>
  )
}

export default Navbar;