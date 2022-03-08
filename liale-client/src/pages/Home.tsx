import React from "react";
import { Helmet } from "react-helmet";
import MainSlider from "../components/Slider/MainSlider";
import OurClient from "../components/OurClient";
import WhatWeOffer from "../components/WhatWeOffer";
import About from "../components/About";
import Ourcourses from "../components/Ourcourses";
import Testimonials from "../components/Testimonials";

const Home  = () => {
    const head = () => (<Helmet>
        <title>Home Page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.css" />
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick-theme.min.css" />
    </Helmet>);

    return <>
     {head()}
     <MainSlider />
     <OurClient />
     <WhatWeOffer />
     <About />
     <Ourcourses />
     <Testimonials />
    </>
}

export default Home;
