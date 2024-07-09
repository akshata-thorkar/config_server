import React from 'react';
import './Drones.css';
import Navbar from '../../HomePage-components/Navbar/Navbar';

const Drones = () => {
  return (
    <div className="app">
        <Navbar/>
      <header className="header">
        <div className="container">
          <h1 className="title">Drones & Satellites</h1>
          <p className="subtitle">Learning Studio • Drones & Satellites</p>
        </div>
      </header>
      <main className="main">
        <div className="content">
          <div className="image-container2">
            <img src="drone.jpg" alt="Drones & Satellites" className="image"/> 
          </div>
          <div className="text-container">
            <h2 className="section-title">AI-based Drones</h2>
            <p className="description">
            Artificial intelligence is used in drones to make this flying machine smarter and reliable.They have AI-based drones that are aimed at delivering food from any restaurant to any location. AI drone is being a blessing to the transport sector.</p>
            <p className="description">
            From security to aerial view monitoring, AI drones are now being used to deliver the products at the customer’s doorstep with the utmost effectiveness. Drones were only able to display what their cameras captured. Now all credit goes to artificial intelligence software, they can perceive their surroundings, which enables them to map areas, track objects, and provide analytical feedback in real-time.</p>
            <p className="description">
            Drones deliver goods, AI-based drones are AI-based Drones a solution to potential human errors and so Drones & Artificial Intelligence for drones are becoming extremely important in today’s time for proper delivery of goods and also for many security purposes.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Drones;