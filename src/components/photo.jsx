import React from 'react'
import wiz1 from '../../public/salaLaispankow.png'
import '/src/components/styles/photo.css'

function Photo() {
    return (
            <div className='parallax' style={{backgroundImage: `url(${wiz1})`}}/>

    )
}

export default Photo