import React from "react";
// import profile from "../../images/admin-profile.jpg"
import {Row, Col} from "react-bootstrap";

export default function AdminNavBar() {
  return (
    <Row>
      <Col className="d-flex justify-content-end align-items-center navgation-bar">
        <div className="d-flex me-5 align-items-center">
          <div
            className="me-3 admin-profile-pic"
          ></div>
          <div>Imash Nipun</div>
        </div>
        <div className="me-5 notification-icon">

        </div>
      </Col>
    </Row>
  );
}
