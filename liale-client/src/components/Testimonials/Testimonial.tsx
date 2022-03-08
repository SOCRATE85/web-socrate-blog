import React from "react";

export interface TestimonialProps{
    description: string
    writtenBy: string
}

const Testimonial = (props: TestimonialProps) => {
    return <div className="Item">
        <p>{props.description}</p>
        <p>{props.writtenBy}</p>
    </div>;
}

export default Testimonial;
