import React from 'react'
import '/src/components/styles/about.css'
import {forwardRef} from 'react'
import aboutImage from '../assets/aboutme.png';

const About = forwardRef((props, ref) => {

    return (
        <div ref={ref} className='about'>
                <h1>About Me</h1>
            <div className='row'>
                <div className='about--inf'>
                    <h2>Aline Nogueira</h2>
                    {about}
                </div>
                <div className='column'>
                    <div className='image'>
                    <img src={aboutImage} alt='aboutmephoto' />
                    </div>
                </div>
            </div>
        </div>
    )
})

const about = <p>With over 12 years in industrial and technical design, I'm a Brazilian professional passionate about crafting precision in technical drawings, especially for oil platforms. Skilled in AutoCAD, SketchUP, and various web tools, I seamlessly merge creativity with an eye for detail. My commitment to excellence shines through in project proposals and refining documentation. What makes me unique is my adaptability and collaborative spirit, thriving in dynamic work environments. I take pride in delivering designs that not only meet but exceed expectations, contributing passionately to the success of each project.</p>


export default About