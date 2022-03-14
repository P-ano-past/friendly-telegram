import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Name.css";

export default function Name() {
  return (
    <Container className="mainNC">
      <Row>
        <Col className="MNC2">
          <Col className="MNC1">
            <Col className="myNameCont1">
              <Col>
                <img
                  src="https://iciollys.sirv.com/Images/Me%20from%20IG.jpg"
                  width="770"
                  height="646"
                  className="mypic"
                  alt="Dark photo of Marc"
                />
              </Col>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
