import React from "react";
import Header from "./../compenents/Header";
import { Container, Row, Col } from "react-bootstrap";
import AccountDetails from "./../compenents/AccountDetails";
import UpcomingSessions from "./../compenents/Sessions/UpcomingSessions";
import QuestionsToBeAnswered from "./../compenents/Questions/QuestionsToBeAnswered";
import RecentlyAnsweredQuestions from "./../compenents/RecentlyAnsweredQuestions";
import SelectAvailability from "./../compenents/Availability/SelectAvailability";
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
            <Col sm={6}>
              <QuestionsToBeAnswered />
            </Col>
            <Col sm={6}>
              <RecentlyAnsweredQuestions />
            </Col>
          </Row>

          {/* Third Row */}
          <Row>
            <Col sm={12}>
              <SelectAvailability />
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default TutorDashboard;