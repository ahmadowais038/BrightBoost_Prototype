import React, { useState, useEffect } from "react";
import Header from "../compenents/Header";
import { Container, Row, Col } from "react-bootstrap";
import AcademicInformation from "../compenents/Student/AcademicInformation";
import AttendanceHistory from "../compenents/Student/AttendanceHistory";
import UpcomingSessions from "../compenents/Student/Sessions/UpcomingSessions";
import AskAQuestion from "../compenents/Student/Subjects/AskAQuestion";
import RecentAskedQuestions from "../compenents/Student/RecentAskedQuestions";
import ReserveStudySpace from "../compenents/Student/ReserveStudySpace";
import FAQs from "../compenents/Student/FAQs";
import Footer from "../compenents/Footer";

const UserSignIn = () => {
    
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Make a GET request to the Flask backend
        fetch("/").then(
            response => response.json()
        )
        .then(
            data => console.log(data)
        )
    });

    return (
        <div className="student-dashboard-container">
            <Header />
            <Container className="Content" fluid>
                <Row className="LogContainer">
                    <Col className="LogReg" sm={6}>
                        <div className="Log">
                            <form className="form">
                                <h2 id="form_title">Log in to your Account</h2>
                                <p>
                                    Email: <input
                                        className="form__input"
                                        type="text"
                                        placeholder="example@email.com"
                                        name="email"
                                    // value={email}
                                    />
                                </p>

                                <p>
                                    Password: <input
                                        className="form__input"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                    // value={password}
                                    />
                                </p>
                                <button type="submit" className="signin" name="signin">
                                    SIGN IN
                                </button>
                            </form>
                            <br />
                            <br />
                        </div>
                    </Col>
                </Row>
            </Container>

            <p></p>
            <Footer />
        </div>
    );
};

export default UserSignIn;
