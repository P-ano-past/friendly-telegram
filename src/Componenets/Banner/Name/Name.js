import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./Name.css";

export default function Name() {
  return (
    <Container className="mainNC">
      <Row>
        <Col className="MNC2">
          <Col className="MNC1">
            <Col className="myNameCont1">
              <Col>
                <Image
                  className="mypic"
                  src="https://lh3.googleusercontent.com/pw/AM-JKLUdPoxnXmjWQLo29sqvcFhdTZdqPAsKxwsNLybnrsRvLGZZMNOANmqyctIIBlIKDEFOQ0bl7FvYIHmwU8cEXmUe4ymNY7amFBTDF4whn9TsynktNeaq1RuW14kLiTkkUe28WQRkC3TPy008eZsnNCi0CQ=w770-h646-no?authuser=0"
                ></Image>
              </Col>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
