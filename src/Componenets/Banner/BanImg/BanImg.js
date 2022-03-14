import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./BanImg.css";
import Name from "../Name/Name";

export default function BanImg() {
  return (
    <Container className="banImgCont">
      <Row>
        <Container className="imgCont">
          <Row>
            <Col className="imgCol">
              <img
                src="https://iciollys.sirv.com/Images/900.jpg"
                className="bannerImage"
                width="1350"
                height="900"
                alt="mechanical keyboard"
              />
            </Col>
          </Row>
        </Container>
      </Row>
      <Row>
        <Container className="nCont">
          <Row>
            <Col>
              <Name />
              <Col className="greeting">
                <Col className="profilegreet">
                  <h1>Marc Salaver</h1>
                  <strong id="DF">Developing futures</strong>
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
