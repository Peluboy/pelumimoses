import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/resume.css";

const ProjectsSection = () => {
  const resumeData = [
    {
      date: "May 2023 - Present",
      positions: [
        {
          title: "Diploma in Software Engineering",
          company: "ALX Africa",
        },
      ],
    },
    {
      date: "Apr 2022 - Jun 2023",
      positions: [
        {
          title: "Diploma in Front-End Engineering",
          company: "AltSchool Africa (Top 5%)",
        },
      ],
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="resume__area scroll-to-page" id="resume">
      <div className="container">
        <div className="resume__content content__width">
          <div className="section__header">
            <h1 className="scroll-animation">
              <span>Education</span>
            </h1>
          </div>

          <div className="resume__timeline">
            {resumeData.map((item, index) => (
              <ResumeItem key={index} item={item} variants={variants} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ResumeItem = ({ item, variants }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className="item scroll-animation"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <span className="date">{item.date}</span>
      {item.positions.map((position, positionIndex) => (
        <React.Fragment key={positionIndex}>
          <h2>{position.title}</h2>
          <p>{position.company}</p>
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default ProjectsSection;
