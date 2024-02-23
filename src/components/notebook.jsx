
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import page1 from '../assets/1.png';
import page2 from '../assets/2.png';
import page3 from '../assets/3.png';
import page4 from '../assets/4.png';
import page5 from '../assets/5.png';
import page6 from '../assets/6.png';
import page7 from '../assets/7.png';
import page8 from '../assets/8.png';
import page9 from '../assets/9.png';
import page10 from '../assets/10.png';
import page11 from '../assets/11.png';
import page12 from '../assets/12.png';


// Adicione todas as suas páginas ao array
const pages = [page1, page2, page3, page4,page5,page6,page7,page8,page9,page10,page11,page12];

const Notebook = () => {
    return (
        <HTMLFlipBook width={300} height={400}>
            {pages.map((page, index) => (
                <div className="demoPage" key={index}>
                    <img src={page} alt={`Page ${index + 1}`} style={{width: '100%', height: '100%'}} />
                </div>
            ))}
        </HTMLFlipBook>
    );
};

export default Notebook;

