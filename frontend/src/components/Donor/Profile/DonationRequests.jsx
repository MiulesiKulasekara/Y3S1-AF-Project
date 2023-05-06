import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DonorRequests from "./DonorRequests";

const DonationRequests = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <Col>
              <DonorRequests />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DonationRequests;
