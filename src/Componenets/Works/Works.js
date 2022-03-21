import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Works.css";

export default function Works() {
  return (
    <Container className="WorksOuterCont">
      <Container className="ps">
        <Row>
          <Col>
            <p className="worksT">
              <h2>Works</h2>
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <u>
              <a
                className="KKlink"
                href="http://kindredkapwa.com/"
                target="_blank"
                rel="noreferrer"
              >
                Kindred Kapwa
              </a>
            </u>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="wST">
              A previous client, Nicole, requested for my services to build out
              a virtual business card to showcase her new media project,
              <u>
                <a
                  className="KKlink"
                  href="http://kindredkapwa.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kindred Kapwa
                </a>
              </u>
              .
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="ps">
        <Row>
          <Col>#FF9F1C, #FFBF69, #FFF, #CBF3F0, #2EC4B6</Col>
        </Row>
      </Container>
    </Container>
  );
}
