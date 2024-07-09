import React from 'react'
import './about.css'
import abs from "../../assets/Images/abs.png"

function Aboutus() {
  return (
    <div>
            <section className="about-section">
      <div className="about-container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <img 
              src={abs}
              alt="About Us Image"
            />
          </div>
          <div className="col-lg-6 col-md-12 text-left ct">
            <h2 className="title">ABOUT US</h2>
            <p className="intro">Data Annotation & Data Labeling services to Power your Algorithms</p>
            <div className="content">
              <p>
                Learning spiral has a workforce with diverse set of skills and the ability to deliver data
                annotation and data labeling services at scale. We have a rich history of 15+ years of
                handling sensitive data on a large scale. Our affordable data annotation and data labeling
                services provided by trained in-house dedicated professionals will ensure high quality
                labeled data to meet your needs.
              </p>
            </div>
            <ul className="options">
              <li className="option">Computer Vision</li>
              <li className="option">NLP</li>
              <li className="option">Data Enhancement</li>
              <li className="option">Content Services</li>
              <li className="option">Digital Publishing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Aboutus