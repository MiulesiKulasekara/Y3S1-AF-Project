import "./style.css";
// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import profile from "../../../img/user.png";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";

const DonorProfileSideBar = () => {
  return (
    <Row fluid className="donor-profile-side-bar p-0">
      <Col>
        <Row>
          <Col>
            <img
              src={profile}
              alt="profile"
              className="donor-prof-sidebar-img mt-3"
            />
            <div>
              <h4 className="mt-3 mb-5 donor-prof-sidebar-name">
                Shamal Aravinda
              </h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="ms-4 mt-3 mb-5">
            <BsFillBalloonHeartFill className="donor-prof-sidebar-icons" />
            <Link to="/donor/profile" className="donor-prof-sidebar-links ms-3">
              Donations
            </Link>
          </Col>
        </Row>

        <Row>
          <Col className="ms-4 mt-3 mb-5">
            <BsBellFill className="donor-prof-sidebar-icons" />
            <Link
              to="/donor/profile/request"
              className="donor-prof-sidebar-links ms-3"
            >
              Requests
            </Link>
          </Col>
        </Row>

        <Row>
          <Col className="ms-4 mt-3 mb-5">
            <BsFillPersonFill className="donor-prof-sidebar-icons" />
            <Link
              to="/donor/profile/edit"
              className="donor-prof-sidebar-links ms-3"
            >
              Profile
            </Link>
          </Col>
        </Row>

        <Row>
          <Button className="donor-prof-sidebar-signout" variant="primary" type="submit">Sign out</Button>
        </Row>
      </Col>
    </Row>
  );
};
export default DonorProfileSideBar;
