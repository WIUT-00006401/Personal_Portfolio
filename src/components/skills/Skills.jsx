import React from 'react';
import './skills.css';

import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const Skills = () => {
  return (
    
    <div className='skills_brand section__margin' id='skills'>
      <div className="skills_brand-heading">
        <h1 className="gradient__text">Developed Skills</h1>
      </div>
      <div className='skills_brand-skills'>
        <div className='skills_list'>
          <DiHtml5 className='dev_icon' />
          <p>HTML</p>
        </div>
        
        <div className='skills_list'>
          <DiCss3  className='dev_icon' />
          <p>CSS</p>
        </div>

        <div className='skills_list'>
          <DiJavascript  className='dev_icon' />
          <p>Javascript</p>
        </div>

        <div className='skills_list'>
          <DiReact  className='dev_icon' />
          <p>React JS</p>
        </div>

        <div className='skills_list'>
          <DiNodejsSmall  className='dev_icon' />
          <p>Node JS</p>
        </div>

        <div className='skills_list'>
          <SiTailwindcss  className='dev_icon' />
          <p>Tailwind</p>
        </div>

        <div className='skills_list'>
          <FaWordpress  className='dev_icon' />
          <p>Wordpress</p>
        </div>

        <div className='skills_list'>
          <DiJqueryLogo  className='dev_icon' />
          <p>jQuery</p>
        </div>

        <div className='skills_list'>
          <FaPython  className='dev_icon' />
          <p>Python</p>
        </div>

        <div className='skills_list'>
          <SiPostgresql  className='dev_icon' />
          <p>SQL</p>
        </div>
      </div>
    </div>
  )
}

export default Skills