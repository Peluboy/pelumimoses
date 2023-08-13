import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/resume.css";

const ResumeSection = () => {
  const resumeData = [
    {
      date: "2018 - Present",
      positions: [
        {
          title: "Freelance Graphic Designer",
          company: "Fiverr || Upwork",
        },
      ],
    },
    {
      date: "Mar 2022 - Present",
      positions: [{ title: "Front-End Developer", company: "Your Study Path" }],
    },
    {
      date: "Oct 2022 - Mar 2023",
      positions: [
        {
          title: "Brand Identity & UX Designer",
          company: "Buy and Ship NG",
        },
      ],
    },
    // {
    //   date: "2023 - Present",
    //   positions: [
    //     {
    //       title: "Software Engineering",
    //       company: "ALX Africa",
    //     },
    //   ],
    // },
    // {
    //   date: "2022 - 2023",
    //   positions: [
    //     {
    //       title: "Front-End Engineering",
    //       company: "AltSchool Africa",
    //     },
    //   ],
    // },
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
            <h4 className="subtitle scroll-animation">
              <i className="las la-briefcase"></i>
              Resume
            </h4>

            <h1 className="scroll-animation">
              Work <span>Experience</span>
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

export default ResumeSection;
