import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './Pages/Homepage';
import ContactPage from './Pages/Contactpage/ContactPage';
import FacialRecognition from './HomePage-components/Usecase/FacialRecognition';
import SelfDrivingCars from './HomePage-components/Usecase/SelfDrivingCars';
import Drones from './HomePage-components/Usecase/Drones';
import Retail from './HomePage-components/Usecase/Retail';
import AudioAnnotation from './HomePage-components/Usecase/AudioAnnotation';
import SportsAnnotation from './HomePage-components/Usecase/SportsAnnotation';
import MedicalAnnotation from './HomePage-components/Usecase/MedicalAnnotation';
import FigureDetection from './HomePage-components/Usecase/FigureDetection';
import Motion from './HomePage-components/Usecase/Motion';
import LidarAnnotation from './HomePage-components/Ourservices/LidarAnnotation';
import DataEnhancement from './HomePage-components/Ourservices/DataEnhancement';
import DigitalPublishing from './HomePage-components/Ourservices/DigitalPublishing';
import BulletPoints from './HomePage-components/Ourservices/BulletPoints';
import DataAnnotation from './HomePage-components/Ourservices/DataAnnotation';
// import DataLabeling from './HomePage-components/Ourservices/DataLabeling';
import Nlp from './HomePage-components/Ourservices/Nlp';




function App() {
  return (
    <Router> {/* Wrap your Routes in a BrowserRouter */}
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="ContactPage" element={<ContactPage />} />
          <Route path="FacialRecognition" element={<FacialRecognition/>} />
          <Route path="SelfDrivingCars" element={<SelfDrivingCars/>} />
          <Route path="Drones" element={<Drones/>} />
          <Route path="Retail" element={<Retail/>} />
          <Route path="AudioAnnotation" element={<AudioAnnotation/>} />
          <Route path="SportsAnnotation" element={<SportsAnnotation/>} />
          <Route path="MedicalAnnotation" element={<MedicalAnnotation/>} />
          <Route path="FigureDetection" element={<FigureDetection/>} />
          <Route path="Motion" element={<Motion/>} />
          <Route path="LidarAnnotation" element={<LidarAnnotation/>} />
          <Route path="DataEnhancement" element={<DataEnhancement/>} />
          <Route path="DigitalPublishing" element={<DigitalPublishing/>} />
          <Route path="BulletPoints" element={<BulletPoints/>} />
          <Route path="DataAnnotation" element={<DataAnnotation/>} />
          <Route path="Nlp" element={<Nlp/>} />
          {/* <Route path="DataLabeling" element={<DataLabeling/>} /> */}
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
