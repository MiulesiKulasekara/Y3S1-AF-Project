import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function DisplayARecipe(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Beef Wellington
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p className="fs-4">How to make?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            voluptatem voluptate obcaecati id in optio dolor totam assumenda
            minus? Reprehenderit excepturi ducimus natus culpa itaque tempore
            dolore fugit illum? Architecto repellendus iure, necessitatibus sint
            qui possimus pariatur quod explicabo labore.
          </p>
        </div>
        <p className="fs-4">Ingrediants</p>
        <div>
          <ul>
            <li>Ingrediant01 - 2kg</li>
            <li>Ingrediant02 - 500g</li>
            <li>Ingrediant03 - 1 table spoone</li>
            <li>Ingrediant01 - 2kg</li>
            <li>Ingrediant02 - 500g</li>
            <li>Ingrediant03 - 1 table spoone</li>
            <li>Ingrediant01 - 2kg</li>
            <li>Ingrediant02 - 500g</li>
            <li>Ingrediant03 - 1 table spoone</li>
            <li>Ingrediant01 - 2kg</li>
            <li>Ingrediant02 - 500g</li>
            <li>Ingrediant03 - 1 table spoone</li>
            <li>Ingrediant01 - 2kg</li>
            <li>Ingrediant02 - 500g</li>
            <li>Ingrediant03 - 1 table spoone</li>
          </ul>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
