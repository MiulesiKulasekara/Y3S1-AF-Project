import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function RecipeItem(props) {
  
  return (
    <Row className="ps-2 pe-2 pb-2">
      <Col>
        <Row className="p-2 text-dark border-bottom" >
          <Col className="">
            <Row>
              <Col className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nostrum iure a?
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">Ingrediant Count - 10</Col>
              <Col className="mb-2">Main Ingrediant - Pumpking</Col>
              <Col className="mb-2">Recipe type - Dessert</Col>
            </Row>
          </Col>

          <Col md={2}>
            <Button className="mb-2" onClick={() => props.handleModel(props.rid)}>View Recipe</Button>
            <Button className="border border-primary text-dark" style={{backgroundColor:"transparent"}}>
              Add to Favourit
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
