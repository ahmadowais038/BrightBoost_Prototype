import React from 'react';
import Header from './../compenents/Header';
import Footer from './../compenents/Footer';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <Header />

            <Container fluid className="content-container">
                <Row className="intro-section">
                    <Col sm={12}>
                        <h1>Welcome to Bright Boost</h1>
                        <p>Your Path to Academic Excellence!</p>
                        <Button variant="primary" href="/dashboard">Access Your Dashboard</Button>
                    </Col>
                </Row>

                <Row className="about-section">
                    <Col sm={6}>
                        <h2>About Us</h2>
                        <p>
                            At Bright Boost, we believe in the power of education to transform lives. Whether you're a high school student seeking academic support or a dedicated tutor ready to inspire, Bright Boost is your platform for growth, discovery, and success.
                        </p>
                    </Col>
                    <Col sm={6}>
                        <h2>Our Services</h2>
                        <p>
                            Discover a world of knowledge and guidance with our dedicated team of academic experts. From tutoring complex subjects to providing personalized guidance, we are here to help you excel in your studies.
                        </p>
                    </Col>
                </Row>
                <Row className="testimonial-section">
                    <Col sm={12}>
                        <h2>Testimonials</h2>
                    </Col>
                    <Col sm={4}>
                        <blockquote>
                            "Bright Boost has helped me tremendously in my studies. The tutors are fantastic and the resources invaluable."
                            <footer>- Alex R.</footer>
                        </blockquote>
                    </Col>
                    <Col sm={4}>
                        <blockquote>
                            "I was struggling with math, but with Bright Boost's help, I've improved significantly and now enjoy the subject!"
                            <footer>- Jamie L.</footer>
                        </blockquote>
                    </Col>
                    <Col sm={4}>
                        <blockquote>
                            "The academic guidance and support I received here played a major role in my college acceptance. Thank you, Bright Boost!"
                            <footer>- Sam T.</footer>
                        </blockquote>
                    </Col>
                </Row>

                <Row className="cta-section">
                    <Col sm={12}>
                        <h2>Join Us Today!</h2>
                        <p>Ready to elevate your academic journey? Sign up now and take the first step towards excellence.</p>
                        <Button variant="success" size="lg">Sign Up</Button>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
};

export default HomePage;

               
