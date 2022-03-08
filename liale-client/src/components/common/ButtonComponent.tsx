import React from "react";
import { Button } from "react-bootstrap";
import './ButtonComponent.css';

interface ButtonComponentProps{
    title: string
    variant: string
    styles?: string
    url: string
}

const ButtonComponent = (props: ButtonComponentProps) => {
    return <Button variant={props.variant} className={[props.styles, "button"].join(" ")} href={props.url}>{props.title}</Button>
}

export default ButtonComponent;
