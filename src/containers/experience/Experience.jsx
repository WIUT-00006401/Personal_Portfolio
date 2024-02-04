import React from 'react';
import './experience.css';
import Feature from '../../components/feature/Feature';
import agrologo from '../../assets/Agro3.png';



const featuresData = [
  {
    degree: 'Business Analytics',
    institute: 'Bridging the gap between business objectives and technology solutions. Enhancing operational efficiency, regulatory compliance, and overall performance',
  },
  {
    degree: 'Data Management',
    institute: 'Financial data analysis, information exchange between relevant parties, detecting discrepancy of information, synchronization of operations.',
  },
  {
    degree: 'System Analysis',
    institute: 'Identifying inefficiencies, and designing innovative solutions to enhance operational processes. Gathering requirements to oversee system implementations, and ensure seamless integration of new technologies',
  },
  {
    degree: 'Project Management',
    institute: 'Navigating complex financial landscapes, coordinating cross-functional teams, and ensuring projects are delivered. Implementation of new systems and technology upgrades',
  },

]

const Experience = () => {
  return (
    <div className='experience_features section__padding' id='experience'>
      <div className='experience_features-heading'>
        <h1 className='gradient__text'>Working Experience</h1>
        <h2 className='gradient__text'>4 years of experience in banking industry</h2>
        <p><a href='https://agrobank.uz/en/person'>Joint Stock Commercial Bank "Agrobank"</a></p>
        <img className='agroLogo' src={agrologo} alt='agrologo' />
      </div>
      <div className='experience_features-container'>
        {featuresData.map((item, index) => (
          <Feature degree={item.degree} institute={item.institute} key={item.degree + index} />
        ))}
      </div>
    </div>
  )
}

export default Experience