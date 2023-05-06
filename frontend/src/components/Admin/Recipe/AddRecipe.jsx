import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./admin.recipe.style.css";

export default function AddRecipe() {
  const [value, setValue] = useState("");
  const [mainIng, setMainIng] = useState({
    mIName: "",
    qty: 0,
    type: "",
  });

  console.log(mainIng);

  return (
    <Container>
      <Row>
        <Col className="p-5">
          <Row className="mb-4">
            <Col className="ps-4">
              <h3>
                <Link to="/admin/recipe">Recipe</Link>/Add Recipe
              </h3>
            </Col>
          </Row>
          <Form>
            <Row>
              <Col className="ps-4 pe-4 border-end">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Recipe Name</Form.Label>
                  <Form.Control type="text" placeholder="Beef Welington" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Recipe type</Form.Label>
                  <Form.Control type="text" placeholder="Dessert" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Recipe Instruction</Form.Label>
                  <ReactQuill
                    theme="snow"
                    className="text-editor"
                    value={value}
                    onChange={setValue}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
              <Col md={3} className="ps-4 pe-4 border-end">
                <Row className="mb-3">
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Main Ingrediants</Form.Label>
                      <Form.Control type="text" placeholder="Enter the ingrediant" name="mIName" onChange={(e)=>setMainIng(prev=>{})}/>
                    </Form.Group>
                    <Row className="mb-3">
                      <Col md={5}>
                        <Form.Label>Qty</Form.Label>
                        <Form.Control type="number" min={0} placeholder="0" />
                      </Col>
                      <Col>
                        <Form.Label>Type</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="kg">kg</option>
                          <option value="g">g</option>
                          <option value="tea spoon">Tea spoon</option>
                          <option value="table spoon">Table spoon</option>
                          <option value="items">items</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <Button>Save</Button>
                  </Col>
                </Row>
                <Row className="p-2">
                  <Col>
                    <Row className="border-top mb-1 p-1">
                      <Col>Pumpking</Col>
                      <Col md={4}>2 items</Col>
                      <Col md={2}>
                        <Button>X</Button>
                      </Col>
                    </Row>
                    <Row className="border-top mb-1 p-1">
                      <Col>Pumpking</Col>
                      <Col md={4}>2 items</Col>
                      <Col md={2}>
                        <Button>X</Button>
                      </Col>
                    </Row>
                    <Row className="border-top mb-1 p-1">
                      <Col>Pumpking</Col>
                      <Col md={4}>2 items</Col>
                      <Col md={2}>
                        <Button>X</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md={3} className="ps-4 pe-4">
                <Row className="mb-3">
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Sub Ingrediants</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Row className="mb-3">
                      <Col>
                        <Form.Label>Qty</Form.Label>
                        <Form.Control type="number" min={0} placeholder="0" />
                      </Col>
                      <Col>
                        <Form.Label>Type</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="kg">kg</option>
                          <option value="g">g</option>
                          <option value="tea spoon">Tea spoon</option>
                          <option value="table spoon">Table spoon</option>
                          <option value="items">items</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <Button>Save</Button>
                  </Col>
                </Row>
                <Row className="p-2">
                  <Col>
                    <Row className="border-top mb-1 p-1">
                      <Col>Pumpking</Col>
                      <Col md={4}>2 items</Col>
                      <Col md={2}>
                        <Button>X</Button>
                      </Col>
                    </Row>
                    <Row className="border-top mb-1 p-1">
                      <Col>Pumpking</Col>
                      <Col md={4}>2 items</Col>
                      <Col md={2}>
                        <Button>X</Button>
                      </Col>
                    </Row>
                    <Row className="border-top mb-1 p-1">
                      <Col>Pumpking</Col>
                      <Col md={4}>2 items</Col>
                      <Col md={2}>
                        <Button>X</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
