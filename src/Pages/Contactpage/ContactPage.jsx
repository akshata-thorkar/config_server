import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './contact.css';
import Navbar from '../../HomePage-components/Navbar/Navbar';

const ContactUs = () => {
  const [to_name, setTo_Name] = useState("");
  const [from_name, setFrom_name] = useState("");
  const [message, setMessage] = useState("");

  const submitInfo = (e) => {
    e.preventDefault();
    console.log(to_name + from_name + message);

    const emailContent = {
      to_name: to_name,
      from_name: from_name,
      message: message,
    };

    console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log('User ID:', import.meta.env.VITE_EMAILJS_USER_ID);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailContent,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          window.alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div className="blue-section">
        <div className="background-image"></div>
        <section className="contact-header">
          <h1>Contact</h1>
          <p>
            <Link to="/" className="breadcrumb-link">Learning Studio </Link> &gt;&gt; Contact
          </p>
        </section>
      </div>
      <section className="locations-section">
        <div className="locations">
          <div className="location">
            <img src={`/india.png`} alt="India Flag" className="flag-icon" />
            <div className="location-info">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
              <div>
                <h2>India</h2>
                <p>5th floor, 3A, Auckland Rd, Elgin, Kolkata, West Bengal 700017</p>
              </div>
            </div>
          </div>
          <div className="location">
            <img src={`/india.png`} alt="India Flag" className="flag-icon" />
            <div className="location-info">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
              <div>
                <h2>India</h2>
                <p>3rd Floor, Webel IT Park, Taratala Road, Kolkata, West Bengal 700088</p>
              </div>
            </div>
          </div>
          <div className="location">
            <img src={`/india.png`} alt="India Flag" className="flag-icon" />
            <div className="location-info">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
              <div>
                <h2>India</h2>
                <p>501 5th floor, Atlantis the Corporate Park, Telibandha Ring Rd No 1, Raipur, Chhattisgarh 492001</p>
              </div>
            </div>
          </div>
          <div className="location">
            <img src={`/us.png`} alt="US Flag" className="flag-icon" />
            <div className="location-info">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
              <div>
                <h2>United States</h2>
                <p>524 Sunset View DR Davenport, FL 33837</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Wrapper>
        <div style={formContainerStyle}>
          <form id="contact" onSubmit={submitInfo} style={contactStyle}>
            <h1 style={h1Style}>Contact Us</h1>
            <div style={formStyle}>
              <div style={formGroupStyle}>
                <h6 style={h6Style}>Name</h6>
                <input
                  placeholder="Your name"
                  type="text"
                  id="name"
                  name="to_name"
                  tabIndex="1"
                  onChange={(event) => { setTo_Name(event.target.value) }}
                  required
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <h6 style={h6Style}>Email</h6>
                <input
                  placeholder="Email ID"
                  type="email"
                  id="email"
                  name="from_name"
                  tabIndex="2"
                  onChange={(event) => { setFrom_name(event.target.value) }}
                  required
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <h6 style={h6Style}>Phone Number</h6>
                <input
                  placeholder="Your Phone Number"
                  type="text"
                  id="number"
                  name="phone_number"
                  tabIndex="3"
                  required
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <h6 style={h6Style}>Message</h6>
                <textarea
                  placeholder="Type your message here...."
                  id="message"
                  name="message"
                  tabIndex="4"
                  onChange={(event) => { setMessage(event.target.value) }}
                  required
                  style={textareaStyle}
                />
              </div>
            </div>
            <button
              className="submit-button"
              type="submit"
              style={buttonStyle}
            >
              Submit
            </button>
          </form>
        </div>
      </Wrapper>
      <Wrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.967853481092!2d88.35635007384869!3d22.542876934061784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771f3cd33be1%3A0x8d62a4f2af7b1b41!2sLearning%20Spiral!5e0!3m2!1sen!2sin!4v1718390870469!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Wrapper>
      
    </div>
    
  );
};

const Wrapper = styled.section`
  padding: 20px;
  background-color: #f5f5f5;
  background-color: var(--body_background);
  color: var(--body_color);
`;

const formContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  textAlign: 'left',
  margin: '0 auto',
};

const formGroupStyle = {
  marginBottom: '10px',
};

const contactStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '1200px',
  textAlign: 'center',
};

const h1Style = {
  fontSize: '24px',
  marginBottom: '20px',
  color: '#333',
};

const h6Style = {
  fontSize: '15px',
  marginBottom: '5px',
  color: '#333',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '3px',
  fontSize: '14px',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '3px',
  fontSize: '14px',
  minHeight: '100px',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};


export default ContactUs;
