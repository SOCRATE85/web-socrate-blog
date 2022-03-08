import React from "react";
import { Container } from "react-bootstrap";
import Slider from 'react-slick';
import SliderItem, { SliderItemProps } from "./SliderItem";

const listSlider: SliderItemProps[] = [
    {
        title:"Banner 1",
        description:"Banner 1 Banner 1 Banner 1 Banner 1 Banner 1 Banner 1 Banner 1 Banner 1 Banner 1 ",
        imageUrl:"/assets/images/8001427-copy.jpg",
        clickUrl:""
    },
    {
        title:"Banner 2",
        description:"Banner 2 Banner 2 Banner 2 Banner 2 Banner 2 Banner 2 Banner 2 Banner 2 Banner 2",
        imageUrl:"/assets/images/8001635-copy.jpg",
        clickUrl:""
    },
    {
        title:"Banner 3",
        description:"Banner 3 Banner 3 Banner 3 Banner 3 Banner 3 Banner 3 Banner 3 Banner 3 Banner 3",
        imageUrl:"/assets/images/banner2.png",
        clickUrl:""
    }
]

const MainSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrow: true,
        speed: 5000,
        className:"slider mainSlider",
        draggable: true
    };

    return <Container fluid>
        <Slider {...settings}>
            {listSlider.map((item: SliderItemProps, index: number) => {
                return <SliderItem 
                        title={item.title} 
                        description={item.description} 
                        imageUrl={item.imageUrl} 
                        clickUrl={item.clickUrl}
                        key={index} 
                    />
            })}
        </Slider>
    </Container>;
}

export default MainSlider;
