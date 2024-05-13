import React, { forwardRef } from 'react';
import '/src/components/styles/footer.css';
import footerImage from '../assets/footer.png';

const Footer = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='footer'>
            <div className='footer--info'>
                <h1>Contact Me</h1>
                <p>Aline Manhães Nogueira</p>
                {/* Links para WhatsApp com `tel:` e WhatsApp URL scheme */}
                <p> +49 172 6304066</p>
                <p>
                    <a href="https://wa.me/351939966083" target="_blank" rel="noopener noreferrer">
                        +351 939 966 083
                    </a>
                </p>
                {/* Link para enviar email */}
                <p>
                    <a href="mailto:linemanhaes@gmail.com">
                        linemanhaes@gmail.com
                    </a>
                </p>
                {/* Pode-se adicionar links para redes sociais se necessário */}
                <p>@linenogueira</p>
                <p>Lisboa | Portugal - Berlin | Germany</p>
            </div>
            <div className='footer--img'>
                <img src={footerImage} alt='Footer' />
            </div>
        </div>
    );
});

export default Footer;