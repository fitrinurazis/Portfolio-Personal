import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Thank you for your interest in getting in touch with me. I welcome
            your feedback, questions, and suggestions. If you have a specific
            question or comment, please feel free to email me directly at{" "}
            <a href="mailto:fitrinurazis30@gmail.com">
              fitrinurazis30@gmail.com
            </a>
            . I make an effort to respond to all messages within 24 hours,
            although it may take me longer during busy periods. Alternatively,
            you can use the contact form on my website to get in touch. Simply
            fill out the required fields and I'll get back to you as soon as
            possible. Finally, if you prefer to connect on social media, you can
            find me on{" "}
            <a href="https://www.instagram.com/azis.nur.1/">Instagram</a>. I
            post regular updates and engage with my followers there, so don't
            hesitate to reach out. Thanks again for your interest, and I look
            forward to hearing from you!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
