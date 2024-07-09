//AudioAnnotation usecase
-8
import React from 'react';
import styled from 'styled-components';
import sampleImage from '/image2.jpg'; // Make sure to replace with the correct path to your image
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

const AudioAnnotation = () => {
  return (
    
    <div>
    <Navbar />

    <header className="header">
      <div className="container">
        <h1 className="title">Audio Annotation</h1>
        <p className="subtitle">Learning Studio • Audio Annotation</p>
      </div>
    </header>
    <PageContainer>
      <ImageContainer>
        <Image src={sampleImage} alt="Audio Annotation" />
      </ImageContainer>
      <ContentContainer>
        <Heading>Audio Annotation</Heading>
        <Paragraph>
          Audio annotation is a valuable process that involves adding descriptive metadata or comments to audio files, enhancing their usability and understanding. This annotation method plays a crucial role in various fields and applications, including speech recognition, content indexing, audio search, and accessibility.
        </Paragraph>
        <Paragraph>
          In audio annotation, our data annotators analyze and describe the content of audio recordings. Here are some key aspects of audio annotation:
        </Paragraph>
        <List>
          <ListItem>Transcription</ListItem>
          <ListItem>Language and Speaker Identification</ListItem>
          <ListItem>Sentiment Analysis</ListItem>
          <ListItem>Content Summarization</ListItem>
          <ListItem>Keyword Tagging</ListItem>
          <ListItem>Timestamps</ListItem>
          <ListItem>Quality Assessment</ListItem>
          <ListItem>Accessibility</ListItem>
          <ListItem>Training Data for Machine Learning</ListItem>
          <ListItem>Data Management</ListItem>
        </List>
      </ContentContainer>
    </PageContainer>
    </div>
  );
};

export default AudioAnnotation;