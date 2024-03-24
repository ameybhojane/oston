import React from "react";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardHeader,
} from "reactstrap";

import triangle from "./../images/triangle.jpg";
import circle from "./../images/circle.jpg";
import rectangle from "./../images/rectangle.jpg";
import square from "./../images/square.jpg";
import girl from "./../images/girl1.jpg";
import girl2 from "./../images/girl2.jpg";
import boy1 from "./../images/boy1.jpg";
import boy2 from "./../images/boy2.png";

function Data() {
  return (
    <div>
      <Container className="mx-auto p-2">
        <Row>
          <Col>
            <Card
              style={{
                width: "12rem",
                height: "17rem",
              }}
            >
              <CardHeader className="m-0 p-0 ">
                <img
                  alt="Sample"
                  className="rounded-top"
                  src={rectangle}
                  style={{ position: "relative", width: "100%" }}
                />
                <img
                  alt="Girl"
                  src={boy1}
                  style={{
                    position: "absolute",
                    height: "60px",
                    width: "60px",
                    borderRadius: "60px",
                    left: "4rem",
                    top: "80px",
                  }}
                />
              </CardHeader>
              <CardBody className="m-0 rounded-bottom">
                <p
                  className="text-center m-0 pt-2"
                  style={{ fontWeight: "600" }}
                >
                  Deepak
                </p>
                <p className="m-0">Creates user-centric products</p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "12rem",
                height: "17rem",
              }}
            >
              <CardHeader className="m-0 p-0 ">
                <img
                  alt="Sample"
                  className="rounded-top"
                  src={triangle}
                  style={{ position: "relative", width: "100%" }}
                />
                <img
                  alt="Girl"
                  src={girl2}
                  style={{
                    position: "absolute",
                    height: "60px",
                    width: "60px",
                    borderRadius: "60px",
                    left: "4rem",
                    top: "80px",
                  }}
                />
              </CardHeader>
              <CardBody className="m-0 rounded-bottom">
                <p
                  className="text-center m-0 pt-2"
                  style={{ fontWeight: "600" }}
                >
                  shikha
                </p>
                <p className="m-0">Drives product innovation </p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "12rem",
                height: "17rem",
              }}
            >
              <CardHeader className="m-0 p-0 ">
                <img
                  alt="Sample"
                  className="rounded-top"
                  src={circle}
                  style={{ position: "relative", width: "100%" }}
                />
                <img
                  alt="Girl"
                  src={boy2}
                  style={{
                    position: "absolute",
                    height: "60px",
                    width: "60px",
                    borderRadius: "60px",
                    left: "4rem",
                    top: "80px",
                  }}
                />
              </CardHeader>
              <CardBody className="m-0 rounded-bottom">
                <p
                  className="text-center m-0 pt-2"
                  style={{ fontWeight: "600" }}
                >
                  samarth
                </p>
                <p className="m-0">Delivers scalable solutions to optimize </p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "12rem",
                height: "17rem",
              }}
            >
              <CardHeader className="m-0 p-0 ">
                <img
                  alt="Sample"
                  className="rounded-top"
                  src={square}
                  style={{ position: "relative", width: "100%" }}
                />
                <img
                  alt="Girl"
                  src={girl}
                  style={{
                    position: "absolute",
                    height: "60px",
                    width: "60px",
                    borderRadius: "60px",
                    left: "4rem",
                    top: "80px",
                  }}
                />
              </CardHeader>
              <CardBody className="m-0 rounded-bottom">
                <p
                  className="text-center m-0 pt-2"
                  style={{ fontWeight: "600" }}
                >
                  avanti
                </p>
                <p className="m-0">scale their products with confidence </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Data;
