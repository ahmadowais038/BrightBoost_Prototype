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
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPass = () => {
        setShowPassword(!showPassword);
    };
    

    return (
        <div className="student-dashboard-container">
            <Header />
            <Container className="Content" fluid>
                <Row className="LogContainer">
                    <Col className="LogReg" sm={6}>
                        <div className="Log">
                            <form className="form">
                                <h2 id="form_title">Register your account</h2>
                                <p>
                                    First Name: <input
                                        className="form__input"
                                        type="text"
                                        placeholder="First Name"
                                        name="FirstName"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    />
                                </p>

                                <p>
                                    Last Name: <input
                                        className="form__input"
                                        type="text"
                                        placeholder="Last Name"
                                        name="LastName"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    />
                                </p>

                                <p>
                                    email: <input
                                        className="form__input"
                                        type="email"
                                        placeholder="email@email.com"
                                        name="email"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    />
                                </p>

                                <p>
                                    Username: <input
                                        className="form__input"
                                        type="username"
                                        placeholder="username"
                                        name="username"
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    />
                                </p>

                                <p>
                                Password: <input
                                        className="form__input"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        name="password"
                                    />
                                    Show Password
                                    <input
                                        type="checkbox"
                                        onClick={handleShowPass}
                                    />
                                </p>


                                {/* <p>
                                    Account type:
                                    <select id="account type" name="account type" required>
                                        <option value="" selected disabled>Please Select</option>
                                        <option value="Student">Student</option>
                                        <option value="Teacher">Tutor</option>
                                    </select>
                                </p> */}
                                <button type="submit" className="signin" name="signin">
                                    Register
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
