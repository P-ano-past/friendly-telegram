import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import "./BanImg.css";
import Name from "../Name/Name";

export default function BanImg() {
  return (
    <Row>
      <Row>
        <Col className="imgCont">
          <Image
            src="https://lh3.googleusercontent.com/pw/AM-JKLVqNY1SMAxlP8j6nN34K_KhZwQ_sVD0ViDVnL1LRXHx99yu3jNBLgsBTJWdy7T7oINa1OnbpB_RkbPZgk1ECCGSirJ4JLuHXGl5o9pEv5FM__jU-hviNfhfA8swI3gVrfkIQi6lj0U2NP2nIpjMMLXRLA=w1350-h900-no?authuser=0"
            className="bannerImage"
            alt="Colorful mechanical keyboard"
          />
        </Col>
      </Row>
      <Row>
        <Col className="nCont">
          <Name />
        </Col>
      </Row>
    </Row>
  );
}
