// src/components/SportsAnnotation.js

import React from 'react';
import styled from 'styled-components';
import sampleImage from '/image3.jpg'; // Replace with the correct path to your image
import Navbar from '../../HomePage-components/Navbar/Navbar';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Heading = styled.h1`
  margin-top: 0;
`;

const Paragraph = styled.p`
  margin: 20px 0;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
`;

const SportsAnnotation = () => {
  return (
    <div>
        <Navbar/>
      <header className="header">
        <div className="container">
          <h1 className="title">Sports Annotation</h1>
          <p className="subtitle">Learning Studio • Retail and E-commerce</p>
        </div>
      </header>
    <PageContainer>
      <ImageContainer>
        <Image src={sampleImage} alt="Sports Annotation" />
      </ImageContainer>
      <ContentContainer>
        <Heading>Sports Annotation</Heading>
        <Paragraph>
          Sports annotation involves precisely labeling elements in images or videos, using advanced techniques. This annotated data refines machine learning models, enhancing sports analytics, player tracking, event tracking, and game insights for applications in coaching, broadcasting, performance analysis and many other areas. Annotation techniques include bounding boxes, segmentation, key-points, and more.
        </Paragraph>
      </ContentContainer>
    </PageContainer>
    </div>
  );
};

export default SportsAnnotation;