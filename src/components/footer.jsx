import React, { forwardRef } from 'react'
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import '/src/components/styles/footer.css'


const Footer = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='footer'>
            <div className='footer--info'>
                <h1>Contact Us</h1>
                <p>Aline Manhães Nogueira</p>
                <p>+49 172 6304066</p>
                <p>linemanhaes@gmail.com</p>
                <p>@linenogueira</p>
                <p>Berlin - Germany</p>
              
            </div>
            <div className='footer--img'>
                <img src='../assets/footerimage.png'
></img>
            </div>
        </div>
    )
}
)


export default Footer