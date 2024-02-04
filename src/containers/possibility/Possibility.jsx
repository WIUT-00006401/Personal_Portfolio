import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='possibility section __padding' id='possibility'>
      <div className='possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='possibility-content'>
        <h4>Let's dive into it...</h4>
        <h1 className='gradient__text'>The possibilities are beyond imaginations</h1>
        <p>The integration of Artificial Intelligence (AI) and Machine Learning (ML) technologies is transforming web development, enabling personalized experiences, intelligent search functionalities, and automated content creation. Internet of Things (IoT) connectivity further extends web development's capabilities, allowing for the control of smart devices directly through web interfaces. Moreover, advancements in Augmented Reality (AR) and Virtual Reality (VR) are opening new avenues for immersive online experiences...</p>
        <h4>Discover the oportunities</h4>
      </div>
    </div>
  )
}

export default Possibility