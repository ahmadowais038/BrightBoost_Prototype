import React from "react";
import Header from "./../compenents/Header";
import { Container, Row, Col } from "react-bootstrap";
import AccountDetails from "./../compenents/Tutor/AccountDetails";
import UpcomingSessions from "./../compenents/Tutor/Sessions/UpcomingSessions";
import QuestionsToBeAnswered from "./../compenents/Tutor/Questions/QuestionsToBeAnswered";
import SelectAvailability from "./../compenents/Tutor/Availability/SelectAvailability";
import Footer from "./../compenents/Footer";

const TutorDashboard = () => {
  return (
    <div className="tutor-dashboard-container">
      <Header />
      <Container fluid>
        <div className="main-container">
          {/* First Row */}
          <Row>
            <Col sm={4}>
              <AccountDetails />
            </Col>
            <Col sm={8}>
              <UpcomingSessions />
            </Col>
          </Row>

          {/* Second Row */}
          <Row>
            <Col sm={8}>
              <SelectAvailability />
            </Col>
            <Col sm={4}>
              <QuestionsToBeAnswered />
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default TutorDashboard;