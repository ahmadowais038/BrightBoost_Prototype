import React from "react";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Notification from "../assets/notification.png";
import LogoB from "../assets/Logo_brightBoost.jpeg"
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
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
                        
              </Nav>
            </div>
          </Col>
          <Col sm={3}>
            <div className="profile-container">
              <ul className="list-unstyled">
                <li>
                  {/* <img src={Notification} alt="Notification Icon" /> */}
                </li>
                <li className="logout">
                  <Button variant="outline-light">Sign Out</Button>
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
