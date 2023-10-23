import React, { useState, useEffect } from "react";
import Header from "../compenents/Header";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
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
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        username: "",
        password: "",
    });

    const handleShowPass = () => {
        setShowPassword(!showPassword);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:5000/api/reg', formData); // Send a POST request to your Flask API endpoint
    //         // Handle the response, e.g., show a success message
    //         setMessage(data.message);
    //         console.log(response.data);
    //     } catch (error) {
    //         // Handle errors, e.g., show an error message
    //         setMessage("An error has occurred!");
    //         console.error('Error:', error);
    //     }
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/reg", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }); 
            
            if (response.ok) {
                const data = await response.json();
                console.log(data); // Handle the response data
                setMessage(data.message);
              } 
              
            else {
                console.error('Error:', response.statusText);
                setMessage(data.message);
            }

        } 
        
        catch (error) {
            console.error('Error:', error);
            setMessage("An error has occurred!")
        }
    };

    return (
        <div className="student-dashboard-container">
            <Header />
            <Container className="Content" fluid>
                <Row className="LogContainer">
                    <Col className="LogReg" sm={6}>
                        <div className="Log">
                            <form className="form" onSubmit={handleSubmit} >
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
