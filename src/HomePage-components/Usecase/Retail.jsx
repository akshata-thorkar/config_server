import React from 'react';
import styled from 'styled-components';
import sampleImage from '/image.jpg'; // Adjust path as per your project
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

const Subheading = styled.h2`
  margin-top: 20px;
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

const Retail = () => {
  return (
    <div>
        <Navbar/>
        
      <header className="header">
        <div className="container">
          <h1 className="title">Retail and E-commerce</h1>
          <p className="subtitle">Learning Studio • Retail and E-commerce</p>
        </div>
      </header>
      <PageContainer>
        <ImageContainer>
          <Image src={sampleImage} alt="Retail and E-commerce" />
        </ImageContainer>
        <ContentContainer>
          <Heading>Retail & E-commerce</Heading>
          <Paragraph>
            Artificial intelligence (AI) with Data Annotation and Data Labeling services has drastically changed the world of online shopping. AI provides services to customers in many ways from ensuring security to providing assistance and making things in a more proper and easy manner. It helps e-commerce companies to engage with their customers on the next level and create great customer experiences. AI is one of the fastest technological successes due to intelligent solutions that are helping to change the e-commerce industry. AI Delivering the best and most secure shopping experience with the power of data AI is supporting online shopping experiences for both retailers and customers. There are many e-commerce businesses that are already using AI for a better user experience and many are in the process to make it happen.
          </Paragraph>
          <Subheading>Some of the major use cases of artificial intelligence in e-commerce</Subheading>
          <List>
            <ListItem>Personalized shopping</ListItem>
            <ListItem>Product recommendations</ListItem>
            <ListItem>Inventory management</ListItem>
          </List>
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default Retail;
