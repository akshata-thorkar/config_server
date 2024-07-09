import React from 'react';
import './Nlp.css';
// import logo from './assets/logo-2-550x123-1.jpg';
import Navbar from '../../HomePage-components/Navbar/Navbar';
import Footer from '../footer/footer';

const Nlp=()=>{
    return(
        <div>
            <Navbar/><br />

        <div className="top-section">
      <h1 className="data-enhancement-heading">NLP</h1>
      <h1 className="data-under">Learning Spiral AI &gt;&gt; NLP</h1>
    </div>
<br /><br /><br /><br /><br /><br />
<div className="imagesection">
<img src="nlp.jpg" alt="Image Description" width="615" height="380" />

<p className="text-right">Natural Language Processing</p>
<p className="text-right1">Our trained NLP annotators can help deliver language annotation workloads at scale. Irrespective of your needs ranging from question-answer systems to document classification we can help you achieve results faster from your ML and AI algorithms. Convert your unstructured data into actionable insights. Natural Language Processing services support a range of business applications, from data categorization, text annotation, helping them train chatbots.</p>
<p className="text-right1">Our professional & dedicated team can help organizations to build new NLP applications or modernize their existing ones by adding conversational intelligence. We offer qualitative Data Annotation and data labeling services for all your NLP projects. Our trained NLP  annotators can help deliver language annotation workloads at scale.</p>
</div>
<div>
      <div className="threeimagedes">
        <h1>Audio Validation & Transcription</h1>
        <h1>Sentiment & intent analysis</h1>
        <h1>Named entity recognition and Linking</h1>
      </div><br />
      <div className="threeimage">
        <img src="nlp1.jpg" alt="Image 1" style={{ paddingLeft: '20px' }} />
        <img src="nlp3.jpg" alt="Image 2" style={{ marginLeft: '-37px' }} />
        <img src="nlp2.jpg" alt="Image 3" style={{ marginLeft: '-75px' }} />
      </div>
    </div>
    <br /><br />

    <Footer/>
        </div>
    );
}


export default Nlp;