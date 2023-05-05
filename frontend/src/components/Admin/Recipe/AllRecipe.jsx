import React from "react";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function AllRecipe() {
  return (
    <Container>
      <Row>
        <Col className="p-5">
          <Row className="mb-4">
            <Col><h3>All Recipe</h3></Col>
            <Col><Link to="/admin/add-recipe" className="float-end btn btn-primary">Add a Recipe</Link></Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Form.Control type="search" placeholder="Search..." />
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Recipe Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
