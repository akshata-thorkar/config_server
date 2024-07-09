// src/BulletPoints.js
import React from 'react';
import './BulletPoints.css';
import greenTick from '../../assets/green-tick.jpg'; // Make sure to add your green tick image in the assets folder

const BulletPoints = () => {
  const points = [
    'Scanning of Historical Documents & Books',
    'Digitization and Archival Preservation',
    'Data Entry, Double Keying, and OCR',
    'HTML/XML/SGML Tagging, TEX/LaTeX Coding',
    'Web and Publishing Structuring: HTML/XML/CML/MathML',
    'eBooks',
    'Multilingual Conversion in European Languages: Dutch, French, German, Italian, and Spanish',
    'Creation of Animated Videos and Digital Illustrations',
  ];

  return (
    <ul className="bullet-points">
      {points.map((point, index) => (
        <li key={index} className="bullet-point">
          <img src={greenTick} alt="Green Tick" className="green-tick" />
          {point}
        </li>
      ))}
    </ul>
  );
};

export default BulletPoints;