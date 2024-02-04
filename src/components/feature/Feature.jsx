import React from 'react';
import './feature.css';

const Feature = ({ degree, institute, yearsOfStudy, location }) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div />
        <h1>{degree}</h1>
      </div>
      <div className='gpt3__features-container_feature-text'>
        <p>{institute}</p>
        <p>{yearsOfStudy}</p>
        <p>{location}</p>
      </div>
    </div>
  )
}

export default Feature