import React from 'react';
import './MedicalAnnotation.css';
import Navbar from '../../HomePage-components/Navbar/Navbar';

const MedicalAnnotation = () => {
  return (
    <div className="app">
        <Navbar/>
      <header className="header">
        <div className="container">
        {/* <img src="jhj-1.jpg" alt="Medical Annotation" className="image"/>  */}
          <h1 className="title">Medical Annotation</h1>
          <p className="subtitle">Learning Studio • Medical Annotation</p>
        </div>
      </header>
      <main className="main">
        <div className="content">
          <div className="image-container">
            <img src="web1.jpg" alt="Medical Annotation" className="image"/> 
          </div>
          <div className="text-container">
            <h2 className="section-title">Medical Annotation</h2>
            <p className="description">
            Medical annotation is crucial in healthcare and research, involving the precise labeling, tagging, or categorizing of different types of medical data, such as medical images, clinical notes, or genomic sequences. This detailed annotation adds structured information and context to raw medical data, enhancing its accessibility, interpretability, and utility for various purposes, including diagnosis, treatment planning, medical research, and the development of machine learning models. Our key medical projects include the following </p>
            <p className="description">
            • MRI Annotation
            • Cell Annotation
            • Tissue Annotation
            • Anatomy Sorting
            • Medical Instrument Annotation
            • Dental Annotation
            • Disease Annotation
            • Neuron Annotation
            • Organ Annotation            </p>
            </div>
        </div>
      </main>
    </div>
  );
};

export default MedicalAnnotation;