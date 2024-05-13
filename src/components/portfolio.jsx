import React from 'react';
import ProjectTile from './projecttile'; 
import capa1 from '../assets/capa1.png';
import capa2 from '../assets/capa2.png';
import capa3 from '../assets/capa3.png';
import capa4 from '../assets/capa4.png';
import '/src/components/styles/portfolio.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Portfolio() {

    const projects = [
        { id: '3Dmodels', img: capa2,  },
        { id: 'interiorsDesign', img:capa1 ,  },
        { id: 'executiveProjects', img: capa3,}, 
        { id: 'industrialDesigns ', img: capa4, },
    ];

    return (
        <div className='portfolio'>
             <BackButton /> {/* Inclusão do botão de voltar */}
            <div className='title'>
                <h1>"Transforming visions into reality, 
                    each project is a window to the future we build together."</h1>
            </div>
            <div className='project--tiles'>
                {projects.map((project, index) => (
                  
                    <Link to={`/project/${project.id}`} className="project-tile-link">
                        <ProjectTile imageSrc={project.img} text={project.text} projectId={project.id} />
                    </Link>
                ))}
            </div>
        </div>
    );
    function BackButton() {
        const navigate = useNavigate();
      
        return (
          <button onClick={() => navigate(-1)}>Voltar</button>
        );
      }
      
}

export default Portfolio;
