import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import useViewportAndFooterHeight from '@src/components/Hooks/useViewportAndFooterHeight';
import projectData, { projects } from '@src/Projectdata.js';
import { useNavigate } from 'react-router-dom';

const ProjectShow = ({ name }) => {
  const navigate = useNavigate();
  const { viewportHeight, footerHeight } = useViewportAndFooterHeight('.footer');

  const project = projectData.find(ele => ele.name === name);
  const projectFront = projects.find(ele => ele.name === name);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on component mount
  }, []);

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <Container className='' fluid style={{ minHeight: `${viewportHeight - footerHeight}px` }}>
      <Container className='project-section'>
        <h1 className='project-heading'><span className='yellow'>{project.title}</span></h1>
        <p className=' text-white'>{project.subTitle}</p>
        <h4 className='text-start yellow mt-5'>Overview</h4>
        <p className='text-start text-white'>{projectFront.description}</p>
        <div className='project-card pt-2'>
          {project.data.map((item, index) => (
            <div key={index} className={`${index === 0 ? '' : 'mt-md-5 mt-3'}`}>
              <img className='w-100' src={item.imgSrc} alt={`Project image ${index + 1}`} loading='lazy' />
              {item.desc && <p>{item.desc}</p>}
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default ProjectShow;;