import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Menu from "../components/Menu";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ResumeSection from "../components/ResumeSection";
import ServicesSection from "../components/ServicesSection";
// import SkillsSection from "../components/SkillsSection";
import PortfolioSection from "../components/PortfolioSection";
// import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectsSection";
import DesignSection from "../components/DesignSection";
import TeamProject from "../components/TeamProject";
import ElevationSection from "../components/ElevationSection";

const Home = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [resumeRef, resumeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // const [skillsRef, skillsInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.2,
  // });

  const [portfolioRef, portfolioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <Menu />
      <HeroSection />
      <motion.div
        ref={aboutRef}
        variants={sectionVariants}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
      >
        <AboutSection />
      </motion.div>
      <motion.div
        ref={resumeRef}
        variants={sectionVariants}
        initial="hidden"
        animate={resumeInView ? "visible" : "hidden"}
      >
        <ResumeSection />
      </motion.div>

      <ProjectsSection />
      <motion.div
        ref={servicesRef}
        variants={sectionVariants}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
      >
        <ServicesSection />
      </motion.div>
      {/* <motion.div
        ref={skillsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
      >
        <SkillsSection />
      </motion.div> */}
      <motion.div
        ref={portfolioRef}
        variants={sectionVariants}
        initial="hidden"
        animate={portfolioInView ? "visible" : "hidden"}
      >
        <PortfolioSection />
      </motion.div>
      <DesignSection />
      <motion.div
        ref={testimonialRef}
        variants={sectionVariants}
        initial="hidden"
        animate={testimonialInView ? "visible" : "hidden"}
      >
        <TeamProject />
      </motion.div>
      <ElevationSection />
      <motion.div
        ref={contactRef}
        variants={sectionVariants}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
      >
        <ContactSection />
      </motion.div>
    </>
  );
};

export default Home;
