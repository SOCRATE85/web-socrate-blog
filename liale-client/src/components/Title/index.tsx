import React from "react";
import "./Title.css";

interface TitleProps{
  title: string
  subtitle?: string
  subtitle2?: string
}

const Title = (props: TitleProps) => {
    return <div className="TitleContainer">
        <h2 className="Title">
            {props.title}{' '}
            {props.subtitle && <span className="subtitle">{props.subtitle}</span>}<br />
            {props.subtitle2 && <span className="subtitle2">{props.subtitle2}</span>}
        </h2>
    </div>
}

export default Title;
