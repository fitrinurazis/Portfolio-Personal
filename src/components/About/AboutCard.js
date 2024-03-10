import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="primary-header">Fitri Nur Azis</span>. I live in
            Indonesia, where I design the future.
            <br />
            <br />
            I've been working on several projects and I'm proud of the progress
            I've made. Many of these projects are open source and available for
            others to explore and contribute to. If you're interested in any of
            the projects I've worked on, please feel free to check out the code
            and suggest any fixes or improvements you might think of.
            Collaborating with others is a great way to learn and grow, and I'm
            always open to new ideas and feedback.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
