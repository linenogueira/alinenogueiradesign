import React, { forwardRef } from 'react'
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import '/src/components/styles/footer.css'
import footerImage from '../assets/footer.png';

const Footer = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='footer'>
            <div className='footer--info'>
                <h1>Contact Me</h1>
                <p>Aline Manhães Nogueira</p>
                <p>+49 172 6304066</p>
                <p>+351 939 966 083 </p>
                <p>linemanhaes@gmail.com</p>
                <p>@linenogueira</p>
                <p>Lisboa | Portugal  -  Berlin | Germany</p>
              
            </div>
            <div className='footer--img'>
            <img src={footerImage} alt='Footer' />
            </div>
        </div>
    )
}
)


export default Footer