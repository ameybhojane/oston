import { Link, useRoutes } from "react-router-dom";

import routes from "./routes/index.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Col, Container, Row, Badge } from "reactstrap";

function App() {
  const routeResult = useRoutes(routes);

  let {
    location: { pathname },
  } = window;
  if (pathname.length > 1) pathname = pathname.substring(1, pathname.length);
  return (
    <>
      <main style={{ height: "100vh" }}>
        <div className="text-center p-4">
          <span style={{ fontWeight: "400", fontSize: "72px" }}>
            For people{" "}
          </span>
          <span style={{ fontWeight: "700", fontSize: "72px" }}>
            making impact
          </span>
        </div>
        <Container className="p-4 ml-4 mr-4">
          <Row xs="mx-auto">
            <Col className="text-center">
              <Badge
                className="p-2"
                pill
                color={pathname  === "data" || pathname  === "/" ? "dark" : "light"}
                style={{
                  color:
                    pathname  === "data" || pathname  === "/" ? "white" : "black",
                }}
              >
                <Link
                  to={"/data"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    background: "inherit",
                  }}
                >
                  Data
                </Link>
              </Badge>
            </Col>
            <Col className="text-center">
              <Badge
                className="p-2"
                pill
                color={pathname  === "product" ? "dark" : "light"}
                style={{ color: pathname  === "product" ? "white" : "black" }}
              >
                <Link
                  to={"/product"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    background: "inherit",
                  }}
                >
                  Product
                </Link>
              </Badge>
            </Col>
            <Col className="text-center">
              <Badge
                className="p-2"
                pill
                color={pathname  === "mental_health" ? "dark" : "light"}
                style={{
                  color: pathname  === "mental_health" ? "white" : "black",
                }}
              >
                <Link
                  to={"/mental_health"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    background: "inherit",
                  }}
                >
                  Mental Health
                </Link>
              </Badge>
            </Col>
            <Col className="text-center">
              <Badge
                className="p-2"
                pill
                color={pathname  === "study_abroad" ? "dark" : "light"}
                style={{
                  color: pathname  === "study_abroad" ? "white" : "black",
                }}
              >
                <Link
                  to={"/study_abroad"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    background: "inherit",
                  }}
                >
                  Study Abroad
                </Link>
              </Badge>
            </Col>
            <Col className="text-center">
              <Badge
                className="p-2"
                pill
                color={pathname  === "tech" ? "dark" : "light"}
                style={{ color: pathname  === "tech" ? "white" : "black" }}
              >
                <Link
                  to={"/tech"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    background: "inherit",
                  }}
                >
                  Tech
                </Link>
              </Badge>
            </Col>
            <Col className="text-center">
              <Badge
                className="p-2"
                pill
                color={pathname  === "carrer" ? "dark" : "light"}
                style={{ color: pathname  === "carrer" ? "white" : "black" }}
              >
                <Link
                  to={"/carrer"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    background: "inherit",
                  }}
                >
                  Carreer
                </Link>
              </Badge>
            </Col>
            <Col className="text-center">
              <Badge
                className="p-2"
                pill
                color={pathname  === "creator" ? "dark" : "light"}
                style={{ color: pathname  === "creator" ? "white" : "black" }}
              >
                <Link
                  to={"/creator"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    background: "inherit",
                  }}
                >
                  Creator
                </Link>
              </Badge>
            </Col>
          </Row>
        </Container>
        {routeResult}
      </main>
    </>
  );
}

export default App;
