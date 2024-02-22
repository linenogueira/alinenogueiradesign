
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import page1 from '../assets/1.png';
import page2 from '../assets/2.png';
import page3 from '../assets/3.png';
import page4 from '../assets/4.png';

// Adicione todas as suas páginas ao array
const pages = [page1, page2, page3, page4];

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

