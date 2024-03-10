import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import todo from "../../Assets/Projects/todo.png";
import mizan from "../../Assets/Projects/mizan.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              title="Todo App"
              description="An o do list is a list of tasks that one must complete. It can be used for daily tasks, weekly tasks, monthly tasks, and even yearly tasks. To do lists are very important because they help us organize our time and ensure that we complete our work on time."
              ghLink="https://github.com/fitrinurazis/to-do-list-react"
              demoLink="https://to-do-list-rect-redux.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={mizan}
              title="MizanStore - Clone"
              description="Mizanstore.com is a trusted online bookstore that provides the latest, best, and most comprehensive selection of books from all publishers in Indonesia."
              ghLink="https://github.com/fitrinurazis/mizanstore-react"
              demoLink="https://mizanstore-clone.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
