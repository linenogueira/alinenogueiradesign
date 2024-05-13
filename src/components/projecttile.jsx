import React from 'react';
import '/src/components/styles/products.css';
import { Link } from 'react-router-dom';


function ProjectTile({ imageSrc, text, projectId }) {
    return (
        <div className='products--img'>
            <div className="image-container">
                <img src={imageSrc} className="image" />
                
                <Link to={`/project/${projectId}`}>
                    <div className="text">{text} </div>
                </Link>
            </div>
        </div>
    );
}

export default ProjectTile;
