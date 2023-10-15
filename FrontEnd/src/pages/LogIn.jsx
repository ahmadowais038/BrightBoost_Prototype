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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if either field is empty
        if (!email || !password) {
            setMessage('Error: Both fields are required.');
            return;
        }

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
            } else {
                setMessage('Error: Failed to log in.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error: An error occurred.');
        }
    };

    return (
        <div className="student-dashboard-container">
            <Header />
            <Container className="Content" fluid>
                <Row className="LogContainer">
                    <Col className="LogReg" sm={6}>
                        <div className="Log">
                            <form className="form" onSubmit={handleSubmit}>
                                <h2 id="form_title">Log in to your Account</h2>
                                <p>
                                    Email: <input
                                        className="form__input"
                                        type="text"
                                        placeholder="example@email.com"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </p>

                                <p>
                                    Password: <input
                                        className="form__input"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </p>
                                <button type="submit" className="signin" name="signin">
                                    SIGN IN
                                </button>
                            </form>
                            <br />
                            <br />
                            <p>{message}</p>
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
