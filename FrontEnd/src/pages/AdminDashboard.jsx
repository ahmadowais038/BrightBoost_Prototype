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
import TutorList from '../compenents/Admin/TutorList';
import TutorAvailabilityTable from '../compenents/Admin/TutorAvailability';

function AdminDashboard() {
    const tutorsData = [
        { name: 'Tutor A', date: '2023-10-26', startTime: '09:00', endTime: '11:00' },
        { name: 'Tutor B', date: '2023-10-27', startTime: '10:00', endTime: '12:00' },
        // ... other tutors
    ];
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
                                    < Notifications/>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={5}>
                            <TutorList />
                            <TutorAvailabilityTable tutorsData={tutorsData} /> {/* Add this line */}
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
