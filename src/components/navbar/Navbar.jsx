import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href='#about'>About</a></p>
    <p><a href='#skills'>Technical Skills</a></p>
    <p><a href='#education'>Educational Background</a></p>
    <p><a href='#experience'>Working Experience</a></p>
    <p><a href='#activities'>Activities</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
        
          <h1>Personal Portfolio</h1>
        </div>
        <div className='navbar-links_container'>
          <Menu className='menu' />
        </div>
      </div>
     
      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu-container-links'>
              <Menu />
              
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar