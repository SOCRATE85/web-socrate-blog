import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import './Footer.css';
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

export const Footer = () =>{
    return <footer>
        <Container fluid>
            <div className="Footer">
              <div className="Logo">
                  <Logo />
              </div>
              <div className="FooterLink">
                <Row>
                    <Col sm={12} md={6} lg={3}>
                      <h2>Contact Us</h2>
                      <div className="contact">
                          1426 Hackberry Heights Drive,<br /> 
                          Richmond, Texas, 77406, USA<br />
                          info@kiawitech.com<br />
                          +1 (346) 404-4120
                      </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                      <h2 className="mainnavigation">Main Navigation</h2>
                      <ul>
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about-us">About Us</Link></li>
                          <li><Link to="/our-services">Our Services</Link></li>
                          <li><Link to="/our-mission">Our Mission</Link></li>
                          <li><Link to="/faqs">FAQs</Link></li>
                      </ul>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                      <h2 className="additionallinks">Additional Links</h2>
                     <ul>
                          <li><Link to="/our-experience">Our Experiences</Link></li>
                          <li><Link to="/why-us">Why Us?</Link></li>
                          <li><Link to="/our-blog">Our Blog</Link></li>
                          <li><Link to="/contact-us">Contact Us</Link></li>
                      </ul>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                      <h2 className="followus">Follow Us</h2>
                      <ul>
                          <li><SocialLinks /></li>                        
                          <li><Link to="/terms-conditions">Terms and Conditions</Link></li>
                          <li><Link to="/website-policy">Website Policies</Link></li>
                      </ul>
                    </Col>
                </Row>
              </div>
            </div>
        </Container>
    </footer>
}
