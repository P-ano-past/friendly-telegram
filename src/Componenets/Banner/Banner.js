import { React } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Name from "./Name/Name";
import "./Banner.css";

export default function Banner() {
  return (
    <Container className="outerCont">
      <Container>
        <Row>
          <Col>
            <Name />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>BANNER COMPONENT</p>
            <a href="https://coolors.co/ff9f1c-ffbf69-ffffff-cbf3f0-2ec4b6">
              <p>link to color pallette</p>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
