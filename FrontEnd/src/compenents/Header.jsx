import React from "react";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Notification from "../assets/notification.png";
import LogoB from "../assets/Logo_brightBoost.jpeg"
import Logout from "../assets/logout.png";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <Container fluid>
        <Row>
          <Col sm={3}>
            <div className="logo text-left">
              <img src={LogoB} alt="Logo"/>
              <h3>BRIGHT BOOST</h3>
            </div>
          </Col>
          <Col sm={6}>
            <div className="nav-container text-center">
              <Nav
                className="justify-content-center"
                defaultActiveKey="/dashboard"
              >
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/" activeClassName="active">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/dashboard" activeClassName="active">Dashboard</Nav.Link>
                </Nav.Item>   
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/tutordashboard" activeClassName="active">Tutor Dashboard</Nav.Link>
                </Nav.Item>   
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/StudentDashboard" activeClassName="active">Student Dashboard</Nav.Link>
                </Nav.Item>            
              </Nav>
            </div>
          </Col>
          <Col sm={3}>
            <div className="profile-container">
              <ul className="list-unstyled">
                <li>John Doe</li>
                <li>
                  <img src={Notification} />
                </li>
                <li>
                  <img className="logout" src={Logout} />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
