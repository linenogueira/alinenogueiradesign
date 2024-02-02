
import React from 'react';
import ProjectTile from './ProjectTile'; // Certifique-se de que o caminho está correto
import wiz1 from '../../public/wiz1.png';
import wiz2 from '../../public/portfolio/clinica1.png'; // Exemplo de outra imagem
import '/src/components/styles/portfolio.css';

function Portfolio() {
    // Adicionado um campo 'id' para cada projeto
    const projects = [
        { id: 'dentist-clinical', img: wiz1, text: 'Dentist Clinical' },
        { id: 'project-2', img: wiz2, text: 'Project 2' }, // Exemplo de outro projeto
        // Adicione mais projetos conforme necessário, cada um com um 'id' único
    ];

    return (
        <div className='portfolio'>
            <div className='title'>
                <h1>My Projects</h1>
            </div>
            <div className='project--tiles'>
                {projects.map((project, index) => (
                    // Passando 'projectId' como uma prop para 'ProjectTile'
                    <ProjectTile key={index} imageSrc={project.img} text={project.text} projectId={project.id} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
