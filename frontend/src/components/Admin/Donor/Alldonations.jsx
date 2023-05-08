import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const Alldonations = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <br></br>
          <h2>All donations</h2>
          <br></br>
          <Table responsive="md" className="tbl-alldonors">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Donor name</th>
                <th>Dry food</th>
                <th>quantity</th>
                <th>Unit</th>
                <th>Expire date</th>
                <th>Confirm</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2023.04.12</td>
                <td>Miulesi Kulasekara</td>
                <td>Pumkin</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.04.16</td>
                <td>
                  <Button>Confirm</Button>
                </td>
                <td>
                  <Button>Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default Alldonations;
