import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Importar useParams
import '/src/components/styles/singleproject.css';
// Importe todas as imagens necessárias aqui
import wiz1 from '../../public/portfolio/clinica1.png';
import wiz2 from '../../public/portfolio/clinica2.jpg';
import wiz3 from '../../public/portfolio/clinica3.png';
// Suponha que existam outros conjuntos de imagens para outros projetos
import proj2Img1 from '../../public/portfolio/clinica3.png';
// Importe mais imagens conforme necessário
import { PlusOutlined, CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import '/src/components/styles/portfolio.css';

function Photo({ imageSrc }) {
  const [showImg, setShowImg] = useState(false);

  const closeImage = () => {
    setShowImg(!showImg);
    console.log(showImg);
  };

  return (
    <div className='single--photo'>
      <div className="image-container">
        <img src={imageSrc} className="image" />
        <div className="text" onClick={closeImage}><PlusOutlined style={{fontSize: '1.5vw'}}/></div>
        {showImg && (
          <div className='big--img'>
            <span className='close--button'><CloseOutlined onClick={closeImage} /></span>
            <span className='prev--button'><LeftOutlined /></span>
            <img src={imageSrc} alt='Big Image' />
            <span className='next--button'><RightOutlined /></span>
            <p className='big--img--desc'>Projekt</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SingleProject() {
  const { projectId } = useParams(); // Usar useParams para obter o projectId da URL
  let images;

  // Decidir quais imagens exibir com base no projectId
  switch (projectId) {
    case 'dentist-clinical':
      images = [wiz1, wiz2, wiz3];
      break;
    case 'project2':
      images = [proj2Img1, proj2Img2];
      break;
      case 'project3':
      images = [proj2Img1, proj2Img2];
      break;

    // Adicione mais cases conforme necessário para outros projetos
    default:
      images = []; // Caso padrão, se nenhum projectId corresponder
  }

  return (
    <div className='project'>
        <div className='title'>
            <h1>Projekt</h1>
        </div>
    <div className='single--project'>
        {images.map((imageSrc, index) => (
          <Photo key={index} imageSrc={imageSrc} />
        ))}
    </div>
    </div>
  );
}

export default SingleProject;
