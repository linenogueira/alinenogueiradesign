import React from 'react';
import ProjectTile from './ProjectTile'; 
import capa1 from '../assets/capa1.png';
import capa2 from '../assets/capa2.png';
import capa3 from '../assets/capa3.png';
import capa4 from '../assets/capa4.png';
import '/src/components/styles/portfolio.css';

function Portfolio() {

    const projects = [
        { id: '3Dmodels', img: capa2,  },
        { id: 'interiorsDesign', img:capa1 ,  },
        { id: 'executiveProjects', img: capa3,  }, 
        { id: 'industrialDesigns ', img: capa4, },
    ];

    return (
        <div className='portfolio'>
            <div className='title'>
                <h1>"Transforming visions into reality, 
                    each project is a window to the future we build together."</h1>
            </div>
            <div className='project--tiles'>
                {projects.map((project, index) => (
                  
                    <a href={`/project/${project.id}`} key={index} className="project-tile-link">
                        <ProjectTile imageSrc={project.img} text={project.text} projectId={project.id} />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
