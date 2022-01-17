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
              <Container className="ps">
                <Row>
                  <Col>#FF9F1C, #FFBF69, #FFF, #CBF3F0, #2EC4B6</Col>
                </Row>
              </Container>
              <Col className="left"></Col>
              <Col className="pgcont" xs={8}>
                <Works />
                <About />
              </Col>
              <Col className="right"></Col>
              <Container>
                <Row>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </Container>
            </Row>
          </Container>
        </Container>
      </Row>
    </Container>
  );
}

export default App;
