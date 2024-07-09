import React from 'react';
import './Drones.css';
import Navbar from '../../HomePage-components/Navbar/Navbar';

const FigureDetection = () => {
  return (
    <div className="app">
        <Navbar/>
      <header className="header">
        <div className="container">
          <h1 className="title">Figure Detection</h1>
          <p className="subtitle">Learning Studio • Figure Detection</p>
        </div>
      </header>
      <main className="main">
        <div className="content">
          <div className="image-container2">
            <img src="figure.png" alt="figure detection" className="image"/> 
          </div>
          <div className="text-container">
            <h2 className="section-title">Figure Detection</h2>
            <p className="description">
            Any AI system that processes visual information usually relies on computer vision, and those capable of identifying specific objects or categorizing images based on their content are performing image recognition. 
            Object Detection is the process of finding real-world object instances like car, bike, TV, flowers, and humans in still images or Videos. It allows for the recognition and detection of multiple objects within an image which provides us with a much better understanding of an image as a whole. It is commonly used in applications such as image retrieval, security, surveillance, and advanced driver assistance systems.</p>
            
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default FigureDetection;