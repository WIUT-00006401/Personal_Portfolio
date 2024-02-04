import React from 'react';
import Feature from '../../components/feature/Feature';
import './education.css';

const Education = () => (
  <div className="education section__margin" id="education">
    
    <div className="education-heading">
      <h1 className="gradient__text">Educational Background</h1>
    </div>
    <div className="education-container">
      <Feature degree="Master's in Computer Science" institute="Gisma University of Applied Sciences" yearsOfStudy='September 2023 - September 2024' location='Potsdam, Germany' />
      <Feature degree="Bachelor's in Business Information Systems" institute="WESTMINSTER International University in Tashkent" yearsOfStudy='September 2018 - June 2021' location='Tashkent, Uzbekistan' />
      <Feature degree="International Foundation Studies" institute="WESTMINSTER International University in Tashkent" yearsOfStudy='September 2017 - May 2018' location='Tashkent, Uzbekistan' />
    </div>
  </div>
);

export default Education;