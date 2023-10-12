import React from 'react';
import Header from './../compenents/Header';
import Footer from './../compenents/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import UserManagement from './../compenents/Admin/UserManagement';
import SessionManagement from './../compenents/Admin/SessionMangement'
import FeedbackAndRatings from './../compenents/Admin/FeedbackAndRatings';
import ReportAndAnalysis from './../compenents/Admin/ReportAndAnalysis';
import Notifications from './../compenents/Admin/Notifications';
import './AdminDashboard.css';


function AdminDashboard() {
    return (
        <div className="admin-dashboard-container">
            <Header />
            <Container fluid>
                <div className="main-container">
                    <Row>
                        <Col sm={7}>
                            <Row>
                                <Col sm={7}>
                                    <UserManagement />
                                </Col>
                                <Col sm={5}>
                                    <SessionManagement />
                                </Col>
                                <Col sm={12}>
                                    <FeedbackAndRatings />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={5}>
                            <Notifications />
                            <ReportAndAnalysis />
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />

        </div>
    );
}

export default AdminDashboard;
