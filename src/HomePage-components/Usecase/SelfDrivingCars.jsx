import React from 'react';
import './SelfDrivingCars.css';
import Navbar from '../../HomePage-components/Navbar/Navbar';

function BlogHeader() {
  return (
    <div className="blog-header">
      <h1>Self-Driving Cars</h1>
      <p>Learning Studio • Self-Driving Cars</p>
    </div>
  );
}

function ImageTextSection() {
  return (

    <div className="image-text-section">
       
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className="image-container1">
          <img src="car1.jpg" alt="This is the content " />
        </div>
        <div className="text-container">
          <h2>Autonomous Vehicles</h2>
          <p>
            Autonomous vehicle development is accelerating thanks to AI technology. The development of autonomous vehicles is speeding up, driven by the power of AI technology. According to research from Google, vehicles equipped with AI are already proving to be safer than those driven by humans. AI technology allows these self-driving cars to quickly adapt to changing conditions on the road and to acquire new skills efficiently. We are currently collaborating with certain automakers, offering our services to help them incorporate AI technology into their upcoming vehicle models. This collaboration aims to enhance the safety and capabilities of future autonomous vehicles.
          </p>
        </div>
      </div>
    </div>
  );
}

function UseCasesSection() {
  return (
    <div className="use-cases-section">
      <div className="left-column">
        <h2>Use Cases for Autonomous Vehicles
        </h2>
        <p className="training-data">Training Data for self-driving cars by</p>
      </div>
      <div className="right-column">
        <div className="annotation">
          <h3>Annotation for LIDAR</h3>
          <p>
            <strong>Understanding the Road:</strong> The Learning Spiral is dedicated to providing automotive companies with high-quality training and validation data, essential for developing computer vision and machine learning models for autonomous vehicles. Their focus on reliability and safety ensures that these models can be used with confidence, laying a strong foundation for the future of autonomous driving. By enabling companies to develop advanced technologies with assurance, The Learning Spiral plays a crucial role in shaping the future of transportation.
          </p>
        </div>
        <div className="annotation">
          <h3>Video Annotation</h3>
          <p>
          To help machine learning models accurately understand images and videos, video annotation is crucial for autonomous vehicles. For models to effectively perform tasks like image and video recognition, this process is essential to training. To train these models, data scientists need accurate annotations of the data, which acts as the ground truth. Automatic vehicle systems' dependability and efficiency are directly impacted by the caliber and volume of annotated data. Accurate and extensive annotation is therefore essential for the creation of safe and effective autonomous driving technologies.

          </p>
        </div>
      </div>
    </div>
  );
}


function SelfDrivingCars() {
  return (
    <div className="App">
        <Navbar/>
      {/* <div className="background-image"></div> */}
      <div className="content-wrapper">
        <BlogHeader />
        <ImageTextSection />
        <UseCasesSection />
      </div>
    </div>
  );
}

export default SelfDrivingCars;