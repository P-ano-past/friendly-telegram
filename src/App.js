/* eslint-disable no-unused-vars */
import React from "react";
import About from "./Componenets/About/About";
import Works from "./Componenets/Works/Works";
import NavBar from "./Componenets/Nav/NavBar";
import { Container, Row, Col, Nav, NavItem, NavLink } from "react-bootstrap";
import "./App.css";
import BanImg from "./Componenets/Banner/BanImg/BanImg";
import Name from "./Componenets/Banner/Name/Name";

function App() {
  return (
    <Container className="main" fluid>
      <Row>
        <NavBar />
        <Container className="pg">
          <Container className="gl">
            <Row>
              <Container className="subPg">
                <BanImg />
              </Container>
            </Row>
          </Container>
        </Container>
        <Container className="mCont1">
          <Container className="sb">
            <Row>
              <Col className="left"></Col>
              <Col className="pgcont" xs={11}>
                <Row>
                  <Col>
                    <Works />
                  </Col>
                  <Col>
                    <About />
                  </Col>
                </Row>
              </Col>
              <Col className="right"></Col>
            </Row>
          </Container>
        </Container>
      </Row>
    </Container>
  );
}

export default App;
