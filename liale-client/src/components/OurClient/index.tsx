import React from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Item, { ItemProps } from "./Item";

const itemList: ItemProps[] = [
  {
      title: "Brand",
      url: "/assets/images/8001635-copy.jpg" 
  },
  {
      title: "Brand",
      url: "/assets/images/8001635-copy.jpg" 
  },
  {
      title: "Brand",
      url: "/assets/images/8001635-copy.jpg" 
  },
  {
      title: "Brand",
      url: "/assets/images/8001635-copy.jpg" 
  },
  {
      title: "Brand",
      url: "/assets/images/8001635-copy.jpg" 
  },
  {
      title: "Brand",
      url: "/assets/images/8001635-copy.jpg" 
  },
  {
      title: "Brand",
      url: "/assets/images/8001635-copy.jpg" 
  },
  {
      title: "Brand",
      url: "/assets/images/8001635-copy.jpg" 
  },
  {
      title: "Brand",
      url: "/assets/images/8001635-copy.jpg" 
  },
  {
      title: "Brand",
      url: "/assets/images/8001635-copy.jpg" 
  },
  {
      title: "Brand",
      url: "/assets/images/8001635-copy.jpg" 
  }
];

const OurClient = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrow: true,
        speed: 5000,
        className:"slider mainSlider",
        draggable: true,
        slidesPerRow: 5
    };

    return <Container className="ourclient" fluid>
        <Row>
            <div className="container">
                <h2>Our Client</h2>            
                <Slider {...settings}>
                   {
                       itemList.map((item: ItemProps, index: number)=>{
                           return <Item url={item.url} title={item.title} key={index} />
                       })
                   }
                </Slider>
            </div>
        </Row>
    </Container>
}

export default OurClient;
