import React from "react";
import Header from "./../compenents/Header";
import { Container, Row, Col } from "react-bootstrap";
import AcademicInformation from "./../compenents/Student/AcademicInformation";
import AttendanceHistory from "./../compenents/Student/AttendanceHistory";
import UpcomingSessions from "./../compenents/Student/Sessions/UpcomingSessions";
import AskAQuestion from "./../compenents/Student/Subjects/AskAQuestion";
import RecentAskedQuestions from "./../compenents/Student/RecentAskedQuestions";
import ReserveStudySpace from "./../compenents/Student/ReserveStudySpace";
import FAQs from "./../compenents/Student/FAQs";
import Footer from "./../compenents/Footer";

const StudentDashboard = () => {
  return (
    <div className="student-dashboard-container">
      <Header />
      <Container fluid>
        <div className="main-container">
          <Row>
            <Col sm={7}>
              <Row>
                <Col sm={7}>
                  <AcademicInformation />
                </Col>
                <Col sm={5}>
                  <AttendanceHistory />
                </Col>
                <Col sm={12}>
                  <RecentAskedQuestions />
                </Col>
              </Row>
            </Col>
            <Col sm={5}>
              <UpcomingSessions />
              <AskAQuestion />
              <ReserveStudySpace />
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
