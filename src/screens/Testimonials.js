import React, { useState, useEffect } from "react";
import { LittleHeading, SecondaryHeading } from "./Service";
import Img1 from "../img/uifaces-popular-image (2).jpg";
import Img2 from "../img/uifaces-popular-image (1).jpg";
import Img3 from "../img/uifaces-popular-image.jpg";

const Images = [Img1, Img2, Img3];

const Testimonials = [
  {
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    user: "Kelly Willium",
    company: "Khulna, Bangladesh",
  },
  {
    text: "On the Windows diverted no talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or.",
    user: "Mike taylor",
    company: "Lahore, Pakistan",
  },
  {
    text: "Jadoo is recognized as one of the finest travel agency in the world. When it came to planning a trip, I found them to be dependable.",
    user: "Thomas Wagon",
    company: "CEO of Red Button",
  },
];

function ManualSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sectionTestimonials">
      <div className="testimonialHead">
        <LittleHeading>Testimonials</LittleHeading>
        <SecondaryHeading>What People Say About Us.</SecondaryHeading>
      </div>

      <div className="manual-slider">
        <div className="testimonial">
          <img
            src={Images[currentIndex]}
            alt="pic-of-user"
            className="testimonial-img"
          />
          <p className="testimonial-text smallText">
            “{Testimonials[currentIndex].text}”
          </p>
          <p className="testimonial-user serviceLittleHeading">
            {Testimonials[currentIndex].user}
          </p>
          <p className="testimonial-company smallText">
            {Testimonials[currentIndex].company}
          </p>
        </div>
        <div className="navigation">
          <button onClick={prevSlide}>&#8592;</button>
          <button onClick={nextSlide}>&#8594;</button>
        </div>
      </div>
    </div>
  );
}

export default ManualSlider;
