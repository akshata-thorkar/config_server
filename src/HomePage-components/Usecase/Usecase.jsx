import './usecase.css'
import React, { useEffect } from 'react';
import { toggleButtonColor } from './scriptusecase'
import facial1 from "../../assets/Images/facial1.png"
import car1 from "../../assets/Images/car1.png"
import drone1 from "../../assets/Images/drone1.png"
import retail1 from "../../assets/Images/retail1.png"
import figure1 from "../../assets/Images/figure1.png"
import video1 from "../../assets/Images/video1.png"


function Usecase() {

    useEffect(() => {
        toggleButtonColor();
    }, []);

  return (
    <div className='usecasebody'>
           <div>
    <section className="use-cases">
        <h2>USE CASES</h2>
        <h1 className="headline">Our Services provide high quality labeled data<br />for industries such as</h1>

        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="case text-center">
                        <a href="#popup1"><img src={facial1} alt="Facial Recognition" className="mx-auto img-fluid" /></a>
                        <h3>Facial Recognition</h3>
                        <button>READ MORE</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="case text-center">
                        <a href="#popup2"><img src={car1} alt="Self-Driving Cars" className="mx-auto img-fluid" /></a>
                        <h3>Self-Driving Cars</h3>
                        <button>READ MORE</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="case text-center">
                        <a href="#popup3"><img src={drone1} alt="Drones & Satellites" className="mx-auto img-fluid" /></a>
                        <h3>Drones & Satellites</h3>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="case text-center">
                        <a href="#popup4"><img src={retail1} alt="Retail & E-commerce" className="mx-auto img-fluid" /></a>
                        <h3>Retail & E-commerce</h3>
                        <button>READ MORE</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="case text-center">
                        <a href="#popup5"><img src={figure1} alt="Figure Detection" className="mx-auto img-fluid" /></a>
                        <h3>Figure Detection</h3>
                        <button>READ MORE</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="case text-center">
                        <a href="#popup6"><img src={video1} alt="Video & Motion Tracking" className="mx-auto img-fluid" /></a>
                        <h3>Video & Motion Tracking</h3>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <div id="popup1" className="popup">
        <a href="#close"><img src="facial1.png" alt="Facial Recognition" /></a>
        <a href="#close" className="close">X</a>
    </div>
    <div id="popup2" className="popup">
        <a href="#close"><img src="car1.png" alt="Self-Driving Cars" /></a>
        <a href="#close" className="close">X</a>
    </div>
    <div id="popup3" className="popup">
        <a href="#close"><img src="drone1.png" alt="Drones & Satellites" /></a>
        <a href="#close" className="close">X</a>
    </div>
    <div id="popup4" className="popup">
        <a href="#close"><img src="retail1.png" alt="Retail & E-commerce" /></a>
        <a href="#close" className="close">X</a>
    </div>
    <div id="popup5" className="popup">
        <a href="#close"><img src="figure1.png" alt="Figure Detection" /></a>
        <a href="#close" className="close">X</a>
    </div>
    <div id="popup6" className="popup">
        <a href="#close"><img src="video1.png" alt="Video & Motion Tracking" /></a>
        <a href="#close" className="close">X</a>
    </div>
</div>
    </div>
  )
}



export default Usecase;