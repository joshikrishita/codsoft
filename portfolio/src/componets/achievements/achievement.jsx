import React from 'react'
import './achievement.css';
import htmlCss from '../../assets/meta html&Css2.jpg'
import js from '../../assets/Meta JS2.jpg'
import vcontrol from '../../assets/meta version control2.jpg'
import reactImg from '../../assets/ReactBasic2.jpg'



const Achievement = () => {
  return (
    <section id="achivements">
    <span className="achieveTitle">Achievements</span>
    <span className="achieveDescription">My front-end certifications showcase proficiency in web development fundamentals (HTML, CSS, and JavaScript) and potentially advanced frameworks (React) for building dynamic experiences.</span>
    <div className="certiBoxes">
    {/* <div className="certiBox">
      <img src={htmlCss} alt="html-css" className="certiImg" />
        
        <div className="certiTxt">
          <h2>Html & Css In Depth</h2>
          <p>An in-depth HTML & CSS certificate teaches you to build & style web pages, making them responsive & user-friendly. Great for starting a front-end dev career.</p>
        
        </div>
      </div>
      <div className="certiBox">
        <img src={js} alt="javascript" className="certiImg" />
        <div className="certiTxt">
          <h2>Programming with JavaScript</h2>
          <p>JavaScript certificates equip you with skills to create interactive web experiences, adding animations & user actions to static websites.</p>
          
        </div>
      </div>
      <div className="certiBox">
        <img src={vcontrol} alt="version-control " className="certiImg" />
        <div className="certiTxt">
          <h2>Version Control</h2>
          <p> A version control certificate teaches you to track changes, collaborate, and revert to past versions of your code. </p>
        </div>
      </div>
      <div className="certiBox">
        <img src={reactImg} alt="react-basic" className="certiImg" />
        <div className="certiTxt">
          <h2>React Basics</h2>
          <p> A React Basics certificate gets you started building dynamic web apps with reusable components and user interactions. </p>
        </div>
      </div> */}
      <img src={htmlCss} alt="html&css" id="img" />
      <img src={js} alt="javaScript" id="img"/>
      <img src={vcontrol} alt="vControl"id="img" />
      <img src={reactImg} altt="React-Basics" id="img"/>
    </div>
    </section>
  )
}

export default Achievement