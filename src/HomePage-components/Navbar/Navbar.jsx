import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from "../../assets/Images/logo.png";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="nav-container">
            <div className="image-container">
                <img src={logo} alt="website logo" width="200px" />
            </div>
            <div className="pages">
                <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" id="osuca">HOME</Link>
                    </li>
                    <li className="nav-item osuc1">
                        <a href="#" id="osuca">OUR SERVICES</a>
                        <ul className="osc">
                            <li><Link to="/DataAnnotation" id="osuca">Data Annotation</Link></li>
                            <li><Link to="/DataLabeling" id="osuca">Data Labeling</Link></li>
                            {/* <li><Link to="/contact-services" id="osuca">Contact Services</Link></li> */}
                            <li><Link to="/Nlp" id="osuca">NLP</Link></li>
                            <li><Link to="/DataEnhancement" id="osuca">Data Enhancement</Link></li>
                            {/* <li><Link to="/computer-vision" id="osuca">Computer Vision</Link></li> */}
                            <li><Link to="/LidarAnnotation" id="osuca">Lidar Annotation</Link></li>
                            <li><Link to="/DigitalPublishing" id="osuca">Digital Publishing</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item osuc2">
                        <a href="#" id="osuca" className="omkar">USE CASE</a>
                        <ul className="osc">
                            <li><Link to="/FacialRecognition" id="osuca">Facial Recognition</Link></li>
                            <li><Link to="/SelfDrivingCars" id="osuca">Self-Driving Cars</Link></li>
                            <li><Link to="/Drones" id="osuca">Drones & Satellites</Link></li>
                            <li><Link to="/Retail" id="osuca">Retail & E-Commerce</Link></li>
                            <li><Link to="/FigureDetection" id="osuca">Figure Detection</Link></li>
                            <li><Link to="/Motion" id="osuca">Video & Motion Tracking</Link></li>
                            <li><Link to="/SportsAnnotation" id="osuca">Sports Annotation</Link></li>
                            <li><Link to="/AudioAnnotation" id="osuca">Audio Annotation</Link></li>
                            <li><Link to="/MedicalAnnotation" id="osuca">Medical Annotation</Link></li>
                        </ul>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/blogs" id="osuca">BLOGS</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/ContactPage" id="osuca">CONTACT</Link>
                    </li>
                    <li className="nav-item">
                        <button className="nav-button">
                            <a href="tel:your-phone-number" id="osuca">CALL US NOW</a>
                        </button>
                    </li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
