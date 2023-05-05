import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { MdDashboard } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiCook } from "react-icons/gi";

export default function Sidebar() {
  return (
    <Col xs lg="2" className="side-bar">
      <Row>
        <Col className="ms-4 mt-4 mb-5">
          <Link to="/admin" className="sidebar-links">
            <h3>PlatePal</h3>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="ms-4 mt-3 mb-5">
          <MdDashboard className="me-4 side-bar-icon" id="user-icon" />
          <Link to="/admin" className="sidebar-links">
            Dashboard
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="ms-4 mt-3 mb-5">
          <HiUser className="me-4 side-bar-icon" id="user-icon" />
          <Link to="/admin/user" className="sidebar-links">
            Users
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="ms-4 mt-3 mb-5">
          <BsFillBalloonHeartFill
            className="me-4 side-bar-icon"
            id="user-icon"
          />
          <Link to="/admin/donations" className="sidebar-links">
            Donations
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="ms-4 mt-3 mb-5">
          <IoFastFoodSharp className="me-4 side-bar-icon" id="user-icon" />
          <Link to="/admin/meal-plan" className="sidebar-links">
            Meal Planning
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="ms-4 mt-3 mb-5">
          <GiCook className="me-4 side-bar-icon" id="user-icon" />
          <Link to="/admin/recipe" className="sidebar-links">
            Recipes
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="ms-5 mt-5">
          <Button variant="light" className="bg-white">
            Sign out
          </Button>
        </Col>
      </Row>
    </Col>
  );
}
