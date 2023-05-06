import React from "react";
import { Button } from "react-bootstrap";


export default function RecipeRaw(props) {
  return (
    <tbody>
      <tr>
        <td>Beef Welington</td>
        <td>Appetizer</td>
        <td>10</td>
        <td>Beef</td>
        <td>
          <ul>
            <li>floar</li>
            <li>mushroomes</li>
            <li>mushroomes</li>
          </ul>
        </td>
        <td>
          <div className="d-flex justify-content-between">
            <Button onClick={() => props.handleModel(props.rid)}>V</Button>
            <Button>R</Button>
            <Button>X</Button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
