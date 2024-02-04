import React from 'react';
import frontimg from '../../assets/frontimg.png';
import { FaQuoteLeft } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './header.css';

// const navigate = useNavigate();

const Header = () => (


  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Durdona Juraeva</h1>
      <div className='app__chef-content_quote'>
        <FaQuoteLeft className='quote-icon' />
        <p>Welcome to the digital realm where pixels come to life with blocks of codes! My name is Durdona, and I’m on a mission to craft your online visions
        </p>
      </div>

      <div className='header_link'>
        <div className='link_list'>
          <FaLinkedin className='link_icon' />
          <div className='link_name'>
            <a href="https://www.linkedin.com/in/durdona-juraeva-1015ab1ab/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <p>LinkedIn</p>
            </a>
          </div>
        </div>

        <div className='link_list'>
          <FaGithub className='link_icon' />
          <div className='link_name'>
            <a href="https://github.com/WIUT-00006401/JustEatIt" target="_blank" rel="noopener noreferrer" title="GitHub">
              <p>GitHub</p>
            </a>
          </div>
        </div>

        <div className='link_list'>
          <MdEmail className='link_icon' />
          <div className='link_name'>
            <a href="mailto:durdona.jurayeva@mail.ru"><p>Email</p></a>
          </div>
        </div>
      </div>


    </div>

    <div className="header-image">
      <img src={frontimg} alt='ai' />
    </div>
  </div>
);

export default Header;