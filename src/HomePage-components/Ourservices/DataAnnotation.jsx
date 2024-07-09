import React, { useState } from 'react';
import './DataAnnotation.css';
import annotationImage from '../../assets/data-annotation.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';

const DataAnnotation=()=>{

    const [selectedAnnotation, setSelectedAnnotation] = useState('text');

  const handleAnnotationClick = (annotation) => {
    setSelectedAnnotation(annotation);
  };

    return(
<div>
    <Navbar/>
<div>
    <br /><br /><br /><br />

        <div className="data-annotation">
      <section className="data-annotation-content">
        <div className="annotation-image">
          <img src={annotationImage} alt="Data Annotation" className="annotation-img" />
        </div>
        <div className="annotation-text">
          <p className="annotation-text-content">
            <b>Data annotation</b> is the process of labeling data to make it understandable for machine learning and it’s utmost necessary to have accurate sets for Machine Learning. 
            Data annotation, an important step of data preprocessing in supervised learning. 
            Machine Learning (ML) dictates a new approach to business – one that requires plenty of data. 
            Data annotation is done to create the training data sets for AI and ML while image annotation is a very important type of annotation. 
            A task of marking and outlining objects and entities on an image and offering various keywords to classify it which is readable for machines.
          </p>
        </div>
      </section>

      <section className="types-annotation">
        <h2>Types of Data Annotation</h2>
        <div className="annotation-options">
          <button onClick={() => handleAnnotationClick('text')}>Text Annotation</button>
          <button onClick={() => handleAnnotationClick('video')}>Video Annotation</button>
          <button onClick={() => handleAnnotationClick('image')}>Image Annotation</button>
          <button onClick={() => handleAnnotationClick('audio')}>Audio Annotation</button>
        </div>
        <div className="annotation-info">
          {selectedAnnotation === 'text' && (
              <div className="active">
              <h3>Text Annotation</h3>
              <p>
                Annotated AI is well equipped to handle any kind of text annotation project. Whether you’re training an entity extraction system or sentiment analysis tool, our curated crowd can accurately label text data in 300+ languages and dialects. Data Annotation services including Text annotations help machines to recognize the crucial words in sentences making them more meaningful.
              </p>
              <p>
                Use of Text Annotation: Annotating is an activity that interacts with a text to enhance the reader’s understanding and reaction to the text and helps to make sentences meaningful. Making the texts comprehensible to machines is possible through NLP. And making the important keywords in the texts understandable to AI-driven machines is achievable only through text annotation services.
              </p>
            </div>
          )}
          {selectedAnnotation === 'video' && (
              <div className="active">
              <h3>Video Annotation</h3>
              <p>
                Build comprehensively labeled video datasets with Learning Spiral suite of video annotation services. From object localization to video tracking, Learning Spiral has the experience and technology necessary to serve all of your video annotation needs.
              </p>
              <p>
                Use of Video Annotation: The first and most use and purpose of video annotation is capturing the object of interest frame-by-frame and making it recognizable to machines. Video annotation will provide an in-depth visual perception to autonomous vehicles recognize the various types of objects like pedestrians, street lights, signboards, traffic lanes, signals, cyclists, and vehicles moving on the road and basically, Train machines in roads Learning spiral provides qualitative Data Annotation most importantly including video annotation services to provide accurate data for self-driving cars.
              </p>
            </div>
          )}
          {selectedAnnotation === 'image' && (
              <div className="active">
              <h3>Image Annotation</h3>
              <p>
                Image annotation outsourcing to us means our clients get a cost-effective data labeling service helping them to minimize the cost of their project with the best efficiency. Image Annotation is a task of marking and outlining objects and entities on an image and offering various keywords to classify it which is readable for machines. This is a very important task as this data helps generate datasets that help computer vision models work in a real-world scenario. We annotate & tag images with corresponding labels & keywords for easy categorization & help you in creating your customized terminology for object tagging.
              </p>
              <p>
                Use of Image Annotation: Image annotation services are becoming an essential part of companies across various industries. Organizing images or pictures, easy management of image categorization, and matching images as per requirements are some of the merits of image tagging & annotation services. Image data annotation services unlock diverse insights underlying visual data. image annotation provides an invaluable source of training data for machine learning tools.
              </p>
            </div>
          )}
          {selectedAnnotation === 'audio' && (
              <div className="active">
              <h3>Audio Annotation</h3>
              <p>
                Develop, calibrate, and improve voice-enabled applications with our audio annotation services. With expertise in developed audio enhancement tools for noise removal and speech enhancement, we will be your perfect partners for audio transcriptions tasks such as “customer support calls, Speech to text transcription, Metadata attribution to audio data such as gender, audio quality, Sentiment analysis, labeling and satisfaction measurement for support calls and much more. It’s one of the most useful types of Data annotations for many industries especially E-commerce.
              </p>
              <p>
                Use of Audio Annotation: Audio sound or speech recorded in any format can be made understandable to machines through machine learning. NLP based speech recognition models, need annotated audio to make such sound more comprehensible to applications like chatbot or virtual assistant devices.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
          </div>
    <Footer/>
          </div>
    );

};

export default DataAnnotation;