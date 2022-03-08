import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Title from "../Title";
import Items, { ItemsProps } from "./Items";
import "./Items.css";

const whatweOfferData: ItemsProps[] = [
    {
        title:"Classes",
        description:"We offer a variety of courses designed to meet individual needs…",
        url:"/our-services/classes"
    },
    {
        title:"Weekly webinars",
        description:"Designed to help DBAs in the field as well as those in the job market…",
        url:"/our-services/weekly-webinars-for-working-dbas"
    },
    {
        title:"Interview Bootcamps",
        description:"60 days intensive bootcamp aimed at securing a job…",
        url:"/our-services/interview-bootcamps"
    },
    {
        title:"Mentorship Program",
        description:"Initiative was created with the aim of giving back to the community…",
        url:"/our-services/mentorship-program"
    },
    {
        title:"1 on 1 Support",
        description:"You are never left alone to worry about all the challenges that come with a new job…",
        url:"/our-services/one-on-one-on-the-job-support"
    },
    {
        title:"Scholarships",
        description:"We expect winners of the scholarship to give back to their community through…",
        url:"/our-services/scholarships"
    },
];

const WhatWeOffer = () => {
    return <Container fluid>
        <Title title="What" subtitle="We Offer" />
        <Row>
            <Col sm={12} md={4} lg={4} className="whatwearebanner">
                <img src="/assets/images/about_2.png" alt="what we offer" />
            </Col>
            <Col sm={12} md={8} lg={8} className="whatwearelist">
            <Row>
                {
                    whatweOfferData.map((item: ItemsProps, index: number) => {
                        return <Items 
                                    title={item.title} 
                                    description={item.description} 
                                    url={item.url} 
                                    key={index} 
                                />
                    })  
                }
            </Row>
            </Col>
        </Row>
    </Container>
}

export default WhatWeOffer;
