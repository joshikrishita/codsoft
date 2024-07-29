import React from 'react'
import './skills.css'
import Uix from '../../assets/ui-design.png'
import Webdes from '../../assets/website-design.png'
import App from '../../assets/app-design.png'

const Skills = () => {
  return (
   <section id="skills">
    <span className="skillTitle">What I Do</span>
    <span className="skillDescription">Front-End Developer with expertise in HTML, CSS, and JavaScript. I'm also proficient in frameworks like React.js. Explore my portfolio to see how I leverage these skills to build modern web applications.</span>
    <div className="skillBars">
      <div className="skillBar">
        <img src={Uix} alt="uix" className="skillImg" />
        <div className="skillTxt">
          <h2>Building User Interfaces (UI)</h2>
          <p>I translate designs and mockups into functional web pages using HTML, CSS,JavaScript, and React</p>
        </div>
      </div>
      <div className="skillBar">
        <img src={Webdes} alt="webdesign" className="skillImg" />
        <div className="skillTxt">
          <h2>Website Designing</h2>
          <p>Creating responsive layouts to You ensure websites look good and function properly across all devices (desktop, mobile, tablet).</p>
        </div>
      </div>
      <div className="skillBar">
        <img src={App} alt="appdesign" className="skillImg" />
        <div className="skillTxt">
          <h2>Optimizing Website Performance</h2>
          <p> I implement techniques to make websites load faster and provide a smoother user experience.</p>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Skills