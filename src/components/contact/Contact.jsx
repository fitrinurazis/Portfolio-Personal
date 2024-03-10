import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../../Assets/contact.png";
import Contactcard from "./ContactCard";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "../About/about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              data-aos="fade-right"
            >
              <span className="primary-header">Let's Get in Touch:</span> Ways
              to Connect with Me
            </h1>
            <div data-aos="fade-up">
              <Contactcard />
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={contactImg}
              alt="about"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
