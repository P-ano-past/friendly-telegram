/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./About.css";

export default function About() {
  return (
    <Container className="outerCont">
      <Container className="ps">
        <Row>
          <Row>
            <Col>
              <p>
                <h2 className="idmeTitle">About</h2>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="idme">
                I have been involved in the world of programming since 2019. I
                used free services like CodeAcademy and FreeCodeCamp to learn
                the basics of web development. After picking up more skills
                within the realm of HTML, CSS, and Javascript, I attended a
                coding bootcamp to hone my skills further. Within this coding
                bootcamp, I learned React and started to create projects on my
                own.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>
              Here is where I would insert something about the projects I've
              worked on and how fun it was to complete everything.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>This is not a coincidence.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
