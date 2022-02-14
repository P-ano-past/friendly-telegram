/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function About() {
  return (
    <Container className="outerCont">
      <Container className="ps">
        <Row>
          <Col>
            What needs to happen here is to insert content about what I can
            provide as a developer.
          </Col>
        </Row>
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
