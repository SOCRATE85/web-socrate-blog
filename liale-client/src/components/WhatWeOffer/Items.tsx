import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface ItemsProps {
    title: string
    description: string
    url: string
}

const Items = (props: ItemsProps) =>{
    return <>
      <Col xs={12} md={6} lg={6} className="item">
       <h2 className="title">{props.title}</h2>
       <p className="description">{props.description}</p>
       <Link className="readmore" to={props.url}>Read More</Link>
      </Col>
    </>
}

export default Items;
