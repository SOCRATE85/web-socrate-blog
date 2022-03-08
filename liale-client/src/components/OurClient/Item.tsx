import React from "react";
import './Item.css';

export interface ItemProps{
    url: string
    title: string
    key?: number
};

const Item = (props: ItemProps) => {
   return <div className="ourclient-item">
    <img 
        src={props.url}
        alt={props.title} 
        style={{width: "95%", height: "auto", margin: 10}} 
    />
   </div>
}

export default Item;
