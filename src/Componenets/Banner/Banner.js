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
          <Col className="myNameCont1" xs={8}>
            <p className="myName">{Name}</p>
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
