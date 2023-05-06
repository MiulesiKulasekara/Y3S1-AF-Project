import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const DonationItem = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col md="9">
              <h2>My donations</h2>
            </Col>
            <Col className="add-col">
              <Button variant="primary">
                <a className="addDonations-btn" href="/create-donations">
                  +Add a Donation
                </a>
              </Button>
            </Col>
          </Row>

          <Row>
            <div className="active-pink-3 active-pink-4 mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table responsive="md" className="tbl-donordonations">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Donated dry food</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Expire date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>

              <tr>
                <td>1</td>
                <td>2023.04.13</td>
                <td>Suger</td>
                <td>5</td>
                <td>Kg</td>
                <td>2023.12.12</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default DonationItem;
