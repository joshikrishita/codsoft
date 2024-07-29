import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './projects.css'
import calc from '../../assets/calc.png'
import landing from '../../assets/landing.png'
import tic from '../../assets/tic-tac-toe.png'
import stop from '../../assets/stopwatch.png'
import stPaSc from '../../assets/st-pa-sci.png'

const data=[
    {
        name:"Calculator",
        img:"/src/assets/calc.png",
        review:"HTML crafts the calculator's structure, CSS styles its look, and JavaScript brings it to life with interactivity and calculations."
    },
    {
        name:"Tic-Tac-Toe",
        img:"/src/assets/tic-tac-toe.png",
        review:"HTML creates the tic tac toe grid, CSS styles the squares, and JavaScript manages turns, win checks, and interactivity."
    },
    {
        name:"Stop-Watch",
        img:"/src/assets/stopwatch.png",
        review:"HTML structures the stopwatch's display and buttons, CSS styles its look, and JavaScript powers its timing and interactivity."
    },
    {
        name:"Stone-Paper-Scissor",
        img:"/src/assets/st-pa-sci.png",
        review:"HTML structures buttons for rock, paper, scissors, CSS styles their look, and JavaScript handles user choices, generates computer's pick, and determines the winner.."
    },
    {
        name:"Landing Page",
        img:"/src/assets/landing.png",
        review:"HTML structures the gym's website content (classes, trainers), and CSS styles its design(images, colors, layout) for a visually appealing experience."
    }
    
]

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
   <section id="projects">
    <span className="projectTitle"> My Projects</span>
    <span className="projectDescription">Front-End Developer with expertise in HTML, CSS, and JavaScript. I'm also proficient in frameworks like React.js. Explore my portfolio to see how I leverage these skills to build modern web applications.</span>
    <div className="projectBoxes">
    <Slider {...settings} className='slider'>
    {data.map((d,i)=>{
          return <div className='carousel' key={i}>
             
            <div className='prodes'>
            <img src= {d.img} className='carouselImg'/>
              <h2>{d.name}</h2>
              <p>{d.review}</p>
              <a href='https://github.com/dashboard'><button className='btn2'>MORE PROJECTS</button></a>
            </div>
          </div>
        })}
    </Slider> 
    </div>
    </section>
  )
}

export default Projects
