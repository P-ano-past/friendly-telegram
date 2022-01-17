import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import "./BanImg.css";
import Name from "../Name/Name";

export default function BanImg() {
  return (
    <Container className="banImgCont">
      <Row>
        <Container className="imgCont">
          <Row>
            <Col>
              <Image
                src="https://lh3.googleusercontent.com/pw/AM-JKLVqNY1SMAxlP8j6nN34K_KhZwQ_sVD0ViDVnL1LRXHx99yu3jNBLgsBTJWdy7T7oINa1OnbpB_RkbPZgk1ECCGSirJ4JLuHXGl5o9pEv5FM__jU-hviNfhfA8swI3gVrfkIQi6lj0U2NP2nIpjMMLXRLA=w1350-h900-no?authuser=0"
                className="bannerImage"
                alt="Colorful mechanical keyboard"
              />
            </Col>
          </Row>
        </Container>
        <Container className="nCont">
          <Row>
            <Col>
              <Name />
              <Col />
              <Col className="greeting">
                <Col className="profilegreet">
                  <h1>Marc Salaver</h1>
                  <strong>Developing futures</strong>
                </Col>
              </Col>
              <Col />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
