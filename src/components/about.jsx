import React from 'react'
import './about.css'
import {forwardRef} from 'react'

const About = forwardRef((props, ref) => {

    return (
        <div ref={ref} className='about'>
                <h1>About Us</h1>
            <div className='row'>
                <div className='about--inf'>
                    <h2>Aline Nogueira</h2>
                    {about}
                </div>
                <div className='column'>
                    <div className='image'>
                    <img src='../../public/about.webp'></img>
                    </div>
                </div>
            </div>
        </div>
    )
})

const about = <p>With a notable background in industrial and technical design, this professional shines in creating and updating technical drawings, particularly for oil platforms. Her expertise extends to drafting project proposals, refining existing documentation, and ensuring the precision of drawings through onsite visits to offshore units. Skilled in AutoCAD, SketchUP, and various web development tools, she merges creative insight with a keen eye for detail, vital in both design and project development. Her adaptable and collaborative style proves effective in dynamic and challenging work environments..</p>


export default About