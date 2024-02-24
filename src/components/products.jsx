import React, { forwardRef } from 'react';
import '/src/components/styles/products.css';
import d1 from '../3d models/3d1.png';
import industry1 from '../industry/ind1.png';
import { Link } from 'react-router-dom';

const Products = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='products'>
            <h1>A Glimpse Into My Work</h1>
            <div className='products--img'>
             
                <div className="image-container">
                    <img src={d1} className="image" />
                    <div className="text">
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/project/3Dmodels">3D Models</Link>
                    </div>
                </div>
              
                <div className="image-container">
                    <img src={industry1} className="image" />
                    <div className="text">
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/project/industrialDesigns">Industrial Designs</Link>
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
