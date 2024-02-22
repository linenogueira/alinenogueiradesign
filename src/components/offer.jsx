// Offer.js
import React, {forwardRef} from 'react';
import Notebook from './Notebook'; // Atualize o caminho conforme necessário
import '/src/components/styles/offer.css';

const Offer = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='offer'>
            <h1>Oferta</h1>
            <Notebook />
        </div>
    );
});

export default Offer;
