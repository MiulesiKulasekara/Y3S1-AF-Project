import React,{useState} from "react";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DisplayARecipe from "./DisplayARecipe";
import RecipeRaw from "./RecipeRaw";

export default function AllRecipe() {
  const [modalShow, setModalShow] = useState(false);
  const[recipeId,setRecipeId] = useState('');

  const handleModel = (e) =>{
    setRecipeId(e);
    setModalShow(true)
  }

  return (
    <Container>
      <Row>
        <Col className="p-5">
          <Row className="mb-4">
            <Col>
              <h3>All Recipe</h3>
            </Col>
            <Col>
              <Link
                to="/admin/add-recipe"
                className="float-end btn btn-primary"
              >
                Add a Recipe
              </Link>
            </Col>
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
                    <th>Recipe type</th>
                    <th>Ingrediant Count</th>
                    <th>Main ingrediants</th>
                    <th>Sub ingrediants</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <RecipeRaw handleModel={handleModel} rid={"cdiidj4ifiejife"}/>
                <RecipeRaw handleModel={handleModel} rid={"lspwk4owdwq9du9w"}/>
                <RecipeRaw handleModel={handleModel} rid={"cdii4wdwwwdiwoe0e9"}/>
              </Table>
              <DisplayARecipe
                show={modalShow}
                onHide={() => setModalShow(false)}
                recipeId={recipeId}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
