import React from "react";
import { Container, Row, Col, CardGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.style.css";

export default function Service() {
  return (
    <Container fluid>
      <Row className="ps-5 pe-5 pt-3">
        <Col className="service-sec p-5">
          <Row className="mb-5">
            <Col className="text-center fs-2 ps-5 pe-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ut
              inventore aperiam suscipit delectus
            </Col>
          </Row>
          <Row className="mb-4 mt-5">
            <Col className="text-center d-flex justify-content-center align-items-center">
               <div className="line"></div><h4 className="ms-3 me-3"> Services </h4><div className="line"></div></Col>
          </Row>
          <Row className="mt-5">
            <CardGroup className="text-center">
              <Col>
                <Card style={{ width: "18rem" }} className="float-end card">
                  <Card.Body>
                    <Card.Title>Make a Donation</Card.Title>
                    <Card.Text className="mt-5 mb-5">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button>Let's Donate</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }} className="m-auto">
                  <Card.Body>
                    <Card.Title>Recipe Suggestion</Card.Title>
                    <Card.Text className="mt-5 mb-5">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Link to="/recipe" className="btn btn-primary">Find a Recipe</Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Meal Planning</Card.Title>
                    <Card.Text className="mt-5 mb-5">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button>Let's Plan</Button>
                  </Card.Body>
                </Card>
              </Col>
            </CardGroup>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
