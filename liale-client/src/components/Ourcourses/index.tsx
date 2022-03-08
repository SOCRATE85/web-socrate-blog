import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title";
import Course, { CourseProps } from './Course';

const OurcoursesList: CourseProps[] = [
    {
        id:1,
        title: "Fundamentals of Structured Query Language (SQL)",
        duration: "61h-9mins",
        modules: "7modules",
        lessons: "85 lessons",
        detailUrl: "/",
        applyUrl: "/apply-for-training-now",
        imageUrl: "/assets/images/iStock-1161083164-2.jpg",
        background:"#dd1d28",
        color: "#ffffff"
    },
    {
        id: 2,
        title: "Amazon Web Services (AWS) Solution Architect Training",
        duration: "18mins",
        modules: "5modules",
        lessons: "18 lessons",
        detailUrl: "/our-courses/amazon-web-services-training-aws",
        applyUrl: "/apply-for-training-now",
        imageUrl: "/assets/images/course-image-1.jpg",
        background:"#ebebeb",
        color: "#000000"
    },
    {
        id:3,
        title: "Microsoft Azure Database Administration",
        duration: "2h-50mins",
        modules:  "8modules",
        lessons:  "34 lessons",
        detailUrl:  "/our-courses/microsoft-azure-cloud-computing-training",
        applyUrl:  "/apply-for-training-now",
        imageUrl:  "/assets/images/update-scholarship-da0f3-1585388951-image-1.jpg",
        background:"#303030",
        color: "#ffffff"
    },
    {
        id: 4,
        title: "Microsoft SQL Server Database Administration",
        duration: "195h",
        modules: "26modules",
        lessons:  "260 lessons",
        detailUrl:  "/our-courses/microsoft-sql-server-database-administration",
        applyUrl:  "/apply-for-training-now",
        imageUrl:  "/assets/images/managed-service-keepsmile-design-lehnen-sie-sich-zurueck.jpg",
        background:"#2a74be",
        color: "#ffffff"
    },
];

const Ourcourses = () => {
    return <Container fluid>
        <Title title="Our Courses" />
        <Row>
         {
            OurcoursesList.map((course: CourseProps, index: number)=>{
                return <Course
                        key = {index}
                        id={course.id}
                        title = {course.title}
                        duration = {course.duration}
                        modules = {course.modules}
                        lessons = {course.lessons}
                        detailUrl = {course.detailUrl}
                        applyUrl = {course.applyUrl}
                        imageUrl = {course.imageUrl}
                        background = {course.background}
                        color = {course.color}
                    /> 
            })
         }
        </Row>
        
    </Container>
}

export default Ourcourses;
