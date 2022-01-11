import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Name.css";

export default function Name() {
  const Name = "<Marc Salaver />";

  return (
    <Col>
      <Col className="MNC2">
        <Col className="MNC1">
          <Col className="myNameCont1">
            <p className="myName">{Name}</p>
          </Col>
        </Col>
      </Col>
    </Col>
  );
}
