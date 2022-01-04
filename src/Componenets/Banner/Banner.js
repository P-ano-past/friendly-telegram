import { React } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Banner.css";

export default function Banner() {
  const Name = "<Marc Salaver />";

  return (
    <Container className="outerCont">
      <Container>
        <Row>
          <Col />
          <Col>
            <Col className="MNC1">
              <Col className="myNameCont1">
                <p className="myName">{Name}</p>
              </Col>
            </Col>
          </Col>
          <Col />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>BANNER COMPONENT</Col>
        </Row>
      </Container>
    </Container>
  );
}
