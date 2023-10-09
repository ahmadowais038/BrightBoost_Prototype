import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../assets/footer-logo.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <div className="flex-container">
                    <div className="footer-item-container footer-logo">
                        <img src={Logo} />
                    </div>
                    <div className="footer-item-container">
                        <h4>About Us</h4>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis optio nobis dolorem maiores veniam obcaecati quisquam quidem molestiae ea voluptates sint blanditiis quam veritatis error magnam quos, distinctio odio exercitationem?</p>
                        </div>
                        
                    </div>
                    <div className="footer-item-container">
                        <h4>Services</h4>
                        <div className="description">
                            <ul >
                                <li>Tutoring</li>
                                <li>FAQs</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="footer-item-container">
                        <h4>Contact US</h4>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        
                        <div className="socal-medias">
                            <ul className="list-unstyled">
                                <li><img src={Facebook}/></li>
                                <li><img src={Twitter}/></li>
                                <li><img src={Instagram}/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;