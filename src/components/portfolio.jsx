
import React from 'react';
import ProjectTile from './ProjectTile'; // Certifique-se de que o caminho está correto
import wiz1 from '../../public/wiz1.png';
import wiz2 from '../../public/portfolio/clinica1.png'; // Exemplo de outra imagem
import '/src/components/styles/portfolio.css';

function Portfolio() {
    // Adicionado um campo 'id' para cada projeto
    const projects = [
        { id: '3D models', img: wiz1, text: '3D models' },
        { id: 'Interiors Design', img: wiz2, text: 'Interiors Design' },
        { id: 'executive projects', img: wiz2, text: 'Executive Projects' }, // Exemplo de outro projeto
        { id: 'interior designs ', img: wiz2, text: 'Industrial Designs' }, // Exemplo de outro projeto
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
