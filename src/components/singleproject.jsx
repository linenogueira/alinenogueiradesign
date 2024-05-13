import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import '/src/components/styles/singleproject.css';


import d1 from '../3d models/3d1.png';
import d2 from '../3d models/3d2.png';
import d3 from '../3d models/3d3.png';
import d4 from '../3d models/3d4.png';
import d5 from '../3d models/3d5.png';
import d6 from '../3d models/3d6.png';
import d7 from '../3d models/3d7.png';
import d8 from '../3d models/3d8.png';
import d9 from '../3d models/3d9.png';
import d10 from '../3d models/3d10.png';
import d11 from '../3d models/3d11.png';
import d12 from '../3d models/3d12.jpg';
import d13 from '../3d models/3d13.jpg';
import d14 from '../3d models/3d14.jpg';
import d15 from '../3d models/3d15.jpg';
import d16 from '../3d models/3d16.png';
import d17 from '../3d models/3d17.png';
import d18 from '../3d models/3d18.png';
import d19 from '../3d models/3d19.png';
import d20 from '../3d models/3d20.png';
import d21 from '../3d models/3d21.png';
import d22 from '../3d models/3d22.png';
import d23 from '../3d models/3d23.png';
import d24 from '../3d models/3d24.jpg';
import d25 from '../3d models/3d25.png';
import d26 from '../3d models/3d26.png';
import d27 from '../3d models/3d27.png';
import d28 from '../3d models/3d28.png';
import d29 from '../3d models/3d29.png';
import d30 from '../3d models/3d30.png';
import d31 from '../3d models/3d31.png';
import d32 from '../3d models/3d32.png';
import d33 from '../3d models/3d33.png';


import exec1 from '../executivo/exec1.png';
import exec2 from '../executivo/exec2.png';
import exec3 from '../executivo/exec3.png';
import exec4 from '../executivo/exec4.png';
import exec5 from '../executivo/exec5.png';
import exec6 from '../executivo/exec6.png';
import exec7 from '../executivo/exec7.png';
import exec8 from '../executivo/exec8.png';
import exec9 from '../executivo/exec9.png';
import exec10 from '../executivo/exec10.png';


import int1 from '../interior design/interior1.png';
import int2 from '../interior design/interior2.png';
import int3 from '../interior design/interior3.png';
import int4 from '../interior design/interior4.png';
import int5 from '../interior design/interior5.png';
import int6 from '../interior design/interior6.png';
import int7 from '../interior design/interior7.png';
import int8 from '../interior design/interior8.png';
import int9 from '../interior design/interior9.png';
import int10 from '../interior design/interior10.png';
import int11 from '../interior design/interior11.png';
import int12 from '../interior design/interior12.png';
import int13 from '../interior design/interior13.png';
import int14 from '../interior design/interior14.png';
import int15 from '../interior design/interior15.png';
import int16 from '../interior design/interior16.png';

import industry1 from '../industry/ind1.png';
import industry2 from '../industry/ind2.png';
import industry3 from '../industry/ind3.png';
import industry4 from '../industry/ind4.png';
import industry5 from '../industry/ind5.png';
import industry6 from '../industry/ind6.png';
import industry7 from '../industry/ind7.png';
import industry8 from '../industry/ind8.png';




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
        <div className="text" onClick={closeImage}><PlusOutlined style={{fontSize: '2vw'}}/></div>
        {showImg && (
          <div className='big--img'>
            <span className='close--button'><CloseOutlined onClick={closeImage} /></span>
            <span className='prev--button'><LeftOutlined /></span>
            <img src={imageSrc} alt='Big Image' />
            <span className='next--button'><RightOutlined /></span>
          
          </div>
        )}
      </div>
    </div>
  );
}

function SingleProject() {
  const { projectId } = useParams(); 
  let images;

  // Decidir quais imagens exibir com base no projectId
  switch (projectId) {
    case '3Dmodels':
      images = [d1,d2,d30,d3,d4,d5,d29,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,d20,d21,d22,d23,d33,d24,d25,d26,d27,d28,d31,d32];
      break;
    case 'interiorsDesign':
      images = [int1,int2,int3,int4,int5,int6,int7,int8,int9,int10,int11,int12,int13,int14,int15,int16];
      break;
      case 'executiveProjects':
      images = [exec1,exec2,exec3,exec4,exec5,exec6,exec7,exec8,exec9,exec10];
      break;
      case 'industrialDesigns':
      images = [industry1,industry2,industry3,industry4,industry5,industry6,industry7,industry8];
      break;

  
    default:
      images = []; // Caso padrão, se nenhum projectId corresponder
  }

  return (
    <div className='project'>
         <BackButton /> {/* Inclusão do botão de voltar */}
      <div className='title'>
        {/* Título e descrição */}
      </div>
        <div className='title'>
            <h1>Explore My Portfolio</h1>
            <h2>Here we showcase only the projects for which we have received explicit permission from 
              our clients for publication. Many, particularly in the industrial sector, choose to keep 
              their projects confidential. Our office prioritizes maintaining our clients' trust and
               comfort at all stages of the process.</h2> 
        </div>
    <div className='single--project'>
        {images.map((imageSrc, index) => (
          <Photo key={index} imageSrc={imageSrc} />
        ))}
    </div>
    </div>
  );
}


function BackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>Voltar</button>
  );
}



export default SingleProject;
