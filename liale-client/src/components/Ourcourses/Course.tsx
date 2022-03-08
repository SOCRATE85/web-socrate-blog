import React from "react";
import { Col } from "react-bootstrap";
import ButtonComponent from "../common/ButtonComponent";
import "./Course.css";

export interface CourseProps{
    id: number
    title: string
    duration: string
    modules: string
    lessons: string
    detailUrl: string
    applyUrl: string
    imageUrl: string
    background: string
    color: string
}

const Course = (props: CourseProps) => {
    return <Col sm={12} md={6} lg={6}>
        <div style={{backgroundColor: props.background}} className="course-container">
            <div className="image-container">
                <img src={props.imageUrl} alt={props.title} />
            </div>
            <div className="contents">
                <h4 style={{color: props.color}}>{props.title}</h4>
                <div className="icon">
                    <img src="/assets/images/icon.png" alt="" />
                </div>
                <div className="course-details">
                    <span style={{color: props.color}}>{props.duration}</span>
                    <span style={{color: props.color}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <span style={{color: props.color}}>{props.modules}</span>
                    <span style={{color: props.color}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <span style={{color: props.color}}>{props.lessons}</span>
                </div>
                <div className="action">
                    <ButtonComponent variant="primary" styles={(props.id % 2 === 0) ? "about-button-even" : "about-button-odd" } url={props.applyUrl} title={"APPLY NOW"} />
                </div>
            </div>            
        </div>
    </Col>
}

export default Course;
