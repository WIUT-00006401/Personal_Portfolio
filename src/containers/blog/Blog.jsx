import React from 'react';
// import { Article } from '../../components'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import './blog.css';
// import { blog01, blog02, blog03, blog04, blog05 } from './imports'

// import { images } from '../../constants';
import {images} from '../../constants'


const galleryImages = [images.blog01, images.blog02, images.blog03, images.blog04];



const Blog = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }
  return (


    <div className='app__gallery flex_center'>
      <div className='app__gallery-content'>
        {/* <SubHeading title="Instagram" /> */}
        <h1 className='gradient__text'>Web Development</h1>
        <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>Today, web development is an intricate blend of art and science, continuously evolving with emerging technologies like artificial intelligence and virtual reality, shaping the way we interact with the digital world.</p>
        <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>Average lifespan of a website is around 2-5 years, reflecting the fast-paced nature of technology and the need for constant updates and redesigns. These facts underscore the dynamic and ever-evolving nature of web development, a field that continues to shape how we interact with the digital world.</p>
        {/* <button type='button' className='custom__button'>View More</button> */}
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index +1}`}>
              <img src={image} alt="gallery" />
              {/* <BsInstagram className='gallery__image-icon' /> */}
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>

    </div>


    
   
  )
}

export default Blog