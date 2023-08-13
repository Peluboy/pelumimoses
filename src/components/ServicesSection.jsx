import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/services.css";

const ServicesSection = () => {
  const servicesData = [
    {
      icon: "las la-bezier-curve",
      title: "Frontend Web Development",
      description:
        "Creating engaging and interactive digital experiences with modern web technologies",
      projects: 15,
    },
    {
      icon: "las la-desktop",
      title: "User Interface Design",
      description:
        "Designing intuitive interfaces for seamless user interactions",
      projects: 8,
    },
    {
      icon: "las la-palette",
      title: "Branding & Graphics Design",
      description:
        "Creating Powerful Visual Identities for Strong Brand Presence through Graphic Design",
      projects: 63,
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
    <section className="services__area scroll-to-page" id="services">
      <div className="container">
        <div className="services__content content__width">
          <div className="section__header">
            <h4 className="subtitle scroll-animation">
              <i className="las la-stream"></i>
              Services
            </h4>
            <h1 className="scroll-animation">
              My <span>Services</span>
            </h1>
          </div>

          <div className="services__items">
            {servicesData.map((item, index) => (
              <ServiceItem key={index} item={item} variants={variants} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ item, variants }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className="service__item scroll-animation"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <i className={item.icon}></i>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <span className="projects">{item.projects} Projects</span>
    </motion.div>
  );
};

export default ServicesSection;
