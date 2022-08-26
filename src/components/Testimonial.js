import React from "react";

import TestimonialSlider from "./TestimonialSlider";
import { testimonial } from "../data";
const Testimonial = () => {
  const { title, image } = testimonial;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
          <div className="lg:max-w-[50%]">
            <h2 className="title mb-9">{title}</h2>
            <TestimonialSlider />
          </div>
          <img className="order-1" src={image.type} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
