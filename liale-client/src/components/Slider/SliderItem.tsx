import React from "react";
import ButtonComponent from "../common/ButtonComponent";
import './SliderItem.css';

export interface SliderItemProps{
   title: string
   description: string
   imageUrl: string
   clickUrl: string
   key?: number
};

const SliderItem = (props: SliderItemProps) => {
    return <div className="slider-item">
        <img src={props.imageUrl} alt={props.title}/>
        <div className="contents">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="action"><ButtonComponent styles="slider-readmore" variant="primary" url={props.clickUrl} title="Click Here" /></div>            
        </div>
    </div>;
}

export default SliderItem;
