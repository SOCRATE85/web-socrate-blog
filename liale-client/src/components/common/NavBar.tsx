import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    return <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand href="/">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{marginLeft: 'auto'}}>
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="About Us" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="/our-mission">Our Mision</NavDropdown.Item>
                                <NavDropdown.Item href="/our-experience">Our Experience</NavDropdown.Item>
                                <NavDropdown.Item href="/why-us">Why Us</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Our Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/our-courses">Our Courses</NavDropdown.Item>
                                <NavDropdown.Item href="/our-services/weekly-webinars-for-working-dbas">Weekly Webinars for Working DBAs</NavDropdown.Item>
                                <NavDropdown.Item href="/corporate-training">Corporate Training</NavDropdown.Item>
                                <NavDropdown.Item href="/our-services/interview-bootcamps">Interview Bootcamps</NavDropdown.Item>
                                <NavDropdown.Item href="/our-services/mentorship-program">Mentorship Program</NavDropdown.Item>
                                <NavDropdown.Item href="/our-services/one-on-one-on-the-job-support">One-on-One on The Job Support</NavDropdown.Item>
                                <NavDropdown.Item href="/our-services/scholarships">Scholarships</NavDropdown.Item>
                                <NavDropdown.Item href="/our-services/refer-earn">Refer Earn</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/our-clients">Our Clients</Nav.Link>
                            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
                            <Nav.Link href="/careers">Careers</Nav.Link>
                            <Nav.Link href="/our-blog">Our Blog</Nav.Link>
                            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        </Nav>                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
}

export default NavBar;
