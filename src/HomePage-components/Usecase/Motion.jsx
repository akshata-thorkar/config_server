import React from 'react';
import './Drones.css';
import Navbar from '../Navbar/Navbar';

const Motion = () => {
  return (
    <div className="app">
        <Navbar/>
      <header className="header">
        <div className="container">
          <h1 className="title">Video & Motion Tracking</h1>
          <p className="subtitle">Learning Studio • Video & Motion Tracking</p>
        </div>
      </header>
      <main className="main">
        <div className="content">
          <div className="image-container2">
            <img src="motion.jpg" alt="figure detection" className="image"/> 
          </div>
          <div className="text-container">
            <h2 className="section-title">Video & Motion Tracking</h2>
            <p className="description">
            Leverage Learning Spiral's comprehensive suite of video annotation services to build meticulously labelled video datasets. From object localization to video tracking, Learning Spiral possesses the expertise and technology to meet all your video annotation requirements.
Applications of Video & Motion Tracking:

The primary purpose of video and motion tracking is to capture objects of interest frame-by-frame, making them recognizable to machines. This technology provides autonomous vehicles with the detailed visual perception necessary to identify various objects, including pedestrians, street lights, signboards, traffic lanes, signals, cyclists, and other vehicles on the road. Learning Spiral's video annotation services ensure the delivery of precise data, essential for training self-driving cars and enhancing their ability to navigate roads safely and efficiently.</p>
            
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Motion;