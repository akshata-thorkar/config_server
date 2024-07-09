import React from 'react';
import './FacialRecognition.css';
import faceImage from '/face1.jpg';  // Adjust the path as needed
import Navbar from '../../HomePage-components/Navbar/Navbar';


const FacialRecognition = () => {
  return (
    <div className="app">
      <Navbar/>
      
      <header className="header">
        <div className="container">
          <h1 className="title">Facial Recognition</h1>
          <p className="subtitle">Learning Studio • Facial Recognition</p>
        </div>
      </header>
      <main className="main">
        <div className="content">
          <div className="image-container">
            <img 
              src={faceImage}  // Use the imported image file
              alt="Facial Recognition" 
              className="image" 
            />
          </div>
          <div className="text-container">
            <h2 className="section-title">Facial Recognition</h2>
            <p className="description">
              Facial recognition system is a technology capable of identifying or verifying a person from a digital image or a video frame from a video source. The system is being used in many ways such as Mobile phones, cybersecurity, checkpoint gates, etc. face including videos three divisions like face detection, Face Capture, Face match The face detection process is an important process that detects and locates human faces in images & also.
            </p>
            <p className="description">
              <strong>How facial recognition technology works?</strong>: Computer Vision used for Video Cameras for Face Recognition Computer vision helps to conclude actions through a sequence of images or video Computer vision provides security through FACE ID advanced technology.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FacialRecognition;