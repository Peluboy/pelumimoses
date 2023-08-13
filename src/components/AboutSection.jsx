import React from "react";
import "../styles/about.css";

const AboutSection = () => {
  return (
    <section className="fade-in">
      <div className="about__area scroll-to-page" id="about">
        <div className="container">
          <div className="about__content content__width">
            <div className="section__header">
              <h4 className="subtitle scroll-animation">
                <i className="las la-user"></i>
                About
              </h4>

              <h1 className="scroll-animation">
                Every great design begins with an even <span>better story</span>
              </h1>
            </div>

            <p className="scroll-animation">
              Once upon a time, I started working as a freelance designer. I
              collaborated with agencies and startups to create captivating
              digital products. As a frontend developer and creative designer, I
              blend my coding skills with artistic vision. I have a natural
              curiosity and pay close attention to details. Using tools like
              Figma and React, I bring clean and beautiful designs to reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
