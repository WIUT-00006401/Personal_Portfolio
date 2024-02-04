import React from 'react';

import { Footer, Blog, Possibility, Header, Education, Experience } from './containers';
import { Skills, Navbar } from './components';

import './App.css';
// import MyCard from './containers/myCard/myCard';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Skills />
    <Education />
    <Experience />
    <Blog />
    <Possibility />
    <Footer />
  </div>
);

export default App;