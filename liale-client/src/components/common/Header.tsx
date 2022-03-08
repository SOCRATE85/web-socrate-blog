import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import NavBar from "./NavBar"
import './Header.css';

const Header = () =>{
    return <>
        <Container fluid>
            <Row className="p-2">
                <Col><Link to={"/apply-for-training-now"}>Apply For A Course</Link></Col>
                <Col className="d-none d-sm-none d-md-block"><SearchBox /></Col>
                <Col style={{ textAlign: "right" }}><Button variant="primary" href={"/contact-us"}>Contact Us</Button></Col>
            </Row>
        </Container>
       <NavBar />
    </>
}

export default Header;