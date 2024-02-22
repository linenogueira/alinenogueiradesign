import React, { forwardRef } from 'react';
import '/src/components/styles/products.css';
import wiz1 from '../../public/portfolio/clinica1.png';
import wiz2 from '../../public/portfolio/clinica3.png';
import { Link } from 'react-router-dom';

const Products = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='products'>
            <h1>Some of my projects </h1>
            <div className='products--img'>
             
                <div className="image-container">
                    <img src={wiz1} className="image" />
                    <div className="text">
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/project/dentist-clinical">Dentist Clinical</Link>
                    </div>
                </div>
              
                <div className="image-container">
                    <img src={wiz2} className="image" />
                    <div className="text">
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/project/project2">zobacz więcej</Link>
                    </div>
                </div>
                <div className="image-container">
                    <img src={wiz2} className="image" />
                    <div className="text">
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/project/project3">zobacz więcej</Link>
                    </div>
                </div>
            </div>
            <div className='button'>
                <Link style={{textDecoration: 'none'}} to="/portfolio">
                    <button onClick={() => window.scrollTo({top: 0})}> explore more </button>
                </Link>
            </div>
        </div>
    );
});

export default Products;
