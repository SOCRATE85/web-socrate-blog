import React from "react";
import Slider from 'react-slick';
import { Container, Row, Col } from "react-bootstrap";
import Testimonial, { TestimonialProps } from "./Testimonial";
import "./Testimonial.css";

const testimonialList: TestimonialProps[] = [
  {
    description: "Kiawitech's professionalism is honestly tremendous.  As leaders in IT Services and DBA training in the San Antonio area, my company has had the pleasure, not only to benefit from their expertise and constancy, but also to work together with them on different projects for their clients.",
    writtenBy: "– Yembe Nfor, Y\\G." 
  },
  {
    description: "Kiawitech's professionalism is honestly tremendous.  As leaders in IT Services and DBA training in the San Antonio area, my company has had the pleasure, not only to benefit from their expertise and constancy, but also to work together with them on different projects for their clients.",
    writtenBy: "– Yembe Nfor, Y\\G." 
  },
  {
    description: "Kiawitech's professionalism is honestly tremendous.  As leaders in IT Services and DBA training in the San Antonio area, my company has had the pleasure, not only to benefit from their expertise and constancy, but also to work together with them on different projects for their clients.",
    writtenBy: "– Yembe Nfor, Y\\G." 
  }
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        autoplay: true,
        arrow: true,
        speed: 5000,
        draggable: true
    };

    return <Container className="Testimonial" fluid>
      <Row  className="contents">
        <Col md={12}>
            <Slider {...settings}>
              {testimonialList.map((_testimonial, index) => {
                  return <Testimonial 
                          key={index} 
                          description={_testimonial.description} 
                          writtenBy={_testimonial.writtenBy} 
                      />
              })}
            </Slider>      
        </Col>        
      </Row>
      <Row>
         <Col md={12}><div className="bottomtext">Success</div></Col>
      </Row>
    </Container>;
}

export default Testimonials;
