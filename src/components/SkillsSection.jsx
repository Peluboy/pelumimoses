import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/skills.css";
import FigmaImg from "../assets/figma.png";
import IllustratorImg from "../assets/illustrator-logo.png";
import PhotoshopImg from "../assets/photoshop-logo.png";
import ReactImg from "../assets/react.png";
import WordPressImg from "../assets/wordpress.png";
import MuiImg from "../assets/mui-logo.png";
import IndesignImg from "../assets/indesign-logo.png";
import TypescriptImg from "../assets/typescript.png";

const SkillsSection = () => {
  const skillsData = [
    { image: ReactImg, percent: 80, name: "React" },
    { image: TypescriptImg, percent: 60, name: "TypeScript" },
    { image: MuiImg, percent: 70, name: "Material UI" },
    { image: WordPressImg, percent: 90, name: "WordPress" },
    { image: FigmaImg, percent: 80, name: "Figma" },
    { image: IllustratorImg, percent: 85, name: "Illustrator" },
    { image: PhotoshopImg, percent: 90, name: "Photoshop" },
    { image: IndesignImg, percent: 85, name: "Indesign" },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="skills__area scroll-to-page" id="skills" ref={ref}>
      <div className="container">
        <div className="skills__content content__width">
          <div className="section__header">
            <h4 className="subtitle scroll-animation">
              <i className="las la-shapes"></i>
              My Skills
            </h4>

            <h1 className="scroll-animation">
              My <span>Tools</span>
            </h1>
          </div>

          <div className="skills__list">
            {skillsData.map((item, index) => (
              <motion.div
                key={index}
                className="skill__item scroll-animation"
                variants={variants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <div className="skill__inner">
                  <img src={item.image} alt="" />
                  <h1 className="percent">{item.percent}%</h1>
                </div>
                <p className="name">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
