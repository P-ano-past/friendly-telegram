import { React } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Name from "./Name/Name";
import "./Banner.css";
import BanImg from "./BanImg/BanImg";

export default function Banner() {
  return (
    <Container className="outerCont">
      <BanImg />
    </Container>
  );
}
