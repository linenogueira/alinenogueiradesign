// Offer.js
import React, {forwardRef} from 'react';
import Notebook from './Notebook'; 
import '/src/components/styles/offer.css';

const Offer = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='offer'> 
            <Notebook />
        </div>
    );
});

export default Offer;
