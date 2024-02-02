import React from 'react';
import './products.css';
import { Link } from 'react-router-dom';

// Adicione projectId como uma prop aqui
function ProjectTile({ imageSrc, text, projectId }) {
    return (
        <div className='products--img'>
            <div className="image-container">
                <img src={imageSrc} className="image" />
                {/* Use projectId na URL aqui */}
                <Link to={`/project/${projectId}`}>
                    <div className="text">{text}</div>
                </Link>
            </div>
        </div>
    );
}

export default ProjectTile;
