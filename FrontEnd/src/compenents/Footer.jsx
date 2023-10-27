import React from "react";
import { Container } from "react-bootstrap";
// import Logo from "../assets/footer-logo.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Logob from "../assets/Logo_brightboostA.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <div className="flex-container">
                    <div className="footer-item-container footer-logo">
                        <img src={Logob} />
                    </div>
                    <div className="footer-item-container">
                        <h4>About Us</h4>
                        <div className="description">
                            <p>At Bright Boost, we believe in the power of education to transform lives. Whether you're a high school student seeking academic support or a dedicated tutor ready to inspire, Bright Boost is your platform for growth, discovery, and success.
</p>
                        </div>
                        
                    </div>
                    <div className="footer-item-container">
                        <h4>Services</h4>
                        <div className="description">
                            <ul >
                                <li>Tutoring</li>
                                <li>FAQs</li>
                            
                            </ul>
                        </div>
                        
                    </div>
                    <div className="footer-item-container">
                        <h4>Contact US</h4>
                        <div className="description">
                            <p> </p>
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