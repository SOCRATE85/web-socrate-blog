import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title";
import ButtonComponent from "../common/ButtonComponent";
import './About.css';

const About = () => {
    return <Container fluid>
        <div className="AboutContainer">         
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <Title title="About" subtitle="SiekTech" subtitle2="IT Academy" />
                    <div className="contents">
                        <p>SiekTech Academy was formed in 2016 with the aim of providing the much-needed IT skills in the field of Database Administration. The CEO, Dr. Denis Kiawi has over 10 years of experience working in the field of database administration.</p>
                        <p>The mission of SiekTech Academy is to empower people through IT training by providing unlimited access to tools and resources necessary to demystify a career in the IT industry</p>
                    </div>
                    <div className="action">
                     <ButtonComponent variant="danger" styles="button" url="/about-us" title="READ MORE" />
                    </div>                  
                </Col>
                <Col sm={12} md={6} lg={6} className="right-col">
                    <img src="/assets/images/whoweare_pic1.png" alt="About Us"/>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="height"><div className="bottomtext">About</div></Col>
            </Row>            
        </div>        
    </Container>;
}

export default About;