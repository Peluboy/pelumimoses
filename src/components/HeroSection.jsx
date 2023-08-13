import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../styles/hero.css";
import RoundedText from "../assets/rounded-text.png";

const scrollToPortfolio = () => {
  const portfolioSection = document.getElementById("portfolio");
  portfolioSection.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  const [btnRef, btnInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [factsRef, factsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div className="hero__section scroll-to-page" id="hero">
      <div className="container">
        <div className="hero__content content__width">
          <div className="section__header">
            {/* <h4 className="subtitle">
              <i className="las la-home"></i>
              Introduce
            </h4> */}

            <h1>
              Meet <span>Pelumi</span> Moses,
              <br /> A Web Developer & Creative Designer
            </h1>
          </div>

          <p>
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>
          <div className="rounded__text">
            <motion.button
              ref={btnRef}
              className={`go-to-project-btn scroll-to ${
                btnInView ? "in-view" : ""
              }`}
              onClick={scrollToPortfolio}
              initial="hidden"
              animate={btnInView ? "visible" : "hidden"}
              variants={variants}
            >
              <img src={RoundedText} alt="" />
              <i className="las la-arrow-down"></i>
            </motion.button>
          </div>
          <div
            className={`facts ${factsInView ? "in-view" : ""}`}
            ref={factsRef}
          >
            <motion.div
              className="left scroll-animation"
              initial="hidden"
              animate={factsInView ? "visible" : "hidden"}
              variants={variants}
            >
              <h1>2+</h1>
              <p>
                years of
                <br />
                experience
              </p>
            </motion.div>
            <motion.div
              className="right scroll-animation"
              initial="hidden"
              animate={factsInView ? "visible" : "hidden"}
              variants={variants}
            >
              <h1>50+</h1>
              <p>
                design & web
                <br />
                development projects
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
