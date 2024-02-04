import React from 'react';
import './footer.css';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer-heading'>
        <h1 className='gradient__text'>Let's implement something different together!</h1>
      </div>

      <div className='footer-contact-links'>
        <div className='project-logo'>
          <h2>DJ_Codes</h2>
        </div>
        <div className='contact-form'>
          <div className='contact-text'>
            <h2>Get in touch:</h2>
          </div>
          <div className='contact-links'>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin size={30} />
              </a>

              {/* GitHub */}
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub size={30} />
              </a>

              {/* Email */}
              <a href="mailto:your.email@example.com" title="Email">
                <MdEmail size={30} />
              </a>
            </div>

          </div>
        </div>
       
      </div>

      

    </div>
  )
}

export default Footer