import Banner from "./Componenets/Banner/Banner";
import About from "./Componenets/About/About";
import Works from "./Componenets/Works/Works";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container fluid className="pg">
      <Container fluid className="mCont1">
        <Row>
          <Container>
            <Row>
              <Col></Col>
              <Col></Col>
            </Row>
          </Container>
          <Col className="left"></Col>
          <Col className="pgcont" xs={8}>
            <Banner />
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
  );
}

export default App;
