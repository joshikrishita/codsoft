import React from 'react'
import './intro.css';
import {Link}  from 'react-scroll';
import hireImg from '../../assets/hireme.png'
import bg from '../../assets/wbg1.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
           <span className="hello">Hello</span>
           <span className="introText">I'm <span className="introName">Krishita</span><br/>Front-End Developer</span>
           <p className="introPara">I'm a front-end developer with a passion for creating <br/>user-friendly and visually stunning web experiences. </p>
           <Link>
           <button className="btn"><img src={hireImg} alt="hire" className='btnImg' />Hire Me</button>
           </Link>
        </div>
        <img src={bg} alt="bg" className="bg" />
       
    </section>
  )
}

export default Intro