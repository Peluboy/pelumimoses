import React, { useRef, useState } from "react";
import "../styles/testimonial.css";
import Testimonial1Img from "../assets/daniel.jpg";
import Testimonial2Img from "../assets/adeife.jpg";
import Testimonial3Img from "../assets/tomi.jpg";
import Client1Img from "../assets/client-1.png";
import Client2Img from "../assets/client-2.png";
import Client3Img from "../assets/client-3.png";
import Client4Img from "../assets/client-4.png";
import Client5Img from "../assets/client-5.png";
import Client6Img from "../assets/client-6.png";
import Client7Img from "../assets/client-7.png";
import Client8Img from "../assets/client-8.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const testimonials = [
    {
      author: "Daniel Egunjobi",
      designation: "CEO of Buy & Ship NG",
      quote:
        "Pelumi is an exceptionally creative developer who demonstrates professionalism and mastery of code. He exceeded my expectations and I highly recommend his services.",
      imageSrc: Testimonial1Img,
    },
    {
      author: "Adeife Abiodun-Adeyemi",
      designation: "CEO of Ifectiv'Touch",
      quote:
        "If you're looking for a creative genius, look no further than Pelumi. His unique design concepts and impeccable execution helped elevate my brand to new heights. I couldn't have asked for a more talented designer!",
      imageSrc: Testimonial2Img,
    },
    {
      author: "Tomisin Michael",
      designation: "The F.A.C.E Foundation",
      quote:
        "He is a great person to work with, one of the best I have had to work with on a project. He is very vast and resourceful. Having him on my team for my project is something I never regret. He is someone I recommend",
      imageSrc: Testimonial3Img,
    },
  ];

  const clients = [
    Client1Img,
    Client2Img,
    Client3Img,
    Client4Img,
    Client5Img,
    Client6Img,
    Client7Img,
    Client8Img,
  ];

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      if (currentSlide === 0) {
        // If already at the first slide, go to the last slide
        sliderRef.current.slickGoTo(totalTestimonials - 1);
        setCurrentSlide(totalTestimonials - 1);
      } else {
        sliderRef.current.slickPrev();
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      if (currentSlide === totalTestimonials - 1) {
        // If already at the last slide, go to the first slide
        sliderRef.current.slickGoTo(0);
        setCurrentSlide(0);
      } else {
        sliderRef.current.slickNext();
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  const totalTestimonials = testimonials.length;

  return (
    <div className="testimonial__area scroll-to-page" id="testimonial">
      <div className="container">
        <div className="testimonial__content content__width scroll-animation">
          <div className="section__header">
            <h4 className="subtitle">
              <i className="las la-comment"></i>
              testimonial
            </h4>

            <h1>
              Trusted by <span>Hundred Clients</span>
            </h1>
          </div>

          <div className="testimonial-slider-wrap scroll-to-page">
            <Slider ref={sliderRef} {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-item" key={index}>
                  <div className="testimonial__item-inner">
                    <div className="author">
                      <img src={testimonial.imageSrc} alt="" />
                      <div className="right">
                        <h3>{testimonial.author}</h3>
                        <p className="designation">
                          <span>{testimonial.designation}</span>
                        </p>
                      </div>
                    </div>
                    <p>{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="testimonial-footer-nav">
            <div className="testimonial-nav">
              <button className="prev" onClick={handlePrev}>
                <i className="las la-angle-left"></i>
              </button>
              <div id="testimonial-slide-count">{`${
                currentSlide + 1
              }/${totalTestimonials}`}</div>
              <button className="next" onClick={handleNext}>
                <i className="las la-angle-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* <div className="clients__logos content__width">
          <h4 className="scroll-animation">work with 60+ brands worldwide</h4>
          <div className="brand__list grid">
            {clients.map((client, index) => (
              <div className="brand__item scroll-animation" key={index}>
                <img src={client} alt="" />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialSection;
